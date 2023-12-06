const Herothird = ({src, src1, src2, src3, src4}) => {
    const creators_one = ["Markplier", "Shane Dawson", "Dude Perfect", "Smosh"]
    const creators_two = ["Preston", "David Dorbik",
    "JuegaGerman", "ElRubiusOMG"];
    return (
    <section className="bg-[#4f19bb] px-5 text-white py-20">
      <div align="center" className="w-full place-content-center items-stretch">
        <div className="place-self-center grid-cols-1 place-items-center">
        <p className="text-2xl py-2 lg:text-6xl justify-center">All the Artists You Love </p>
        <p className="py-5 mt-2 text-xl justify-center">Stream all new short form content from your 
        favorite creators </p>
        </div>
      </div>

      <div className="flex h-3/4 m-5 space-x-4">
        {creators_one.map((creator) => (
      <div className="overflow-hidden w-1/4 aspect-video bg-red-400 cursor-pointer rounded-xl relative group"
        >
            <div
                className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
            >
                <div>
                    <div
                        className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >
                        <div className="font-bold">{creator}</div>

                    </div>
                </div>
            </div>
            <img
                alt="Jessica Wastsica cover image"
                className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src={src1.src}
            />
        </div>
        ))}
        </div>
        <div className="flex h-3/4 m-5 space-x-4">
{creators_two.map((creator) => (
      <div className="overflow-hidden w-1/4 aspect-video bg-red-400 cursor-pointer rounded-xl relative group"
        >
            <div
                className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
            >
                <div>
                    <div
                        className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >
                        <div className="font-bold">{creator}</div>

                    </div>
                </div>
            </div>
            <img
                alt="Jessica Wastsica cover image"
                className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src={src1.src}
            />
        </div>
        ))}

        
        </div>
    </section>
  );
};
  
export default Herothird;
  