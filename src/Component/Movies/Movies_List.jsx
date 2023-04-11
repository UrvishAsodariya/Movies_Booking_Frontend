import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import PageLoader from '../PageLoader';
import Ticket_Search from '../Ticket_Search';
import { useState } from 'react';
import axios from 'axios';

export const Movies_List = () => {

    const [moviename, setmoviename] = useState([]);
    const [viewlike, setviewlike] = useState([]);
    const [rating, setrating] = useState([]);

    axios.get('http://localhost:2000/movieData', {

    })
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            setmoviename(response.data.data);
            // window.location.href = "/Login"
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    return (
        <>
            {/* <PageLoader/> */}
            <Header />
            {/* ==========Banner-Section========== */}
            <section className="banner-section">
                <div className="banner-bg bg_img bg-fixed" data-background="assets/images/banner/banner02.jpg" />
                <div className="container">
                    <div className="banner-content">
                        <h1 className="title bold">get <span className="color-theme">movie</span> tickets</h1>
                        <p>Buy movie tickets in advance, find movie times watch trailer, read movie reviews and much more</p>
                    </div>
                </div>
            </section>
            {/* ==========Banner-Section========== */}
            <Ticket_Search />
            {/* ==========Movie-Section========== */}
            <section className="movie-section padding-top padding-bottom">
                <div className="container">
                    <div className="row flex-wrap-reverse justify-content-center">
                        <div className="col-sm-10 col-md-8 col-lg-3">
                            <div className="widget-1 widget-banner">
                                <div className="widget-1-body">
                                    <a href="#0">
                                        <img src="assets/images/sidebar/banner/banner01.jpg" alt="banner" />
                                    </a>
                                </div>
                            </div>
                            <div className="widget-1 widget-check">
                                <div className="widget-header">
                                    <h5 className="m-title">Filter By</h5> <a href="#0" className="clear-check">Clear All</a>
                                </div>
                                <div className="widget-1-body">
                                    <h6 className="subtitle">Language</h6>
                                    <div className="check-area">
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="lang1" /><label htmlFor="lang1">Tamil</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="lang2" /><label htmlFor="lang2">Telegu</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="lang3" /><label htmlFor="lang3">Hindi</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="lang4" /><label htmlFor="lang4">English</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="lang5" /><label htmlFor="lang5">Multiple Language</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="lang6" /><label htmlFor="lang6">Gujrati</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="lang7" /><label htmlFor="lang7">Bangla</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-1 widget-check">
                                <div className="widget-1-body">
                                    <h6 className="subtitle">experience</h6>
                                    <div className="check-area">
                                        <div className="form-group">
                                            <input type="checkbox" name="mode" id="mode1" /><label htmlFor="mode1">2d</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="mode" id="mode2" /><label htmlFor="mode2">3d</label>
                                        </div>
                                    </div>
                                    <div className="add-check-area">
                                        <a href="#0">view more <i className="plus" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-1 widget-check">
                                <div className="widget-1-body">
                                    <h6 className="subtitle">genre</h6>
                                    <div className="check-area">
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre1" /><label htmlFor="genre1">thriller</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre2" /><label htmlFor="genre2">horror</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre3" /><label htmlFor="genre3">drama</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre4" /><label htmlFor="genre4">romance</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre5" /><label htmlFor="genre5">action</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre6" /><label htmlFor="genre6">comedy</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre7" /><label htmlFor="genre7">romantic</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre8" /><label htmlFor="genre8">animation</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre9" /><label htmlFor="genre9">sci-fi</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre10" /><label htmlFor="genre10">adventure</label>
                                        </div>
                                    </div>
                                    <div className="add-check-area">
                                        <a href="#0">view more <i className="plus" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-1 widget-banner">
                                <div className="widget-1-body">
                                    <a href="#0">
                                        <img src="assets/images/sidebar/banner/banner02.jpg" alt="banner" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 mb-50 mb-lg-0">
                            <div className="filter-tab tab">
                                <div className="filter-area">
                                    <div className="filter-main">
                                        <div className="left">
                                            <div className="item">
                                                <span className="show">Show :</span>
                                                <select className="select-bar">
                                                    <option value={12}>12</option>
                                                    <option value={15}>15</option>
                                                    <option value={18}>18</option>
                                                    <option value={21}>21</option>
                                                    <option value={24}>24</option>
                                                    <option value={27}>27</option>
                                                    <option value={30}>30</option>
                                                </select>
                                            </div>
                                            <div className="item">
                                                <span className="show">Sort By :</span>
                                                <select className="select-bar">
                                                    <option value="showing">now showing</option>
                                                    <option value="exclusive">exclusive</option>
                                                    <option value="trending">trending</option>
                                                    <option value="most-view">most view</option>
                                                </select>
                                            </div>
                                        </div>
                                        <ul className="grid-button tab-menu">
                                            <li>
                                                <i className="fas fa-th" />
                                            </li>
                                            <li className="active">
                                                <i className="fas fa-bars" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-area">
                                    <div className="tab-item">
                                        <div className="row mb-10 justify-content-center">
                                            {moviename.map((value) => {
                                                return (
                                                    <>

                                                        <div className="col-sm-6 col-lg-4">
                                                            <div className="movie-grid">
                                                                <div className="movie-thumb c-thumb">
                                                                    <a href="movie-details.html">
                                                                        <img src="assets/images/movie/movie01.jpg" alt="movie" />
                                                                    </a>
                                                                </div>
                                                                <div className="movie-content bg-one">
                                                                    <h5 className="title m-0">
                                                                        <a href="movie-details.html">{value.moviename}</a>
                                                                    </h5>
                                                                    <ul className="movie-rating-percent">
                                                                        <li>
                                                                            <div className="thumb">
                                                                                <img src="assets/images/movie/tomato.png" alt="movie" />
                                                                            </div>
                                                                            <span className="content">{value.viewlike}</span>
                                                                        </li>
                                                                        <li>
                                                                            <div className="thumb">
                                                                                <img src="assets/images/movie/cake.png" alt="movie" />
                                                                            </div>
                                                                            <span className="content">{value.rating}</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="tab-item active">
                                        <div className="movie-area mb-10">
                                            {moviename.map((value) => {
                                                return (
                                                    <>

                                                        <div className="movie-list">
                                                            <div className="movie-thumb c-thumb">
                                                                <a href="movie-details.html" className="w-100 bg_img h-100" data-background="assets/images/movie/movie01.jpg">
                                                                    <img className="d-sm-none" src="assets/images/movie/movie01.jpg" alt="movie" />
                                                                </a>
                                                            </div>
                                                            <div className="movie-content bg-one">
                                                                <h5 className="title">
                                                                    <a href="movie-details.html">{value.moviename}</a>
                                                                </h5>
                                                                <p className="duration">{value.time}</p>
                                                                <div className="movie-tags">
                                                                    <a href="#0">{value.type}</a>

                                                                </div>
                                                                <div className="release">
                                                                    <span>Release Date : </span> <a href="#0"> {value.date}</a>
                                                                </div>
                                                                <ul className="movie-rating-percent">
                                                                    <li>
                                                                        <div className="thumb">
                                                                            <img src="assets/images/movie/tomato.png" alt="movie" />
                                                                        </div>
                                                                        <span className="content">{value.viewlike}</span>
                                                                    </li>
                                                                    <li>
                                                                        <div className="thumb">
                                                                            <img src="assets/images/movie/cake.png" alt="movie" />
                                                                        </div>
                                                                        <span className="content">{value.rating}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="book-area">
                                                                    <div className="book-ticket">
                                                                        <div className="react-item">
                                                                            <a href="#0">
                                                                                <div className="thumb">
                                                                                    <img src="assets/images/icons/heart.png" alt="icons" />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="react-item mr-auto">
                                                                            <a href="#0">
                                                                                <div className="thumb">
                                                                                    <img src="assets/images/icons/book.png" alt="icons" />
                                                                                </div>
                                                                                <span>book ticket</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="react-item">
                                                                            <a href="#0" className="popup-video">
                                                                                <div className="thumb">
                                                                                    <img src="assets/images/icons/play-button.png" alt="icons" />
                                                                                </div>
                                                                                <span>watch trailer</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="pagination-area text-center">
                                    <a href="#0"><i className="fas fa-angle-double-left" /><span>Prev</span></a>
                                    <a href="#0">1</a>
                                    <a href="#0">2</a>
                                    <a href="#0" className="active">3</a>
                                    <a href="#0">4</a>
                                    <a href="#0">5</a>
                                    <a href="#0"><span>Next</span><i className="fas fa-angle-double-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==========Movie-Section========== */}
            <Footer />

        </>
    )
}

export default Movies_List;