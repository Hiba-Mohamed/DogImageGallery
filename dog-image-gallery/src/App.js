import "./index.css";
import Header from "./components/Header";
import BreedSelector from "./components/BreedSelector";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [breedListArray, setBreedListArray] = useState([]);
  const [imageNumber, setImageNumber] = useState("");
  const [breedName, setBreedName] = useState("");
  const [imageList, setImageList] = useState("");

  const fetchBreedList = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await res.json();
    const breedListArrayFetched = Object.keys(data.message);
    // console.log(breedListArrayFetched);
    return breedListArrayFetched;
  };
  fetchBreedList();

  useEffect(() => {
    const getList = async () => {
      const listFromAPI = await fetchBreedList();
      setBreedListArray(listFromAPI);
    };
    getList();
  }, []);

  // console.log(breedListArray);

  const fetchBreedImages = async (breedName, imageNumber) => {
    const res = await fetch(`https://dog.ceo/api/breed/${breedName}/images`);
    console.log(res);
    const data = await res.json();
    console.log(data);
    const imagesListFetched = data.message;
    console.log(imagesListFetched);
    setImageList(imagesListFetched);
    console.log(imageList);
  };
  console.log(imageList);

  const passBreedInfoOver = (name, number) => {
    setBreedName(name);
    setImageNumber(number);
    fetchBreedImages(name, number);
  };
  console.log(breedName, imageNumber);

  return (
    <>
      <Header />
      <div className="container">
        <BreedSelector
          breedListArray={breedListArray}
          passInfo={passBreedInfoOver}
        />
        {imageList && (
          <ImageGallery imagesArray={imageList} numberOfImages={imageNumber} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
