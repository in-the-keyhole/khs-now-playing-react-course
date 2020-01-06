import React from 'react'

const MovieHeader = ({ searchText, search }) =>
    <div>
        <h3>Now Playing</h3>
        <input
            autoFocus
            value={searchText}
            onChange={search}
            type="text"
            placeholder="Search..."
        />
    </div>

export default MovieHeader