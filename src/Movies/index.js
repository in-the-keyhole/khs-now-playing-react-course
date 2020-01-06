import React, {useState, useEffect} from "react";
import MovieList from "./MovieList";
import MovieHeader from "../Components/MovieHeader";

export default function Movies(props) {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/api/nowPlaying').then((response) => response.json()).then(data => setMovies(data.results))
    }, []);

    let search = e => {
        const searchText = e.target.value;
        this.setState(() => ({
            searchText,
            filteredMovies: this.state.movies.filter(
                movie =>
                    movie.title.toLowerCase().match(searchText.toLowerCase()) != null
            )
        }))
    };


    return (
        <div className="movie-container">
            <MovieHeader searchText={searchText} search={search} />
            <MovieList movies={movies}{...console.log(movies)} />
        </div>)
}