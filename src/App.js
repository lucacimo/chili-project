import React, { useState, useEffect } from "react";
import "./App.css";
import MovieInfo from './components/movieInfo';
import MoviesScrollView from "./components/moviesScrollView";

const App = () => {
	const [currentMovie, setCurrentMovie] = useState({});
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsError(false);
			setIsLoading(true);
			try {
				let response = await fetch(`https://www.mocky.io/v2/5e70a22e30000029007a3047`);
				let data = await response.json()
				setCurrentMovie(data[0])
				setMovies(data);
			}
			catch {
				setIsError(true);
			}
			setIsLoading(false);
		};
		fetchData();
	}, []);

	return (
		<>
			{isError && <div>Something went wrong ...</div>}
			{isLoading ? (
				<div>Loading ...</div>
			) : (
					<div className="container">
						<MovieInfo movie={currentMovie} />
						<MoviesScrollView 
							movies={movies} 
							setCurrentMovie={setCurrentMovie} 
						/>
					</div>
				)}
		</>
	)
}

export default App;
