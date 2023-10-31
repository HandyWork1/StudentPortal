import React from 'react'

const StudentDashboard = () => {
  // State for selected course and registered courses
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courses, setCourses] = useState([]);

  // Function to register a course
  const registerCourse = () => {
    if (selectedCourse) {
      // Check if the selected course is not empty
      setCourses([...courses, selectedCourse]);
      // Clear the selected course
      setSelectedCourse('');
    }
  };
  return (
    <>
    studentDashboard
    <div>
      <h2>Student Registration</h2>
      <label>Select a Course:</label>
      <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
        <option value="">-- Select a Course --</option>
        <option value="Course 1">APT4080</option>
        <option value="Course 2">SFE4010</option>
        <option value="Course 3">APP4035</option>
        <option value="Course 4">IST4078</option>
        <option value="Course 5">IST3050</option>
        
      </select>
      <button onClick={registerCourse}>Register Course</button>
      
      <h3>Registered Courses:</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default StudentDashboard