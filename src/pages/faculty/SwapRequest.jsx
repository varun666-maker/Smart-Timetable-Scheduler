import PortalLayout from '../../components/PortalLayout'
import { Send } from 'lucide-react'

const history = [
  {id:1,myClass:'Mon 8AM - DS (101)',withFac:'Prof. Anita Sharma',theirSlot:'Mon 9AM - OS (102)',reason:'Medical',status:'Approved'},
  {id:2,myClass:'Wed 10AM - DS (101)',withFac:'Dr. Vikram Singh',theirSlot:'Thu 8AM - DBMS (101)',reason:'Conference',status:'Pending'},
]

export default function SwapRequest() {
  return (
    <PortalLayout role="faculty" title="Swap Request">
      <div className="card mb-24">
        <div className="card-title mb-16">New Swap Request</div>
        <div className="grid-2">
          <div>
            <h4 className="mb-16" style={{color:'var(--primary)'}}>My Class</h4>
            <div className="form-group"><label className="form-label">Date</label><input type="date" className="form-input" defaultValue="2026-05-12"/></div>
            <div className="form-group"><label className="form-label">Time Slot</label><select className="form-select"><option>8:00 AM - Data Structures</option><option>9:00 AM - Data Structures</option><option>1:00 PM - DS Lab</option></select></div>
            <div className="form-group"><label className="form-label">Room</label><input className="form-input" value="Room 101" readOnly/></div>
          </div>
          <div>
            <h4 className="mb-16" style={{color:'var(--teal)'}}>Swap With</h4>
            <div className="form-group"><label className="form-label">Faculty</label><select className="form-select"><option>Select Faculty</option><option>Prof. Anita Sharma</option><option>Dr. Vikram Singh</option><option>Prof. Meera Patel</option></select></div>
            <div className="form-group"><label className="form-label">Their Available Slot</label><select className="form-select"><option>Select slot</option><option>Mon 9:00 AM - OS (102)</option><option>Wed 8:00 AM - OS (102)</option></select></div>
          </div>
        </div>
        <div className="form-group mt-16"><label className="form-label">Reason</label><textarea className="form-textarea" placeholder="Why do you need this swap?" rows={3}/></div>
        <button className="btn btn-primary"><Send size={16}/>Submit Swap Request</button>
      </div>
      <div className="card">
        <div className="card-title mb-16">Request History</div>
        <div className="table-wrapper">
          <table className="table">
            <thead><tr><th>My Class</th><th>Swap With</th><th>Their Slot</th><th>Reason</th><th>Status</th></tr></thead>
            <tbody>
              {history.map(h=>(
                <tr key={h.id}>
                  <td className="text-sm font-semibold">{h.myClass}</td>
                  <td className="text-sm">{h.withFac}</td>
                  <td className="text-sm">{h.theirSlot}</td>
                  <td className="text-sm">{h.reason}</td>
                  <td><span className={`badge ${h.status==='Approved'?'badge-success':'badge-warning'}`}>{h.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PortalLayout>
  )
}
