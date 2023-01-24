import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, el) => acc + el, 0);

  countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = this.countTotalFeedback();

    const positiveFeedbacks = this.state.good;

    return Math.round((positiveFeedbacks / totalFeedbacks) * 100);
  };

  handleButtonClick = e => {
    const value = e.currentTarget.id;

    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <button type="button" id="good" onClick={this.handleButtonClick}>
          Good
        </button>
        <button type="button" id="neutral" onClick={this.handleButtonClick}>
          Neutral
        </button>
        <button type="button" id="bad" onClick={this.handleButtonClick}>
          Bad
        </button>
        <p>Statistics</p>
        <span>Good:{this.state.good}</span>
        <span>Neutral:{this.state.neutral}</span>
        <span>Bad:{this.state.bad}</span>
        <span>Total:{this.countTotalFeedback()}</span>
        <span>Positive feedback:{this.countPositiveFeedbackPercentage()}%</span>
      </>
    );
  }
}

export default Feedback;
