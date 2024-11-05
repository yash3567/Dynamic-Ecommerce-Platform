import Banners from '../../components/banner'
import CatSlider from '../../components/catSlider'
import Slider from './slider/index'
import './style.css'
const Home = () => {
  return (
    <>
      <Slider />
      <CatSlider />
      <Banners />

      <section className='homeProducts'>
        <div className="container-fluid">
          <h2 className="hd">Popular Products</h2>

        </div>

      </section>
      <section className='homeProducts'>
        <div className="container-fluid">
          <h2 className="hd">Popular Products</h2>

        </div>

      </section>
    
    </>

  )
}

export default Home
