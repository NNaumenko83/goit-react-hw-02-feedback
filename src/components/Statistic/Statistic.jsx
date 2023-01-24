import Notification from 'components/Notification';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p>Statistics</p>
      {!total() ? (
        <Notification message="There is no feedback" />
      ) : (
        <>
          <span>Good:{good}</span>
          <span>Neutral:{neutral}</span>
          <span>Bad:{bad}</span>
          <span>Total:{total()}</span>
          <span>Positive feedback:{positivePercentage()}%</span>
        </>
      )}
    </>
  );
};

export default Statistic;
