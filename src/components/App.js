import React, { useEffect, useState } from 'react';

function App() {
   const [randomDog, setRandomDog]  = useState("");
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((data) => {
         setRandomDog(data.message)
         setIsLoaded(true)
      })
   })

   if (!isLoaded) {
      return <p>Loading...</p>
   } else {
      return (
         <div>
            <img src={randomDog} alt="A Random Dog" />
         </div>
      );
   };
};

export default App;