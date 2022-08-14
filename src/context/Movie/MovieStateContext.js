import { useState, useEffect } from "react";
import movieContext from "./movieContext";




const MovieStateContext = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState([])
    const [serachDataShow, setSearchDataShow] = useState([])
    const [searchData, setSearchData] = useState('')
    const [selectGenre, setSelectGenre] = useState('All movies')
    const [selectedPage, setSelectedPage] = useState(1);
    const [sortMovieAsc, setSortMovieAsc] = useState('Asc')
    const [showModal, setShowModal] = useState({
        isVisible: false,
        userId: null
    })
    const [isCheckedConfirm, setIsCheckedConfirm] = useState(false)
    const [searchBarShow, setSearchBarShow] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const pageSize = 3

    const fetchData = async () => {
        const response = await fetch('all.json')
        const userData = await response.json()
        setData(userData)


    }
    const handleOnChange = (value) => {
        setIsAuthenticated(value)
    }


    useEffect(() => {
        fetchData()

    }, [])
    const filterMovies = selectGenre === 'All movies' ? data : data.filter((movie) => {
        return movie.Genre === selectGenre ? true : false
    })

    const newSerachData = (serachValue) => {
        setSearchData(serachValue)
        if (searchData !== '') {
            const searchFilterMovies = filterMovies.filter((movie) => {
                return movie.Title.toLowerCase().startsWith(searchData.toLowerCase())
            })
            setSearchDataShow(searchFilterMovies)
        } else {
            setSearchDataShow(data)
        }

    }


    const handleSelectedGenre = (genre) => {
        setSelectGenre(genre)
    }
    const deleteItem = (id) => {
        const deleteData = data.filter((val) => {
            return showModal.userId !== val.imdbID

        })
        setData(deleteData)
        setShowModal({
            isVisible: false
        })



    }
    const closeModal = () => {
        setShowModal({
            isVisible: false
        })
    }
    const getPages = () => {
        const pagesItem = Math.ceil(filterMovies.length / pageSize)
        const pages = []
        for (let i = 1; i <= pagesItem; i++) {
            pages.push(i)

        }

        return pages
    }

    const pages = getPages();

    const startIndex = selectedPage * pageSize - pageSize;
    const endIndex = selectedPage * pageSize - 1;

    const paginatedMovies = filterMovies.filter((_movie, index) => {
        if (index >= startIndex && index <= endIndex) {
            return true;
        }

        return false;
    });
    const selectedPageNumber = (pageNumber) => {
        setSelectedPage(pageNumber);
    };

    const sortMovies = (number) => {
        sortMovieAsc === 'Asc' ? setSortMovieAsc('Dsc') : setSortMovieAsc('Asc')
        sortNewMovies(sortMovieAsc, number)
    }
    const sortNewMovies = (sortMovieAsc, number) => {
        if (number === 'title') {
            sortMovieAsc === 'Asc' ? filterMovies.sort((preValue, nextValue) =>
                preValue.Title > nextValue.Title ? 1 : -1
            ) : filterMovies.sort((preValue, nextValue) =>
                preValue.Title < nextValue.Title ? 1 : -1
            )
            return
        } else if (number === 'genre') {
            sortMovieAsc === 'Asc' ? filterMovies.sort((preValue, nextValue) =>
                preValue.Genre > nextValue.Genre ? 1 : -1
            ) : filterMovies.sort((preValue, nextValue) =>
                preValue.Genre < nextValue.Genre ? 1 : -1
            )
            return
        } else if (number === 'stock') {
            sortMovieAsc === 'Asc' ? filterMovies.sort((preValue, nextValue) =>
                preValue.Released > nextValue.Released ? 1 : -1
            ) : filterMovies.sort((preValue, nextValue) =>
                preValue.Released < nextValue.Released ? 1 : -1
            )
            return
        }
        else if (number === 'rate') {
            sortMovieAsc === 'Asc' ? filterMovies.sort((preValue, nextValue) =>
                preValue.Country > nextValue.Country ? 1 : -1
            ) : filterMovies.sort((preValue, nextValue) =>
                preValue.Country < nextValue.Country ? 1 : -1
            )
            return
        }
    }
    const showModalOnClick = (id) => {
        if (!isCheckedConfirm) {
            setShowModal({
                isVisible: true,
                userId: id
            })
            return
        }
        const deleteData = data.filter((val) => {
            return id !== val.imdbID

        })
        setData(deleteData)
        setShowModal({
            isVisible: false
        })

    }
    const boxChecked = (e) => {
        if (e.target.checked) {
            setIsCheckedConfirm(true);

        }

    }


    const movieDetailShow = (id) => {
        const searchFilterMovies = filterMovies.filter((movie) => {
            return movie.imdbID === id
        })
        setSearchDataShow(searchFilterMovies)
        setSearchBarShow(true)


    }
    const setSearchBarShowOnNav = () => {
        setSearchBarShow(false)
    }
    return (
        <movieContext.Provider value={{ data, fetchData, filterMovies, handleSelectedGenre, selectGenre, setData, pages, paginatedMovies, selectedPageNumber, selectedPage, deleteItem, sortMovies, sortMovieAsc, showModal, showModalOnClick, setShowModal, closeModal, boxChecked, isCheckedConfirm, newSerachData, searchData, serachDataShow, movieDetailShow, searchBarShow, setSearchBarShow, setSearchBarShowOnNav, isAuthenticated, handleOnChange }}>{props.children}</movieContext.Provider>
    )
}

export default MovieStateContext






