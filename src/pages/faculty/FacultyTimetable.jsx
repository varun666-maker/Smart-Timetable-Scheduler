import { useState } from 'react'
import PortalLayout from '../../components/PortalLayout'
import { timetableData, days, timeSlots } from '../../data/mockData'
import { ChevronLeft, ChevronRight, Printer } from 'lucide-react'

export default function FacultyTimetable() {
  const [selected, setSelected] = useState(null)
  const data = timetableData['CSE-A']
  return (
    <PortalLayout role="faculty" title="My Timetable">
      <div className="flex items-center justify-between mb-24">
        <div className="flex items-center gap-12">
          <button className="btn btn-secondary btn-sm"><ChevronLeft size={16}/></button>
          <span className="font-semibold">May 5 – May 10, 2026</span>
          <button className="btn btn-secondary btn-sm"><ChevronRight size={16}/></button>
        </div>
        <button className="btn btn-secondary"><Printer size={16}/>Print</button>
      </div>
      <div className="tt-grid">
        <table className="tt-table">
          <thead><tr><th>Time</th>{days.map(d=><th key={d}>{d}</th>)}</tr></thead>
          <tbody>
            {timeSlots.map((t,ti)=>(
              <tr key={t}>
                <td className="time-col">{t}</td>
                {days.map(d=>{
                  const slot = data[d]&&data[d][ti]
                  return (
                    <td key={d} onClick={()=>slot&&setSelected(slot)} style={{cursor:slot?'pointer':'default'}}>
                      {slot&&<div className={`tt-chip ${slot.type}`}><div>{slot.sub}</div><div className="tt-chip-sub">{slot.room}</div></div>}
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
      {selected&&(
        <div className="modal-overlay" onClick={()=>setSelected(null)}>
          <div className="modal-content" onClick={e=>e.stopPropagation()}>
            <h3 className="mb-16">{selected.sub}</h3>
            <div className="flex-col gap-12" style={{display:'flex'}}>
              <div><span className="text-muted text-sm">Room:</span> <strong>{selected.room}</strong></div>
              <div><span className="text-muted text-sm">Faculty:</span> <strong>{selected.fac}</strong></div>
              <div><span className="text-muted text-sm">Type:</span> <span className={`badge ${selected.type==='theory'?'badge-primary':selected.type==='lab'?'badge-teal':'badge-warning'}`}>{selected.type}</span></div>
            </div>
            <button className="btn btn-secondary mt-24" onClick={()=>setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </PortalLayout>
  )
}
