import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import PageLoader from '../PageLoader'

const Sports_Detail = () => {
    return (
        <>
            {/* <PageLoader/> */}
            <Header />
                {/* ==========Event-Banner-Section========== */}
                <section className="event-banner-section bg_img" data-background="assets/images/banner/banner09.jpg">
                    <div className="container">
                        <div className="event-banner">
                            <a href="https://www.youtube.com/embed/GT6-H4BRyqQ" className="video-popup">
                                <span />
                                <i className="flaticon-play-button" />
                            </a>
                        </div>
                    </div>
                </section>
                {/* ==========Event-Banner-Section========== */}
                {/* ==========Event-Book-Search========== */}
                <section className="event-book-search padding-top pt-lg-0">
                    <div className="container">
                        <div className="event-search bg_img" data-background="assets/images/ticket/ticket-bg01.jpg">
                            <div className="event-search-top">
                                <div className="left">
                                    <h3 className="title">football league tournament</h3>
                                </div>
                                <div className="right">
                                    <ul className="countdown">
                                        <li>
                                            <h2><span className="days">00</span></h2>
                                            <p className="days_text">days</p>
                                        </li>
                                        <li>
                                            <h2><span className="hours">00</span></h2>
                                            <p className="hours_text">hrs</p>
                                        </li>
                                        <li>
                                            <h2><span className="minutes">00</span></h2>
                                            <p className="minu_text">min</p>
                                        </li>
                                        <li>
                                            <h2><span className="seconds">00</span></h2>
                                            <p className="seco_text">sec</p>
                                        </li>
                                    </ul>
                                    <a href="sports-checkout.html" className="custom-button">book tickets</a>
                                </div>
                            </div>
                            <div className="event-search-bottom">
                                <div className="contact-side justify-content-start">
                                    <div className="item">
                                        <div className="item-thumb">
                                            <img src="assets/images/event/icon/event-icon02.png" alt="event" />
                                        </div>
                                        <div className="item-content">
                                            <span className="up">17 South Sherman Street</span>
                                            <span>Astoria, NY 11106</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item-thumb">
                                            <img src="assets/images/event/icon/event-icon03.png" alt="event" />
                                        </div>
                                        <div className="item-content">
                                            <span className="up">Drop us a line:</span>
                                            <a href="MailTo:hello@Boleto.com"><span className="__cf_email__" data-cfemail="48202d242427080a27242d3c27662b2725">[email&nbsp;protected]</span></a>
                                        </div>
                                    </div>
                                </div>
                                <ul className="social-icons">
                                    <li>
                                        <a href="#0">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0" className>
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0" className="active">
                                            <i className="fab fa-pinterest-p" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0" className>
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
                        </div>
                    </div>
                </section>
                {/* ==========Event-Book-Search========== */}
                {/* ==========Event-About========== */}
                <section className="event-about padding-top padding-bottom">
                    <div className="container">
                        <div className="row justify-content-between flex-wrap-reverse">
                            <div className="col-lg-7 col-xl-6">
                                <div className="event-about-content">
                                    <div className="section-header-3 left-style m-0">
                                        <span className="cate">are you ready to attend?</span>
                                        <h2 className="title">football league tournament</h2>
                                        <p>Morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, tristique senectus et netus et malesuada fames ac turpis egestas ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Aenean ultricies mi vitae est. Mauris Eonec eu ribero sit amet quam egestas semper. Aenean are ultricies mi senectus et netus et malesuada fames ac turpis egestas.
                                        </p>
                                        <a href="sports-checkout.html" className="custom-button">book tickets</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-7">
                                <div className="event-about-thumb">
                                    <img src="assets/images/sports/sports-about.jpg" alt="sports" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ==========Event-About========== */}
                {/* ==========Statistics-Section========== */}
                <section className="statistics-section padding-top padding-bottom bg_img pb-lg-0" data-background="assets/images/statistics/statistics-bg01.jpg">
                    <div className="container">
                        <div className="section-header-3">
                            <span className="cate">what we have done</span>
                            <h2 className="title">our recent STATISTICS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
                        </div>
                        <div className="statistics-wrapper">
                            <div className="row mb--20">
                                <div className="col-md-4">
                                    <div className="stat-item">
                                        <div className="stat-thumb">
                                            <img src="assets/images/statistics/stat01.png" alt="statistics" />
                                        </div>
                                        <div className="stat-content">
                                            <h3 className=" counter-item odometer" data-odometer-final={450} />
                                            <span className="info">Tickets Booked</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="stat-item">
                                        <div className="stat-thumb">
                                            <img src="assets/images/statistics/stat02.png" alt="statistics" />
                                        </div>
                                        <div className="stat-content">
                                            <h3 className=" counter-item odometer" data-odometer-final={500} />
                                            <span className="info">Usefull Sessions</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="stat-item">
                                        <div className="stat-thumb">
                                            <img src="assets/images/statistics/stat03.png" alt="statistics" />
                                        </div>
                                        <div className="stat-content">
                                            <h3 className=" counter-item odometer" data-odometer-final={28} />
                                            <span className="info">Talented Speakers</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ==========Statistics-Section========== */}
                {/* ==========Faq-Section========== */}
                <section className="faq-section padding-top">
                    <div className="container">
                        <div className="section-header-3">
                            <span className="cate">HOW CAN WE HELP?</span>
                            <h2 className="title">Frequently Asked Questions</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
                        </div>
                        <div className="faq-area padding-bottom">
                            <div className="faq-wrapper">
                                <div className="faq-item">
                                    <div className="faq-title">
                                        <h6 className="title">Can I Upgrade my Tickets after Placing an Order?</h6>
                                        <span className="right-icon" />
                                    </div>
                                    <div className="faq-content">
                                        <p>Being that Tickto does not own any of the tickets sold on our site, we do not have the ability to exchange or replace tickets with other inventory. </p>
                                        <p>If you would like to "upgrade" or change the location of your seats, you can relist your current tickets for sale here and purchase other tickets of your choice. </p>
                                    </div>
                                </div>
                                <div className="faq-item active open">
                                    <div className="faq-title">
                                        <h6 className="title">Why did the delivery method of my tickets change?</h6>
                                        <span className="right-icon" />
                                    </div>
                                    <div className="faq-content">
                                        <p>Being that Tickto does not own any of the tickets sold on our site, we do not have the ability to exchange or replace tickets with other inventory. </p>
                                        <p>If you would like to "upgrade" or change the location of your seats, you can relist your current tickets for sale here and purchase other tickets of your choice. </p>
                                    </div>
                                </div>
                                <div className="faq-item">
                                    <div className="faq-title">
                                        <h6 className="title">Why is there a different name printed on the tickets
                                            and will this give me problems at my event?</h6>
                                        <span className="right-icon" />
                                    </div>
                                    <div className="faq-content">
                                        <p>Being that Tickto does not own any of the tickets sold on our site, we do not have the ability to exchange or replace tickets with other inventory. </p>
                                        <p>If you would like to "upgrade" or change the location of your seats, you can relist your current tickets for sale here and purchase other tickets of your choice. </p>
                                    </div>
                                </div>
                                <div className="faq-item">
                                    <div className="faq-title">
                                        <h6 className="title">My tickets are not consecutive seats, are they still
                                            guaranteed together?</h6>
                                        <span className="right-icon" />
                                    </div>
                                    <div className="faq-content">
                                        <p>Being that Tickto does not own any of the tickets sold on our site, we do not have the ability to exchange or replace tickets with other inventory. </p>
                                        <p>If you would like to "upgrade" or change the location of your seats, you can relist your current tickets for sale here and purchase other tickets of your choice. </p>
                                    </div>
                                </div>
                                <div className="faq-item">
                                    <div className="faq-title">
                                        <h6 className="title">Why is there a different name printed on the tickets
                                            and will this give me problems at my event?</h6>
                                        <span className="right-icon" />
                                    </div>
                                    <div className="faq-content">
                                        <p>Being that Tickto does not own any of the tickets sold on our site, we do not have the ability to exchange or replace tickets with other inventory. </p>
                                        <p>If you would like to "upgrade" or change the location of your seats, you can relist your current tickets for sale here and purchase other tickets of your choice. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ==========Faq-Section========== */}
                {/* ==========Event-Section========== */}
                <section className="event-details padding-bottom padding-top">
                    <div className="container">
                        <div className="section-header-3">
                            <span className="cate">EVENT SPONSORS</span>
                            <h2 className="title">Partners &amp; Sponsors</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
                        </div>
                        <div className="tabTwo sponsor-tab">
                            <ul className="tab-menu">
                                <li className="active">
                                    Platinum Sponsors
                                </li>
                                <li>
                                    gold Sponsors
                                </li>
                                <li>
                                    silver Sponsors
                                </li>
                            </ul>
                            <div className="tab-area">
                                <div className="tab-item active">
                                    <div className="owl-theme owl-carousel sponsor-slider">
                                        <div className="sponsor-thumb">
                                            <a href="#0">
                                                <img src="assets/images/sponsor/1.png" alt="sponsor" />
                                            </a>
                                        </div>
                                        <div className="sponsor-thumb">
                                            <a href="#0">
                                                <img src="assets/images/sponsor/2.png" alt="sponsor" />
                                            </a>
                                        </div>
                                        <div className="sponsor-thumb">
                                            <a href="#0">
                                                <img src="assets/images/sponsor/3.png" alt="sponsor" />
                                            </a>
                                        </div>
                                        <div className="sponsor-thumb">
                                            <a href="#0">
                                                <img src="assets/images/sponsor/4.png" alt="sponsor" />
                                            </a>
                                        </div>
                                        <div className="sponsor-thumb">
                                            <a href="#0">
                                                <img src="assets/images/sponsor/5.png" alt="sponsor" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-item">
                                    <div className="owl-theme owl-carousel sponsor-slider">
                                        <div className="sponsor-thumb">
                                            <a href="#0">
                                                <img src="assets/images/sponsor/3.png" alt="sponsor" />
                                            </a>
                                        </div>
                                        <div className="sponsor-thumb">
                                            <a href="#0">
                                                <img src="assets/images/sponsor/4.png" alt="sponsor" />
                                            </a>
                                        </div>
                                        <div className="sponsor-thumb">
                                            <a href="#0">
                                                <img src="assets/images/sponsor/5.png" alt="sponsor" />
                                            </a>
                                        </div>
                                        <div className="sponsor-thumb">
                                            <a href="#0">
                                                <img src="assets/images/sponsor/1.png" alt="sponsor" />
                                            </a>
                                        </div>
                                        <div className="sponsor-thumb">
                                            <a href="#0">
                                                <img src="assets/images/sponsor/2.png" alt="sponsor" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-item">
                                    <div className="owl-theme owl-carousel sponsor-slider">
                                        <div className="sponsor-thumb">
                                            <a href="#0">
                                                <img src="assets/images/sponsor/3.png" alt="sponsor" />
                                            </a>
                                        </div>
                                        <div className="sponsor-thumb">
                                            <a href="#0">
                                                <img src="assets/images/sponsor/1.png" alt="sponsor" />
                                            </a>
                                        </div>
                                        <div className="sponsor-thumb">
                                            <a href="#0">
                                                <img src="assets/images/sponsor/4.png" alt="sponsor" />
                                            </a>
                                        </div>
                                        <div className="sponsor-thumb">
                                            <a href="#0">
                                                <img src="assets/images/sponsor/2.png" alt="sponsor" />
                                            </a>
                                        </div>
                                        <div className="sponsor-thumb">
                                            <a href="#0">
                                                <img src="assets/images/sponsor/5.png" alt="sponsor" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ==========Event-Section========== */}

            <Footer />
        </>
    )
}

export default Sports_Detail