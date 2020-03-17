import React from 'react';

const MoviesScrollView = ({ movies, setCurrentMovie }) => (
	<div className="card">
		{movies.map(movie => (
			<div className="card--content">
				<img
					onClick={() => setCurrentMovie(movie)}
					src={movie.image}
				/>
			</div>
		))}
	</div>
)

export default MoviesScrollView;