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
    }
  };

  return (
    <form>
      <div>
        <label>Dog Breed</label>
        <select
          class="dog-selector"
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
          onChange={(e) => setImageNumber(e.target.value)}
          min={1}
          placeholder="Choose number of images"
        />
      </div>
      <button onClick={onSubmit} required>
        Submit
      </button>
    </form>
  );
};

export default BreedSelector;
