import { useState } from 'react'
import PortalLayout from '../../components/PortalLayout'
import { timetableData, days, timeSlots } from '../../data/mockData'

export default function TimetableReview() {
  const [batch] = useState('CSE-A')
  const [selected, setSelected] = useState(null)
  const data = timetableData[batch] || {}

  return (
    <PortalLayout role="hod" title="Timetable Review">
      <div className="flex items-center justify-between mb-24" style={{flexWrap:'wrap',gap:12}}>
        <div className="flex gap-12" style={{flexWrap:'wrap'}}>
          <select className="form-select" style={{width:180}}><option>Computer Science</option></select>
          <select className="form-select" style={{width:120}}><option>Semester 5</option></select>
          <select className="form-select" style={{width:120}}><option>CSE-A</option><option>CSE-B</option><option>CSE-C</option></select>
          <select className="form-select" style={{width:150}}><option>Version 3 (Latest)</option><option>Version 2</option><option>Version 1</option></select>
        </div>
        <div className="flex gap-8">
          <button className="btn btn-secondary">Request Changes</button>
          <button className="btn btn-success">Approve & Publish</button>
        </div>
      </div>

      <div className="tt-grid">
        <table className="tt-table">
          <thead>
            <tr>
              <th>Time</th>
              {days.map(d => <th key={d}>{d}</th>)}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((t, ti) => (
              <tr key={t}>
                <td className="time-col">{t}</td>
                {days.map(d => {
                  const slot = data[d] && data[d][ti] ? data[d][ti] : null
                  return (
                    <td key={d} onClick={() => slot && setSelected(slot)} style={{cursor: slot ? 'pointer' : 'default'}}>
                      {slot && (
                        <div className={`tt-chip ${slot.type}`}>
                          <div>{slot.sub}</div>
                          <div className="tt-chip-sub">{slot.room} · {slot.fac.split(' ').pop()}</div>
                        </div>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-16 mt-16">
        <div className="flex items-center gap-8"><div className="tt-chip theory" style={{padding:'4px 10px'}}>Theory</div></div>
        <div className="flex items-center gap-8"><div className="tt-chip lab" style={{padding:'4px 10px'}}>Lab</div></div>
        <div className="flex items-center gap-8"><div className="tt-chip mentoring" style={{padding:'4px 10px'}}>Mentoring</div></div>
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3 className="mb-16">Slot Details</h3>
            <div className="flex-col gap-12" style={{display:'flex'}}>
              <div><span className="text-muted text-sm">Subject:</span> <strong>{selected.sub}</strong></div>
              <div><span className="text-muted text-sm">Faculty:</span> <strong>{selected.fac}</strong></div>
              <div><span className="text-muted text-sm">Room:</span> <strong>{selected.room}</strong></div>
              <div><span className="text-muted text-sm">Type:</span> <span className={`badge ${selected.type==='theory'?'badge-primary':selected.type==='lab'?'badge-teal':'badge-warning'}`}>{selected.type}</span></div>
              <div><span className="text-muted text-sm">Batch:</span> <strong>{batch}</strong></div>
            </div>
            <div className="flex gap-8 mt-24">
              <button className="btn btn-secondary" onClick={() => setSelected(null)}>Close</button>
              <button className="btn btn-primary">Edit Slot</button>
            </div>
          </div>
        </div>
      )}
    </PortalLayout>
  )
}
