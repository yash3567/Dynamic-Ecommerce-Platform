import { Link } from "react-router-dom"
import { useState } from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Rating } from "@mui/material";
import './style.css'

const Cart = () => {

    const [inputValue, setInputValue] = useState(1)



    const plus = () => {
        setInputValue(inputValue + 1)
    }


    const minus = () => {
        if (inputValue !== 1) {
            setInputValue(inputValue - 1)
        }
    }

    return (


        <>
            <div className="breadcrumbWrapper mb-4">
                <div className="container-fluid" style={{ padding: "0px 42px" }}>
                    <ul className="breadcrumb breadcrumb2 mb-0">
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>

                        <li>
                            Shop
                        </li>

                        <li>
                            Cart

                        </li>
                    </ul>
                </div>
            </div>



            <section className="cartSection mb-5">
                <div className="container-fluid" style={{ padding: "0px 42px" }}>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="d-flex align-items-center w-100">
                                <div className="left">
                                    <h1 className="hd mb-0">Your Cart</h1>
                                    <p>There are <span className="text-g">3</span> products in your cart</p>
                                </div>

                                <span className="clearCart d-flex align-items-center cursor" style={{ marginLeft: 'auto' }}><DeleteOutlineOutlinedIcon />Clear Cart</span>
                            </div>



                            <div className="cartWrapper mt-4">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr style={{ fontSize: '17px', textAlign: 'center' }}>
                                                <th>Product</th>
                                                <th>Unit Price</th>
                                                <th>Quantity</th>
                                                <th>Subtotal</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="img">
                                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" alt="" className="w-100" />
                                                        </div>
                                                        <div className="info" style={{ paddingLeft: '20px' }}>
                                                            <Link>
                                                                <h4 style={{ fontSize: '17px' }}>Field Roast Chao Cheese Creamy Original</h4>
                                                            </Link>
                                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                            <span className="text-Light">(4.5)</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ textAlign: 'center' }}>$2.51</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <div className="addCartSection d-flex align-items-center justify-content-center">
                                                        <div className="counterSec" style={{ display: 'flex', alignItems: 'center' }}>
                                                            <input type="number" value={inputValue} style={{ width: '50px', textAlign: 'center' }} />
                                                            <span className="arrow plus" onClick={plus} style={{ cursor: 'pointer' }}><KeyboardArrowUpOutlinedIcon /></span>
                                                            <span className="arrow minus" onClick={minus} style={{ cursor: 'pointer' }}><KeyboardArrowDownOutlinedIcon /></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ textAlign: 'center' }}>$2.51</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <button className="btn btn-danger" style={{ padding: '5px 10px' }}>Remove</button>
                                                </td>
                                            </tr>
                                        </tbody>


                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="img">
                                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" alt="" className="w-100" />
                                                        </div>
                                                        <div className="info" style={{ paddingLeft: '20px' }}>
                                                            <Link>
                                                                <h4 style={{ fontSize: '17px' }}>Field Roast Chao Cheese Creamy Original</h4>
                                                            </Link>
                                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                            <span className="text-Light">(4.5)</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ textAlign: 'center' }}>$2.51</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <div className="addCartSection d-flex align-items-center justify-content-center">
                                                        <div className="counterSec" style={{ display: 'flex', alignItems: 'center' }}>
                                                            <input type="number" value={inputValue} style={{ width: '50px', textAlign: 'center' }} />
                                                            <span className="arrow plus" onClick={plus} style={{ cursor: 'pointer' }}><KeyboardArrowUpOutlinedIcon /></span>
                                                            <span className="arrow minus" onClick={minus} style={{ cursor: 'pointer' }}><KeyboardArrowDownOutlinedIcon /></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ textAlign: 'center' }}>$2.51</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <button className="btn btn-danger" style={{ padding: '5px 10px' }}>Remove</button>
                                                </td>
                                            </tr>
                                        </tbody>



                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="img">
                                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" alt="" className="w-100" />
                                                        </div>
                                                        <div className="info" style={{ paddingLeft: '20px' }}>
                                                            <Link>
                                                            
                                                                <h4 style={{ fontSize: '17px' }}>Field Roast Chao Cheese Creamy Original</h4>
                                                            </Link>
                                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                            <span className="text-Light">(4.5)</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ textAlign: 'center' }}>$2.51</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <div className="addCartSection d-flex align-items-center justify-content-center">
                                                        <div className="counterSec" style={{ display: 'flex', alignItems: 'center' }}>
                                                            <input type="number" value={inputValue} style={{ width: '50px', textAlign: 'center' }} />
                                                            <span className="arrow plus" onClick={plus} style={{ cursor: 'pointer' }}><KeyboardArrowUpOutlinedIcon /></span>
                                                            <span className="arrow minus" onClick={minus} style={{ cursor: 'pointer' }}><KeyboardArrowDownOutlinedIcon /></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ textAlign: 'center' }}>$2.51</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <button className="btn btn-danger" style={{ padding: '5px 10px' }}>Remove</button>
                                                </td>
                                            </tr>
                                        </tbody>



                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="img">
                                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" alt="" className="w-100" />
                                                        </div>
                                                        <div className="info" style={{ paddingLeft: '20px' }}>
                                                            <Link>
                                                                <h4 style={{ fontSize: '17px' }}>Field Roast Chao Cheese Creamy Original</h4>
                                                            </Link>
                                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                            <span className="text-Light">(4.5)</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ textAlign: 'center' }}>$2.51</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <div className="addCartSection d-flex align-items-center justify-content-center">
                                                        <div className="counterSec" style={{ display: 'flex', alignItems: 'center' }}>
                                                            <input type="number" value={inputValue} style={{ width: '50px', textAlign: 'center' }} />
                                                            <span className="arrow plus" onClick={plus} style={{ cursor: 'pointer' }}><KeyboardArrowUpOutlinedIcon /></span>
                                                            <span className="arrow minus" onClick={minus} style={{ cursor: 'pointer' }}><KeyboardArrowDownOutlinedIcon /></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ textAlign: 'center' }}>$2.51</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <button className="btn btn-danger" style={{ padding: '5px 10px' }}>Remove</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="col-md-5">

                </div>
        
     

            </section >

        </>


    )
}

export default Cart
