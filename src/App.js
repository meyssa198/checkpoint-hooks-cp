import './App.css';
import React from 'react';
import MovieList from './MovieList';

const films = [
  {
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Conjuring_poster.jpg/220px-Conjuring_poster.jpg",
    title: 'The conjuring',
    description: 'this is an horror movie'
  },
  {
    img:"https://m.media-amazon.com/images/M/MV5BYWVmYTFjODItOTY2Ni00NDhhLTk1ZDYtMzBmOGFhZTMyY2Q0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SY1000_SX675_AL_.jpg",
    title:'Holidate',
    description:'this is a comedy movie'
  },
  {
    img:"https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg",
    title:'John Wick',
    description:"this is an action movie"
  }
];

function App() {
  return (
    <div className="App">
     < MovieList films={films}/>
    </div>
  );
}

// const Filter =(title,rate)=>{};

export default App;