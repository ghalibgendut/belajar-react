import React, { Component } from 'react';

let ImageList = (props) => {


    
    let results = props.images.map((image) => {
        return(
            <img 
                className = "my-3 card"
                src={image.urls.regular}
                key={image.id}
                alt={image.description}
            />
        )
    });

    return (
        <div className="card-columns">
            {results}
        </div>
    )




}


export default ImageList