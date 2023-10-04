import PropTypes from 'prop-types';
import { useState } from 'react';

const Input = ({desc}) => {
    const [input, setInput] = useState(localStorage.getItem(desc))

    function handleChange(e) {
        if (/^\d+$/.test(e.target.value) || e.target.value === ''){
            setInput(e.target.value);
            localStorage.setItem(desc, e.target.value)
            if (e.target.value === '') {
                localStorage.setItem(desc, 0)
            }
        } 
    }

    return (
        <input type="text" onChange={handleChange} value={input} placeholder={`Enter ${desc} value`} />
    )
}
  
Input.propTypes = {
    desc: PropTypes.string.isRequired,
}

export {Input} 