import useFetch from "./usefetch"

const Play = () => {
    const{data,error}=useFetch('http://localhost:8000/books')
       if(error){
        return(<p>{error}</p>)
       }
       
       console.log(data)
     

    return ( 
        <div className="play"></div>
     );
}
 
export default Play;