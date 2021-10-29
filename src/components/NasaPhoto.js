import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();
        
        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=ZdbgjTwDoZYBGm01q0gAJOfNKf4eWELMuZSrXHYT`
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    }, []);

    if(!photoData) return <div />;

    return(
    <>
        <NavBar />
        <div className="nasa-photo">
            <img className="photo" src={photoData.url} alt={photoData.title} />
        
            
                <h1>{photoData.title}</h1>
                <p className="date">{photoData.date}</p>
                <p className="explanation">{photoData.explanation}</p>
                
        </div>
        </> 
        
    )
}