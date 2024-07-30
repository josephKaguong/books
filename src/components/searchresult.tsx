import Header from "./header"
import { FaBookReader } from "react-icons/fa";
import { HiFolderRemove } from "react-icons/hi";
import { HiOutlineFolderAdd } from "react-icons/hi";
import { useDispatch} from "react-redux";
import { addBook,removeBook } from "../store/library";
import { AppDispatch} from '../store/store';


import Book from "./book";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../usefetch";



const Result=()=>{
   
    const {data}=useFetch('http://localhost:8000/books')
    const location=useLocation()  
    const {searchTerm}=location.state as {searchTerm: string}
    console.log(searchTerm)
    
    const result=data.find((d)=>d.title.toLowerCase()===searchTerm.toLowerCase())
    console.log(result)
    const dispatch:AppDispatch=useDispatch()
    const handleAdd=(lib:Book)=>{
        dispatch(addBook(lib))
    }
    const handleRemove=(id:number)=>{
        dispatch(removeBook(id))
    }


    return(
        <div className="result">
            <Header />
           {result ? (
                <section className='flex flex-col md:flex-row gap-2 w-fit md:max-w-[900px] px-3 md:mr-2 lg:mx-auto mt-10'>
                                  
                 <img className="h-[300px] md:h-[600px] w-[350px] md:w-[400px] lg:w-[500px] rounded-lg" src={result.cover} alt="img" />
                <article className="flex flex-col gap-[50px] md:gap-[100px]">
                    <section className='flex flex-col w-[350px] md:w-[400px] gap-2 text-center'>
                        <h1 className="font-bold font-primary text-[24px] tracking-[10%]">{ result.title}</h1>
                        <p className='font-bold font-sans text-[20px]'>By: {result.author }</p>
                        <p className='font-secondary text-[20px] tracking-[12%]'>Year published :{ result.pulished}</p>
                        
                        <h1 className="font-primary my-2 font-medium text-center text-[24px] border-b-2 ">Synopsis</h1>
                        <p className='font-sans text-[15px] sm:text-[18px] leading-5 font-normal'>{result.details}</p>
                    </section>
                    
                    <div className='flex justify-center py-4 gap-3 '>
                        <button className="flex gap-2 h-[50px] w-[100px] md:w-[120px] bg-blue-400 hover:bg-blue-500 p-3 rounded-lg ">
                            <p className="text-[15px] md:text-[20px] tracking-[15%]">Read</p>
                            <FaBookReader className='text-xl'/>

                        </button>
                        <button onClick={()=>handleAdd(result)} className='flex gap-2 h-[50px] w-[100px] md:w-[120px] bg-red-600 hover:bg-red-700 p-3 rounded-lg'>
                           <p className='text-[13px] tracking-[12%] leading-[13px]'>Add to Library </p> 
                            <HiOutlineFolderAdd className='text-xl'/>
                        </button>
                        <button onClick={()=>handleRemove(result.id)} className='flex gap-2 h-[50px] w-[100px] md:w-[120px] items-center p-2 rounded-lg bg-slate-400 hover:bg-slate-500'>
                            <p className='text-[15px] md:text-[20px] tracking-[15%] '>Remove </p>
                            <HiFolderRemove className="text-lg" />
                        </button>
                    </div>
                
                </article>
            </section>)

           : (<div className="">

               <p className="mt-[20px]">No book found please try a different search term <Link to="/"><span className="text-[16px] underline text-blue-500">home.</span></Link></p>
           </div>)}
        </div>
    )
}

export default Result