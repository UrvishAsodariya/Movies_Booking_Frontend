// import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import PageLoader from '../PageLoader'
import Ticket_Search from '../Ticket_Search'
import { useState } from 'react'
import axios from 'axios'

export const Events = () => {

    const [eventname, seteventname] = useState([]);
    const [date, setdate] = useState([]);
    const [address, setaddress] = useState([]);
    const [month, setmonth] = useState([]);

    axios.get('http://localhost:2000/eventdata', {

    })
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            seteventname(response.data.data);
            // window.location.href = "/Login"
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    return (
        <div>
            {/* <PageLoader/> */}
            <Header />
            {/* ==========Banner-Section========== */}
            <section className="banner-section">
                <div className="banner-bg bg_img" data-background="assets/images/banner/banner05.jpg" />
                <div className="container">
                    <div className="banner-content event-content">
                        <h1 className="title bold">get <span className="color-theme">events</span> tickets</h1>
                        <p>Buy event tickets in advance, find event times and much more</p>
                    </div>
                </div>
            </section>
            {/* ==========Banner-Section========== */}
            <Ticket_Search />
            {/* ==========Event-Section========== */}
            <section className="event-section padding-top padding-bottom">
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
                                    <h6 className="subtitle">categories</h6>
                                    <div className="check-area">
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="cat1" /><label htmlFor="cat1">all</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="cat2" /><label htmlFor="cat2">Screening</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="cat3" /><label htmlFor="cat3">meetings</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="cat4" /><label htmlFor="cat4">Performances</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="cat5" /><label htmlFor="cat5">workshops</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="cat6" /><label htmlFor="cat6">Exhibitions </label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="cat8" /><label htmlFor="cat8">music shows</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="cat9" /><label htmlFor="cat9">comedy shows</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="cat10" /><label htmlFor="cat10">Award shows</label>
                                        </div>
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
                            <div className="filter-tab">
                                <div className="filter-area">
                                    <div className="filter-main">
                                        <div className="left w-100 justify-content-between">
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
                                            <div className="item mr-0">
                                                <span className="show">Sort By :</span>
                                                <select className="select-bar">
                                                    <option value="showing">now showing</option>
                                                    <option value="exclusive">exclusive</option>
                                                    <option value="trending">trending</option>
                                                    <option value="most-view">most view</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-10 justify-content-center">
                                    {eventname.map((value) => {
                                        return (
                                            <>

                                                <div className="col-sm-6 col-lg-4">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="event-details.html">
                                                                <img src="assets/images/event/event01.jpg" alt="event" />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">{value.date}</h6>
                                                                <span>{value.month}</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="event-details.html">{value.eventname}</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>{value.address}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                                    {/* <div className="col-sm-6 col-lg-4">
                                        <div className="event-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="event-details.html">
                                                    <img src="assets/images/event/event02.jpg" alt="event" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="event-details.html">web design conference 2020</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="event-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="event-details.html">
                                                    <img src="assets/images/event/event03.jpg" alt="event" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="event-details.html">digital thinkers meetup</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="event-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="event-details.html">
                                                    <img src="assets/images/event/event04.jpg" alt="event" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="event-details.html">world Digital Conference</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="event-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="event-details.html">
                                                    <img src="assets/images/event/event05.jpg" alt="event" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="event-details.html">AIGA design conference</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="event-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="event-details.html">
                                                    <img src="assets/images/event/event06.jpg" alt="event" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="event-details.html">Gartner IT
                                                        Symposium/Xpo</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="event-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="event-details.html">
                                                    <img src="assets/images/event/event07.jpg" alt="event" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="event-details.html">App Design and
                                                        Development</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="event-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="event-details.html">
                                                    <img src="assets/images/event/event08.jpg" alt="event" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="event-details.html">Cyber Security
                                                        Chicago </a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="event-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="event-details.html">
                                                    <img src="assets/images/event/event09.jpg" alt="event" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="event-details.html">B2B Marketing
                                                        Exchange </a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="event-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="event-details.html">
                                                    <img src="assets/images/event/event10.jpg" alt="event" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="event-details.html">Social Media
                                                        Marketing World</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="event-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="event-details.html">
                                                    <img src="assets/images/event/event11.jpg" alt="event" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="event-details.html">Brand Marketing
                                                        Summit</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="event-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="event-details.html">
                                                    <img src="assets/images/event/event12.jpg" alt="event" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="event-details.html">Marketing Nation
                                                        Summit</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
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
            {/* ==========Event-Section========== */}

            <Footer />
        </div>
    )
}

export default Events