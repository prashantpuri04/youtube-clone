// import React, { useEffect, useState } from "react";
// import { YOUTUBE_VIDEOS_API } from "../utils/constants";
// import {Link} from "react-router-dom";


// export default function VideoContainer(){
//     const [videos, setVideos] = useState([]);

//     useEffect(() => {
//        getVideos();
//     }, []);

//     const getVideos = async () => {
//         const data = await fetch(YOUTUBE_VIDEOS_API);
//         const json = await data.json();
//         console.log(json);
//         setVideos(json.items);
//     }

//     return (
//         <div className="flex flex-wrap">
//             {videos.map(video => (
//                <Link to={"/watch?v="+video.id}>   
//              <VideoCard key={video.id} info={video}/>))}
//         </div>
            
//     )
// }

import React from "react";

export default function VideoContainer(){
    return (
        <div>
            <h1 className='text-3xl font-bold'>Video Container</h1>
        </div>
    )
}