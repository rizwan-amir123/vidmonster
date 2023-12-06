const Hero = ({src}) => {
  return (
    <section className="px-5 text-white 
    bg-black py-20"
    
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center 
      md:justify-between">
        <div className="pb-10 md:pb-0">
          <h1 className="text-4xl py-2 lg:text-6xl">
            The Greatest <br /> Content <br />All In One Place
             <br />
            
          </h1>

          <p className="pt-5 pb-10 mt-2 text-xl">
            Watch unlimited short videos from your favorite content creators here. Monetize your own videos to earn.
          </p>
          <div className="w-2/3">
          <a href="/video" class="relative px-6 py-3 font-bold text-white rounded-lg group">
            <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-[#4adb0d] ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-[#4f19bb] ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
            <span class="text-lg relative">Start Watching</span>
          </a>

          </div>
          
        </div>
        <div>
            <img
            src={src.src}
            alt="coding illustration"
            className="rounded-lg shadow-xl shadow-[#4adb0d] lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>

    
  );
};

export default Hero;
