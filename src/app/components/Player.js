"use client"
import YoutubeEmbed from '../components/YoutubeEmbed.js';
import {useState, useEffect } from 'react';
 
const Player = ({src, svgsrc}) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [expand, setExpand] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  
  const [vidData, setVidData] = useState([]);
  const [currentVidId, setCurrentVidId] = useState("");
  const handleLike = () => {
    setLiked(!liked);
  }
  const handleComment = (event) => {
    const newComment = event.target.value;
    setComment(newComment);
  };
  const handleSubscribe = () => {
    setSubscribed(!subscribed);
  }
  const handleDislike = () => {
    setDisliked(!disliked);
  }
  const handleExpand = () => {
    setExpand(!expand);
  }
  
    useEffect(() => {
        const getVids = async () => {
        await fetch(`/api/getvid/1`)
        .then((response) => response.json())
        .then((data) => {
          setVidData(data.videos);
          setCurrentVidId(data.videos[0].videoId);
          console.log(data);
        })
        .catch((error) => console.error('Error fetching products:', error));
      }
      getVids();
    }, []);
    
    return(
    <section className="bg-[#4f19bb] px-5 text-white py-5">
    <div className="relative flex h-96 space-between space-x-4">
      <div className="z-10 w-2/3 max-w-full mt-0.5">
      <YoutubeEmbed embedId={currentVidId} />
      </div>
      
      <div className="z-1 flex-col overflow:scroll overflow-y-auto
      bg-slate-950 h-50 w-1/3 h-max-100 max-w-full 
      border border-gray-200 rounded-lg dark:border-gray-700">
        <p className="p-2 bg-slate-950 font-bold text-[#4adb0d]  shadow-md shadow-[#4adb0d]">MORE FROM THE CREATOR</p>
        <div>
        {vidData.map((vid, index) => (
            index !== 0 ? 
            (<button key={index} className="w-full" onClick={() => setCurrentVidId(vid.videoId)}>
            <div className="relative shadow-md shadow-[#4adb0d] space-x-2 m-2 p-2 h-20 flex flex-col 
            rounded-lg bg-white 
            dark:bg-gray-900 md:max-w-xl md:flex-row">
                <img
                  className="container w-20 rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
                  src={vid.thumbnail}
                alt="" />
                <h5
                  className="text-left text-sm font-medium text-neutral-800 dark:text-neutral-50">
                  {vid.title.length > 40 ? vid.title.slice(0, 41) + " ...": vid.title} <br/> <p className="mt-1 mb-2 
                  text-sm text-neutral-600 
                  dark:text-neutral-200">11K Views </p>
                </h5>
            </div>
            </button>)
        : null ))}
        </div>
      </div>
    </div>
    <div className="mt-3 justify-between bg-gradient-to-r from-[#4f19bb] to-[#4adb0d] 
        mb-3 pr-5 flex items-center  
        w-auto rounded-lg space-x-4">
      <div className="font-sm flex space-x-4 w-100  dark:text-white ">
        {/*
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" 
          viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg> 
          <p>Featured</p>
        </div>
        */}
        <img className="w-10 h-10 rounded-full" src={src.src} alt=""/>
        {vidData.map((vid, index) => (
          index === 0 ?
        <p key={index} className="font-semibold border-r-2 p-2" >{vid.channelTitle}</p> : null
        ))}
        {vidData.map((vid, index) => (
          index === 0 ?
        <p key={index} className="text-xl p-2 font-bold text-white dark:text-white">{vid.title}</p> : null
        ))}
      </div>

    <div className="space-x-2">
      {disliked ? null:
        <>
        { liked ? <button onClick={handleLike}>
        <a href="#_" className="h-1/2 relative inline-flex bg-[#4f19bb] items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all  rounded hover:bg-white group">
        
        <div className="flex flex-row">Liked
            <svg className="ml-1 w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
    <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z"/>
  </svg>
            </div>
        </a>
        </button> :
              <button className="border rounded" onClick={handleLike}>
                <a href="#_" className="h-1/2 relative inline-flex items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all  rounded hover:bg-white group">
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#4f19bb] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-gray-200 font-semibold transition-colors duration-300 ease-in-out group-hover:text-white"><div className="flex flex-row">Like
      <svg className="ml-1 w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"/>
  </svg>
  </div>
      </span>
            </a>
      </button>
      }
      </>
    }
            {liked ? null:
            <>
            { disliked ? <button onClick={handleDislike}>
                    <a href="#_" className="h-1/2 relative inline-flex bg-[#4f19bb] items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all  rounded hover:bg-white group">
                  Disliked
                  
            </a>
                    </button> :
                    <button className="border rounded"  onClick={handleDislike}>
            <a href="#_" className="h-1/2 relative inline-flex items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all  rounded hover:bg-white group">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#4f19bb] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-gray-200 font-semibold transition-colors duration-300 ease-in-out group-hover:text-white">Dislike</span>
            </a>
            </button>
            }
            </>
          }

          <a href="#_" className="h-1/2 relative inline-flex items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all bg-gray-900 rounded hover:bg-white group">
<span className="w-48 h-48 rounded rotate-[-40deg] bg-[#4f19bb] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span className="relative w-full text-left text-gray-200 transition-colors duration-300 ease-in-out group-hover:text-white">Share</span>
</a>

{ subscribed ? <button onClick={handleSubscribe}>
        <a href="#_" className="h-1/2 relative inline-flex bg-[#4f19bb] items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all  rounded hover:bg-gray-900 group">
      Subscribed
      </a>
      </button> :
      <button onClick={handleSubscribe}>
<a href="#_" className="h-1/2 relative inline-flex items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all bg-gray-900 rounded hover:bg-white group">
<span className="w-48 h-48 rounded rotate-[-40deg] bg-[#4f19bb] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span className="relative w-full text-left text-gray-200 transition-colors duration-300 ease-in-out group-hover:text-white">Subscribe</span>
</a>
</button>
}


<button onClick={handleExpand} className="relative inline-flex h-1/2 items-center px-1 py-1 justify-start ">
<svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
  </svg>
</button>


       </div>

       

            </div>

            {expand ? 
          <div className="relative">
            <h2 className="text-xl font-semibold text-white ">Discussion</h2>
            <div className="flex flex-row">
            <div className="w-1/3">
            <form>
              <div className="bg-[#4f19bb] py-4 rounded-lg">
                <div className="relative bg-inherit">
                  <input type="text" id="comment" name="comment" onChange={handleComment} 
                  value= {comment} className="peer bg-transparent h-10 w-full
                  rounded-lg text-white placeholder-transparent ring-2 px-2 ring-white 
                  focus:ring-[#4adb0d] focus:outline-none focus:border-rose-600" placeholder="Comment"/>
                  <label for="comment" className="absolute cursor-text left-0 -top-3 text-sm text-white 
                  bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-white 
                  peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-white 
                  peer-focus:text-sm transition-all">Comment</label>
                </div>
              </div>
              
              
              
            </form>
            </div>
            
            <div className="mt-3 ml-3">
            <button className="mt-1" onClick={() => setComments([...comments, comment])}>
                <a href="#_" className="h-1/2 relative inline-flex items-center justify-start px-3 py-2 overflow-hidden font-medium transition-all bg-gray-900 rounded hover:bg-white group">
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#4adb0d] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-gray-200 transition-colors duration-300 ease-in-out group-hover:text-white">Comment</span>
              </a>
            </button>
            </div>
              </div>
            {comments.map((cmnt, index) => (<p key={index} className="mt-3 p-3 bg-gradient-to-r from-[#4adb0d] to-transparent w-1/3 rounded-lg">{cmnt}</p>))}
            <p className="mt-3 p-3 bg-gradient-to-r from-[#4adb0d] to-transparent w-1/3 rounded-lg">Awesome!</p>
            <p className="mt-3 p-3 bg-gradient-to-r from-[#4adb0d] to-transparent w-1/3 rounded-lg">Do it again!</p>
            <p className="mt-3 p-3 bg-gradient-to-r from-[#4adb0d] to-transparent w-1/3 rounded-lg">Nahhhhh!</p>
          </div> : null}
          

  </section>
);
};
//
export default Player;
