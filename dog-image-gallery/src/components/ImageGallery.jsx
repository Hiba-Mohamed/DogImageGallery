import React from 'react'

const ImageGallery = ({ imagesArray, numberOfImages }) => {
  console.log(imagesArray, numberOfImages);
  const imagesWithSpecifiedNumber = imagesArray.slice(0, numberOfImages);
  console.log(imagesWithSpecifiedNumber)
  return (
    <div>
      <h2 className='galleryTitle'>Image Gallery</h2>
      <div className='imagesDiv'>
        {imagesWithSpecifiedNumber.map((link) => (
            <img src={link} alt="picture"  />
        ))}{" "}
      </div>
    </div>
  );
};

export default ImageGallery