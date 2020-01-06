import React from 'react';
import { Link } from 'react-router-dom'

export default function MovieList({movies}) {
    let movieList = movies.map((item, index) => {
        let url = `/about/${item.id}`;

        return (
            <div className="movie-detail" key={index}>
                <Link to={url}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/posters${item.poster}`}
                        alt={`Poster for ${item.title}`}
                    />
                </Link>
            </div>
        )
    })
    return (<div>
                   {movieList.map((item) => item)}
    </div>)
}