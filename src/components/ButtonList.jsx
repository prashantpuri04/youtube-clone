import React from "react";
import Button from "./Button";


export default function ButtonList(){
    const list = ["All", "Music", "Sports", "Gaming", "Movies", "News", "Live", "Comedy", "Cooking"];
    return (
        <div className="flex">
            {list.map((item) => <Button key={item} name={item}/>)
            }
        </div>
    )
}