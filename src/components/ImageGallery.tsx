import { useState } from "react";

interface Props {
  images: string[];
}

function ImageGallery({ images }: Props) {
  const [index, setIndex] = useState(0);

  function incrementIndex() {
    setIndex(index + 1 >= images.length ? 0 : index + 1);
  }

  function decrementIndex() {
    setIndex(index - 1 <= -1 ? images.length - 1 : index - 1);
  }

  return (
    <div className="text-center">
      <img src={images[index]} alt="" />
      <br />
      {images.length > 1 &&
        <>
          <button className="mx-3" onClick={decrementIndex}>
            ←
          </button>
          {index + 1}/{images.length}
          <button className="mx-3" onClick={incrementIndex}>
            →
          </button>
        </>}
    </div>
  );
}

export default ImageGallery;
