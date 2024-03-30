
import { useState } from "react";

function ImageGallery({ image_paths }) {
    const [index, setIndex] = useState(0);

    function incrementIndex() {
        setIndex(index+1 >= image_paths.length ? 0 : index+1);
    }

    function decrementIndex() {
        setIndex(index-1 <= -1 ? image_paths.length-1 : index-1);
    }

    return (
        <div>
            <p>picture {index+1}/{image_paths.length}</p>
            <img height={300} src={image_paths[index]} alt="" />
            <br />
            <button onClick={decrementIndex}>{"<="}</button>
            <button onClick={incrementIndex}>{"=>"}</button>
        </div>
    );
}

export default ImageGallery
