import './nav.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';

const Nav = () => {
    return (
        <div className="nav d-flex align-items-center">
            <div className="container-fluid ">
                <div className="row position-relative">
                    <div className="col-sm-3 part1 d-flex align-items-center">
                        <Button className='bg-g text-white catTab' style={{ marginLeft: '30px' }}><GridViewOutlinedIcon />&nbsp;Browse All Categories<ExpandMoreIcon /></Button>
                    </div>
                    <div className="col-sm-7 part2 position-static" >
                        <nav>
                            <ul className="list list-inline mb-0">
                                <li className="list-inline-item">
                                    <Button><Link>Home</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>About</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Shop</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Vendors</Link></Button>
                                </li>
                                <li className="list-inline-item position-static">
                                    <Button><Link>Mega menu <ExpandMoreIcon /></Link></Button>
                                    <div className="dropdown_menu megaMenu" style={{ width: "100%" }}>

                                        <div className="row">
                                            <div className="col">
                                                <h4 className='text-g'>Fruits & Vegetables</h4>
                                                <ul className='mt-4 mb-0'style={{paddingLeft:"0px"}}>
                                                    <li><Link to="">Meat & Poultry</Link></li>
                                                    <li><Link to="">Fresh Vegetables</Link></li>
                                                    <li><Link to="">Herbs & Seasonings</Link></li>
                                                    <li><Link to="">Cuts & Spourts</Link></li>
                                                    <li><Link to="">exotic Fruits & Veggies</Link></li>
                                                    <li><Link to="">Packaged Produce</Link></li>

                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h4 className='text-g'>Breakfast & Dairy</h4>
                                                <ul className='mt-4 mb-0'style={{paddingLeft:"0px"}}>
                                                    <li><Link to="">Meat & Poultry</Link></li>
                                                    <li><Link to="">Fresh Vegetables</Link></li>
                                                    <li><Link to="">Herbs & Seasonings</Link></li>
                                                    <li><Link to="">Cuts & Spourts</Link></li>
                                                    <li><Link to="">exotic Fruits & Veggies</Link></li>
                                                    <li><Link to="">Packaged Produce</Link></li>

                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h4 className='text-g'>Meat & Seafood</h4>
                                                <ul className='mt-4 mb-0'style={{paddingLeft:"0px"}}>
                                                    <li><Link to="">Meat & Poultry</Link></li>
                                                    <li><Link to="">Fresh Vegetables</Link></li>
                                                    <li><Link to="">Herbs & Seasonings</Link></li>
                                                    <li><Link to="">Cuts & Spourts</Link></li>
                                                    <li><Link to="">exotic Fruits & Veggies</Link></li>
                                                    <li><Link to="">Packaged Produce</Link></li>

                                                </ul>
                                            </div>
                                            <div className="col">
                                                <img src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?cs=srgb&dl=pexels-janetrangdoan-1128678.jpg&fm=jpg" className='w-100' />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Blog</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Pages <ExpandMoreIcon /></Link></Button>
                                    <div className="dropdown_menu">
                                        <ul>
                                            <li><Button><Link to="/about">About Us</Link></Button></li>
                                            <li><Button><Link to="/about">Contact</Link></Button></li>
                                            <li><Button><Link to="/about">My Account</Link></Button></li>
                                            <li><Button><Link to="/about">Login</Link></Button></li>
                                            <li><Button><Link to="/about">Register</Link></Button></li>
                                            <li><Button><Link to="/about">Forgot Password</Link></Button></li>
                                            <li><Button><Link to="/about">Reset Password</Link></Button></li>
                                            <li><Button><Link to="/about">Purchase Guide</Link></Button></li>
                                            <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                                            <li><Button><Link to="/about">Terms Of Services</Link></Button></li>
                                            <li><Button><Link to="/about">404 Page</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Contact</Link></Button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-sm-2 part3 d-flex align-items-center">
                        <div className="phNo d-flex align-items-center ">
                            <span><HeadphonesOutlinedIcon style={{ marginRight: "12px", marginLeft: "3px" }} /></span>
                            <div className="info ml-3">
                                <h3 className="text-g mb-0">1900 - 888</h3>
                                <p className='mb-0' style={{ marginLeft: "3px" }}>24/7 Support Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
