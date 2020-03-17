import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faHeart } from "@fortawesome/free-solid-svg-icons";

const Info = ({ movieInfo }) => (
    <div className="info">
        <h1>{movieInfo.title}</h1>
        <div className="rating">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/400px-IMDB_Logo_2016.svg.png" 
                alt="imdb-logo"
            />
            <h4>{movieInfo.rating}</h4>
        </div>
        <h4>{movieInfo.genre}</h4>
        <h4>Lingua: {movieInfo.language}</h4>
        <h4 className="small-title">Da vedere perchè</h4>
        <p>{movieInfo.rtbw}</p>
        <h4 className="small-title">Trama</h4>
        <p className="multi-line-truncate">
            {movieInfo.plot}
        </p>
    </div>
)

const PurchaseOptions = ({ price }) => {
    const [likesCount, setCount] = useState(0);
    const [favColor, setFavColor] = useState('white');

    const increment = () => setCount(likesCount + 1);
    const decrement = () => setCount(likesCount - 1)
    return (
        <div className="purchase-options">
            <button className="button">
                Acquista da {price}€
            </button>
            <button className="button">
                Noleggia da {price}€
             </button>
            <button className="button">Blu Ray / Dvd</button>
            <div className="icons">
                <div>
                    <FontAwesomeIcon onClick={() => likesCount > 0 ? decrement() : increment()} size="2x" color="white" icon={faThumbsUp} />
                    {likesCount > 0 ? <div className="likesCount">{likesCount}</div> : null}
                </div>
                <FontAwesomeIcon onClick={() => favColor === 'white' ? setFavColor('red') : setFavColor('white')} size="2x" color={favColor} icon={faHeart} />
            </div>
            <a href="#" style={{ color: "white" }}>
                SCOPRI DI PIÙ
        </a>
        </div>
    )
}

const Cover = ({ cover }) => (
    <div className="cover">
        <img src={cover} />
    </div>
)

const MovieInfo = ({ movie }) => (
    <div
        className="description"
        style={{
            backgroundImage: `url(${movie.background})`
        }}
    >
        <div className="filter">
            <Cover cover={movie.cover} />
            <Info movieInfo={movie} />
            <PurchaseOptions price={movie.price} />
        </div>
    </div>
)


export default MovieInfo;