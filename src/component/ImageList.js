import React from 'react';
import './ImageList.css';
import ImageCard from "./ImageCard";

const Image = (props) => {
    //C1: const img = props.images.map((image) => {})
    //C2: const img = props.images.map(({ description, id, urls }) => {})
    const img = props.images.map((image) => {
        return (
            <ImageCard
                key={image.id}
                image={image}
            />)
    });

    return <div className="image-list">{img}</div>;
};

export default Image;