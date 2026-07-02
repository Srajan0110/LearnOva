import Card from '../../components/Card/Card.jsx'
import CourseCard from '../../components/CourseCard/CourseCard.jsx'
import Chart from '../../components/Chart/Chart.jsx'
import Calendar from '../../components/Calendar/Calendar.jsx'
import { courses, assignments, students } from '../../data/mockData.js'
import './Dashboard.css'

const inProgress = courses.filter((c) => c.progress < 100).length
const pendingAssignments = assignments.filter((a) => a.status === 'Pending').length
const avgProgress = Math.round(
  courses.reduce((sum, c) => sum + c.progress, 0) / courses.length
)

const stats = [
  { title: 'Enrolled Courses', value: inProgress, icon: '📚', trend: `${courses.length} total` },
  { title: 'Assignments Due', value: pendingAssignments, icon: '📝', trend: 'Check the Assignments tab' },
  { title: 'Avg. Progress', value: `${avgProgress}%`, icon: '🏆', trend: 'Across all courses' },
  { title: 'Active Students', value: students.length, icon: '🧑‍🎓', trend: 'Enrolled this term' },
]

const featuredCourses = courses.slice(0, 3)

function Dashboard() {
  return (
    <div className="page dashboard">
      <div className="page-header">
        <div>
          <span className="eyebrow">Welcome back</span>
          <h1>Let's keep learning, Alex 👋</h1>
        </div>
      </div>

      <section className="dashboard__stats">
        {stats.map((s) => (
          <Card key={s.title} {...s} />
        ))}
      </section>

      <section className="dashboard__main">
        <div className="dashboard__courses">
          <h2>Continue learning</h2>
          <div className="dashboard__course-grid">
            {featuredCourses.map((c) => (
              <CourseCard key={c.id} {...c} />
            ))}
          </div>

          <div className="dashboard__chart">
            <Chart />
          </div>
        </div>

        <div className="dashboard__side">
          <Calendar events={{ 5: true, 12: true, 20: true }} />
        </div>
      </section>
    </div>
  )
}

export default Dashboard
