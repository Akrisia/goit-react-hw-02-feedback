import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import s from './App.module.css';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (e) => {
    const id = e.target.id;

    id === 'good' && this.setState({ good: this.state.good + 1 });
    id === 'neutral' && this.setState({ neutral: this.state.neutral + 1 });
    id === 'bad' && this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
        return good + neutral + bad
    };

  countPositiveFeedbackPercentage = () => {
        return Math.round(this.state.good / this.countTotalFeedback() * 100)
    };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={keys} onLeaveFeedback={this.handleClick} />
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={good > 0 && this.countPositiveFeedbackPercentage()} />
        </Section>
      </div>
    );
  }
}