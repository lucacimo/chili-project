import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const MoviesScrollView = ({ carousel, movies, setCurrentMovie }) => {
	const images = movies.map(movie => (
		<div className="card--content" key={movie.id}>
			<img
				onClick={() => setCurrentMovie(movie)}
				src={movie.image}
				alt={movie.title}
			/>
		</div>
	));
	return carousel ? (
		<div className="carousel">
			<Carousel slidesPerPage={4} infinite arrows itemWidth={250}>
				{images}
			</Carousel>
		</div>
	) : (
			<div className="card">{images}</div>
		);
};

export default MoviesScrollView;
