import s from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <div>
        <h2 className={s.title}>Statistics</h2>
        <ul className={s.stats}>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total: {total}</span>
            <span>Positive Feedback: {positivePercentage}%</span>
        </ul>
    </div>
);

export default Statistics;