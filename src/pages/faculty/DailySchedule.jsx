import { useState } from 'react'
import PortalLayout from '../../components/PortalLayout'
import { todayScheduleFaculty } from '../../data/mockData'
import { Users, ClipboardCheck } from 'lucide-react'

const statusColor = {Completed:'badge-success',Ongoing:'badge-primary',Upcoming:'badge-info'}

export default function DailySchedule() {
  const [sel, setSel] = useState(0)
  const s = todayScheduleFaculty[sel]
  return (
    <PortalLayout role="faculty" title="Daily Schedule">
      <div className="mb-24">
        <input type="date" className="form-input" defaultValue="2026-05-09" style={{width:200}} />
      </div>
      <div className="grid-2">
        <div className="card">
          <div className="card-title mb-16">Today's Slots</div>
          <div className="timeline">
            {todayScheduleFaculty.map((slot,i)=>(
              <div className={`timeline-item`} key={i} onClick={()=>setSel(i)} style={{cursor:'pointer',border:sel===i?'2px solid var(--primary)':'2px solid transparent',borderRadius:'var(--radius-sm)'}}>
                <div className="timeline-time">{slot.time}</div>
                <div className="timeline-content">
                  <div className="timeline-title">{slot.subject}</div>
                  <div className="timeline-sub">{slot.batch} · {slot.room}</div>
                </div>
                <span className={`badge ${statusColor[slot.status]}`}>{slot.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-title mb-24">Class Details</div>
          <div className="flex-col gap-16" style={{display:'flex'}}>
            <div className="flex justify-between"><span className="text-muted text-sm">Subject</span><strong>{s.subject}</strong></div>
            <div className="flex justify-between"><span className="text-muted text-sm">Batch</span><strong>{s.batch}</strong></div>
            <div className="flex justify-between"><span className="text-muted text-sm">Room</span><strong>{s.room}</strong></div>
            <div className="flex justify-between"><span className="text-muted text-sm">Students</span><strong>58</strong></div>
            <div className="flex justify-between"><span className="text-muted text-sm">Type</span><span className="badge badge-primary">Theory</span></div>
            <div className="flex justify-between"><span className="text-muted text-sm">Topic</span><strong>Binary Search Trees</strong></div>
            <div className="flex justify-between"><span className="text-muted text-sm">Status</span><span className={`badge ${statusColor[s.status]}`}>{s.status}</span></div>
          </div>
          <div className="flex gap-12 mt-24">
            <button className="btn btn-primary"><ClipboardCheck size={16}/>Take Attendance</button>
            <button className="btn btn-secondary"><Users size={16}/>View Students</button>
          </div>
        </div>
      </div>
    </PortalLayout>
  )
}
