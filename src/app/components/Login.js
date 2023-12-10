const Login = () => {
    return ( 
    <section className="min-h-fit max-w-1/2 bg-gradient-to-t from-[#4f19bb] to-[#4adb0d] pr-5 text-white py-20">
        <div className=" grid place-items-center">
            <div className="shadow-[#4adb0d] w-full max-w-sm p-4 bg-white border border-gray-200 
            rounded-lg sm:p-6 md:p-8 dark:bg-gray-900 dark:border-gray-700 shadow-xl ">
            <form className="self-auto space-y-6" action="#">
                <h5 className="text-2xl font-medium text-gray-900 dark:text-white">Sign in</h5>
                
                <div>
                    <label for="email" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                </div>
                <div>
                    <label for="password" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                </div>
                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                        </div>
                        <label for="remember" className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                </div>
                <button type="submit" className="w-full text-white bg-[#4f19bb] hover:bg-[#4f19bb] focus:ring-4 
                focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-[#4f19bb] dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                    Login </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                </div>
            </form>
            </div>
        </div>
    </section>
    );
};
export default Login;