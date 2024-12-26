import './footer.css'
import Icon1 from '../../assets/images/icon-1.svg'
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'
import Icon4 from '../../assets/images/icon-4.svg'
import Icon5 from '../../assets/images/icon-5.svg'
import Logo from '../../assets/images/download.jpg'
import { Link } from 'react-router-dom'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import AppStore from '../../assets/images/applestore.png'
import Google from '../../assets/images/google.png'
import PaymentImage from '../../assets/images/payment1.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Banner6 from '../../assets/images/banner6.png'
import Newsletter from '../../components/newSlider'

const Footer = () => {
    return (

        <>
            <section className="newsLetterSection">
                <div className="container-fluid" style={{ padding: "0px 42px" }}>
                    <div className="box d-flex align-items-center">
                        <div className="info">
                            <h2>Stay home & get your daily <br /> needs from our shop</h2>
                            <p>start You'r Daily Shopping with Next Mart</p>
                            <br /><br />
                            <Newsletter />
                        </div>


                        <div className="img">
                            <img src={Banner6} className='w-100' />
                        </div>

                    </div>
                </div>
            </section>

            <div className='footerWrapper'>
                <div className="footerBoxes">
                    <div className="container-fluid" style={{ padding: "0px 42px" }}>
                        <div className="row">
                            <div className="col">
                                <div className="box d-flex align-items-center w-100">
                                    <span><img src={Icon1} /></span>
                                    <div className="info">
                                        <h4>Best prices 1 offers</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="box d-flex align-items-center w-100">
                                    <span><img src={Icon2} /></span>
                                    <div className="info">
                                        <h4>Free delivery</h4>
                                        <p>24/7 amazing services</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="box d-flex align-items-center w-100">
                                    <span><img src={Icon3} /></span>
                                    <div className="info">
                                        <h4>Great daily deal</h4>
                                        <p>When you sign up</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="box d-flex align-items-center w-100">
                                    <span><img src={Icon4} /></span>
                                    <div className="info">
                                        <h4>Wide assartment</h4>
                                        <p>Mega Discounts</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="box d-flex align-items-center w-100">
                                    <span><img src={Icon5} /></span>
                                    <div className="info">
                                        <h4>Easy returns</h4>
                                        <p>Within 30days</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <footer>
                    <div className="container-fluid" style={{ padding: "0px 42px" }}>
                        <div className="row">
                            <div className="col-md-3 part1">
                                <Link to='/'><img src={Logo} /></Link>
                                <br /><br />
                                <p>Awesome grocery store webite template</p>
                                <br />

                                <p><LocationOnOutlinedIcon /><strong>Address</strong>: 5171 W Campbella Ave undefined Kent, Utah United States</p>
                                <p><HeadphonesOutlinedIcon /><strong>Call Us</strong>:(+91) - 540-025-123450</p>
                                <p><EmailOutlinedIcon /><strong>Email</strong>:sale@Nest.com</p>
                                <p><WatchLaterOutlinedIcon /><strong>Hours</strong>:10:00 - 10:00, Mon - Sat</p>

                            </div>

                            <div className="col-md-6 part2">
                                <div className="row">
                                    <div className="col">
                                        <h3>Company</h3>
                                        <ul className="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">About Us</Link></li>
                                            <li><Link to="#">Delivery Information</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Term & Condition</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                            <li><Link to="#">Support Center</Link></li>
                                            <li><Link to="#">Careers</Link></li>
                                        </ul>

                                    </div>
                                    <div className="col">
                                        <h3>Company</h3>
                                        <ul className="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">Sign In</Link></li>
                                            <li><Link to="#">View Cart</Link></li>
                                            <li><Link to="#">My Wishlist</Link></li>
                                            <li><Link to="#">Track My Order</Link></li>
                                            <li><Link to="#">Help Ticket</Link></li>
                                            <li><Link to="#">Shipping Details</Link></li>
                                            <li><Link to="#">Compare products</Link></li>
                                        </ul>

                                    </div>
                                    <div className="col">
                                        <h3>Corporate</h3>
                                        <ul className="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">Become a Vendor</Link></li>
                                            <li><Link to="#">Affiliate Program</Link></li>
                                            <li><Link to="#">Farm Careers</Link></li>
                                            <li><Link to="#">Farm Business</Link></li>
                                            <li><Link to="#">Our Supplies</Link></li>
                                            <li><Link to="#">Accessibility</Link></li>
                                            <li><Link to="#">Promotions</Link></li>
                                        </ul>

                                    </div>
                                    <div className="col">
                                        <h3>Popular</h3>
                                        <ul className="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">Milk & Flavoured Milk</Link></li>
                                            <li><Link to="#">Butter and Margarine</Link></li>
                                            <li><Link to="#">Eggs Substitutes</Link></li>
                                            <li><Link to="#">Marmalades</Link></li>
                                            <li><Link to="#">Sour Cream and Dips</Link></li>
                                            <li><Link to="#">Tea & Kombucha</Link></li>
                                            <li><Link to="#">Cheese</Link></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 part3 ">
                                <h3>Install App</h3>
                                <br />
                                <p>From App Store or Google Play</p>

                                <div className="d-flex">
                                    <Link to={''}><img src={AppStore} width={150} /></Link>
                                    <Link to={''}><img src={Google} className='mx-2' width={150} /></Link>
                                </div>

                                <br />

                                <p>Secured Payment Gateway</p>
                                <img src={PaymentImage} style={{ width: '270px' }} />
                            </div>


                        </div>
                    </div>


                    <hr />



                    <div className="row lastStrip" style={{ padding: "0px 42px" }}>
                        <div className="col-md-3">
                            <p>@ 2024, Nest - React Ecommerce Website All rights reserved</p>
                        </div>

                        <div className="col-md-6  d-flex">
                            <div className="m-auto d-flex align-items-center">
                                <div className="phNo d-flex align-items-center mx-5 ">
                                    <span><HeadphonesOutlinedIcon style={{ marginRight: "-20px", marginLeft: "3px" }} /></span>
                                    <div className="info ml-3">
                                        <h3 className="text-g mb-0">1900 - 888</h3>
                                        <p className='mb-0' style={{ marginLeft: "33px" }}>24/7 Support Center</p>
                                    </div>

                                </div>
                                <div className="phNo d-flex align-items-center mx-5 ">
                                    <span><HeadphonesOutlinedIcon style={{ marginRight: "-20px", marginLeft: "3px" }} /></span>
                                    <div className="info ml-3">
                                        <h3 className="text-g mb-0">1900 - 888</h3>
                                        <p className='mb-0' style={{ marginLeft: "33px" }}>24/7 Support Center</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 part3">
                            <div className="d-flex align-items-center">
                                <h5>Follow Us</h5>
                                <ul className="list list-inline">
                                    <li className="list-inline-item">
                                        <Link to={''}><FacebookOutlinedIcon /></Link>

                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={''}><XIcon /></Link>

                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={''}><InstagramIcon /></Link>

                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={''}><YouTubeIcon /></Link>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>


            </div>
        </>


    )
}

export default Footer
