import React from "react";
import { useState } from "react";

const BreedSelector = ({ breedListArray, passInfo }) => {
  const [imageNumber, setImageNumber] = useState("");
  const [breedName, setBreedName] = useState("");
  //   console.log(breedListArray);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(imageNumber);
    console.log(breedName);
    if (!imageNumber || !breedName) {
      alert("Please fill all fields in the form");
      return;
    } else {
      passInfo(breedName, imageNumber);
      setImageNumber("");
      setBreedName("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Dog Breed</label>
        <select
          className="dog-selector"
          value={breedName}
          onChange={(e) => setBreedName(e.target.value)}
          required
        >
          <option key="empty" value="">
            Select an option
          </option>
          {breedListArray.map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="">Number of images</label>
        <input
          type="number"
          value={imageNumber}
          onChange={(e) => setImageNumber(e.target.value)}
          min={1}
          max={100}
          placeholder="Choose number of images"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BreedSelector;
