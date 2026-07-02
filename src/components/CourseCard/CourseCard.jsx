import './CourseCard.css'

function CourseCard({
  title = 'Introduction to UI/UX Design',
  instructor = 'Priya Sharma',
  progress = 0,
  thumbnailColor = '#F2A93B',
}) {
  return (
    <article className="course-card">
      <div
        className="course-card__thumb"
        style={{ background: thumbnailColor }}
      >
        {title.charAt(0)}
      </div>

      <div className="course-card__body">
        <h3>{title}</h3>
        <p className="text-muted">By {instructor}</p>

        <div className="course-card__progress">
          <div className="course-card__progress-track">
            <div
              className="course-card__progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="course-card__progress-label">{progress}% complete</span>
        </div>
      </div>
    </article>
  )
}

export default CourseCard
