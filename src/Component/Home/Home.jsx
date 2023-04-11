import React from 'react'
import Footer from '../Footer';
import Header from '../Header';
import PageLoader from '../PageLoader';
import Ticket_Search from '../Ticket_Search';
import { useState } from 'react';
import axios from 'axios';

// import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

  const [moviename, setmoviename] = useState([]);
  const [viewlike, setviewlike] = useState([]);
  const [rating, setrating] = useState([]);
  const [eventname, seteventname] = useState([]);
  const [date, setdate] = useState([]);
  const [address, setaddress] = useState([]);
  const [month, setmonth] = useState([]);
  const [sportname, setsportname] = useState([]);
  const [description, setdescription] = useState([]);

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

  axios.get('http://localhost:2000/sportdata', {

  })
    .then(function (response) {
      // handle success
      console.log(response.data.data);
      setsportname(response.data.data);
      // window.location.href = "/Login"
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  return (
    <div>
      <Header />
      {/* <PageLoader /> */}

      {/* ==========Overlay========== */}
      <div className="overlay" />
      <a href="#0" className="scrollToTop">
        <i className="fas fa-angle-up" />
      </a>
      {/* ==========Overlay========== */}

      {/* ==========Banner-Section========== */}
      <section className="banner-section">
        <div className="banner-bg bg_img bg-fixed" data-background="assets/images/banner/banner01.jpg" />
        <div className="container">
          <div className="banner-content">
            <h1 className="title  cd-headline clip"><span className="d-block">book your</span> tickets for
              <span className="color-theme cd-words-wrapper p-0 m-0">
                <b className="is-visible">Movie</b>
                <b>Event</b>
                <b>Sport</b>
              </span>
            </h1>
            <p>Safe, secure, reliable ticketing.Your ticket to live entertainment!</p>
          </div>
        </div>
      </section>
      {/* ==========Banner-Section========== */}

      <Ticket_Search />

      {/* ==========Movie-Main-Section========== */}
      <section className="movie-section padding-top padding-bottom bg-two">
        <div className="container">
          <div className="row flex-wrap-reverse justify-content-center">
            <div className="col-lg-3 col-sm-10  mt-50 mt-lg-0">
              <div className="widget-1 widget-facility">
                <div className="widget-1-body">
                  <ul>
                    <li>
                      <a href="#0">
                        <span className="img"><img src="assets/images/sidebar/icons/sidebar01.png" alt="sidebar" /></span>
                        <span className="cate">24X7 Care</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <span className="img"><img src="assets/images/sidebar/icons/sidebar02.png" alt="sidebar" /></span>
                        <span className="cate">100% Assurance</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <span className="img"><img src="assets/images/sidebar/icons/sidebar03.png" alt="sidebar" /></span>
                        <span className="cate">Our Promise</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget-1 widget-banner">
                <div className="widget-1-body">
                  <a href="#0">
                    <img src="assets/images/sidebar/banner/banner01.jpg" alt="banner" />
                  </a>
                </div>
              </div>
              <div className="widget-1 widget-trending-search">
                <h3 className="title">Trending Searches</h3>
                <div className="widget-1-body">
                  <ul>
                    <li>
                      <h6 className="sub-title">
                        <a href="#0">mars</a>
                      </h6>
                      <p>Movies</p>
                    </li>
                    <li>
                      <h6 className="sub-title">
                        <a href="#0">alone</a>
                      </h6>
                      <p>Movies</p>
                    </li>
                    <li>
                      <h6 className="sub-title">
                        <a href="#0">music event</a>
                      </h6>
                      <p>event</p>
                    </li>
                    <li>
                      <h6 className="sub-title">
                        <a href="#0">NBA Games 2020</a>
                      </h6>
                      <p>Sports</p>
                    </li>
                  </ul>
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
            <div className="col-lg-9">
              <div className="article-section padding-bottom">
                <div className="section-header-1">
                  <h2 className="title">movies</h2>
                  <a className="view-all" href="Movies_Grid">View All</a>
                </div>
                <div className="row mb-30-none justify-content-center">
                  {moviename.map((value) => {
                    return (
                      <>
                        <div className="col-sm-6 col-lg-4">
                          <div className="movie-grid">
                            <div className="movie-thumb c-thumb">
                              <a href="#0">
                                <img src="assets/images/movie/movie01.jpg" alt="movie" />
                              </a>
                            </div>
                            <div className="movie-content bg-one">
                              <h5 className="title m-0">
                                <a href="#0">{value.moviename}</a>
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
              <div className="article-section padding-bottom">
                <div className="section-header-1">
                  <h2 className="title">events</h2>
                  <a className="view-all" href="Events">View All</a>
                </div>
                <div className="row mb-30-none justify-content-center">
                  {eventname.map((value) => {
                    return (
                      <>

                        <div className="col-sm-6 col-lg-4">
                          <div className="event-grid">
                            <div className="movie-thumb c-thumb">
                              <a href="#0">
                                <img src="assets/images/event/event01.jpg" alt="event" />
                              </a>
                              <div className="event-date">
                                <h6 className="date-title">{value.date}</h6>
                                <span>{value.month}</span>
                              </div>
                            </div>
                            <div className="movie-content bg-one">
                              <h5 className="title m-0">
                                <a href="#0">{value.eventname}</a>
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



                </div>
              </div>
              <div className="article-section">
                <div className="section-header-1">
                  <h2 className="title">sports</h2>
                  <a className="view-all" href="Sports">View All</a>
                </div>
                <div className="row mb-30-none justify-content-center">
                  {sportname.map((value) => {
                    return (
                      <>
                        <div className="col-sm-6 col-lg-4">
                          <div className="sports-grid">
                            <div className="movie-thumb c-thumb">
                              <a href="#0">
                                <img src="assets/images/sports/sports01.jpg" alt="sports" />
                              </a>
                              <div className="event-date">
                                <h6 className="date-title">{value.date}</h6>
                                <span>{value.month}</span>
                              </div>
                            </div>
                            <div className="movie-content bg-one">
                              <h5 className="title m-0">
                                <a href="#0">{value.sportname}</a>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Movie-Main-Section========== */}

      <Footer />
    </div>
  )
}
export default Home;