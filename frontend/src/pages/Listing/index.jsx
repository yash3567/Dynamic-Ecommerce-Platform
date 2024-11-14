import { Link } from 'react-router-dom'
import Sidebar from '../../components/sidebar'
import Product from '../../components/product/index'
const Listing = () => {
  return (
    <section className="listingPage">
      <div className="container-fluid" style={{ padding: "0px 42px" }}>
        <div className="breadCrumb Flex-column">
          <h1>Snack</h1>
          <ul className="list list-inline mb-0">
            <li className="list-inline-item">
              <Link to={''}>Home</Link>
            </li>
            <li className="list-inline-item">
              <Link to={''}>Shop</Link>
            </li>
            <li className="list-inline-item">
              <Link to={''}>Snack</Link>
            </li>
          </ul>
        </div>


        <div className="listingData">
          <div className="row">
            {/* the comment is basically external css is not working for this scenario so thats  why i used inline css over here  */}
            <div className="col-md-3 sidebarWrapper" style={{ maxWidth: "90%", flex: '0 0 20%' }}>
              <Sidebar />
            </div>
            {/* the comment is basically external css is not working for this scenario so thats  why i used inline css over here  */}
            <div className="col-md-9 rightContent homeProducts pt-0" style={{ maxWidth: "80%", flex: '0 0 80%' }}>
              <div className="productRow" style={{ paddingLeft: 20}}>
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
          </div>

        </div>
      </div>
    </section>
  )
}

export default Listing
