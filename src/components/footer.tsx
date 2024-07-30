import { Link } from "react-router-dom";

const Footer = () => {
    return (  
        <div className="footer bg-gray-700 py-6">
            <section className="flex justify-evenly mb-7">
                <article className="w-[150px] lg:w-[220px]">
                    <h1 className="font-bold text-xl md:text-3xl text-[#4b9e1b]">BOOKIFY</h1>
                    <p className='border-[2px] border-gray-300 w-[150px] mb-3'></p>
                    <p className="opacity-45 text-md font-sans">Motivated to provide the best <br /> book services to our users</p>
                    <a href="" className="font-serif underline opacity-55 underline-offset-2">Explore your imagination</a>
                </article>
                <article className="flex flex-col">
                    <h1 className="text-xl md:text-[24px]">Discover</h1>
                    <a href="#">Home </a>
                    <a href="#about">About</a>
                    <a href="#partner">Partners</a>
                </article>
                <article className="hidden md:block">
                    <h1>Books Offered</h1>
                   <Link to='/category/scifi'><p>Scifi</p></Link>
                   <Link to='/category/adventure'><p>Adventure</p></Link>
                   <Link to='/category/children'> <p>Children</p></Link>
                   <Link to="/category/romance"><p>Romance</p></Link> 
                   <Link to="/category/horror"><p>Horror</p></Link>
                </article>
                <article className="hidden md:block">
                    <h1>Legal Info</h1>
                    <p>Terms & conditions</p>
                    <p>Privacy</p>
                </article>
            </section>
            <hr className="opacity-30 max-w-5xl mx-auto" />
            <section className="text-center font-medium opacity-25 mt-4 ">
                <p>copy 2024 All Right Reserved</p>
                
            </section>
        </div>
    );
}
 
export default Footer;