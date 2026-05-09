import PortalLayout from '../../components/PortalLayout'
import { todayScheduleFaculty, announcements } from '../../data/mockData'
import { BookOpen, Calendar, Layers, BarChart3, FileText } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const stats = [
  {label:"Today's Classes",value:'5',icon:BookOpen,color:'#4F46E5',bg:'rgba(79,70,229,0.1)'},
  {label:"This Week's Classes",value:'22',icon:Calendar,color:'#14B8A6',bg:'rgba(20,184,166,0.1)'},
  {label:'Subjects',value:'4',icon:Layers,color:'#F59E0B',bg:'rgba(245,158,11,0.1)'},
  {label:'Workload %',value:'87%',icon:BarChart3,color:'#3B82F6',bg:'rgba(59,130,246,0.1)'},
  {label:'Leaves Taken',value:'2',icon:FileText,color:'#EF4444',bg:'rgba(239,68,68,0.1)'},
]

const statusColor = {Completed:'badge-success',Ongoing:'badge-primary',Upcoming:'badge-info'}

export default function FacultyDashboard() {
  return (
    <PortalLayout role="faculty" title="Dashboard">
      <div className="stats-row" style={{gridTemplateColumns:'repeat(5,1fr)'}}>
        {stats.map(s=>(
          <div className="stat-card" key={s.label}>
            <div className="stat-card-inner">
              <div><div className="stat-label">{s.label}</div><div className="stat-value">{s.value}</div></div>
              <div className="stat-icon" style={{background:s.bg}}><s.icon size={22} color={s.color}/></div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid-2">
        <div className="card">
          <div className="card-title mb-16">Today's Schedule</div>
          <div className="timeline">
            {todayScheduleFaculty.map((s,i)=>(
              <div className="timeline-item" key={i}>
                <div className="timeline-time">{s.time}</div>
                <div className="timeline-content">
                  <div className="timeline-title">{s.subject}</div>
                  <div className="timeline-sub">{s.batch} · {s.room}</div>
                </div>
                <span className={`badge ${statusColor[s.status]}`}>{s.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="card mb-24">
            <div className="card-title mb-16">Upcoming Tasks</div>
            <div className="timeline">
              <div className="timeline-item"><div className="timeline-time">Tomorrow</div><div className="timeline-content"><div className="timeline-title">Submit DS Lab Marks</div><div className="timeline-sub">CSE-A · Deadline</div></div></div>
              <div className="timeline-item"><div className="timeline-time">May 12</div><div className="timeline-content"><div className="timeline-title">Faculty Meeting</div><div className="timeline-sub">Seminar Hall · 3 PM</div></div></div>
              <div className="timeline-item"><div className="timeline-time">May 15</div><div className="timeline-content"><div className="timeline-title">Mid-Sem Exam Duty</div><div className="timeline-sub">Exam Hall 2</div></div></div>
            </div>
          </div>
          <div className="card">
            <div className="card-title mb-16">Recent Announcements</div>
            {announcements.slice(0,2).map(a=>(
              <div key={a.id} style={{padding:'12px 0',borderBottom:'1px solid var(--border-light)'}}>
                <div className="font-semibold text-sm">{a.title}</div>
                <div className="text-xs text-muted mt-8">{a.date} · {a.author}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PortalLayout>
  )
}
