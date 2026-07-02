import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CourseCard from '../../components/CourseCard/CourseCard.jsx'
import { courses, categories } from '../../data/mockData.js'
import './Courses.css'

function Courses() {
  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('search') || '')
  const [category, setCategory] = useState('All')
  const [selectedCourse, setSelectedCourse] = useState(null)

  // filter() narrows the full course list down by category first, then by the search box
  const visibleCourses = courses
    .filter((c) => category === 'All' || c.category === category)
    .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="page courses-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Catalog</span>
          <h1>Courses</h1>
        </div>
      </div>

      <div className="row g-2 courses-page__toolbar">
        <div className="col-12 col-md-7">
          <input
            type="search"
            className="form-control"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-5">
          <div className="courses-page__categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={
                  'courses-page__category-btn' +
                  (category === cat ? ' courses-page__category-btn--active' : '')
                }
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="row g-4 mt-1">
        {visibleCourses.map((course) => (
          <div className="col-12 col-sm-6 col-lg-4" key={course.id}>
            <div onClick={() => setSelectedCourse(course)} role="button">
              <CourseCard {...course} />
            </div>
          </div>
        ))}

        {visibleCourses.length === 0 && (
          <div className="col-12">
            <p className="text-muted text-center py-5">
              No courses match "{search}" in {category}.
            </p>
          </div>
        )}
      </div>

      {selectedCourse && (
        <div className="courses-page__modal-backdrop" onClick={() => setSelectedCourse(null)}>
          <div className="courses-page__modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="courses-page__modal-close"
              onClick={() => setSelectedCourse(null)}
              aria-label="Close"
            >
              ×
            </button>
            <span className="eyebrow">{selectedCourse.category}</span>
            <h2>{selectedCourse.title}</h2>
            <p className="text-muted">Instructor: {selectedCourse.instructor}</p>
            <p>{selectedCourse.description}</p>
            <div className="courses-page__modal-progress">
              <div className="students-page__progress-track">
                <div
                  className="students-page__progress-fill"
                  style={{ width: `${selectedCourse.progress}%` }}
                />
              </div>
              <span className="text-muted">{selectedCourse.progress}% complete</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Courses
