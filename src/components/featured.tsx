import { Link } from "react-router-dom";

const Featured = () => {
    const images=[
        {id:1, image:"https://cdn-icons-png.flaticon.com/128/1702/1702323.png",category:"Children",path:"/category/children"},
        {id:2, image:"https://cdn-icons-png.flaticon.com/128/15867/15867552.png", category:"Romance",path:"/category/romance"},
        {id:3, image:"https://cdn-icons-png.flaticon.com/128/2570/2570253.png",category:"Horror",path:"/category/horror"},
        {id:4, image:"https://cdn-icons-png.flaticon.com/128/12427/12427010.png",category:"Adventure",path:"/category/adventure"},
        {id:5, image:"https://cdn-icons-png.flaticon.com/128/8468/8468574.png",category:"Scifi",path:"/category/scifi"}
    ]
    return ( 
        <div className="featured mx-5 ">
            <h1 className="font-primary font-bold text-[30px]">Featured Categories</h1>
            <p className="mb-4 border-[1px] border-slate-500 w-[300px]"></p>
            <section  className="grid gap-[100px] grid-cols-2 lg:grid-cols-5 mx-[20px]">
                {images.map((i)=>(
                   <Link to={i.path}> <div key={i.id} className="shadow-lg shadow-black rounded-lg ">
                        <img className="my-5" src={i.image} alt="" />
                        <p className="text-center">{i.category}</p>
                    </div>
                    </Link>
                ))}
            </section>
        </div>
     );
}
 
export default Featured;