
import useFetch from "../../usefetch";
import Design from "../bookdesign";

const Children = () => {
    const {data,loading,error}=useFetch("http://localhost:8000/books")
    if(loading){
        return (<p>loading...</p>)
    }
    if(error){
        return (<p>{error}</p>)
    }
    const children=data.filter((d)=>d.category==="Children")
    return ( 
        <>
        <h1 className="font-bold font-primary text-center text-[34px] ml-4 my-4">CHILDREN BOOKS</h1>
        <hr className="mx-[50px] lg:mx-[100px] mb-4 h-3"/>
        <div className="children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center mx-[50px]">
            {children.map((c)=>(
                <Design type={c}/>
            ))}
        </div>
        </> 
    );
}
 
export default Children;