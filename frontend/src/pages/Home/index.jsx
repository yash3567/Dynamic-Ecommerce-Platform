import Banners from '../../components/banner'
import CatSlider from '../../components/catSlider'
import SliderBanner from './slider/index'
import './style.css'
import Product from '../../components/product/index'
import Banners5 from '../../assets/images/banner5.jpg'
// import Banner from '../../assets/images/banner5.jpg'
import Slider from 'react-slick'
import TopProducts from './topProducts'
import Banner6 from '../../assets/images/banner6.png'
import Newsletter from '../../components/newSlider'


const Home = () => {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 2000,
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

      <section className='homeProducts  homeProductsRow2 pt-0'>
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
            <div className="col-md-3 pr-5">
              <img src={Banners5} className='' style={{ width: "350px", height: "535px" }} />
            </div>


            <div className="col-md-9">
              <Slider {...settings} className="prodSlider">
                <div className="item">
                  <Product tag='sale' />
                </div>
                <div className="item">
                  <Product tag='hot' />
                </div>
                <div className="item">
                  <Product tag='best' />
                </div>
                <div className="item">
                  <Product tag='new ' />
                </div>
                <div className="item">
                  <Product tag='hot' />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="topProductsSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProducts title='Top Selling' />
            </div>
            <div className="col">
              <TopProducts title='Trending Products' />
            </div>
            <div className="col">
              <TopProducts title='Recently addedd' />
            </div>
            <div className="col">
              <TopProducts title='Top Rated' />
            </div>

          </div>
        </div>
      </section>


      <section className="newsLetterSection">
        <div className="container-fluid" style={{ padding: "0px 42px" }}>
          <div className="box d-flex align-items-center">
            <div className="info">
              <h2>Stay home & get your daily <br /> needs from our shop</h2>
              <p>start You'r Daily Shopping with Next Mart</p>
              <br /><br />
              <Newsletter />
            </div>


            <div className="img">
              <img src={Banner6} className='w-100' />
            </div>

          </div>
        </div>
      </section>

      <br /><br /><br /><br /><br /><br /><br /><br />

    </>

  )
}

export default Home
