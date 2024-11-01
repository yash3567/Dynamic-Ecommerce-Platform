import './style.css'
import Slider from "react-slick";
import Photo from '../../assets/images/photo1.png'
import Photo2 from '../../assets/images/photo2.png'
import { useState } from 'react';

const CatSlider = () => {

    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f3fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec'
    ])

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    };

    return (
        <>
            <div className="catSliderSection">
                <div className="container-fluid" style={{ padding: "0px 42px" }}>
                    <h2 className="hd">Features Categories</h2>
                    <Slider {...settings} className="cat_slider_Main" id="cat_slider_Main">
                        {
                            itemBg.length !== 0 && itemBg.map((item, index) => {
                                return (
                                    <div className="item">
                                        <div className="info" style={{background:item}}>
                                            <img src={Photo2} />
                                            <h5>Cake & Milk</h5>
                                            <p>26 items</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* <div className="item">
                            <div className="info">
                                <img src={Photo} />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={Photo} />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={Photo} />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={Photo} />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={Photo} />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={Photo} />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={Photo} />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={Photo} />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={Photo} />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={Photo} />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={Photo} />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={Photo} />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={Photo} />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={Photo} />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div> */}

                    </Slider>

                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default CatSlider
