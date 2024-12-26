import { useState } from "react"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const QuantityBox = () => {

    const [inputValue, setInputValue] = useState(1)



    const plus = () => {
        setInputValue(inputValue + 1)
    }


    const minus = () => {
        if (inputValue !== 1) {
            setInputValue(inputValue - 1)
        }
    }

    return (
        <div className="addCartSection d-flex align-items-center justify-content-center">
            <div className="counterSec" style={{ display: 'flex', alignItems: 'center' }}>
                <input type="number" value={inputValue} style={{ width: '50px', textAlign: 'center' }} />
                <span className="arrow plus" onClick={plus} style={{ cursor: 'pointer' }}><KeyboardArrowUpOutlinedIcon /></span>
                <span className="arrow minus" onClick={minus} style={{ cursor: 'pointer' }}><KeyboardArrowDownOutlinedIcon /></span>
            </div>
        </div>
    )
}

export default QuantityBox
