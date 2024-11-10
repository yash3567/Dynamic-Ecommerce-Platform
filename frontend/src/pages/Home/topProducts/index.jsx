import './style.css'

const TopProducts = (props) => {
    return (
        <>
            <div className='topSelling_box' style={{ padding: "0px 33px" }}>
                <h3>{props.title}</h3>
            </div>

        </>
    )
}

export default TopProducts
