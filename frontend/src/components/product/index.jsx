import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import './style.css'
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


const Product = () => {
    return (
        <div className="productThumb">
            <Link>
                <div className="imgWrapper">
                    <img src="https://content.optimumnutrition.com/i/on/on-50251_Image_01?$TTL_PRODUCT_IMAGES$&locale=en-au,en-gb,*" className='w-100' />
                    <div className="overlay" >
                        <ul className="list list-inline mb-0">
                            <li className="list-inline-item">
                                <a className="cursor">
                                    <FavoriteBorderOutlinedIcon />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">
                                    <CompareArrowsOutlinedIcon />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">
                                    <RemoveRedEyeOutlinedIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </Link>
            <div className="info">
                <span className="d-block catName">Gainer</span>
                <h4 className='title'><Link>Products Optimum Nutrition AU</Link></h4>
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                <span className="brand d-block text-g">By <Link className="text-g">NestFood</Link></span>
                <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="d-flex align-items-center">
                        <span className="price text-g " style={{ fontWeight: "bold" }}>$128.58</span> <span className="oldPrice">$132.8</span>
                    </div>
                    <Button className='transition'><ShoppingCartOutlinedIcon />Add</Button>

                </div>
            </div>
        </div>
    )
}

export default Product
