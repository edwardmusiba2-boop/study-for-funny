import CourseCard from "../components/CourseCard";

function Courses() {
  const courses = [
    {
      title: "HTML & CSS",
      description: "Learn how to build and style websites.",
      level: "Beginner",
    },
    {
      title: "JavaScript",
      description: "Learn programming and make websites interactive.",
      level: "Beginner",
    },
    {
      title: "React",
      description: "Build modern user interfaces with React.",
      level: "Intermediate",
    },
    {
      title: "Java",
      description: "Learn the fundamentals of Java programming.",
      level: "Beginner",
    },
    {
      title: "Networking",
      description: "Understand networks, devices and connectivity.",
      level: "Beginner",
    },
    {
        title: "Database",
        description: "Learn how to store and manage data effectively.",
        level: "Beginner",
      },
  ];

  return (
    <div className="page-container">
      <h1>Our Courses</h1>

      <p>
        Choose a course and start learning something new.
      </p>

      <div className="courses-container">
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            title={course.title}
            description={course.description}
            level={course.level}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;