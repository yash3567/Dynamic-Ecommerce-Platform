import Banners from '../../components/banner'
import CatSlider from '../../components/catSlider'
import SliderBanner from './slider/index'
import './style.css'
import Product from '../../components/product/index'
import Banners5 from '../../assets/images/banner5.jpg'
// import Banner from '../../assets/images/banner5.jpg'
import Slider from 'react-slick'


const Home = () => {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: true,
    arrows: true
  };



  return (
    <>
      <SliderBanner />
      <CatSlider />
      <Banners />

      <section className='homeProducts'>
        <div className="container-fluid" style={{ padding: "0px 42px" }}>
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="hd mb-0 mt-0">Popular Products</h2>
            <ul className="list list-inline filterTab mb-0">
              <li className="list-inline-item">
                <a className="cursor">All</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Milks & Dairies</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Coffees & Teas</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Pet Foods</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Meat</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Vegetables</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Fruits</a>
              </li>
            </ul>
          </div>


          <div className="productRow">
            <div className="item">
              <Product tag='sale' />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag='new' />
            </div>
            <div className="item">
              <Product tag='best' />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag='hot' />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag='new' />
            </div>
            <div className="item">
              <Product tag='best' />
            </div>
            <div className="item">
              <Product />
            </div>
          </div>
        </div>
      </section>

      <section className='homeProducts pt-0'>
        <div className="container-fluid" style={{ padding: "0px 42px" }}>
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
            <ul className="list list-inline filterTab mb-0">
              <li className="list-inline-item">
                <a className="cursor">Featured</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Popular</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">New added</a>
              </li>
            </ul>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-md-3">
              <img src={Banners5} className='w-100' />
            </div>

            <div className="col-md-9">
              <Slider {...settings} className="home_slider_Main">
                {/* <div className="item">
                  <img src={Banner} className="w-100" />
                  <div className="info">
                    <h2 className=" mb-4">
                      Dont miss amazing<br />
                      grocery deals
                    </h2>
                    <p>Sign up for daily newsletter</p>
                  </div>
                </div> */}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <br /><br /><br /><br /><br /><br /><br /><br />

    </>

  )
}

export default Home
