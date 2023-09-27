import PropTypes from 'prop-types';


const Input = ({handler, value}) => {
    return (
        <input type="text" onChange={handler} value={value}/>
    )
}
  
Input.propTypes = {
    handler: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

export {Input} 