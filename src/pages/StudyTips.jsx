function StudyTips() {
  const tips = [
    "Practice every day.",
    "Build small projects.",
    "Read and understand your errors.",
    "Don't be afraid to ask questions.",
    "Keep learning consistently.",
  ];

  return (
    <div className="page-container">
      <h1>Study Tips</h1>

      <p>
        Simple habits that can help you become a better learner.
      </p>

      <div className="tips-container">
        {tips.map((tip, index) => (
          <div className="tip" key={index}>
            <span>{index + 1}</span>
            <p>{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyTips;