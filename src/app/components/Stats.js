const Stats = () => {
    return(
    <section className="bg-black px-5 text-white py-20">
    <div align="center" className="w-full place-content-center items-stretch">
      <div className="place-self-center grid-cols-1 place-items-center">
      <p className="text-2xl py-2 lg:text-6xl justify-center">Stats Dont Lie </p>
      <p className="py-5 mt-2 text-xl justify-center">Check out the amazing growth we have been experiencing. </p>
      </div>
    </div>

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">144K</h6>
          <p className="text-sm font-medium tracking-widest text-gray-200 uppercase lg:text-base">
            Downloads
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">12.9K</h6>
          <p className="text-sm font-medium tracking-widest text-gray-200 uppercase lg:text-base">
            Subscribers
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">48.3K</h6>
          <p className="text-sm font-medium tracking-widest text-gray-200 uppercase lg:text-base">
            Users
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">24.5K</h6>
          <p className="text-sm font-medium tracking-widest text-gray-200 uppercase lg:text-base">
            Cookies
          </p>
        </div>
      </div>
    </div>
  </section>
    );
};


export default Stats;