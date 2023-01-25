import Notification from 'components/Notification';
import PropTypes from 'prop-types';
import { StatisticTitle, StatisticContainer } from './Statistic.styled';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <StatisticTitle>Statistics</StatisticTitle>
      {!total() ? (
        <Notification message="There is no feedback" />
      ) : (
        <StatisticContainer>
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <span>Total: {total()}</span>
          <span>Positive feedback: {positivePercentage()}%</span>
        </StatisticContainer>
      )}
    </>
  );
};

export default Statistic;
Statistic.prototypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
