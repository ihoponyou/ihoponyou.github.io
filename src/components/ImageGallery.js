
import { useState } from "react";

function ImageGallery({ image_paths }) {
    const [index, setIndex] = useState(0);

    function incrementIndex() {
        setIndex(index + 1 >= image_paths.length ? 0 : index + 1);
    }

    function decrementIndex() {
        setIndex(index - 1 <= -1 ? image_paths.length - 1 : index - 1);
    }

    return (
        <div>
            <img height={300} src={image_paths[index]} alt="" />
            <br />
            <div className="text-center">
                <button className="btn btn-secondary mx-3" onClick={decrementIndex}>
                    <i className="bi bi-arrow-left"></i>
                </button>
                {index + 1}/{image_paths.length}
                <button className="btn btn-secondary mx-3" onClick={incrementIndex}>
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}

export default ImageGallery
