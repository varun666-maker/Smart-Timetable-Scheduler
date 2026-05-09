import { useState } from 'react'
import PortalLayout from '../../components/PortalLayout'
import { Plus, Send, Trash2 } from 'lucide-react'

export default function ManageExams() {
  const [exams, setExams] = useState([
    { id: 1, subject: 'Data Structures', code: 'CS301', date: '2026-05-20', time: '9:00 AM', duration: '3 Hours', hall: 'Exam Hall 1' },
    { id: 2, subject: 'Operating Systems', code: 'CS302', date: '2026-05-23', time: '9:00 AM', duration: '3 Hours', hall: 'Exam Hall 2' },
  ])
  const [showAdd, setShowAdd] = useState(false)

  return (
    <PortalLayout role="hod" title="Manage Exams">
      <div className="flex justify-between items-center mb-24">
        <h3>Exam Schedule</h3>
        <button className="btn btn-primary" onClick={() => setShowAdd(!showAdd)}>
          <Plus size={16} /> Add Exam
        </button>
      </div>

      {showAdd && (
        <div className="card mb-24" style={{ borderLeft: '4px solid var(--primary)' }}>
          <h4 className="mb-16">Add New Exam</h4>
          <div className="grid-2">
            <div className="form-group"><label className="form-label">Subject Name</label><input className="form-input" placeholder="e.g., Database Management" /></div>
            <div className="form-group"><label className="form-label">Subject Code</label><input className="form-input" placeholder="e.g., CS303" /></div>
            <div className="form-group"><label className="form-label">Date</label><input type="date" className="form-input" /></div>
            <div className="form-group"><label className="form-label">Time</label><input type="time" className="form-input" /></div>
            <div className="form-group"><label className="form-label">Duration</label><select className="form-select"><option>2 Hours</option><option>3 Hours</option></select></div>
            <div className="form-group"><label className="form-label">Hall / Location</label><input className="form-input" placeholder="e.g., Exam Hall 1" /></div>
          </div>
          <div className="form-group mt-16" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <input type="checkbox" id="announce" defaultChecked /><label htmlFor="announce" className="text-sm">Announce to students immediately</label>
          </div>
          <div className="flex gap-8 mt-16">
            <button className="btn btn-primary"><Send size={14} /> Schedule Exam</button>
            <button className="btn btn-secondary" onClick={() => setShowAdd(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div className="card">
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr><th>Subject</th><th>Code</th><th>Date</th><th>Time</th><th>Duration</th><th>Hall</th><th>Action</th></tr>
            </thead>
            <tbody>
              {exams.map(e => (
                <tr key={e.id}>
                  <td className="font-semibold">{e.subject}</td>
                  <td>{e.code}</td>
                  <td>{e.date}</td>
                  <td>{e.time}</td>
                  <td>{e.duration}</td>
                  <td>{e.hall}</td>
                  <td>
                    <button className="btn btn-sm btn-danger"><Trash2 size={14} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PortalLayout>
  )
}
