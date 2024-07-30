interface Logo{
    id:number 
    image:string 
}

const Partners = () => {
    const partners:Logo[]=[
        {id:1, image:"https://i.pinimg.com/564x/72/ae/41/72ae41ca381f197ecf93541b90138640.jpg"},
        {id:2, image:"https://i.pinimg.com/736x/96/bf/58/96bf5866f5395ff1cbe4eed81f0868ee.jpg"},
        {id:3, image:"https://i.pinimg.com/236x/d0/94/b7/d094b7d60b4613ffdf84dba34a53e670.jpg"},
        {id:4, image:"https://i.pinimg.com/236x/ee/b1/c9/eeb1c9d2dba4ee0811d5a7d249a7b8c6.jpg"},
        {id:5, image:"https://i.pinimg.com/236x/dd/cb/c0/ddcbc0184b99cc9dbf5e2e25703c1766.jpg"},
    ]
    return ( 
        <div id="partner" className="partners mx-3">
            <h1 className="font-bold font-serif text-[27px] underline ">Our Trusted Partners</h1>
            <p className="font-poppins text-[16px] md:text-[20px]">At bookify we believe in the power of partnership.Our partners help us to continuosly provide
                the needed materials ensuring that our clients have access to a vast variety of books. 
                Through our collaborations ,we have been able to expand our reach.Each partner brings unique expertise
                on the table ensuring you receive  the best possible services.    
             </p>
             <section className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {partners.map((p)=>(
                    <div className="" key={p.id}>
                        <img className="h-[200px] w-[400px] contrast-200" src={p.image} alt="image" />
                    </div>
                ))}
             </section>
        </div>
     );
}
 
export default Partners;