import { useState } from "react";
import { GrSearch } from "react-icons/gr";
import Featured from "./featured";
import Partners from "./partners";
import Footer from "./footer";
import About from "./about";
import useFetch from "../usefetch";
import { Link, useHistory } from "react-router-dom";




const Home = () => {
    const{data}=useFetch('http://localhost:8000/books')
    const[search,setSearch]=useState<string>("")
    const [searching,setSearching]=useState<boolean>(true)
    const [click,setClick]=useState<boolean>(false)
    const history=useHistory()
   
    const newSearch=search.toLowerCase()
    const result=data.filter((d)=>d.title.toLowerCase().startsWith(newSearch)) 
    
   const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
         
         if(newSearch.length>=1){
            
            history.push({
                pathname: "/search",
                state: {  searchTerm: search }
            })
            console.log(result)
            setSearch('')
         }
   }

    return ( 
        <div className="home flex flex-col gap-9">
            <header className="h-[400px] bg-[url('https://plus.unsplash.com/premium_photo-1681487732859-c2a780022063?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3MlMjBmb3IlMjB3ZWJ8ZW58MHx8MHx8fDA%3D')]  ">
            <nav className="flex justify-evenly mx-4 p-2 md:p-6">
                <section className="flex gap-3">
                    <img className="h-[40px] w-[40px] shadow-inner-md bg-slate-500 rounded-tr-3xl rounded-tl-lg rounded-bl-md contrast-200" src="https://i.pinimg.com/236x/01/f2/0f/01f20f9d04be8e919e739a5bc02c28df.jpg" alt="" />
                   <h1 className="font-bold text-xl md:text-3xl text-[#4b9e1b]">BOOKIFY</h1>
                </section>
                
                <div className="flex  gap-5">
                    <form  onSubmit={handleSubmit } className="">
                        <div >
                          <GrSearch onClick={()=>setClick(!click)}className={`${click===true? 'absolute': ''}text-xl translate-y-2 md:translate-y-4 translate-x-2`} />
                        </div>
                        <input
                           className={`${click===true?"block" : 'hidden'} md:static absolute focus -translate-y-5 pl-[40px] pr-4 outline-none shadow-lg h-[50px] w-[150px] md:w-[300px] ml-6 md:ml-0 rounded-xl `} 
                           type="text" 
                           placeholder=" Discover"
                           value={search}
                           onChange={(e)=>setSearch(e.target.value)}
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
                
                        <Link to='/random'><button className="text-red-500 text-[16px] md:text-[20px]">Checkout</button></Link>
                       <Link to="/library"><button className="text-red-500 text-[16px] md:text-[20px]">Library</button></Link> 
                        
                    
                
                </div>
            </nav>
            </header>
            <Featured/>
            <Partners/>
            <About/>
            <Footer/>

      </div>
     );
}
 
export default Home;