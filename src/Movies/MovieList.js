import React from 'react';
import {Link} from 'react-router-dom'

export default function MovieList({movies}) {
    const movieList = movies.map((item, index) => {
        let url = `/about/${item.id}`;

        return (
            <div className="movie-detail" key={index}>
                <Link to={url}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/posters${item.poster_path}`}
                        alt={`Poster for ${item.title}`}
                    />
                </Link>
            </div>
        )
    })
    return (<div>
        <ul>
            {movieList.map((item, index) => <li key={index}>{item}</li>)}
        </ul>

    </div>)
}