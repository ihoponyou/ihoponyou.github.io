
import { useState } from "react";

function ImageGallery({ image_paths }) {
    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex(index+1 >= image_paths.length ? 0 : index+1);
    }

    return (
        <div>
            <p>picture {index+1}/{image_paths.length}</p>
            <img width={200} height={200} src={image_paths[index]} alt="" />
            <br />
            <button onClick={handleClick}>Next</button>
        </div>
    );
}

export default ImageGallery
