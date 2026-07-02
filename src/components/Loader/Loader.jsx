import './Loader.css'

function Loader({ label = 'Loading...' }) {
  return (
    <div className="loader">
      <div className="loader__spinner" />
      <span className="text-muted">{label}</span>
    </div>
  )
}

export default Loader
