import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import MovieCard from './MovieCard'
function MovieList() {
    const [san, setSan] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => { setSan(json) })
    })
    console.log(san);
    return (
        <> <div className='row'>
            {san?.map((item) => {
                return (
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <img style={{ height: '400px' }} src={item.image} className="card-img-top" alt="" />
                                <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'clip' }} className="card-text">{item.title}</h5>
                                <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'clip' }} className="card-text">${item.description}</p>
                                <p className="card-text">{item.price}</p>
                                <a style={{ color: 'black' }} href="#" className="btn border">Buy Now</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
            <div style={{ backgroundColor: 'black', backgroundSize: 'cover', backgroundPosition: 'top' }}>
                <div style={{ marginTop: '80px', textAlign: 'center', height: '40%' }}>
                    <div style={{ paddingTop: '80px' }}>
                        <h1>Newsletter</h1>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores!</p>
                        <br />
                        <input type="email" placeholder="Email Address" style={{ borderRadius: '8px', width: '60%', backgroundColor: 'transparent' }} />
                        <button style={{ border: '1px', borderRadius: '8px', backgroundColor: 'green', color: 'white' }}>Subscribe</button>
                        <br />
                    </div>
                </div>
                <div className="row" style={{ justifyContent: 'center' }}>
                    <div style={{ height: '150px' }} className="col-lg-3 col-md-12 col-sm-12">
                        <img src="src/img/cms1_1.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis!</p>
                    </div>
                    <div style={{ height: '150px' }} className="col-lg-3 col-md-12 col-sm-12">
                        <img src="src/img/cms1_1.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis!</p>
                    </div>
                    <div style={{ height: '150px' }} className="col-lg-3 col-md-12 col-sm-12">
                        <img src="src/img/cms1_1.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis!</p>
                    </div>
                </div>
                <div className="row">
                    <div style={{ height: '100px' }} className="col-lg-3 col-md-12 col-sm-12">
                        <img src="src/img/logo_footer.png" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, enim!</p>
                    </div>
                    <div style={{ height: '200px' }} className="col-lg-3 col-md-12 col-sm-12">
                        <h1>Products</h1>
                        <ul>
                            <li>Strawberry</li>
                            <li>Strawberry</li>
                            <li>Strawberry</li>
                            <li>Strawberry</li>
                            <li>Strawberry</li>
                        </ul>
                    </div>
                    <div style={{ height: '200px' }} className="col-lg-3 col-md-12 col-sm-12">
                        <h1>Our Company</h1>
                        <ul>
                            <li>Services</li>
                            <li>Services</li>
                            <li>Services</li>
                            <li>Services</li>
                            <li>Services</li>
                        </ul>
                    </div>
                    <div style={{ height: '150px' }} className="col-lg-3 col-md-12 col-sm-12">
                        <h1>Follow our Instagram</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div> </>


        // <div id="shell">
        //     <SearchBar />

        //     <div id="main">
        //         <div id="content">
        //             <div className="box">
        //                 <div className="head">
        //                     <h2>LATEST TRAILERS</h2>
        //                     <p className="text-right"><a href="#">See all</a></p>
        //                 </div>



        //                 <MovieCard />

        //                 <div className="cl">&nbsp;</div>
        //             </div>
        //             <div className="box">
        //                 <div className="head">
        //                     <h2>TOP RATED</h2>
        //                     <p className="text-right"><a href="#">See all</a></p>
        //                 </div>
        //                 <div className="movie">
        //                     <div className="movie-image"> <span className="play"><span className="name">TRANSFORMERS</span></span> <a href="#"><img src="css/images/movie7.jpg" alt="" /></a> </div>
        //                     <div className="rating">
        //                         <p>RATING</p>
        //                         <div className="stars">
        //                             <div className="stars-in"> </div>
        //                         </div>
        //                         <span className="comments">12</span> </div>
        //                 </div>
        //                 <div className="movie">
        //                     <div className="movie-image"> <span className="play"><span className="name">MAGNETO</span></span> <a href="#"><img src="css/images/movie8.jpg" alt="" /></a> </div>
        //                     <div className="rating">
        //                         <p>RATING</p>
        //                         <div className="stars">
        //                             <div className="stars-in"> </div>
        //                         </div>
        //                         <span className="comments">12</span> </div>
        //                 </div>
        //                 <div className="movie">
        //                     <div className="movie-image"> <span className="play"><span className="name">KUNG FU PANDA</span></span> <a href="#"><img src="css/images/movie9.jpg" alt="" /></a> </div>
        //                     <div className="rating">
        //                         <p>RATING</p>
        //                         <div className="stars">
        //                             <div className="stars-in"> </div>
        //                         </div>
        //                         <span className="comments">12</span> </div>
        //                 </div>
        //                 <div className="movie">
        //                     <div className="movie-image"> <span className="play"><span className="name">EAGLE EYE</span></span> <a href="#"><img src="../images/movie10.jpg" alt="" /></a> </div>
        //                     <div className="rating">
        //                         <p>RATING</p>
        //                         <div className="stars">
        //                             <div className="stars-in"> </div>
        //                         </div>
        //                         <span className="comments">12</span> </div>
        //                 </div>
        //                 <div className="movie">
        //                     <div className="movie-image"> <span className="play"><span className="name">NARNIA</span></span> <a href="#"><img src="css/images/movie11.jpg" alt="" /></a> </div>
        //                     <div className="rating">
        //                         <p>RATING</p>
        //                         <div className="stars">
        //                             <div className="stars-in"> </div>
        //                         </div>
        //                         <span className="comments">12</span> </div>
        //                 </div>
        //                 <div className="movie last">
        //                     <div className="movie-image"> <span className="play"><span className="name">ANGELS &amp; DEMONS</span></span> <a href="#"><img src="css/images/movie12.jpg" alt="" /></a> </div>
        //                     <div className="rating">
        //                         <p>RATING</p>
        //                         <div className="stars">
        //                             <div className="stars-in"> </div>
        //                         </div>
        //                         <span className="comments">12</span> </div>
        //                 </div>
        //                 <div className="cl">&nbsp;</div>
        //             </div>
        //             <div className="box">
        //                 <div className="head">
        //                     <h2>MOST COMMENTED</h2>
        //                     <p className="text-right"><a href="#">See all</a></p>
        //                 </div>
        //                 <div className="movie">
        //                     <div className="movie-image"> <span className="play"><span className="name">HOUSE</span></span> <a href="#"><img src="css/images/movie13.jpg" alt="" /></a> </div>
        //                     <div className="rating">
        //                         <p>RATING</p>
        //                         <div className="stars">
        //                             <div className="stars-in"> </div>
        //                         </div>
        //                         <span className="comments">12</span> </div>
        //                 </div>
        //                 <div className="movie">
        //                     <div className="movie-image"> <span className="play"><span className="name">VACANCY</span></span> <a href="#"><img src="css/images/movie14.jpg" alt="" /></a> </div>
        //                     <div className="rating">
        //                         <p>RATING</p>
        //                         <div className="stars">
        //                             <div className="stars-in"> </div>
        //                         </div>
        //                         <span className="comments">12</span> </div>
        //                 </div>
        //                 <div className="movie">
        //                     <div className="movie-image"> <span className="play"><span className="name">MIRRORS</span></span> <a href="#"><img src="css/images/movie15.jpg" alt="" /></a> </div>
        //                     <div className="rating">
        //                         <p>RATING</p>
        //                         <div className="stars">
        //                             <div className="stars-in"> </div>
        //                         </div>
        //                         <span className="comments">12</span> </div>
        //                 </div>
        //                 <div className="movie">
        //                     <div className="movie-image"> <span className="play"><span className="name">THE KINGDOM</span></span> <a href="#"><img src="css/images/movie16.jpg" alt="" /></a> </div>
        //                     <div className="rating">
        //                         <p>RATING</p>
        //                         <div className="stars">
        //                             <div className="stars-in"> </div>
        //                         </div>
        //                         <span className="comments">12</span> </div>
        //                 </div>
        //                 <div className="movie">
        //                     <div className="movie-image"> <span className="play"><span className="name">MOTIVES</span></span> <a href="#"><img src="css/images/movie17.jpg" alt="" /></a> </div>
        //                     <div className="rating">
        //                         <p>RATING</p>
        //                         <div className="stars">
        //                             <div className="stars-in"> </div>
        //                         </div>
        //                         <span className="comments">12</span> </div>
        //                 </div>
        //                 <div className="movie last">
        //                     <div className="movie-image"> <span className="play"><span className="name">THE PRESTIGE</span></span> <a href="#"><img src="css/images/movie18.jpg" alt="" /></a> </div>
        //                     <div className="rating">
        //                         <p>RATING</p>
        //                         <div className="stars">
        //                             <div className="stars-in"> </div>
        //                         </div>
        //                         <span className="comments">12</span> </div>
        //                 </div>
        //                 <div className="cl">&nbsp;</div>
        //             </div>
        //         </div>
        //         <div id="news">
        //             <div className="head">
        //                 <h3>NEWS</h3>
        //                 <p className="text-right"><a href="#">See all</a></p>
        //             </div>
        //             <div className="content">
        //                 <p className="date">12.04.09</p>
        //                 <h4>Disney's A Christmas Carol</h4>
        //                 <p>"Disney's A Christmas Carol," a multi-sensory thrill ride re-envisioned by Academy Award®-winning filmmaker Robert Zemeckis, captures... </p>
        //                 <a href="#">Read more</a> </div>
        //             <div className="content">
        //                 <p className="date">11.04.09</p>
        //                 <h4>Where the Wild Things Are</h4>
        //                 <p>Innovative director Spike Jonze collaborates with celebrated author Maurice Sendak to bring one of the most beloved books of all time to the big screen in "Where the Wild Things Are,"...</p>
        //                 <a href="#">Read more</a> </div>
        //             <div className="content">
        //                 <p className="date">10.04.09</p>
        //                 <h4>The Box</h4>
        //                 <p>Norma and Arthur Lewis are a suburban couple with a young child who receive an anonymous gift bearing fatal and irrevocable consequences.</p>
        //                 <a href="#">Read more</a> </div>
        //         </div>
        //         <div id="coming">
        //             <div className="head">
        //                 <h3>COMING SOON<strong>!</strong></h3>
        //                 <p className="text-right"><a href="#">See all</a></p>
        //             </div>
        //             <div className="content">
        //                 <h4>The Princess and the Frog </h4>
        //                 <a href="#"><img src="css/images/coming-soon1.jpg" alt="" /></a>
        //                 <p>Walt Disney Animation Studios presents the musical "The Princess and the Frog," an animated comedy set in the great city of New Orleans...</p>
        //                 <a href="#">Read more</a> </div>
        //             <div className="cl">&nbsp;</div>
        //             <div className="content">
        //                 <h4>The Princess and the Frog </h4>
        //                 <a href="#"><img src="css/images/coming-soon2.jpg" alt="" /></a>
        //                 <p>Walt Disney Animation Studios presents the musical "The Princess and the Frog," an animated comedy set in the great city of New Orleans...</p>
        //                 <a href="#">Read more</a> </div>
        //         </div>
        //         <div className="cl">&nbsp;</div>
        //     </div>
        //     <div id="footer">
        //         <p className="lf">Copyright © 2010 <a href="#">SiteName</a> - All Rights Reserved</p>
        //         <p className="rf">Design by <a href="http://chocotemplates.com/">ChocoTemplates.com</a></p>
        //         <div style={{ clear: 'both' }} />
        //     </div>
        // </div>

    )
}


export default MovieList
