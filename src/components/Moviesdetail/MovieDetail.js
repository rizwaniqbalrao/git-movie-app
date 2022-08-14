import React, { useContext } from 'react'
import './moviedetail.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import movieContext from '../../context/Movie/movieContext';

const MovieDetail = () => {
    const context = useContext(movieContext)
    const { serachDataShow } = context
    return (
        <>
            {serachDataShow.map((value) => {
                return <>
                    <div className="movie-detail">
                        <div className="image">
                            <img src={value.Images} alt="" />
                        </div>
                        <div className="details">
                            <h2 className='detail-list'>{value.Title}</h2>
                            <h4 className='detail-list'>Now Playing Exclusively in Movie Theaters</h4>
                            <button id='btn' className='btn-list'><AddShoppingCartIcon />Get Tickets</button>
                            <button id='btn' className='btn-list'><YouTubeIcon />Watch Trailer</button>
                        </div>
                    </div>
                    <div className="about">
                        <div className="about-image">
                            <h1 className="sub-list">About</h1>
                            <img className='about-img' src={value.Images} alt="" />
                            <p className="sub-list">Now Playing Exclusively in Movie Theaters</p>
                            <button id='btn' className='btn-list'><AddShoppingCartIcon />Get Tickets</button>
                            <button id='btn' className='btn-list'><YouTubeIcon />Watch Trailer</button>
                        </div>
                        <div className="about-list">
                            <div className="main-list">
                                <h3 className="sub-list"> {value.Title}</h3>
                                <h5 className="sub-list"><span>{value.Released}</span> | {value.Genre}</h5>
                                <p className="sub-list"> {value.Plot}</p>
                            </div>
                            <div className="sub-list"><h6>DIRECTED BY </h6><p>{value.Director}</p></div>
                            <div className="sub-list"><h6>WRITTEN BY</h6><p>{value.Writer}</p></div>
                            <div className="sub-list"><h6>LANGUAGE</h6><p>{value.Language}</p></div>
                            <div className="sub-list"><h6>COUNTRY</h6><p>{value.Country}</p></div>
                            <div className="sub-list"><h6>AWARDS</h6><p>{value.Awards}</p></div>
                            <div className="sub-list"><h6>ACTORS</h6><p>{value.Actors}</p></div>
                            <div className="sub-list"><h6>RUNTIME</h6><p>{value.Runtime}</p></div>

                        </div>
                    </div>
                </>
            })}
        </>
    )
}

export default MovieDetail