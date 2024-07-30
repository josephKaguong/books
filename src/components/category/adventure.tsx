import useFetch from "../../usefetch";
import Design from "../bookdesign";

const Adventure = () => {
    const {data,loading,error}=useFetch("http://localhost:8000/books")
    if(loading){
        return (<p>loading...</p>)
    }
    if(error){
        return (<p>{error}</p>)
    }
 console.log(data)
    const adventures=data.filter((d)=>d.category==="Adventure")
    console.log(adventures)

    return ( 
        <>
        <h1 className="font-bold font-primary text-center text-[34px] ml-4 my-4">ADVENTURE BOOKS</h1>
        <hr className="mx-[50px] lg:mx-[100px] mb-4 h-3"/>
        <div className="adventure grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-[50px]">
            {adventures.map((a)=>(
                <Design type={a}/>
            ))}
           
        </div>
        </>
     );
}
 
export default Adventure;