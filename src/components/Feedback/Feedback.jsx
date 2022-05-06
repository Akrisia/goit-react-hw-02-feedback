import { Component } from 'react';
import s from './Feedback.module.css';

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    onGood = () => {
        this.setState({ good: this.state.good + 1 });
    };

    onNeutral = () => {
        this.setState({ neutral: this.state.neutral + 1 });
    };

    onBad = () => {
        this.setState({ bad: this.state.bad + 1 });
    };

    render() {
        return (
            <div className={s.feedback}>
                <h2 className={s.title}>Please leave feedback</h2>
                <ul className={s.controls}>
                    <button type='button' onClick={this.onGood}>Good</button>
                    <button type='button' onClick={this.onNeutral}>Neutral</button>
                    <button type='button' onClick={this.onBad}>Bad</button>
                </ul>
                
                <h2 className={s.title}>Statistics</h2>
                <ul className={s.stats}>
                    <span>Good: {this.state.good}</span>
                    <span>Neutral: {this.state.neutral}</span>
                    <span>Bad: {this.state.bad}</span>
                </ul>
            </div>
        );
    }
};