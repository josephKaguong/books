import useFetch from "../../usefetch";
import Design from "../bookdesign";

const Romance = () => {
    const {data,loading, error}=useFetch("http://localhost:8000/books")
    if(loading){
      return (<p>loading...</p>)
  }
  if(error){
      return (<p>{error}</p>)
  }
    const romance=data.filter((d)=>d.category==="Romance")
    return (
        <>
        <h1 className="font-bold font-primary text-center text-[34px] ml-4 my-4">ROMANCE BOOKS</h1>
        <hr className="mx-[50px] lg:mx-[100px] mb-4 h-3"/> 
        <div className="romance grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-[50px]">
         {romance.map((r)=>(
            <Design type={r}/>
         ))}
            
        </div>
        </>
     );
}
 
export default Romance;