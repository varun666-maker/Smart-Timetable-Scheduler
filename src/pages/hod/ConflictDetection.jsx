import PortalLayout from '../../components/PortalLayout'
import { conflicts } from '../../data/mockData'
import { AlertTriangle, Zap } from 'lucide-react'

export default function ConflictDetection() {
  return (
    <PortalLayout role="hod" title="Conflict Detection">
      <div className="card mb-24" style={{background:'var(--danger-bg)',border:'1px solid rgba(239,68,68,0.2)'}}>
        <div className="flex items-center gap-12">
          <AlertTriangle size={24} color="var(--danger)" />
          <div>
            <div className="font-bold" style={{color:'var(--danger)'}}>{conflicts.length} Conflicts Detected</div>
            <div className="text-sm text-muted">Review and resolve scheduling conflicts below</div>
          </div>
          <button className="btn btn-danger btn-sm" style={{marginLeft:'auto'}}><Zap size={14}/>Resolve All Automatically</button>
        </div>
      </div>

      <div className="flex gap-12 mb-24">
        <select className="form-select" style={{width:150}}><option>All Types</option><option>Faculty</option><option>Room</option><option>Subject</option></select>
        <select className="form-select" style={{width:150}}><option>All Severity</option><option>High</option><option>Medium</option></select>
      </div>

      <div className="table-wrapper">
        <table className="table">
          <thead><tr><th>Type</th><th>Details</th><th>Severity</th><th>Affected Slots</th><th>AI Suggestion</th><th>Action</th></tr></thead>
          <tbody>
            {conflicts.map(c => (
              <tr key={c.id}>
                <td><span className={`badge ${c.type==='Faculty'?'badge-primary':c.type==='Room'?'badge-teal':'badge-warning'}`}>{c.type}</span></td>
                <td className="text-sm">{c.details}</td>
                <td><span className={`badge ${c.severity==='High'?'badge-danger':'badge-warning'}`}>{c.severity}</span></td>
                <td className="text-sm font-semibold">{c.affected}</td>
                <td className="text-sm" style={{color:'var(--primary)'}}>{c.suggestion}</td>
                <td><button className="btn btn-primary btn-sm">Resolve</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PortalLayout>
  )
}
