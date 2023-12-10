const Faq = () => {
    return (
              <section className="text-white bg-gradient-to-r from-[#4adb0d] to-[#4f19bb] px-5">
                <div className="container px-5 py-20 mx-auto">
                  <div className="text-center mb-20">
                    <h1 className="text-2xl py-2 lg:text-6xl justify-center">
                      Frequently Asked Questions
                    </h1>
                    <p className="py-5 mt-2 text-xl justify-center">
                      The most common questions about how our website works and what we
                      provide.
                    </p>
                  </div>
                  <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div className="w-full lg:w-1/2 px-4 py-2">
                      <details className="mb-7">
                        <summary className="mb-4 text-black font-semibold text-lg bg-gray-200 rounded-md py-2 px-4">
                          How long is this site live?
                        </summary>

                        <span className="text-lg">
                          It has been live since 2020. It has helped in producing many famous content
                          creators since then and aims to do more than tat in the future.
                        </span>
                      </details>
                      <details className="mb-7">
                        <summary className="mb-4 text-black font-semibold text-lg bg-gray-200 rounded-md py-2 px-4">
                          Can I monetize the content I post here?
                        </summary>
        
                        <span className="text-lg">
                          Yes, after a specified number of views the content can be monetized. Our main 
                          goal is to become the first choice of content creators.
                          We also provide monetization suggestions to the creators.
                        </span>
                      </details>
                      <details className="mb-7">
                        <summary className="mb-4 text-black font-semibold text-lg bg-gray-200 rounded-md py-2 px-4">
                          Does the website provide cross-platform promotion for videos?
                        </summary>
        
                        <span className="text-lg">
                          Yes, videos from Vid Monster can be posted on other social media websites, 
                          provided they allow sharing our videos.
                        </span>
                      </details>
                    </div>
                    <div className="w-full lg:w-1/2 px-4 py-2">
                      <details className="mb-7">
                        <summary className="mb-4 text-black font-semibold  text-lg bg-gray-200 rounded-md py-2 px-4">
                          Is the content on the website moderated?
                        </summary>
        
                        <span className="text-lg">
                          We have strict policy regarding content of the video content. Our 
                          moderators are always looking out for content that violates out terms of 
                          service agreement.
                        </span>
                      </details>
                      <details className="mb-7">
                        <summary className="mb-4 text-black font-semibold text-lg bg-gray-200 rounded-md py-2 px-4">
                          How many videos can I upload?
                        </summary>
        
                        <span className="text-lg">
                          Any number of videos can be uploaded by any user.
                        </span>
                      </details>
                      <details className="mb-7">
                        <summary className="mb-4 text-black font-semibold text-lg bg-gray-200 rounded-md py-2 px-4">
                          How can I communicate with you?
                        </summary>
        
                        <span className="text-lg">
                          You can contact us at our socials provided on the website.
                        </span>
                      </details>
                    </div>
                  </div>
                </div>
              </section>
    );
};
  
export default Faq;