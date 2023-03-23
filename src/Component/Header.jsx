import React from 'react'

const Header = () => {
    return (
        <>
            {/* ==========Header-Section========== */}
            <header className="header-section">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <a href="/">
                                <img src="assets/images/logo/logo.png" alt="logo" />
                            </a>
                        </div>
                        <ul className="menu">
                            <li>
                                <a href="#0" className="active">Home</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="/" className="active">Home One</a>
                                    </li>
                                    <li>
                                        <a href="index-2.html">Home Two</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">movies</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="Movies_Grid">Movie Grid</a>
                                    </li>
                                    <li>
                                        <a href="Movies_List">Movie List</a>
                                    </li>
                                    <li>
                                        <a href="Movies_Detail">Movie Details</a>
                                    </li>
                                    <li>
                                        <a href="Movies_Detail">Movie Details 2</a>
                                    </li>
                                    <li>
                                        <a href="Movies_Ticketplan">Movie Ticket Plan</a>
                                    </li>
                                    <li>
                                        <a href="Movies_Seatplan">Movie Seat Plan</a>
                                    </li>
                                    <li>
                                        <a href="Movies_Checkout">Movie Checkout</a>
                                    </li>
                                    <li>
                                        <a href="Movies_Food">Movie Food</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">events</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="Events">Events</a>
                                    </li>
                                    <li>
                                        <a href="Events_Detail">Event Details</a>
                                    </li>
                                    <li>
                                        <a href="Events_Speaker">Event Speaker</a>
                                    </li>
                                    <li>
                                        <a href="Events_Ticket">Event Ticket</a>
                                    </li>
                                    <li>
                                        <a href="Events_Checkout">Event Checkout</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">sports</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="Sports">Sports</a>
                                    </li>
                                    <li>
                                        <a href="Sports_Detail">Sport Details</a>
                                    </li>
                                    <li>
                                        <a href="Sports_Ticket">Sport Ticket</a>
                                    </li>
                                    <li>
                                        <a href="Sports_Checkout">Sport Checkout</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">pages</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="Aboutus">About Us</a>
                                    </li>
                                    <li>
                                        <a href="App_Downlode">Apps Download</a>
                                    </li>
                                    <li>
                                        <a href="Signin">Sign In</a>
                                    </li>
                                    <li>
                                        <a href="Signup">Sign Up</a>
                                    </li>
                                    <li>
                                        <a href="Error404">404</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">blog</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="Blog">Blog</a>
                                    </li>
                                    <li>
                                        <a href="Blog_Detail">Blog Single</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="Contactus">contact</a>
                            </li>
                            <li className="header-button pr-0">
                                <a href="Signup">join us</a>
                            </li>
                        </ul>
                        <div className="header-bar d-lg-none">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </header>
            {/* ==========Header-Section========== */}
        </>
    )
}

export default Header;
