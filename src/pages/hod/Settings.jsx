import PortalLayout from '../../components/PortalLayout'

export default function Settings() {
  return (
    <PortalLayout role="hod" title="Settings">
      <div className="grid-2">
        <div className="card">
          <div className="card-title mb-16">General Settings</div>
          <div className="form-group"><label className="form-label">Institution Name</label><input className="form-input" defaultValue="National Institute of Technology"/></div>
          <div className="form-group"><label className="form-label">Academic Year</label><select className="form-select"><option>2025-2026</option><option>2026-2027</option></select></div>
          <div className="form-group"><label className="form-label">Default Semester Duration</label><input className="form-input" defaultValue="16 weeks"/></div>
          <button className="btn btn-primary mt-8">Save Changes</button>
        </div>
        <div className="card">
          <div className="card-title mb-16">Scheduling Preferences</div>
          <div className="form-group"><label className="form-label">Max Classes/Day per Faculty</label><input className="form-input" type="number" defaultValue="6"/></div>
          <div className="form-group"><label className="form-label">Min Gap Between Classes</label><select className="form-select"><option>No Gap</option><option>15 minutes</option><option>30 minutes</option></select></div>
          <div className="form-group"><label className="form-label">Working Days</label><input className="form-input" defaultValue="Mon-Sat"/></div>
          <button className="btn btn-primary mt-8">Save Preferences</button>
        </div>
        <div className="card">
          <div className="card-title mb-16">Notification Settings</div>
          <div className="form-group" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <span className="text-sm">Email Notifications</span>
            <div style={{width:44,height:24,borderRadius:12,background:'var(--primary)',cursor:'pointer',position:'relative'}}><div style={{width:20,height:20,borderRadius:10,background:'#fff',position:'absolute',top:2,right:2,transition:'.2s'}}/></div>
          </div>
          <div className="form-group" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <span className="text-sm">Conflict Alerts</span>
            <div style={{width:44,height:24,borderRadius:12,background:'var(--primary)',cursor:'pointer',position:'relative'}}><div style={{width:20,height:20,borderRadius:10,background:'#fff',position:'absolute',top:2,right:2}}/></div>
          </div>
          <div className="form-group" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <span className="text-sm">Leave Request Alerts</span>
            <div style={{width:44,height:24,borderRadius:12,background:'var(--surface-2)',cursor:'pointer',position:'relative'}}><div style={{width:20,height:20,borderRadius:10,background:'#fff',position:'absolute',top:2,left:2}}/></div>
          </div>
        </div>
        <div className="card">
          <div className="card-title mb-16">Data Management</div>
          <div className="flex-col gap-12" style={{display:'flex'}}>
            <button className="btn btn-secondary w-full">Export Timetable as PDF</button>
            <button className="btn btn-secondary w-full">Export Faculty Data</button>
            <button className="btn btn-secondary w-full">Backup All Data</button>
            <button className="btn btn-danger w-full">Reset All Timetables</button>
          </div>
        </div>
      </div>
    </PortalLayout>
  )
}
