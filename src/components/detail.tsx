import { FaBookReader } from "react-icons/fa";
import { HiFolderRemove } from "react-icons/hi";
import { HiOutlineFolderAdd } from "react-icons/hi";

import { useParams } from "react-router-dom";
import Book from "./book";
import { useState,useEffect } from "react";
import { addBook,removeBook } from "../store/library";
import { useDispatch} from "react-redux";

import { AppDispatch} from '../store/store';


interface Param{
    id:string
}

const Detail = () => {
    
    const dispatch:AppDispatch=useDispatch()
    const{id}=useParams<Param>()
    const numId=parseInt(id,10)
    
    const [data, setData] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8000/books');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []); 
  
    if (loading) return <p>Loading...</p>;
   
  

    console.log(data)
    const book=data.find((d)=>d.id==numId) as Book
    console.log(numId)
    console.log(book)
    console.log('name')

    const handleAdd=(lib:Book)=>{
        dispatch(addBook(lib))
    }
    const handleRemove=(id:number)=>{
        dispatch(removeBook(id))
    }

    return (  
        <div className="detail">
            <section className='flex flex-col mt-3 md:flex-row gap-2 w-fit md:max-w-[900px] px-3 md:mr-2 lg:mx-auto'>
                    <img className="h-[300px] md:h-[600px] w-[350px] md:w-[400px] lg:w-[500px] rounded-lg" src={book.cover} alt="img" />
                    <article className="flex flex-col gap-[50px] md:gap-[100px]">
                        <section className='flex flex-col w-[350px] md:w-[400px] gap-2 text-center'>
                            <h1 className="font-bold font-primary text-[24px] tracking-[10%]">{book.title}</h1>
                            <p className='font-bold font-sans text-[20px]'>By: { book.author}</p>
                            <p className='font-secondary text-[20px] tracking-[12%]'>Year published :{book.pulished }</p>
                            
                            <h1 className="font-primary my-2 font-medium text-center text-[24px] border-b-2 ">Synopsis</h1>
                            <p className='font-sans text-[15px] sm:text-[18px] leading-5 font-normal'>{book.details}</p>
                        </section>
                        
                        <div className='flex justify-center py-4 gap-3 '>
                            <button className="flex gap-2 h-[50px] w-[100px] md:w-[120px] bg-blue-400 hover:bg-blue-500 p-3 rounded-lg ">
                                <p className="text-[15px] md:text-[20px] tracking-[15%]">Read</p>
                                <FaBookReader className='text-xl'/>

                            </button>
                            <button onClick={()=>handleAdd(book)} className='flex gap-2 h-[50px] w-[100px] md:w-[120px] bg-red-600 hover:bg-red-700 p-3 rounded-lg'>
                               <p className='text-[13px] tracking-[12%] leading-[13px]'>Add to Library </p> 
                                <HiOutlineFolderAdd className='text-xl'/>
                            </button>
                            <button onClick={()=>handleRemove(book.id)} className='flex gap-2 h-[50px] w-[100px] md:w-[120px] items-center p-2 rounded-lg bg-slate-400 hover:bg-slate-500'>
                                <p className='text-[15px] md:text-[20px] tracking-[15%] '>Remove </p>
                                <HiFolderRemove className="text-lg" />
                            </button>
                        </div>
                    
                    </article>
                </section>
            
        </div>
    );
}
 
export default Detail;