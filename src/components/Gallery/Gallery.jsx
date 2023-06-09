import { useState, useEffect } from "react";
import { imagesFetch } from "../../api/config";

// context imports
import { useContext } from "react";
import { ImgContext } from "../../context/imgContext";

import * as C from "./Gallery.styles";

export const Gallery = () => {
    const { images, setImages } = useContext(ImgContext);
    const [url, setUrl] = useState("");

    const getImages = async () => {
        try {
            const res = await imagesFetch.get("/images");

            const data = res.data;

            setImages(data.images);
            setUrl(data.url);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getImages();
    }, []);

    return (
        <C.GallerySection>
            {images.map(image => (
                <C.Img src={url + image.path} alt={image.path.split("_")[1]} key={image._id} />
            ))}
        </C.GallerySection>
    );
};
