import { quizzes } from '../../data/mockData.js'
import './Quizzes.css'

function Quizzes() {
  return (
    <div className="page quizzes-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Test your knowledge</span>
          <h1>Quizzes</h1>
        </div>
      </div>

      <div className="row g-4">
        {quizzes.map((q) => (
          <div className="col-12 col-md-6" key={q.id}>
            <div className="card p-4 quizzes-page__card">
              <div>
                <h3>{q.title}</h3>
                <p className="text-muted mb-2">{q.course}</p>
                <span className="text-muted" style={{ fontSize: 13 }}>
                  {q.questions} questions
                </span>
              </div>

              <div className="quizzes-page__result">
                {q.score !== null ? (
                  <>
                    <span className="quizzes-page__score">{q.score}%</span>
                    <button className="btn btn-outline-secondary btn-sm">Review</button>
                  </>
                ) : (
                  <button className="btn btn-primary btn-sm">Start quiz</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Quizzes
