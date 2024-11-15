import Slider from "react-slick";
import './index.css';
import Banner from '../../../assets/images/banner4.jpg'
import Banner2 from '../../../assets/images/banner4.jpg'
// import Button from '@mui/material/Button';
// import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Newsletter from "../../../components/newSlider";

const HomeSlider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        autoplay:2000
    };
    return (
        <section className="homeSlider">
            <div className="container-fluid position-relative" style={{ padding: "0px 42px" }}>
                <Slider {...settings} className="home_slider_Main">
                    <div className="item">
                        <img src={Banner} className="w-100" />
                        <div className="info">
                            <h2 className=" mb-4">
                                Dont miss amazing<br />
                                grocery deals
                            </h2>
                            <p>Sign up for daily newsletter</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Banner2} className="w-100" />
                        <div className="info">
                            <h2 className=" mb-4">
                                Fresh Vegetables<br />
                                Big Discount
                            </h2>
                            <p>Save up to 50% off on your first order</p>
                        </div>
                    </div>
                </Slider>
                {/* <div className="newsLetterBanner">
                    <SendOutlinedIcon />
                    <input type="text" placeholder="Your email address" />
                    <Button className="bg-g">Subscribe</Button>
                </div> */}
                <Newsletter />
            </div>
        </section>
    )
}

export default HomeSlider
