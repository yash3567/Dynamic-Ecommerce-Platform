import { Link } from 'react-router-dom'
import Sidebar from '../../components/sidebar'
import Product from '../../components/product/index'
import { Button } from '@mui/material'
import { useState } from 'react'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';





const Listing = () => {

  const [isOpenDropDown, setisOpenDropDown] = useState(false)
  const [isOpenDropDown2, setisOpenDropDown2] = useState(false)
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

              <div className="topStrip d-flex align-items-center">
                <p style={{ marginBottom: 0 }}>We found <span className="text-success">29</span> items for you!</p>
                <div className='d-flex align-items-center' style={{ marginLeft: 'auto' }}>
                  <div className="tab_ position-relative">
                    <Button className='btn_' onClick={() => setisOpenDropDown(!isOpenDropDown)}><GridViewOutlinedIcon style={{ marginRight: '6px', marginTop: '-2px' }} />Show: 50</Button>
                    {
                      isOpenDropDown !== false &&

                      <ul className="dropdownMenu">
                        <li><Button className='align-items-center' onClick={() => setisOpenDropDown(false)}>50</Button></li>
                        <li><Button className='align-items-center' onClick={() => setisOpenDropDown(false)}>100</Button></li>
                        <li><Button className='align-items-center' onClick={() => setisOpenDropDown(false)}>150</Button></li>
                        <li><Button className='align-items-center' onClick={() => setisOpenDropDown(false)}>200</Button></li>
                        <li><Button className='align-items-center' onClick={() => setisOpenDropDown(false)}>All</Button></li>
                      </ul>
                    }
                  </div>
                  <div className="tab_ position-relative " style={{ marginLeft: 15 }}>
                    <Button className='btn_' onClick={() => setisOpenDropDown2(!isOpenDropDown2)}><FilterListOutlinedIcon style={{ marginRight: '3px', marginTop: '-2px' }} />Sort by: Featured</Button>
                    {
                      isOpenDropDown2 !== false &&

                      <ul className="dropdownMenu" style={{ marginRight: '-20px' }}>
                        <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}>Featured</Button></li>
                        <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}>Price:Low to High</Button></li>
                        <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}>Price:High to Low</Button></li>
                        <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}>Release Date</Button></li>
                        <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}>Avg Rating</Button></li>
                      </ul>
                    }
                  </div>

                </div>
              </div>

              <div className="productRow" style={{ paddingLeft: 20 }}>
                <div className="item">
                  <Product tag='sale' />
                </div>
                <div className="item">
                  <Product tag='new' />
                </div>
                <div className="item">
                  <Product tag='best' />
                </div>
                <div className="item">
                  <Product tag='hot' />
                </div>
                <div className="item">
                  <Product tag='sale' />
                </div>
                <div className="item">
                  <Product tag='new' />
                </div>
                <div className="item">
                  <Product tag='best' />
                </div>
                <div className="item">
                  <Product tag='hot' />
                </div>
                <div className="item">
                  <Product tag='sale' />
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
                  <Product tag='sale' />
                </div>
                <div className="item">
                  <Product tag='new' />
                </div>
                <div className="item">
                  <Product tag='best' />
                </div>
                <div className="item">
                  <Product tag='hot' />
                </div>
                <div className="item">
                  <Product tag='sale' />
                </div>
                <div className="item">
                  <Product tag='new' />
                </div>
                <div className="item">
                  <Product tag='hot' />
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
