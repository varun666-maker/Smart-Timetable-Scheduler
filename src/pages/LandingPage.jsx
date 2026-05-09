import { useNavigate } from 'react-router-dom'
import { Shield, GraduationCap, BookOpen } from 'lucide-react'

const roles = [
  { key:'hod', path:'/hod/dashboard', icon: Shield, name:'HOD / Admin', desc:'Manage timetables, faculty, and department operations', color:'#4F46E5', bg:'rgba(79,70,229,0.1)' },
  { key:'faculty', path:'/faculty/dashboard', icon: BookOpen, name:'Faculty', desc:'View schedules, manage leaves, and track workload', color:'#14B8A6', bg:'rgba(20,184,166,0.1)' },
  { key:'student', path:'/student/dashboard', icon: GraduationCap, name:'Student', desc:'Access timetable, subjects, exams, and more', color:'#F59E0B', bg:'rgba(245,158,11,0.1)' },
]

export default function LandingPage() {
  const nav = useNavigate()
  return (
    <div className="landing">
      <div className="landing-card">
        <div className="landing-logo">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
        </div>
        <h1 className="landing-title">Smart Timetable</h1>
        <p className="landing-tagline">Smarter Scheduling. Zero Conflicts.</p>
        <div className="role-cards">
          {roles.map(r => (
            <div key={r.key} className="role-card" onClick={() => nav(r.path)}>
              <div className="role-card-icon" style={{background:r.bg}}>
                <r.icon size={28} color={r.color} />
              </div>
              <div className="role-card-name">{r.name}</div>
              <div className="role-card-desc">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
