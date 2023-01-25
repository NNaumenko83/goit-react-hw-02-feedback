const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
      {option.charAt(0).toUpperCase()}
      {option.slice(1)}
    </button>
  ));
};

export default FeedbackOptions;
