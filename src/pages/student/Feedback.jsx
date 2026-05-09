import { useState } from 'react'
import PortalLayout from '../../components/PortalLayout'
import { Send, CheckCircle, Clock, Paperclip } from 'lucide-react'

const queries = [
  { id: 1, type: 'Timetable Query', subject: 'Missing DS Lab Slot', msg: 'My timetable does not show the Tuesday DS Lab slot.', status: 'Open', date: 'May 5, 2026' },
  { id: 2, type: 'Other', subject: 'ID Card Issue', msg: 'Need to get my ID card reprinted.', status: 'Resolved', date: 'April 20, 2026' },
]

export default function Feedback() {
  return (
    <PortalLayout role="student" title="Feedback / Query">
      <div className="grid-2">
        <div className="card">
          <div className="card-title mb-16">Submit a Query</div>
          <div className="form-group">
            <label className="form-label">Query Type</label>
            <select className="form-select">
              <option>Timetable Query</option>
              <option>Lab Slot</option>
              <option>Attendance Issue</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input className="form-input" placeholder="Brief subject for your query" />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" placeholder="Describe your query or issue in detail..." rows={4} />
          </div>
          <div className="form-group">
             <label className="form-label">Attachment (Optional)</label>
             <div className="upload-zone" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Paperclip size={24} color="var(--text-muted)" />
                <div className="text-sm text-muted mt-8">Click or drag file to attach</div>
             </div>
          </div>
          <button className="btn btn-primary mt-16"><Send size={16} /> Submit Query</button>
        </div>

        <div className="card">
          <div className="card-title mb-16">My Queries</div>
          <div className="flex-col gap-12" style={{ display: 'flex' }}>
            {queries.map(q => (
              <div key={q.id} style={{ padding: '16px', background: 'var(--surface)', borderRadius: 'var(--radius-sm)' }}>
                 <div className="flex justify-between mb-8">
                    <div className="font-semibold">{q.subject}</div>
                    <span className={`badge ${q.status === 'Resolved' ? 'badge-success' : 'badge-info'}`}>
                       {q.status === 'Resolved' ? <CheckCircle size={12} className="mr-4" /> : <Clock size={12} className="mr-4" />}
                       {q.status}
                    </span>
                 </div>
                 <div className="text-sm mb-8">{q.msg}</div>
                 <div className="flex justify-between text-xs text-muted">
                    <span>{q.type}</span>
                    <span>{q.date}</span>
                 </div>
              </div>
            ))}
            {queries.length === 0 && <div className="text-center text-muted" style={{ padding: '40px' }}>No queries submitted yet.</div>}
          </div>
        </div>
      </div>
    </PortalLayout>
  )
}
