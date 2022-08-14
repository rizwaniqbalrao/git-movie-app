import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import movieContext from '../../context/Movie/movieContext';
import { Link } from 'react-router-dom'
import './movielist.css';
export default function MovieList() {
    const context = useContext(movieContext)
    const { serachDataShow, searchData, pages, selectedPage, selectedPageNumber, paginatedMovies, movieDetailShow } = context

    return (
        <>
            <div className="movie-list">
                {searchData.length > 1 ? serachDataShow.map((value) => {
                    return <div className="movie-links">

                        <Card sx={{ maxWidth: 345, maxHeight: 650, marginTop: '2rem', background: "#050811", color: "white" }}>

                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="340"
                                image={value.Images}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {value.Title}
                                </Typography>
                                <Typography variant="body2" color="white">
                                    Released on {value.Released}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Add to List</Button>
                                <Link size="small" to='/moviedetail' onClick={() => movieDetailShow(value.imdbID)}>Read More</Link>
                            </CardActions>
                        </Card>
                    </div>
                }) : paginatedMovies.map((value) => {
                    return <div className="movie-links">

                        <Card sx={{ maxWidth: 345, maxHeight: 650, marginTop: '2rem', background: "#050811", color: "white" }}>

                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="340"
                                image={value.Images}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {value.Title}
                                </Typography>
                                <Typography variant="body2" color="white">
                                    Released on {value.Released}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Add to List</Button>
                                <Link size="small" to='/moviedetail' onClick={() => movieDetailShow(value.imdbID)}>Read More</Link>
                            </CardActions>
                        </Card>
                    </div>
                })}
                <div className="container d-flex justify-content-center">
                    <ul className="pagination">
                        {pages.map((value) => {
                            return (
                                <li
                                    className={
                                        selectedPage === value ? "page-item active " : "page-item "
                                    }
                                >
                                    <button
                                        style={{ cursor: "pointer", marginLeft: "1rem", background: "#050811" }}
                                        className="page-link"
                                        onClick={() => selectedPageNumber(value)}
                                    >
                                        {value}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

