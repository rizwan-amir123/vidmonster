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
        await fetch(`http://localhost:3000/api/getvid/1`)
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
    <div className="flex h-96 space-between space-x-4">
      <div className="container w-2/3 max-w-full">
      <YoutubeEmbed embedId={currentVidId} />
      </div>
      
      <div className="flex-col overflow:scroll overflow-y-auto
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
                  {vid.title.length > 40 ? vid.title.slice(0, 41) + " ...": vid.title} <br/> <p className="mt-2 text-base text-neutral-600 
                  dark:text-neutral-200">{vid.channelTitle} </p>
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
        Liked
        </a>
        </button> :
              <button className="border rounded" onClick={handleLike}>
                <a href="#_" className="h-1/2 relative inline-flex items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all  rounded hover:bg-white group">
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#4f19bb] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-gray-200 font-semibold transition-colors duration-300 ease-in-out group-hover:text-white">Like</span>
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
            
            <p className="mt-3 p-3 bg-indigo-400 w-1/3 rounded-lg">Awesome!</p>
            <p className="mt-3 p-3 bg-indigo-400 w-1/3 rounded-lg">Do it again!</p>
            <p className="mt-3 p-3 bg-indigo-400 w-1/3 rounded-lg">Nahhhhh!</p>
          </div> : null}
          

  </section>
);
};
//
export default Player;