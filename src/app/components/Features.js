export default function Features({src}) {
    return (
    <section className="bg-black">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-10 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
                A Creator Focused Platform</h2>
            <p className="text-white sm:text-xl dark:text-white">VidMonster practices and promotes 
            a culture revolving around creators and offers the features listed below</p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="p-5 bg-gradient-to-r from-blue-500 to-transparent rounded-lg">
                <div className="shadow-lg shadow-white flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#4f19bb] lg:h-12 lg:w-12 dark:bg-primary-900 transition duration-100 ease-in-out hover:rotate-180">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
  </svg>
  </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Creator Promotion Comes First</h3>
                <p className="text-white dark:text-white">We promote creators instead of videos on this platform.
                </p>
            </div>
            <div className="p-5 bg-gradient-to-r from-blue-500 to-transparent  rounded-lg">
                <div className="shadow-lg shadow-white flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#4f19bb] lg:h-12 lg:w-12 dark:bg-primary-900 transition duration-100 ease-in-out hover:rotate-90">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.248 15C.22 11.77 2.275 4.232 9.466 4.232V2.079a1.025 1.025 0 0 1 1.644-.862l5.479 4.307a1.108 1.108 0 0 1 0 1.723l-5.48 4.307a1.026 1.026 0 0 1-1.643-.861V8.539C2.275 9.616 1.248 15 1.248 15Z"/>
  </svg>
  
  </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Monetize Early</h3>
                <p className="text-white dark:text-white">We allow monetization of videos earlier than other 
                platforms by keeping a low threshold of views for monetization.</p>
            </div>
            <div className="p-5 bg-gradient-to-r from-blue-500 to-transparent rounded-lg">
                <div className="shadow-lg shadow-white flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#4f19bb] lg:h-12 lg:w-12 dark:bg-primary-900 transition duration-100 ease-in-out hover:rotate-180">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138"/>
  </svg></div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Earn More</h3>
                <p className="text-white dark:text-white">A greater percentage share for content creators.</p>
            </div>
        </div>
    </div>
  </section>);
}