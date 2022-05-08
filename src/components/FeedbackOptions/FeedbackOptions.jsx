import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={s.controls}>
            <button type='button' id={options[0]} onClick={onLeaveFeedback}>Good</button>
            <button type='button' id={options[1]} onClick={onLeaveFeedback}>Neutral</button>
            <button type='button' id={options[2]} onClick={onLeaveFeedback}>Bad</button>
        </ul>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;