import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import PropTypes from "prop-types";

export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0
  };

  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.number,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  };
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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

  countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad
    };

  countPositiveFeedbackPercentage = () => {
        return Math.round(this.state.good / this.countTotalFeedback() * 100)
    };

  render() {
    return (
      <div>
        <FeedbackOptions options={[this.state]} onLeaveFeedback={this.nGood} />
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
      </div>
    );
  }
}