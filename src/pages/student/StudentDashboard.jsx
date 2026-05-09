import { useState } from 'react'
import PortalLayout from '../../components/PortalLayout'
import ClassroomStatus from '../../components/ClassroomStatus'
import { todayScheduleStudent, announcements } from '../../data/mockData'
import { BookOpen, Clock, Coffee, BarChart3, MessageCircle, Send, X } from 'lucide-react'

const stats = [
  {label:"Today's Classes",value:'5',icon:BookOpen,color:'#4F46E5',bg:'rgba(79,70,229,0.1)'},
  {label:'Next Class',value:'DS Lab · 1PM',icon:Clock,color:'#14B8A6',bg:'rgba(20,184,166,0.1)'},
  {label:'Free Periods',value:'3',icon:Coffee,color:'#F59E0B',bg:'rgba(245,158,11,0.1)'},
]
const statusColor = {Completed:'badge-success',Ongoing:'badge-primary',Upcoming:'badge-info'}

export default function StudentDashboard() {
  const [chat, setChat] = useState(false)
  return (
    <PortalLayout role="student" title="Dashboard">
      <div className="stats-row">
        {stats.map(s=>(
          <div className="stat-card" key={s.label}>
            <div className="stat-card-inner">
              <div><div className="stat-label">{s.label}</div><div className="stat-value" style={{fontSize:s.label==='Next Class'?'1.1rem':undefined}}>{s.value}</div></div>
              <div className="stat-icon" style={{background:s.bg}}><s.icon size={22} color={s.color}/></div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid-2">
        <div className="card">
          <div className="card-title mb-16">Today's Schedule</div>
          <div className="timeline">
            {todayScheduleStudent.map((s,i)=>(
              <div className="timeline-item" key={i}>
                <div className="timeline-time">{s.time}</div>
                <div className="timeline-content"><div className="timeline-title">{s.subject}</div><div className="timeline-sub">{s.faculty} · {s.room}</div></div>
                <span className={`badge ${statusColor[s.status]}`}>{s.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-title mb-16">Announcements</div>
          {announcements.map(a=>(
            <div key={a.id} style={{padding:'14px 0',borderBottom:'1px solid var(--border-light)'}}>
              <div className="font-semibold text-sm">{a.title}</div>
              <div className="text-xs text-muted mt-8">{a.content.slice(0,80)}...</div>
              <div className="text-xs text-muted mt-8">{a.date}</div>
            </div>
          ))}
        </div>
      </div>
      <ClassroomStatus role="student" />
      <div className="fab" onClick={()=>setChat(!chat)}>{chat?<X size={24}/>:<MessageCircle size={24}/>}</div>
      {chat&&(
        <div className="chat-panel">
          <div className="chat-header">Ask Assistant</div>
          <div className="chat-body">
            <div className="chat-msg bot">Hi! I'm your Smart Timetable assistant. How can I help you today?</div>
            <div className="chat-msg user">When is my next free period?</div>
            <div className="chat-msg bot">Your next free period is at 11:00 AM today. You have a 2-hour gap before DS Lab at 1:00 PM.</div>
          </div>
          <div className="chat-input-row"><input className="form-input" placeholder="Type a message..."/><button className="btn btn-primary btn-sm"><Send size={14}/></button></div>
        </div>
      )}
    </PortalLayout>
  )
}
