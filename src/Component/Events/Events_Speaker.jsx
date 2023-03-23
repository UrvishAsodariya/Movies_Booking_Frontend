import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import PageLoader from '../PageLoader'

const Events_Speaker = () => {
    return (
        <>
            {/* <PageLoader/> */}
            <Header />
            {/* ==========Banner-Section========== */}
            <section className="speaker-banner bg_img" data-background="assets/images/banner/banner07.jpg">
                <div className="container">
                    <div className="speaker-banner-content">
                        <h2 className="title">Speaker Profile</h2>
                        <ul className="breadcrumb">
                            <li>
                                <a href="index.html">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="events.html">
                                    event
                                </a>
                            </li>
                            <li>
                                speaker profile
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* ==========Banner-Section========== */}
            {/* ==========Speaker-Single========== */}
            <section className="speaker-single padding-top pt-lg-0">
                <div className="container">
                    <div className="speaker-wrapper bg-six padding-top padding-bottom">
                        <div className="speaker-thumb">
                            <img src="assets/images/speaker/speaker05.jpg" alt="speaker" />
                            <a href="#0">www.website.com</a>
                        </div>
                        <div className="speaker-content">
                            <div className="author">
                                <h2 className="title">Kelley Valdez </h2>
                                <div className="info">Independent consultant, coach and executive coach</div>
                            </div>
                            <div className="speak-con-wrapper">
                                <div className="speak-con-area">
                                    <div className="item">
                                        <div className="item-thumb">
                                            <img src="assets/images/event/icon/event-icon03.png" alt="event" />
                                        </div>
                                        <div className="item-content">
                                            <span className="up">Drop us a line:</span>
                                            <a href="MailTo:hello@Boleto .com"><span className="__cf_email__" data-cfemail="3159545d5d5e71735e5d54455e">[email&nbsp;protected]</span> .com</a>
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
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <i className="fab fa-pinterest" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <i className="fab fa-behance" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <h3 className="subtitle">About me</h3>
                                <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                                <p>So how is any writer supposed to pen a stunning piece of advertising copy — copy that sizzles and sells? The following tips will jumpstart your creative thinking and help you write a better ad.</p>
                                <p>Consumers are inundated with ads, so it’s vital that your ad catches the eye and immediately grabs interest. You could do this with a headline or slogan (such as VW’s “Drivers Wanted” campaign), color or layout (Target’s new colorful, simple ads are a testimony to this) or illustration (such as the Red Bull characters or Zoloft’s depressed ball and his ladybug friend).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==========Speaker-Single========== */}
            {/* ==========Speaker-Section========== */}
            <section className="speaker-section padding-bottom padding-top">
                <div className="container">
                    <div className="section-header-3">
                        <span className="cate">listen to the</span>
                        <h2 className="title">event speakers</h2>
                        <p>World is committed to making participation in the event a harassment free experience for
                            everyone, regardless of level of experience, gender, gender identity and expression</p>
                    </div>
                    <div className="speaker--slider">
                        <div className="speaker-slider owl-carousel owl-theme">
                            <div className="speaker-item">
                                <div className="speaker-thumb">
                                    <a href="#0">
                                        <img src="assets/images/speaker/speaker01.jpg" alt="speaker" />
                                    </a>
                                </div>
                                <div className="speaker-content">
                                    <h5 className="title">
                                        <a href="#0">
                                            Gerard Bryan
                                        </a>
                                    </h5>
                                    <span>lead speaker</span>
                                </div>
                            </div>
                            <div className="speaker-item">
                                <div className="speaker-thumb">
                                    <a href="#0">
                                        <img src="assets/images/speaker/speaker02.jpg" alt="speaker" />
                                    </a>
                                </div>
                                <div className="speaker-content">
                                    <h5 className="title">
                                        <a href="#0">
                                            Raihan Rafuj
                                        </a>
                                    </h5>
                                    <span>lead speaker</span>
                                </div>
                            </div>
                            <div className="speaker-item">
                                <div className="speaker-thumb">
                                    <a href="#0">
                                        <img src="assets/images/speaker/speaker03.jpg" alt="speaker" />
                                    </a>
                                </div>
                                <div className="speaker-content">
                                    <h5 className="title">
                                        <a href="#0">
                                            Bela Bose
                                        </a>
                                    </h5>
                                    <span>lead speaker</span>
                                </div>
                            </div>
                            <div className="speaker-item">
                                <div className="speaker-thumb">
                                    <a href="#0">
                                        <img src="assets/images/speaker/speaker04.jpg" alt="speaker" />
                                    </a>
                                </div>
                                <div className="speaker-content">
                                    <h5 className="title">
                                        <a href="#0">
                                            Grass Hopper
                                        </a>
                                    </h5>
                                    <span>lead speaker</span>
                                </div>
                            </div>
                        </div>
                        <div className="speaker-prev">
                            <i className="flaticon-double-right-arrows-angles" />
                        </div>
                        <div className="speaker-next">
                            <i className="flaticon-double-right-arrows-angles" />
                        </div>
                    </div>
                </div>
            </section>
            {/* ==========Speaker-Section========== */}

            <Footer />
        </>
    )
}

export default Events_Speaker
