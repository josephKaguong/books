
import { Truncate } from "./truncate";
import { useSelector,useDispatch } from "react-redux";
import { RootState,AppDispatch } from "../store/store"; 
import { removeBook } from "../store/library";
import Header from "./header";
import { Link } from "react-router-dom";

const Library = () => {
    
    const library=useSelector((state:RootState)=>state.library.books)
    
    const dispatch:AppDispatch=useDispatch()
    console.log(library)
    

    const handleRemove=(id:number)=>{
        dispatch(removeBook(id))
    }

    return ( 
        <div className="library ">
            <Header/>
             <section className="mx-5">
              {library.length>=1 ? library.map((d)=>(
                    <section className="flex gap-3 my-4 mx-auto">
                    <img className="h-[100px] md:h-[200px] w-[200px] md:w-[450px] rounded-lg" src={d.cover} alt="img" />
                    <div className="my-auto w-[300px] md:w-[600px]">
                        <h1 className="font-medium md:font-bold text-[20px] md:text-[24px]">{d.title}</h1>
                        <p className="hidden md:block">{Truncate(d.details,20)}</p>
                        
                        <div className="flex gap-2">
                        <button className="text-[13px] md:text-[16px] h-[20px] md:h-[30px] w-[50px] md:w-[100px] bg-blue-400 hover:bg-blue-500 transition rounded-lg ">Read</button>
                            <button onClick={()=>handleRemove(d.id)} className="text-[13px] md:text-[16px] h-[20px] md:h-[30px] w-[70px] md:w-[100px] bg-slate-400 hover:bg-slate-500 transition rounded-lg ">Remove</button>
                        </div>
                    </div>
                    </section>
                ) ) : (
                    <div>
                        <p>No book added yet <Link to="/"><span className="text-[16px] text-blue-400">home</span></Link></p>
                    </div>
                )}
                </section>
                
            
        </div>
     );
}
 
export default Library;