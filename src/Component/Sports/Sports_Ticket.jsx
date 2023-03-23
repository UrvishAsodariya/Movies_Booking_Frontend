import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import PageLoader from '../PageLoader'

const Sports_Ticket = () => {
    return (
        <>
            {/* <PageLoader/> */}
            <Header />
            {/* ==========Sports-Details-Banner========== */}
            <section className="details-banner event-details-banner hero-area bg_img seat-plan-banner style-two" data-background="assets/images/banner/banner10.jpg">
                <div className="container">
                    <div className="details-banner-wrapper">
                        <div className="details-banner-content style-two">
                            <h3 className="title"><span className="d-block">football league</span>
                                <span className="d-block">tournament</span></h3>
                            <div className="tags">
                                <span>17 South Sherman Street Astoria, NY 11106</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==========Sports-Details-Banner========== */}
            {/* ==========Page-Title========== */}
            <section className="page-title bg-one">
                <div className="container">
                    <div className="page-title-area">
                        <div className="item md-order-1">
                            <a href="#0" className="custom-button back-button">
                                <i className="flaticon-double-right-arrows-angles" />back
                            </a>
                        </div>
                        <div className="item date-item">
                            <span className="date">MON, SEP 09 2020</span>
                        </div>
                        <div className="item">
                            <h5 className="title">05:00</h5>
                            <p>Mins Left</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==========Page-Title========== */}
            {/* ==========Event-Section========== */}
            <div className="event-facility padding-bottom padding-top">
                <div className="container"><div className="section-header-3">
                    <span className="cate">simple pricing</span>
                    <h2 className="title">make an appointment</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
                </div>
                    <div className="row justify-content-center mb-30-none">
                        <div className="col-sm-6 col-md-4">
                            <div className="sports-ticket">
                                <span className="cate">best view</span>
                                <h2 className="ticket-title"><sup>$</sup>50</h2>
                                <p>Total Seats: <span>900</span></p>
                                <a href="sports-checkout.html" className="custom-button">proceed</a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="sports-ticket">
                                <span className="cate">comfort zone</span>
                                <h2 className="ticket-title"><sup>$</sup>79</h2>
                                <p>Total Seats: <span>900</span></p>
                                <a href="sports-checkout.html" className="custom-button">proceed</a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="sports-ticket">
                                <span className="cate">single tickets</span>
                                <h2 className="ticket-title"><sup>$</sup>99</h2>
                                <p>Total Seats: <span>900</span></p>
                                <a href="sports-checkout.html" className="custom-button">proceed</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Sports_Ticket
