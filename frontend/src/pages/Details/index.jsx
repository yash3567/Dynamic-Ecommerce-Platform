import { Link } from "react-router-dom"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


const DetailsPage
    = () => {
        return (

            <section className="detailsPage">
                <div className="breadcrumbWrapper mb-4">

                    <div className="container-fluid" style={{ padding: "0px 42px", marginTop: '-25px' }}>
                        <ul className="breadcrumb breadcrumb2" style={{ marginBottom: 0 }}>
                            <li><Link><HomeOutlinedIcon style={{ marginRight: '2px', marginTop: '-5px' }} />Home</Link></li>
                            <li><Link>Vegetables & tubers </Link></li>
                            <li>Seeds of Change Organic</li>

                        </ul>
                    </div>

                </div>
                <div className="container-fluid">

                </div>
            </section>
        )
    }

export default DetailsPage

