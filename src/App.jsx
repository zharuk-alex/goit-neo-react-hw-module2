import "@/App.css";
import Description from "./components/Description/Description";
import Option from "./components/Option/Option";
import Feedback from "./components/Feedback/Feedback";

import { useEffect, useState } from "react";

function App() {
  const feedbackVariants = [
    { text: "Good", variant: "good" },
    { text: "Bad", variant: "bad" },
    { text: "Neutral", variant: "neutral" },
  ];

  const initialState = {
    good: 0,
    bad: 0,
    neutral: 0,
  };

  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks =
      JSON.parse(window.localStorage.getItem("saved-feedbacks")) ?? {};

    if (Object.keys(savedFeedbacks).length) {
      return savedFeedbacks;
    }

    return initialState;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const feedbacksUpdate = (variant) => {
    setFeedbacks({
      ...feedbacks,
      [variant]: feedbacks[variant] + 1,
    });
  };

  const feedbacksReset = () => {
    setFeedbacks({
      ...initialState,
    });
  };

  const totalFeedback = () =>
    Object.values(feedbacks).reduce((acc, item) => (acc += item), 0);

  const totalPositive = () =>
    totalFeedback()
      ? Math.round((feedbacks?.good / totalFeedback()) * 100)
      : 100;

  return (
    <main>
      <div className="card">
        <Description />
        <Option
          variants={feedbackVariants}
          handleClick={feedbacksUpdate}
          handleReset={feedbacksReset}
        />
        <Feedback
          feedbacks={feedbacks}
          variants={feedbackVariants}
          totalFeedback={totalFeedback()}
          totalPositive={totalPositive()}
        />
      </div>
    </main>
  );
}

export default App;
