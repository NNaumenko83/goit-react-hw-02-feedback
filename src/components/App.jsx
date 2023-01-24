import React, { Component } from 'react';
import Statistic from 'components/Statistic';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

class App extends Component {
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
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleButtonClick}
        />
        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </Section>
    );
  }
}

export default App;
