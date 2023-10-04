import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from '../Button/Button';

const Counter = ({min, max, currentValue}) => {
    const [counter, setCounter] = useState(currentValue)
    let currentState = counter;

    function handleClick(e) {
        if (e.target.textContent === '-') {

            if (!(currentState - 1 < min)) {
                setCounter(currentState - 1);
                localStorage.setItem('counter', currentState - 1)
            }

        } else if (e.target.textContent === '+') {

            if (!(currentState + 1 > max)) {
                setCounter(currentState + 1);
                localStorage.setItem('counter', currentState + 1)
            }

        }
    }
    return (<div className='counter'> <Button key={'-'} onClick={handleClick}>-</Button> <div>{counter}</div> <Button key={'+'} onClick={handleClick}>+</Button> </div>)
}

export {Counter}

Counter.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    currentValue: PropTypes.number.isRequired,
}