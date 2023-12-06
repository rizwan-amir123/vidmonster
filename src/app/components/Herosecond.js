const Herosecond = ({src}) => {
    return (
       <section className="min-h-fit bg-[#4f19bb] px-5 text-white 
      py-20"
      >
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
          <div className="pb-5 md:pb-0">
            <h1 className="text-4xl py-5 my-13 lg:text-6xl">
              Enjoy Your Favorite Content <br />On All Devices
               <br />
              
            </h1>
  
            <p className="py-5 text-xl">
            Vid Monster works great on all device sizes. View your content on devices as small as mobile phones as well as big screens.
            </p>
          </div>
          <div>
          <img
                src={src.src}
                alt="coding illustration"
                className="rounded-2xl shadow-xl shadow-[#4adb0d] lgw-[80%] ml-auto"
              /> 
          </div>
        </div>
      </section>
    );
  };
  
  export default Herosecond;
  