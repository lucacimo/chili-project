import React from 'react';

const MoviesScrollView = ({ movies, setCurrentMovie }) => (
	<div className="card">
		{movies.map(movie => (
			<div className="card--content" key={movie.id}>
				<img
					onClick={() => setCurrentMovie(movie)}
					src={movie.image}
					alt={movie.title}
				/>
			</div>
		))}
	</div>
)

export default MoviesScrollView;