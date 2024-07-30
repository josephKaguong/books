import { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { Link, useHistory } from "react-router-dom";
import useFetch from "../usefetch";

const Header = () => {
    const history=useHistory()
    const [search ,setSearch]=useState<string>('')
    const [searching,setSearching]=useState<boolean>(true)
    const {data}=useFetch('http://localhost:8000/books')

          const newSearch=search.toLowerCase()
            const result=data.filter((d)=>d.title.toLowerCase().startsWith(newSearch))

    const handleSubmit=(e:React.FormEvent)=>{
            e.preventDefault()            
            history.push({
                pathname:"/search",
                state:{searchTerm:search}
            })
    }


    return (  
        <div className="header">
            <nav className="flex items-center gap-3 md:gap-8 py-5 px-10 bg-blue-400">
               <Link to="/"><section className="flex gap-3">
                    <img className="h-[40px] w-[40px] shadow-inner-md bg-slate-500 rounded-tr-3xl rounded-tl-lg rounded-bl-md contrast-200" src="https://i.pinimg.com/236x/01/f2/0f/01f20f9d04be8e919e739a5bc02c28df.jpg" alt="" />
                    <h1 className="font-bold text-lg md:text-3xl text-[#4b9e1b]">BOOKIFY</h1>
                </section>
                </Link>
                
                <form onSubmit={handleSubmit} className="">
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
                 <Link to="/random"><button className="hidden lg:block p-2 ">Random</button></Link>
            </nav>
            
        </div>
    );
}
 
export default Header;