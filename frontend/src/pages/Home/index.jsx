import Banners from '../../components/banner'
import CatSlider from '../../components/catSlider'
import Slider from './slider/index'
import './style.css'
import Product from '../../components/product/index'
const Home = () => {
  return (
    <>
      <Slider />
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


          <div className=" row productRow">
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
          </div>

        </div>
      </section>

    </>

  )
}

export default Home
