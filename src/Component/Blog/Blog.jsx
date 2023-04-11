import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import PageLoader from '../PageLoader'
import { useState } from 'react'
import axios from 'axios'

const Blog = () => {

    const [blogname, setblogname] = useState([]);
    const [addname, setaddname] = useState([]);
    const [date, setdate] = useState([]);
    const [view, setview] = useState([]);
    const [description, setdescription] = useState([]);

    axios.get('http://localhost:2000/blogdata', {

    })
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            setblogname(response.data.data);
            // window.location.href = "/Login"
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    return (
        <>
            {/* <PageLoader /> */}
            <Header />
            {/* ==========Banner-Section========== */}
            <section className="main-page-header speaker-banner bg_img" data-background="assets/images/banner/banner07.jpg">
                <div className="container">
                    <div className="speaker-banner-content">
                        <h2 className="title">blog - 01</h2>
                        <ul className="breadcrumb">
                            <li>
                                <a href="Home">
                                    Home
                                </a>
                            </li>
                            <li>
                                blog
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* ==========Banner-Section========== */}
            {/* ==========Blog-Section========== */}
            <section className="blog-section padding-top padding-bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 mb-50 mb-lg-0">
                            <article>
                                {blogname.map((value) => {
                                    return (
                                        <>

                                            <div className="post-item">
                                                <div className="post-thumb">
                                                    <a href="blog-details.html">
                                                        <img src="assets/images/blog/blog01.jpg" alt="blog" />
                                                    </a>
                                                </div>
                                                <div className="post-content">
                                                    <div className="post-header">
                                                        <h4 className="title">
                                                            <a href="Blog_Detail">
                                                              {value.blogname}
                                                            </a>
                                                        </h4>
                                                        <div className="meta-post">
                                                            <a href="#0" className="mr-4"><i className="flaticon-conversation" />20 Comments</a>
                                                            <a href="#0"><i className="flaticon-view" />{value.view}</a>
                                                        </div>
                                                        <p>
                                                           {value.description}
                                                        </p>
                                                    </div>
                                                    <div className="entry-content">
                                                        <div className="left">
                                                            <span className="date">{value.date} BY </span>
                                                            <div className="authors">
                                                                <div className="thumb">
                                                                    <a href="#0"><img src="assets/images/blog/author.jpg" alt="#0" /></a>
                                                                </div>
                                                                <h6 className="title"><a href="#0">{value.addname}</a></h6>
                                                            </div>
                                                        </div>
                                                        <a href="#0" className="buttons">Read More <i className="flaticon-right" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                               
                            </article>
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
                        <div className="col-lg-4 col-sm-10 col-md-8">
                            <aside>
                                <div className="widget widget-search">
                                    <h5 className="title">search</h5>
                                    <form className="search-form">
                                        <input type="text" placeholder="Enter your Search Content" required />
                                        <button type="submit"><i className="flaticon-loupe" />Search</button>
                                    </form>
                                </div>
                                <div className="widget widget-post">
                                    <h5 className="title">latest post</h5>
                                    <div className="slider-nav">
                                        <span className="flaticon-angle-pointing-to-left widget-prev" />
                                        <span className="flaticon-right-arrow-angle widget-next active" />
                                    </div>
                                    <div className="widget-slider owl-carousel owl-theme">
                                        <div className="item">
                                            <div className="thumb">
                                                <a href="#0">
                                                    <img src="assets/images/blog/slider01.jpg" alt="blog" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h6 className="p-title">
                                                    <a href="#0">Three Ways to Book Sporting Event Tickets</a>
                                                </h6>
                                                <div className="meta-post">
                                                    <a href="#0" className="mr-4"><i className="flaticon-loupe" />20 Comments</a>
                                                    <a href="#0"><i className="flaticon-loupe" />466 View</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="thumb">
                                                <a href="#0">
                                                    <img src="assets/images/blog/slider01.jpg" alt="blog" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h6 className="p-title">
                                                    <a href="#0">Three Ways to Book Sporting Event Tickets</a>
                                                </h6>
                                                <div className="meta-post">
                                                    <a href="#0" className="mr-4"><i className="flaticon-loupe" />20 Comments</a>
                                                    <a href="#0"><i className="flaticon-loupe" />466 View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget widget-follow">
                                    <h5 className="title">Follow Us</h5>
                                    <ul className="social-icons">
                                        <li>
                                            <a href="#0" className>
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0" className="active">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0" className>
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <i className="fab fa-google" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget widget-categories">
                                    <h5 className="title">categories</h5>
                                    <ul>
                                        <li>
                                            <a href="#0">
                                                <span>Showtimes &amp; Tickets</span><span>50</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <span>Latest Trailers</span><span>43</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <span>Coming Soon </span><span>34</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <span>In Theaters</span><span>63</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <span>Release Calendar</span><span>11</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <span>Stars</span><span>30</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <span>Horror Movie </span><span>55</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget widget-tags">
                                    <h5 className="title">featured tags</h5>
                                    <ul>
                                        <li>
                                            <a href="#0">creative</a>
                                        </li>
                                        <li>
                                            <a href="#0">design</a>
                                        </li>
                                        <li>
                                            <a href="#0">skill</a>
                                        </li>
                                        <li>
                                            <a href="#0">template</a>
                                        </li>
                                        <li>
                                            <a href="#0" className="active">landing</a>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==========Blog-Section========== */}

            <Footer />
        </>
    )
}

export default Blog
