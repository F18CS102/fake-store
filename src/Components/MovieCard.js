import React, { useEffect } from 'react'
import img from '../images/movie1.jpg'

function MovieCard() {
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/157336?api_key=c60f826a7f5081d4f1d3228626cccb3e', {
            headers: {
                "accept": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjBmODI2YTdmNTA4MWQ0ZjFkMzIyODYyNmNjY2IzZSIsInN1YiI6IjY1OWViMjVjZDY1OTBiMDI1Y2IyODU2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l7E2cpxkqotTkuT6172vELxg7l6zhdUnjvV_HwEVqys"
            }
        })
            .then(res => res.json())
            .then(json => console.log(json))
    }, [])
    return (
        <div>
            <div className="movie">
                <div className="movie-image"> <span className="play"><span className="name">X-MAN</span></span> <a href="#"><img src={img} alt="" /></a> </div>
                <div className="rating">
                    <p>RATING</p>
                    <div className="stars">
                        <div className="stars-in"> </div>
                    </div>
                    <span className="comments">12</span> </div>
            </div>
        </div>
    )
}

export default MovieCard
