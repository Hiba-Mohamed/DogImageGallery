import React from 'react'

const ImageGallery = ({ imagesArray, numberOfImages }) => {
  console.log(imagesArray, numberOfImages);
  const imagesWithSpecifiedNumber = imagesArray.slice(0, numberOfImages);
  const availableImagesNumber = imagesArray.length
  console.log(availableImagesNumber)
  console.log(imagesWithSpecifiedNumber)
  return (
    <div>
      <h2 className="galleryTitle">Image Gallery</h2>
      {numberOfImages > imagesArray.length && (
        <p className='lengthAlertP'>
          Only {imagesArray.length} Picture available for the breed selected
        </p>
      )}
      <div className="imagesDiv">
        {imagesWithSpecifiedNumber.map((link) => (
          <img src={link} alt="picture" />
        ))}{" "}
      </div>
    </div>
  );
};

export default ImageGallery