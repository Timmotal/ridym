import React from 'react';

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className="hidden sm:flex flex-row items-center">
      <button type="button" onClick={() => setSeekTime(appTime - 5)} className="hidden lg:mr-4 lg:block text-white">
        -
      </button>
      <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      <button type="button" onClick={() => setSeekTime(appTime + 5)} className="hidden lg:ml-4 lg:block text-white">
        +
      </button>
    </div>
  );
};

export default Seekbar;


function getRating(watchList){
  // Add your code below this line
  const averageRating = watchList
    .filter(film => film.Director === "Christopher Nolan")
    .map(film => Number(film.imdbRating))
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
  watchList.filter(film => film.Director === "Christopher Nolan").length;
  // Add your code above this line
  return averageRating;
}


------------------------------------------------
const nolanData = watchList
    .reduce((movie, { Director: director, imdbRating: rating }) => {
      if (director === 'Christopher Nolan') {
        movie.count++;
        movie.sum += Number(rating);
      }
      return movie;
    }, { sum: 0, count: 0 });
  const averageRating = nolanData.sum / nolanData.count;
  // Add your code above this line
  return averageRating;
}

const squareList = (arr) => {
  // Only change code below this line
  return arr
    
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);


return [].concat( arr ).sort( function( a, b) {
  return a - b; 
});



