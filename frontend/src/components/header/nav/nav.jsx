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
                <div className="row">
                    <div className="col-sm-3 part1 d-flex align-items-center">
                        <Button className='bg-g text-white catTab' style={{ marginLeft: '30px' }}><GridViewOutlinedIcon />&nbsp;Browse All Categories<ExpandMoreIcon /></Button>
                    </div>
                    <div className="col-sm-7 part2">
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
                                <li className="list-inline-item">
                                    <Button><Link>Mego menu <ExpandMoreIcon /></Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Blog</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Pages <ExpandMoreIcon /></Link></Button>
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
