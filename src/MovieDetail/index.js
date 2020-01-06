import React, {useState, useEffect} from "react";

export default function MovieDetail(props) {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        let url = `http://localhost:3001/api/movies/${props.match.params.id}`;
        fetch(url).then((response) => response.json()).then(data => setMovie(data))
    }, [props.match.params.id]);
    return (
        <main id="mainContent" className="container">
            <h3>{movie.title}</h3>
            <h4>{movie.overview}</h4>
        </main>);
}