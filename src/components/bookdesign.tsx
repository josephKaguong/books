import { Link } from 'react-router-dom';

import Book from './book';
interface Props{
    type:Book
}



const Design = ({type}:Props) => {
    
    
    return (  
        <div className="design">
        
               <section className='hover:shadow-lg hover:shadow-slate-500 transition-all duration-700 delay-200 ease-in rounded-lg w-[250px] py-3 '>
                
               <Link to={`/detail/${type.id}`}><img className="mb-3 h-[300px] mx-auto w-[230px] rounded-xl contrast-150 hover:contrast-75 transition-all duration-700 delay-500 ease-in" src={type.cover} alt="img" />
                <h1 className='font-primary font-bold text-center text-[24px] tracking-[10%]'>{type.title}</h1>
                </Link> 
              </section> 
            
        </div>
    );
}
 
export default Design;