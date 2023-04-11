import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import PageLoader from '../PageLoader'
import { useState } from 'react'
import axios from 'axios'

const Blog_Detail = () => {

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
                        <h2 className="title">blog single</h2>
                        <ul className="breadcrumb">
                            <li>
                                <a href="/">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="Blog">
                                    blog
                                </a>
                            </li>
                            <li>
                                blog single
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* ==========Banner-Section========== */}
            {/* ==========Blog-Section========== */}
            <section className="blog-section padding-top padding-bottom">
                <div className="container">
                    <div className="row justify-content-center mb-30-none">
                        <div className="col-lg-8 mb-50 mb-lg-0">
                            <article>
                                {blogname.map((value) => {
                                    return (
                                        <>

                                            <div className="post-item post-details">
                                                <div className="post-thumb">
                                                    <img src="assets/images/blog/blog01.jpg" alt="blog" />
                                                </div>
                                                <div className="post-content">
                                                    <div className="post-meta text-center">
                                                        <div className="item">
                                                            <a href="#0">
                                                                <i className="flaticon-conversation" />
                                                                <span>30</span>
                                                            </a>
                                                        </div>
                                                        <div className="item">
                                                            <a href="#0">
                                                                <i className="flaticon-share-1" />
                                                                <span>22</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="entry-content p-0">
                                                            <div className="left">
                                                                <span className="date">{value.date} BY </span>
                                                            </div>
                                                        </div>
                                                        <div className="post-header">
                                                            <h4 className="m-title">
                                                                {value.blogname}
                                                            </h4>
                                                            <p>
                                                               {value.description}
                                                            </p>
                                                            <blockquote>
                                                                Modi perferendis ipsa, dolorum eaque accusantium! Velitlibero fugit dolores repellendus consequatur nisi, deserunt aperiam a ea ex hic, iusto atque, quas. Aliquam rerum dolores saepe sunt, assumenda voluptas.
                                                            </blockquote>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida. Risus do viverra maecenas accumsan lacus vel facilisis.
                                                            </p>
                                                            <h4 className="title">
                                                              {value.blogname}
                                                            </h4>
                                                            <p>
                                                              {value.description}
                                                            </p>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida. Risus do viverra maecenas accumsan lacus vel facilisis.
                                                            </p>
                                                        </div>
                                                        <div className="tags-area">
                                                            <div className="tags">
                                                                <span>
                                                                    Tags :
                                                                </span>
                                                                <div className="tags-item">
                                                                    <a href="#0"> Tickets </a>
                                                                    <a href="#0"> Coming Soon </a>
                                                                    <a href="#0"> Movies </a>
                                                                </div>
                                                            </div>
                                                            <ul className="social-icons">
                                                                <li>
                                                                    <a href="#0">
                                                                        <i className="fab fa-facebook-f" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#0" className="active">
                                                                        <i className="fab fa-twitter" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#0">
                                                                        <i className="fab fa-instagram" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#0">
                                                                        <i className="fab fa-pinterest" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#0">
                                                                        <i className="fab fa-google" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                                <div className="blog-author">
                                    <div className="author-thumb">
                                        <a href="#0">
                                            <img src="assets/images/blog/author.jpg" alt="blog" />
                                        </a>
                                    </div>
                                    <div className="author-content">
                                        <h5 className="title">
                                            <a href="#0">
                                                Lee Burke
                                            </a>
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.Quis ipsum suspendisse .
                                        </p>
                                    </div>
                                </div>
                                <div className="blog-comment">
                                    <h5 className="title">comments</h5>
                                    <ul className="comment-area">
                                        <li>
                                            <div className="blog-thumb">
                                                <a href="#0">
                                                    <img src="assets/images/blog/author.jpg" alt="blog" />
                                                </a>
                                            </div>
                                            <div className="blog-thumb-info">
                                                <span>13 days ago</span>
                                                <h6 className="title"><a href="#0">carl morgan</a></h6>
                                            </div>
                                            <div className="blog-content">
                                                <p>
                                                    Maecenas at velit eu erat egestas vestibulum id ut tellus. Sed et semper mauris. Quisque eu lorem libero. Donec finibus metus tellus, eget rutrum est mattis non.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="blog-thumb">
                                                <a href="#0">
                                                    <img src="assets/images/blog/author.jpg" alt="blog" />
                                                </a>
                                            </div>
                                            <div className="blog-thumb-info">
                                                <span>13 days ago</span>
                                                <h6 className="title"><a href="#0">john flores</a></h6>
                                            </div>
                                            <div className="blog-content">
                                                <p>
                                                    Maecenas at velit eu erat egestas vestibulum id ut tellus. Sed et semper mauris. Quisque eu lorem libero. Donec finibus metus tellus, eget rutrum est mattis non.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="blog-thumb">
                                                <a href="#0">
                                                    <img src="assets/images/blog/author.jpg" alt="blog" />
                                                </a>
                                            </div>
                                            <div className="blog-thumb-info">
                                                <span>13 days ago</span>
                                                <h6 className="title"><a href="#0">carl morgan</a></h6>
                                            </div>
                                            <div className="blog-content">
                                                <p>
                                                    Maecenas at velit eu erat egestas vestibulum id ut tellus. Sed et semper mauris. Quisque eu lorem libero. Donec finibus metus tellus, eget rutrum est mattis non.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="leave-comment">
                                        <h5 className="title">leave comment</h5>
                                        <form className="blog-form">
                                            <div className="form-group">
                                                <input type="text" placeholder="Enter Your Full Name" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" placeholder="Enter Your Email Address" required />
                                            </div>
                                            <div className="form-group">
                                                <textarea placeholder="Write A Message" required defaultValue={""} />
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" defaultValue="Submit Now" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </article>
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

export default Blog_Detail
