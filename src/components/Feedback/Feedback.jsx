export default ({ feedbacks, variants, totalFeedback, totalPositive }) => {
  return (
    <ul>
      {variants.map(({ variant, text }) => (
        <li key={variant}>
          {text}: {feedbacks?.[variant] ?? 0}
        </li>
      ))}
      <li>Total: {totalFeedback}</li>
      <li>Positive: {totalPositive}%</li>
    </ul>
  );
};
