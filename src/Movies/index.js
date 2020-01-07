import React, {useState, useEffect} from "react";
import MovieList from "./MovieList";
import MovieHeader from "../Components/MovieHeader";

export default function Movies(props) {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([] || movies);

    useEffect(() => {
        fetch('http://localhost:3001/api/nowPlaying').then((response) =>
            response.json()).then(data => setMovies(data.results, setFilteredMovies(data.results)))
    }, []);

    let search = e => {
        setSearchText(e.target.value.toLowerCase());
        setFilteredMovies(filteredMovies.filter(movie =>
             movie.title.toLowerCase().match(searchText) != null)
        );
        if(searchText.length === 1){
            setFilteredMovies(movies);
        }
    };

    return (
        <div className="movie-container">
            <MovieHeader searchText={searchText} search={search} />
            <MovieList movies={filteredMovies}{...console.log(movies)} />
        </div>)
}