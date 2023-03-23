import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import PageLoader from '../PageLoader'
import Ticket_Search from '../Ticket_Search'

const Sports = () => {
    return (
        <>
            {/* <PageLoader/> */}
            <Header />
            {/* ==========Banner-Section========== */}
            <section className="banner-section">
                <div className="banner-bg bg_img" data-background="assets/images/banner/banner08.jpg" />
                <div className="container">
                    <div className="banner-content event-content">
                        <h1 className="title bold">get <span className="color-theme">sports</span> tickets</h1>
                        <p>Buy match tickets in advance, find event times and much more</p>
                    </div>
                </div>
            </section>
            {/* ==========Banner-Section========== */}
            {/* ==========Ticket-Search========== */}
            <section className="search-ticket-section padding-top pt-lg-0">
                <div className="container">
                    <div className="search-tab bg_img" data-background="assets/images/ticket/ticket-bg01.jpg">
                        <div className="row align-items-center mb--20">
                            <div className="col-lg-6 mb-20">
                                <div className="search-ticket-header">
                                    <h6 className="category">welcome to Boleto</h6>
                                    <h3 className="title">what are you looking for</h3>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-20">
                                <ul className="tab-menu ticket-tab-menu">
                                    <li>
                                        <div className="tab-thumb">
                                            <img src="assets/images/ticket/ticket-tab01.png" alt="ticket" />
                                        </div>
                                        <span>movie</span>
                                    </li>
                                    <li>
                                        <div className="tab-thumb">
                                            <img src="assets/images/ticket/ticket-tab02.png" alt="ticket" />
                                        </div>
                                        <span>events</span>
                                    </li>
                                    <li className="active">
                                        <div className="tab-thumb">
                                            <img src="assets/images/ticket/ticket-tab03.png" alt="ticket" />
                                        </div>
                                        <span>sports</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-area">
                            <div className="tab-item">
                                <form className="ticket-search-form">
                                    <div className="form-group large">
                                        <input type="text" placeholder="Search fo Movies" />
                                        <button type="submit"><i className="fas fa-search" /></button>
                                    </div>
                                    <div className="form-group">
                                        <div className="thumb">
                                            <img src="assets/images/ticket/city.png" alt="ticket" />
                                        </div>
                                        <span className="type">city</span>
                                        <select className="select-bar">
                                            <option value="london">London</option>
                                            <option value="dhaka">dhaka</option>
                                            <option value="rosario">rosario</option>
                                            <option value="madrid">madrid</option>
                                            <option value="koltaka">kolkata</option>
                                            <option value="rome">rome</option>
                                            <option value="khoksa">khoksa</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <div className="thumb">
                                            <img src="assets/images/ticket/date.png" alt="ticket" />
                                        </div>
                                        <span className="type">date</span>
                                        <select className="select-bar">
                                            <option value="26-12-19">23/10/2020</option>
                                            <option value="26-12-19">24/10/2020</option>
                                            <option value="26-12-19">25/10/2020</option>
                                            <option value="26-12-19">26/10/2020</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <div className="thumb">
                                            <img src="assets/images/ticket/cinema.png" alt="ticket" />
                                        </div>
                                        <span className="type">cinema</span>
                                        <select className="select-bar">
                                            <option value="Awaken">Awaken</option>
                                            <option value="dhaka">dhaka</option>
                                            <option value="rosario">rosario</option>
                                            <option value="madrid">madrid</option>
                                            <option value="koltaka">kolkata</option>
                                            <option value="rome">rome</option>
                                            <option value="khoksa">khoksa</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-item">
                                <form className="ticket-search-form">
                                    <div className="form-group large">
                                        <input type="text" placeholder="Search fo Events" />
                                        <button type="submit"><i className="fas fa-search" /></button>
                                    </div>
                                    <div className="form-group">
                                        <div className="thumb">
                                            <img src="assets/images/ticket/city.png" alt="ticket" />
                                        </div>
                                        <span className="type">city</span>
                                        <select className="select-bar">
                                            <option value="london">London</option>
                                            <option value="dhaka">dhaka</option>
                                            <option value="rosario">rosario</option>
                                            <option value="madrid">madrid</option>
                                            <option value="koltaka">kolkata</option>
                                            <option value="rome">rome</option>
                                            <option value="khoksa">khoksa</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <div className="thumb">
                                            <img src="assets/images/ticket/date.png" alt="ticket" />
                                        </div>
                                        <span className="type">date</span>
                                        <select className="select-bar">
                                            <option value="26-12-19">23/10/2020</option>
                                            <option value="26-12-19">24/10/2020</option>
                                            <option value="26-12-19">25/10/2020</option>
                                            <option value="26-12-19">26/10/2020</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <div className="thumb">
                                            <img src="assets/images/ticket/cinema.png" alt="ticket" />
                                        </div>
                                        <span className="type">event</span>
                                        <select className="select-bar">
                                            <option value="angular">angular</option>
                                            <option value="startup">startup</option>
                                            <option value="rosario">rosario</option>
                                            <option value="madrid">madrid</option>
                                            <option value="koltaka">kolkata</option>
                                            <option value="Last-First">Last-First</option>
                                            <option value="wish">wish</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-item active">
                                <form className="ticket-search-form">
                                    <div className="form-group large">
                                        <input type="text" placeholder="Search fo Sports" />
                                        <button type="submit"><i className="fas fa-search" /></button>
                                    </div>
                                    <div className="form-group">
                                        <div className="thumb">
                                            <img src="assets/images/ticket/city.png" alt="ticket" />
                                        </div>
                                        <span className="type">city</span>
                                        <select className="select-bar">
                                            <option value="london">London</option>
                                            <option value="dhaka">dhaka</option>
                                            <option value="rosario">rosario</option>
                                            <option value="madrid">madrid</option>
                                            <option value="koltaka">kolkata</option>
                                            <option value="rome">rome</option>
                                            <option value="khoksa">khoksa</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <div className="thumb">
                                            <img src="assets/images/ticket/date.png" alt="ticket" />
                                        </div>
                                        <span className="type">date</span>
                                        <select className="select-bar">
                                            <option value="26-12-19">23/10/2020</option>
                                            <option value="26-12-19">24/10/2020</option>
                                            <option value="26-12-19">25/10/2020</option>
                                            <option value="26-12-19">26/10/2020</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <div className="thumb">
                                            <img src="assets/images/ticket/cinema.png" alt="ticket" />
                                        </div>
                                        <span className="type">sports</span>
                                        <select className="select-bar">
                                            <option value="football">football</option>
                                            <option value="cricket">cricket</option>
                                            <option value="cabadi">cabadi</option>
                                            <option value="madrid">madrid</option>
                                            <option value="gadon">gadon</option>
                                            <option value="rome">rome</option>
                                            <option value="khoksa">khoksa</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==========Ticket-Search========== */}
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
                                            <input type="checkbox" name="lang" id="sp1" /><label htmlFor="sp1">all</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="sp2" /><label htmlFor="sp2">running</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="sp3" /><label htmlFor="sp3">E Sports</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="sp4" /><label htmlFor="sp4">race</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="sp5" /><label htmlFor="sp5">walking</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="sp6" /><label htmlFor="sp6">badminton</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="sp7" /><label htmlFor="sp7">table tenis</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="sp8" /><label htmlFor="sp8">football</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="sp9" /><label htmlFor="sp9">cricket</label>
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
                                <div className="row justify-content-center">
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="sports-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="sport-details.html">
                                                    <img src="assets/images/sports/sports01.jpg" alt="sports" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="sport-details.html">football league tournament</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="sports-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="sport-details.html">
                                                    <img src="assets/images/sports/sports02.jpg" alt="sports" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="sport-details.html">world cricket league 2020</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="sports-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="sport-details.html">
                                                    <img src="assets/images/sports/sports03.jpg" alt="sports" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="sport-details.html">basket ball tournament 2020</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="sports-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="sport-details.html">
                                                    <img src="assets/images/sports/sports04.jpg" alt="sports" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="sport-details.html">Football League
                                                        Tournament</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="sports-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="sport-details.html">
                                                    <img src="assets/images/sports/sports05.jpg" alt="sports" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="sport-details.html">World Basketball
                                                        League 2020</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="sports-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="sport-details.html">
                                                    <img src="assets/images/sports/sports06.jpg" alt="sports" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="sport-details.html">World Golf
                                                        League 2020</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="sports-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="sport-details.html">
                                                    <img src="assets/images/sports/sports07.jpg" alt="sports" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="sport-details.html">World Basketball
                                                        League 2020</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="sports-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="sport-details.html">
                                                    <img src="assets/images/sports/sports08.jpg" alt="sports" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="sport-details.html">World Badminton
                                                        Tournament</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="sports-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="sport-details.html">
                                                    <img src="assets/images/sports/sports09.jpg" alt="sports" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="sport-details.html">Digital Economy
                                                        Conference</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="sports-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="sport-details.html">
                                                    <img src="assets/images/sports/sports10.jpg" alt="sports" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="sport-details.html">World Football
                                                        League 2020</a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="sports-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="sport-details.html">
                                                    <img src="assets/images/sports/sports11.jpg" alt="sports" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="sport-details.html">World Bikeracing
                                                        League </a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="sports-grid">
                                            <div className="movie-thumb c-thumb">
                                                <a href="sport-details.html">
                                                    <img src="assets/images/sports/sports12.jpg" alt="sports" />
                                                </a>
                                                <div className="event-date">
                                                    <h6 className="date-title">28</h6>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <a href="sport-details.html">World Bikeracing League </a>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>327 Montague Street</span>
                                                </div>
                                            </div>
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
            {/* ==========Event-Section========== */}
            <Ticket_Search />

            <Footer />
        </>
    )
}

export default Sports