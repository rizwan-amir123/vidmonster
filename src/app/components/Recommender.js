import Link from 'next/link';
const Recommender = ({text, src}) => {
    const creators = ["Markplier", "DanTDM", "Dude Perfect", "Smosh", "Preston"];
    const subs = [1.2, 1.87, 1.9, 2.4, 3.2];
    return (
    <section className="min-h-fit bg-black px-7 text-white pt-10 pb-5">
        <div className="w-full place-content-center items-stretch">
        <div className="place-self-center grid-cols-1 place-items-center">
        <p className="text-xl py-2 lg:text-3xl font-bold mb-3 justify-center">{text} </p>
        </div>
        </div>
        <div className="space-x-4 flex">
        
        {creators.map((creator, index) => (
            
            <div className="container overflow-hidden w-1/3  bg-red-400 cursor-pointer 
            rounded-xl relative group shadow-lg shadow-[#4f19bb]">
                <Link href={"/video/" + creator.toLowerCase().replace(" ", "_")}>
                <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 
                ease-in-out 
                cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 
                -bottom-2 pt-30 text-white flex items-end">
                    
                    <div>
                        <div className="transform-gpu p-4 space-y-1 text-xl group-hover:opacity-100 
                        group-hover:translate-y-0 translate-y-4 pb-5 transform transition 
                        duration-300 ease-in-out">
                            <div className="font-bold">{creator}</div>
                            <div className="font-sm">{subs[index]}M Subs</div>
                        </div>
                    </div>
                </div>
                </Link>
                <img
                    alt="cover image"
                    className="object-cover object-top object-bottom w-full aspect-square group-hover:scale-110 
                    transition duration-300 ease-in-out"
                    src={src[index].src}
                />
                
            </div>
            
        ))}
        </div>
    </section>);
};

export default Recommender;