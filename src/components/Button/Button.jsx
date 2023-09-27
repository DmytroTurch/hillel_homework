import PropTypes from 'prop-types';

const Button = ({children, handleClick}) => {
    return (
        <button onClick={handleClick}>{children}</button>
    )
}

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
}

export {Button}