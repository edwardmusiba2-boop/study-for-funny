function CourseCard({ title, description, level }) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{level}</span>
    </div>
  );
}

export default CourseCard;