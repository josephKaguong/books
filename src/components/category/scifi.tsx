
import useFetch from "../../usefetch";
import Design from "../bookdesign";

const Scifi = () => {
    const {data,loading,error}=useFetch("http://localhost:8000/books")
    if(loading){
        return (<p>loading...</p>)
    }
    if(error){
        return (<p>{error}</p>)
    }
    
    
    const scifi=data.filter((d)=>d.category==="Scifi")
    return (  
        <>
        <h1 className="font-bold font-primary text-center text-[34px] ml-4 my-4">SCIFI BOOKS</h1>
        <hr className="mx-[50px] lg:mx-[100px] mb-4 h-3"/>
        <div className="scifi grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-[50px]">
            {scifi.map((s)=>(
                <Design type={s}/>
            ))}
        </div>
        </>
    );
}
 
export default Scifi;