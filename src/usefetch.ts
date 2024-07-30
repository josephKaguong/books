import Book from "./components/book"
import {useState, useEffect}from 'react'
import axios from 'axios'

const useFetch=(url:string)=>{
    const [data,setData]=useState<Book[]>([])
    const [loading, setLoading]=useState<boolean>(true)
    const [error,setError]=useState<string>("")

    useEffect(()=>{
        const fetch=async()=>{
            try{
                const response=await axios.get(url)
                setData(response.data)
                setLoading(false)
            }catch(err:unknown){
                if(axios.isAxiosError(err)){
                    console.log("axios error occured",err.message)
                    setError(err.message)
                    if(err.response){
                        console.log(err.response.status)
                        console.log(err.response.data)

                    }else if(err.request){
                        console.error('no data received',err.request)
                    }
                }else if(err instanceof Error){
                    console.error('Error occured',err.message)
                    setError(err.message)
                    
                }else{
                    setError("An unknown error occured")
                }
                setLoading(false)
            }
        }
        fetch()
    },[url])
    return{data,loading,error}
}
export default useFetch