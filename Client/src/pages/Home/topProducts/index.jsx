import './style.css'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';

const TopProducts = (props) => {
    return (
        <>
            <div className='topSelling_box' style={{ padding: "0px 33px" }}>
                <h3>{props.title}</h3>

                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link>
                            <img src="https://www.pngplay.com/wp-content/uploads/6/Banana-Vector-Transparent-PNG.png" className='w-100' />
                        </Link>
                    </div>
                    <div className="info px-3">
                        <Link to=''><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        <div className="d-flex align-items-center">
                            <span className="price text-g " style={{ fontWeight: "bold" }}>$128.58</span> <span className="oldPrice">$132.8</span>
                        </div>
                    </div>
                </div>
                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link>
                            <img src="https://www.pngplay.com/wp-content/uploads/6/Banana-Vector-Transparent-PNG.png" className='w-100' />
                        </Link>
                    </div>
                    <div className="info px-3">
                        <Link to=''><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        <div className="d-flex align-items-center">
                            <span className="price text-g " style={{ fontWeight: "bold" }}>$128.58</span> <span className="oldPrice">$132.8</span>
                        </div>
                    </div>
                </div>
                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link>
                            <img src="https://www.pngplay.com/wp-content/uploads/6/Banana-Vector-Transparent-PNG.png" className='w-100' />
                        </Link>
                    </div>
                    <div className="info px-3">
                        <Link to=''><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        <div className="d-flex align-items-center">
                            <span className="price text-g " style={{ fontWeight: "bold" }}>$128.58</span> <span className="oldPrice">$132.8</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopProducts
