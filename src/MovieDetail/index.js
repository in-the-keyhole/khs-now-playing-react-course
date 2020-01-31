import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'

export default function MovieDetail(props) {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        let url = `http://localhost:3001/api/movies/${props.match.params.id}`;
        fetch(url).then((response) => response.json()).then(data => setMovie(data))
    }, [props.match.params.id]);

    return (
        <div className="movie-detail">
            <h3> {movie.title} </h3>
            <h4> {movie.overview} </h4>
            <Link to="/">
                <span className="close"/>
            </Link>
            <img src={`${process.env.PUBLIC_URL}/images/backdrops${movie.backdrop_path}`}
                 alt={`Backdrop for ${movie.backdrop_path}`}
            />
        </div>

    );
}