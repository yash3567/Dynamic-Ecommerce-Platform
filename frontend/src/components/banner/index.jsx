import './style.css';
import Banners1 from '../../assets/images/banners1.jpg';
import Banners2 from '../../assets/images/banners2.jpg';
import Banners3 from '../../assets/images/banners3.jpg';

const Banners = () => {
    return (
        <div className="bannerSection">
            <div className="container-fluid" style={{ padding: "0px 42px" }}>
                <div className="row">
                    <div className="col">
                        <div className="box">
                            <img src={Banners1} className='w-100 transition' />
                        </div>
                    </div>
                    <div className="col">
                        <div className="box">
                            <img src={Banners2} className='w-100 transition' />
                        </div>
                    </div>
                    <div className="col">
                        <div className="box">
                            <img src={Banners3} className='w-100 transition' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banners;
