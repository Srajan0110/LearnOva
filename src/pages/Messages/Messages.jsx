import { useState } from 'react'
import { messages } from '../../data/mockData.js'
import './Messages.css'

function Messages() {
  const [selectedId, setSelectedId] = useState(messages[0].id)
  const selected = messages.find((m) => m.id === selectedId)

  return (
    <div className="page messages-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Inbox</span>
          <h1>Messages</h1>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-12 col-md-5">
          <div className="card p-2 messages-page__list">
            {messages.map((m) => (
              <button
                key={m.id}
                className={
                  'messages-page__item' +
                  (m.id === selectedId ? ' messages-page__item--active' : '')
                }
                onClick={() => setSelectedId(m.id)}
              >
                <div className="messages-page__avatar">{m.name.charAt(0)}</div>
                <div className="messages-page__preview">
                  <div className="messages-page__row">
                    <strong>{m.name}</strong>
                    <span className="text-muted">{m.time}</span>
                  </div>
                  <p className="text-muted">{m.preview}</p>
                </div>
                {m.unread && <span className="messages-page__dot" />}
              </button>
            ))}
          </div>
        </div>

        <div className="col-12 col-md-7">
          <div className="card p-4 messages-page__thread">
            <span className="eyebrow">{selected.role}</span>
            <h2>{selected.name}</h2>
            <p className="text-muted">{selected.preview}</p>
            <textarea
              className="form-control mt-4"
              rows={4}
              placeholder={`Reply to ${selected.name}...`}
            />
            <button className="btn btn-primary btn-sm mt-3 align-self-start">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages
