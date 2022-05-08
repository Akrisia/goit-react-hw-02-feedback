import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div>
        <h2 className={s.title}>Please leave feedback</h2>
        <ul className={s.controls}>
                <button type='button' id={options[0]} onClick={onLeaveFeedback}>Good</button>
                <button type='button' id={options[1]} onClick={onLeaveFeedback}>Neutral</button>
                <button type='button' id={options[2]} onClick={onLeaveFeedback}>Bad</button>
        </ul>
    </div>
)

export default FeedbackOptions;