import { Link } from "react-router-dom"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Rating } from "@mui/material";
import QuantityBox from "../../components/quantityBox";
import './style.css'
import { Button } from '@mui/material';

const Cart = () => {



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
                                    <table className="table table-bordered ">
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
                                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg" alt="" className="w-100" />
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
                                                <td style={{ textAlign: 'center', fontWeight: '600', fontSize: '20px' }}>$2.51</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <QuantityBox />
                                                </td>
                                                <td style={{ textAlign: 'center', color: '#3bb77e', fontWeight: '600', fontSize: '20px' }}>$2.51</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <button className="btn btn-danger" style={{ padding: '5px 10px' }}><DeleteOutlineOutlinedIcon />Remove</button>
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
                                                <td style={{ textAlign: 'center', fontWeight: '600', fontSize: '20px' }}>$2.51</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <QuantityBox />
                                                </td>
                                                <td style={{ textAlign: 'center', color: '#3bb77e', fontWeight: '600', fontSize: '20px' }}>$2.51</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <button className="btn btn-danger" style={{ padding: '5px 10px' }}><DeleteOutlineOutlinedIcon />Remove</button>
                                                </td>
                                            </tr>
                                        </tbody>



                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="img">
                                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg" alt="" className="w-100" />
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
                                                <td style={{ textAlign: 'center', fontWeight: '600', fontSize: '20px' }}>$2.51</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <QuantityBox />
                                                </td>
                                                <td style={{ textAlign: 'center', color: '#3bb77e', fontWeight: '600', fontSize: '20px' }} className="">$2.51</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <button className="btn btn-danger" style={{ padding: '5px 10px' }}><DeleteOutlineOutlinedIcon />Remove</button>
                                                </td>
                                            </tr>
                                        </tbody>



                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="img">
                                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg" alt="" className="w-100" />
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
                                                <td style={{ textAlign: 'center', fontWeight: '600', fontSize: '20px' }}>$2.51</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <QuantityBox />
                                                </td>
                                                <td style={{ textAlign: 'center', color: '#3bb77e', fontWeight: '600', fontSize: '20px' }}>$2.51</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <button className="btn btn-danger" style={{ padding: '5px 10px' }}><DeleteOutlineOutlinedIcon />Remove</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-5 cartRightBox">
                            <div className="card p-4">
                                <div className="d-flex align-items-center mb-4">
                                    <h5 className="mb-0 text-Light">Subtotal</h5>
                                    <h3 className="mb-0" style={{ marginLeft: 'auto', fontWeight: 'bold' }}><span className="text-g">$12.31</span></h3>
                                </div>


                                <div className="d-flex align-items-center mb-4">
                                    <h5 className="mb-0 text-Light">Shipping</h5>
                                    <h3 className="mb-0" style={{ marginLeft: 'auto', fontWeight: 'bold' }}><span>Free</span></h3>
                                </div>


                                <div className="d-flex align-items-center mb-4">
                                    <h5 className="mb-0 text-Light">Estimate for</h5>
                                    <h3 className="mb-0" style={{ marginLeft: 'auto', fontWeight: 'bold' }}>United kingdom</h3>
                                </div>


                                <div className="d-flex align-items-center mb-4">
                                    <h5 className="mb-0 text-Light">Total</h5>
                                    <h3 className="mb-0" style={{ marginLeft: 'auto', fontWeight: 'bold' }}><span className="text-g">$12.31</span></h3>
                                </div>

                                <br />
                                <Button className='btn-g btn-lg'>Proceed To CheckOut</Button>

                            </div>
                        </div>

                    </div>

                </div>





            </section >

        </>


    )
}

export default Cart
