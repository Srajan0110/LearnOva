import { certificates } from '../../data/mockData.js'
import './Certificate.css'

function Certificate() {
  return (
    <div className="page certificate-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Achievements</span>
          <h1>Certificates</h1>
        </div>
      </div>

      <div className="row g-4">
        {certificates.map((c) => (
          <div className="col-12 col-md-6" key={c.id}>
            <div className="card p-4 certificate-page__card">
              <div className="certificate-page__badge">🎓</div>
              <div>
                <h3>{c.course}</h3>
                {c.issued ? (
                  <>
                    <p className="text-muted mb-2">Issued {c.issued}</p>
                    <button className="btn btn-primary btn-sm">Download</button>
                  </>
                ) : (
                  <p className="text-muted mb-0">Complete this course to unlock your certificate.</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificate
