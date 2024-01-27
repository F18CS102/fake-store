import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Navbar from './Common/Navbar/Navbar';
import SearchBar from "material-ui-search-bar";
import Footer from './Common/Footer/Footer';
import './MovieList.css';
function MovieList() {
    const [san, setSan] = useState([])
    const [value, setValue] = useState()
    useEffect(() => {
        if (value == null && value == undefined || value == "") {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => { setSan(json) })
        }
        if (value != null && value != undefined) {
            var searchValue = san.filter(x => x.title.includes(value));
            setSan(searchValue);
        }
    }, [value]);
    console.log(san);

    return (
        <div class="shop_section layout_padding">
            <div className='container-fluid'>
                <Navbar />
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <SearchBar
                        style={{ borderRadius: '20%' }}
                        value={value}
                        onChange={(newValue) => setValue(newValue)}

                    />
                </div>

                <div className='row'>
                    {san?.map((item) => {
                        return (


                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="box">
                                    <a href="">
                                        <div className="img-box">
                                            <img src={item.image} alt="" style={{ height: '400px' }} />
                                        </div>
                                        <div className="detail-box">
                                            <h6>
                                                {item.title}
                                            </h6>
                                            <h6>
                                                Price
                                                <span>
                                                    {item.price}
                                                </span>
                                            </h6>
                                        </div>
                                        <div className="new">
                                            <span>
                                                New
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>


                        )
                    })}
                </div>
                <Footer />

            </div>
        </div>

    )
}


export default MovieList
