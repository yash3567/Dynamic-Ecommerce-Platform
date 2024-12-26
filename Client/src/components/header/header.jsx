import '../header/header.css'
import Logo from '../../assets/images/download.jpg'
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Button from '@mui/material/Button';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Nav from './nav/nav'


const Header = () => {

    const [isOpenDropDown, setisOpenDropDown] = useState(false)
    const headerRef = useRef();

    const [categories, setcategories] = useState([
        // 'All Categories',
        ' Milk and Dairies',
        ' Clothing & Beauty',
        ' Fresh Foods',
        ' Pet Foods &Toy',
        ' Fast Food',
        ' Baking Material',
        ' Vegetables',
        ' Fresh Fruit',
        ' Bread and Juice',
        ' Milk and Dairies',
        ' Wines & Drinks',
        ' Clothing & Beauty',
        ' Fresh Seafood'

    ]);

    const countryList = [];

    useEffect(() => {
        getCountry('http://countriesnow.space/api/v0.1/countries/')
    }, []);

    const getCountry = async (url) => {
        try {

            await axios.get(url).then((res) => {
                if (res !== null) {
                    // console.log(res.data.data);
                    res.data.data.map((item, index) => {
                        countryList.push(item.country);
                    })

                }
            })
        } catch (error) {
            console.log(error.message);
        }

    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let position = window.pageYOffset;
            if (position > 100) {
                headerRef.current.classList.add("fixed");
            }
            else {
                headerRef.current.classList.remove("fixed");
            }
        })
    }, [])


    return (


        <>
            <div className="headerWrapper" ref={headerRef}>
                <header >
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-2 '>
                                <img src={Logo} />
                            </div>
                            {/* header-search start here */}
                            <div className="col-sm-5">
                                <div className="headerSearch d-flex align-items-center">
                                    <Select data={categories} placeholder={'All Categories'} icon={false} />
                                    <div className="search">
                                        <input type="text" placeholder="Search for items..." />
                                        <SearchIcon className="searchIcon cursor" />
                                    </div>
                                </div>
                            </div>
                            {/* location search box */}
                            <div className="col-sm-5 d-flex align-items-center">
                                <div className="ml-auto d-flex align-items-center">
                                    <div className="countryWrapper">
                                        <Select data={countryList} placeholder={'Your Location'} icon={<LocationOnOutlinedIcon style={{ opacity: "0.5" }} />} />
                                    </div>
                                    <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
                                        <ul className="list list-inline mb-0 headerTabs">
                                            <li className="list-inline-item">
                                                <span>
                                                    <DonutLargeOutlinedIcon className='img' />
                                                    <span className="badge bg-success rounded-circle">3</span>
                                                    Compare
                                                </span>
                                            </li>
                                            <li className="list-inline-item">
                                                <span>
                                                    <FavoriteBorderOutlinedIcon className='img' />
                                                    <span className="badge bg-success rounded-circle">3</span>
                                                    Wishlist
                                                </span>
                                            </li>
                                            <li className="list-inline-item">
                                                <span>
                                                    <ShoppingCartOutlinedIcon className='img' />
                                                    <span className="badge bg-success rounded-circle">3</span>
                                                    Cart
                                                </span>
                                            </li>
                                            <li className="list-inline-item" >

                                                <span onClick={() => setisOpenDropDown(!isOpenDropDown)}>
                                                    <PersonOutlineOutlinedIcon className='img' />
                                                    Account
                                                </span>
                                                {
                                                    isOpenDropDown !== false &&
                                                    <ul className="dropdownMenu">
                                                        <li><Button className='align-items-center'><Person2OutlinedIcon />My Account</Button></li>
                                                        <li><Button><PlaceOutlinedIcon />Order Tracking</Button></li>
                                                        <li><Button><FavoriteBorderOutlinedIcon /> My Wishlist</Button></li>
                                                        <li><Button><SettingsOutlinedIcon />Setting</Button></li>
                                                        <li><Button><LogoutOutlinedIcon />Sign out</Button></li>
                                                    </ul>
                                                }
                                            </li>
                                        </ul>
                                    </ClickAwayListener>
                                </div>
                            </div>
                        </div>
                    </div>
                </header >
                <Nav />
            </div>

            <div className="afterHeader">

            </div>
        </>

    )
}

export default Header


