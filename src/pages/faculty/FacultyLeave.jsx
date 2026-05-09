import PortalLayout from '../../components/PortalLayout'
import { Send } from 'lucide-react'

const leaveHistory = [
  {id:1,type:'Casual Leave',from:'2026-04-10',to:'2026-04-10',reason:'Personal work',status:'Approved'},
  {id:2,type:'Sick Leave',from:'2026-03-22',to:'2026-03-23',reason:'Fever',status:'Approved'},
  {id:3,type:'Casual Leave',from:'2026-05-12',to:'2026-05-13',reason:'Medical appointment',status:'Pending'},
]
const affected = [{time:'8:00 AM',sub:'Data Structures',batch:'CSE-A'},{time:'9:00 AM',sub:'Data Structures',batch:'CSE-B'},{time:'1:00 PM',sub:'DS Lab',batch:'CSE-A'}]

export default function FacultyLeave() {
  return (
    <PortalLayout role="faculty" title="Leave Request">
      <div className="grid-2">
        <div className="card">
          <div className="card-title mb-16">New Leave Request</div>
          <div className="form-group"><label className="form-label">Leave Type</label><select className="form-select"><option>Casual Leave</option><option>Sick Leave</option><option>Duty Leave</option></select></div>
          <div className="grid-2">
            <div className="form-group"><label className="form-label">From Date</label><input type="date" className="form-input"/></div>
            <div className="form-group"><label className="form-label">To Date</label><input type="date" className="form-input"/></div>
          </div>
          <div className="form-group" style={{display:'flex',alignItems:'center',gap:12}}>
            <input type="checkbox" id="halfday"/><label htmlFor="halfday" className="text-sm">Half Day</label>
          </div>
          <div className="form-group"><label className="form-label">Reason</label><textarea className="form-textarea" placeholder="Enter reason for leave..." rows={3}/></div>
          <div className="form-group"><label className="form-label">Topic to be Covered</label><input className="form-input" placeholder="Topic that will be missed"/></div>
          <div className="card-title mb-8 mt-16">Classes Affected</div>
          <div className="flex-col gap-8" style={{display:'flex'}}>
            {affected.map((a,i)=>(
              <div key={i} className="flex items-center justify-between" style={{padding:'10px 14px',background:'var(--warning-bg)',borderRadius:'var(--radius-sm)'}}>
                <span className="text-sm font-semibold">{a.time} — {a.sub}</span>
                <span className="badge badge-warning">{a.batch}</span>
              </div>
            ))}
          </div>
          <button className="btn btn-primary mt-24"><Send size={16}/>Submit Request</button>
        </div>
        <div>
          <div className="card mb-24">
            <div className="card-title mb-16">Leave Balance</div>
            <div className="mb-16">
              <div className="flex justify-between text-sm mb-8"><span>Casual Leave</span><strong>6 / 10</strong></div>
              <div className="progress-bar"><div className="progress-fill" style={{width:'60%',background:'var(--primary)'}}/></div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-8"><span>Sick Leave</span><strong>4 / 7</strong></div>
              <div className="progress-bar"><div className="progress-fill" style={{width:'57%',background:'var(--teal)'}}/></div>
            </div>
          </div>
          <div className="card">
            <div className="card-title mb-16">My Requests</div>
            <div className="table-wrapper">
              <table className="table">
                <thead><tr><th>Type</th><th>Dates</th><th>Status</th></tr></thead>
                <tbody>
                  {leaveHistory.map(l=>(
                    <tr key={l.id}>
                      <td className="text-sm">{l.type}</td>
                      <td className="text-sm">{l.from}{l.from!==l.to?` → ${l.to}`:''}</td>
                      <td><span className={`badge ${l.status==='Approved'?'badge-success':l.status==='Pending'?'badge-warning':'badge-danger'}`}>{l.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  )
}
