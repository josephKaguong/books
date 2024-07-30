import { useEffect } from "react";
import { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { Link, useHistory } from "react-router-dom";
import useFetch from "../usefetch";
import Book from "./book";

const Generator = () => {
    const {data}=useFetch('http://localhost:8000/books')
    const history=useHistory()
    const [search ,setSearch]=useState<string>('')
    const [searching,setSearching]=useState<boolean>(true)
    const [book,setBook]=useState<Book>() 
    

          const newSearch=search.toLowerCase()
            const result=data.filter((d)=>d.title.toLowerCase().startsWith(newSearch))

    const handleSubmit=(e:React.FormEvent)=>{
            e.preventDefault()            
            history.push({
                pathname:"/search",
                state:{searchTerm:search}
            })
    }

   
    console.log(data)
    
       
    
    const handleClick=()=>{
        const randomId=Math.ceil(Math.random()*data.length)
        console.log(randomId)
         setBook(data.find((d)=>d.id==randomId) as Book)
        console.log(book)
    }

    useEffect(() => {
        handleClick()
        }, [data]);
    
    

    
    
   
    return (  
        <div className="generator">
            <nav className="flex items-center gap-3 md:gap-8 py-5 px-5 bg-blue-400">
               <Link to="/"><section className="flex gap-3">
                    <img className="h-[40px] w-[40px] shadow-inner-md bg-slate-500 rounded-tr-3xl rounded-tl-lg rounded-bl-md contrast-200" src="https://i.pinimg.com/236x/01/f2/0f/01f20f9d04be8e919e739a5bc02c28df.jpg" alt="" />
                    <h1 className="font-bold text-lg md:text-3xl text-[#4b9e1b]">BOOKIFY</h1>
                </section>
                </Link>
                
                <form onSubmit={handleSubmit} className="hidden md:block">
                        <GrSearch className="absolute text-xl translate-y-4 translate-x-2" />
                        <input
                           className="bg-blue-400 pl-[40px] pr-4 outline-none shadow-xl placeholder-black h-[50px] w-[200px] md:w-[600px] rounded-xl " 
                           type="text" 
                           placeholder=" Discover"
                           value={search}
                           onChange={(e)=>setSearch(e.target.value)}
                           onFocus={()=>setSearching(true)}
                        />
                      {searching && search &&(<section className="absolute bg-slate-400 text-white w-[200px] md:w-[600px] rounded-xl mt-4 p-2">
                            {result.map((r)=>(
                                <div key={r.id} >
                                    <p onClick={()=>{
                                        setSearch(r.title) 
                                        history.push({
                                            pathname:'/search',
                                            state:{searchTerm:r.title}
                                        })
                                        setSearching(false)
                                    }}>{r.title}</p>
                                    <hr className="mt-2" />
                                </div>
                            ))}
                        </section>)}

                 </form>
                <button onClick={handleClick} className="ml-[100px] md:ml-1 p-2 ">Random</button>
            </nav>

            <section>
                                   
                  { book && 
                  <div className="flex flex-col md:flex-row gap-3 my-[10px] md:my-[40px] mx-[5px] md:mx-[30px]">
                  <img className="h-[250px] md:h-[400px] w-[350px] md:w-[400px] lg:w-[500px] rounded-lg" src={book.cover} alt="img" />
                
                    <section className='flex flex-col w-[350px] md:w-[400px] gap-2 text-center'>
                        <h1 className="font-bold font-primary text-[24px] tracking-[10%]">{ book.title}</h1>
                        <p className='font-bold font-sans text-[20px]'>By: {book.author }</p>
                        <p className='font-secondary text-[20px] tracking-[12%]'>Year published :{ book.pulished}</p>
                        
                        <h1 className="font-primary my-2 font-medium text-center text-[24px] border-b-2 ">Synopsis</h1>
                        <p className='font-sans text-[15px] sm:text-[18px] leading-5 font-normal'>{book.details}</p>
                    </section>
                 </div>
                 }
            </section>
            
                     
        </div>
    )
    
}
 
export default Generator;