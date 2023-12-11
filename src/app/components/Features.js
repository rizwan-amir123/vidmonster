export default function Features({src}) {
    return (
    <section className="bg-black px-5">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-10 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
                A Creator Focused Platform
                </h2>
                <p className="text-white sm:text-xl dark:text-white">VidMonster practices and promotes 
                a culture revolving around creators and offers the features listed below
                </p>
            </div>
        
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div className="group relative cursor-pointer overflow-hidden bg-zinc-300 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#4adb0d] transition-all duration-300 group-hover:scale-[10]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                        <span className="grid h-20 w-20 place-items-center rounded-full bg-[#4adb0d] transition-all duration-300 group-hover:bg-[#4f19bb]">
                            <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                            </svg>
                        </span>
                        <div
                            className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                            <h3 className="mb-2 text-xl font-bold text-gray-700">Creator Promotion Comes First</h3>
                            <p className="text-lg text-gray-700">We promote creators instead of videos on this platform.</p>
                        </div>
                    </div>
                </div>

                <div className="group relative cursor-pointer overflow-hidden bg-zinc-300 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#4adb0d] transition-all duration-300 group-hover:scale-[10]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                        <span className="grid h-20 w-20 place-items-center rounded-full bg-[#4adb0d] transition-all duration-300 group-hover:bg-[#4f19bb]">
                            <svg className="w-11 h-11 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.248 15C.22 11.77 2.275 4.232 9.466 4.232V2.079a1.025 1.025 0 0 1 1.644-.862l5.479 4.307a1.108 1.108 0 0 1 0 1.723l-5.48 4.307a1.026 1.026 0 0 1-1.643-.861V8.539C2.275 9.616 1.248 15 1.248 15Z"/>
                            </svg>
                        </span>
                        <div
                            className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                            <h3 className="mb-2 text-xl font-bold text-gray-700">Monetize Early</h3>
                            <p className="text-lg text-gray-700">We allow monetization of videos earlier than other 
                    platforms by keeping a low threshold of views for monetization.</p>
                        </div>
                    </div>
                </div>

                <div className="group relative cursor-pointer overflow-hidden bg-zinc-300 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#4adb0d] transition-all duration-300 group-hover:scale-[10]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                        <span className="grid h-20 w-20 place-items-center rounded-full bg-[#4adb0d] transition-all duration-300 group-hover:bg-[#4f19bb]">
                            <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138"/>
                            </svg>
                        </span>
                        <div
                            className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                            <h3 className="mb-2 text-xl font-bold text-gray-700">Earn More</h3>
                            <p className="text-lg text-gray-700">A greater percentage share for 
                    content creators.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>);
}