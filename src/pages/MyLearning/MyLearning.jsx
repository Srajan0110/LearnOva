import CourseCard from '../../components/CourseCard/CourseCard.jsx'
import { courses } from '../../data/mockData.js'
import './MyLearning.css'

// "My Learning" only shows courses the student hasn't finished yet
const inProgressCourses = courses
  .filter((c) => c.progress < 100)
  .sort((a, b) => b.progress - a.progress)

function MyLearning() {
  return (
    <div className="page my-learning-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">My Learning</span>
          <h1>Continue where you left off</h1>
        </div>
      </div>

      <div className="row g-4">
        {inProgressCourses.map((course) => (
          <div className="col-12 col-sm-6 col-lg-4" key={course.id}>
            <CourseCard {...course} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyLearning
