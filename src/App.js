import React, { useState, useEffect } from "react";
import "./App.css";
import MovieInfo from './components/movieInfo';
import MoviesScrollView from "./components/moviesScrollView";
import movies from './movies';

const App = () => {
	const [currentMovie, setCurrentMovie] = useState(movies[0]);
	const [movies, setMovies] = useState([]);

	useEffect(async () => {
		let response = await fetch(`https://www.mocky.io/v2/5e70a22e30000029007a3047`);
		let data = await response.json()
		setCurrentMovie(data[0])
		setMovies(data);
	}, []);

	let View = Object.keys(currentMovie).length === 0 ? (
		<div>Loading</div>
	) : (
			<div className="container">
				<MovieInfo movie={currentMovie} />
				<MoviesScrollView movies={movies} setCurrentMovie={setCurrentMovie} />
			</div>
		)
	return View;
}

export default App;
