import React from "react";
import DogCard from "./DogCard";
import "./style.css";

// Import images
import julie from "./assets/images/julie.jpg";
import innocent from "./assets/images/innocent.jpg";
import buggy from "./assets/images/buggy.jpg";
import saint from "./assets/images/saint.jpg";

function App() {
  const dogs = [
    { image: julie, name: "Julie's Rabbit Ears" },
    { image: innocent, name: "The Innocent Look" },
    { image: buggy, name: "Big Eyed Buggy" },
    { image: saint, name: "The Saint Doggo" },
     { image: julie, name: "Julie's Rabbit Ears" },
    { image: innocent, name: "The Innocent Look" },
    { image: buggy, name: "Big Eyed Buggy" },
    { image: saint, name: "The Saint Doggo" }
  ];

  return (
    <div className="dog-grid">
      {dogs.map((dog, index) => (
        <DogCard key={index} image={dog.image} name={dog.name} />
      ))}
    </div>
  );
}

export default App;