import { useState } from 'react'
import PortalLayout from '../../components/PortalLayout'
import { leaveRequests } from '../../data/mockData'
import { Check, X } from 'lucide-react'

export default function LeaveRequests() {
  const [tab, setTab] = useState('Pending')
  const tabs = ['Pending', 'Approved', 'Rejected']
  const filtered = leaveRequests.filter(l => l.status === tab)
  const getBadge = s => s === 'Approved' ? 'badge-success' : s === 'Rejected' ? 'badge-danger' : 'badge-warning'

  return (
    <PortalLayout role="hod" title="Leave Requests">
      <div className="tabs">
        {tabs.map(t => <div key={t} className={`tab ${tab===t?'active':''}`} onClick={()=>setTab(t)}>{t} ({leaveRequests.filter(l=>l.status===t).length})</div>)}
      </div>
      <div className="table-wrapper">
        <table className="table">
          <thead><tr><th>Faculty</th><th>From</th><th>To</th><th>Reason</th><th>Classes Affected</th><th>Status</th>{tab==='Pending'&&<th>Actions</th>}</tr></thead>
          <tbody>
            {filtered.map(l => (
              <tr key={l.id}>
                <td className="font-semibold">{l.faculty}</td>
                <td>{l.from}</td>
                <td>{l.to}</td>
                <td>{l.reason}</td>
                <td><span className="badge badge-warning">{l.classes} classes</span></td>
                <td><span className={`badge ${getBadge(l.status)}`}>{l.status}</span></td>
                {tab==='Pending'&&<td>
                  <div className="flex gap-8">
                    <button className="btn btn-success btn-sm"><Check size={14}/>Approve</button>
                    <button className="btn btn-danger btn-sm"><X size={14}/>Reject</button>
                  </div>
                </td>}
              </tr>
            ))}
            {filtered.length===0&&<tr><td colSpan={7} className="text-center text-muted" style={{padding:40}}>No {tab.toLowerCase()} requests</td></tr>}
          </tbody>
        </table>
      </div>
    </PortalLayout>
  )
}
