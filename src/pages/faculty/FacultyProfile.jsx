import PortalLayout from '../../components/PortalLayout'
import { Mail, Phone, MapPin, Award } from 'lucide-react'

export default function FacultyProfile() {
  return (
    <PortalLayout role="faculty" title="Profile">
      <div className="grid-2">
        <div className="card text-center">
          <div style={{width:80,height:80,borderRadius:'50%',background:'linear-gradient(135deg,var(--primary),var(--primary-light))',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px',fontSize:'1.75rem',fontWeight:700,color:'#fff'}}>RK</div>
          <h2>Dr. Rajesh Kumar</h2>
          <div className="text-muted text-sm mt-8">Associate Professor</div>
          <div className="badge badge-primary mt-8">Computer Science</div>
          <div className="flex-col gap-12 mt-24" style={{display:'flex',textAlign:'left'}}>
            <div className="flex items-center gap-12"><Mail size={16} color="var(--text-muted)"/><span className="text-sm">rajesh.kumar@nit.edu</span></div>
            <div className="flex items-center gap-12"><Phone size={16} color="var(--text-muted)"/><span className="text-sm">+91 98765 43210</span></div>
            <div className="flex items-center gap-12"><MapPin size={16} color="var(--text-muted)"/><span className="text-sm">Cabin 205, CS Block</span></div>
            <div className="flex items-center gap-12"><Award size={16} color="var(--text-muted)"/><span className="text-sm">15 Years Experience</span></div>
          </div>
        </div>
        <div>
          <div className="card mb-24">
            <div className="card-title mb-16">Subjects Handled</div>
            <div className="flex-col gap-8" style={{display:'flex'}}>
              {['Data Structures','DS Lab','Mentoring'].map(s=>(
                <div key={s} className="flex items-center justify-between" style={{padding:'12px 16px',background:'var(--surface)',borderRadius:'var(--radius-sm)'}}>
                  <span className="text-sm font-semibold">{s}</span>
                  <span className="badge badge-primary">CSE</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="card-title mb-16">Quick Stats</div>
            <div className="grid-2">
              <div style={{padding:16,background:'var(--surface)',borderRadius:'var(--radius-sm)',textAlign:'center'}}><div className="stat-value">22</div><div className="text-xs text-muted mt-8">Classes/Week</div></div>
              <div style={{padding:16,background:'var(--surface)',borderRadius:'var(--radius-sm)',textAlign:'center'}}><div className="stat-value">87%</div><div className="text-xs text-muted mt-8">Workload</div></div>
              <div style={{padding:16,background:'var(--surface)',borderRadius:'var(--radius-sm)',textAlign:'center'}}><div className="stat-value">4</div><div className="text-xs text-muted mt-8">Subjects</div></div>
              <div style={{padding:16,background:'var(--surface)',borderRadius:'var(--radius-sm)',textAlign:'center'}}><div className="stat-value">2</div><div className="text-xs text-muted mt-8">Leaves Taken</div></div>
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  )
}
