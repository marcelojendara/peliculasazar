import React from 'react';
const peliculas = [
  { id: 1, titulo: 'Back to the Future', genero: "scifi",video:"https://youtu.be/NDS1myoYUzs" },
  { id: 2, titulo: 'Top Gun', genero: "accion",video:"https://youtu.be/qSqVVswa420" },
  { id: 3, titulo: 'Star Wars', genero: "scifi", video: "https://youtu.be/YUA9rPpf2xo" },
  { id: 4, titulo: 'Revenge of the Nerds', genero: "comedia", video:"https://youtu.be/kIZH5TKnEeg" },
  { id: 5, titulo: 'Police Academy', genero: "comedia", video:"https://youtu.be/ic-x0rOQDFA" },
  { id: 6, titulo: 'Avatar', genero: "scifi", video: "https://youtu.be/bDFKIs4v0B4" }
];

function getImagen(p){
  const url="https://www.omdbapi.com/?apikey=5ab2d3&t="+p
  fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById("imagen_poster").src=data.Poster
  });
}

function Trailer(props){
  return <a href={props.video} target='_blanck'>ver trailer</a>
}

function Poster(props) {
  return <div className='container'>
          <h1> Pelicula: <b>{peliculas[props.pelicula].titulo}</b></h1>
          <div className='row'>
            <div className='col'>
              <img id="imagen_poster" src="" onload={getImagen(peliculas[props.pelicula].titulo)} alt="poster"/> 
            </div>
            
            <div className='col'>
              <Trailer video={peliculas[props.pelicula].video}/>      
            </div>
          </div>
        </div>
}

//)
export default Poster;