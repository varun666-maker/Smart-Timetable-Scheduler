import { useState } from 'react'
import PortalLayout from '../../components/PortalLayout'
import { notifications } from '../../data/mockData'
import { Calendar, Bell, Megaphone, CheckCheck, FileText } from 'lucide-react'

const iconMap = {calendar:Calendar,bell:Bell,megaphone:Megaphone, fileText: FileText}
const tabs = ['All','Timetable Updates','Announcements', 'Exams']

export default function StudentNotifications() {
  const [tab, setTab] = useState('All')
  const filtered = tab==='All' ? notifications : notifications.filter(n=>n.cat===tab)
  
  return (
    <PortalLayout role="student" title="Notifications">
      <div className="flex items-center justify-between mb-24">
        <div className="tabs" style={{marginBottom:0,borderBottom:'none'}}>
          {tabs.map(t=><div key={t} className={`tab ${tab===t?'active':''}`} onClick={()=>setTab(t)}>{t}</div>)}
        </div>
        <button className="btn btn-secondary btn-sm"><CheckCheck size={14}/>Mark All as Read</button>
      </div>
      <div className="flex-col gap-8" style={{display:'flex'}}>
        {filtered.map(n=>{
          const Icon = iconMap[n.icon]||Bell
          return (
            <div key={n.id} className="card" style={{padding:'16px 20px',borderLeft:!n.read?'3px solid var(--primary)':'3px solid transparent'}}>
              <div className="flex items-center gap-16">
                <div style={{width:40,height:40,borderRadius:'50%',background:!n.read?'var(--primary-bg)':'var(--surface)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <Icon size={18} color={!n.read?'var(--primary)':'var(--text-muted)'}/>
                </div>
                <div style={{flex:1}}>
                  <div className="text-sm">{n.msg}</div>
                  <div className="text-xs text-muted mt-8">{n.time}</div>
                </div>
                {!n.read && <span className="badge badge-primary">New</span>}
              </div>
            </div>
          )
        })}
        {filtered.length === 0 && <div className="text-center text-muted" style={{padding: '40px'}}>No notifications in this category.</div>}
      </div>
    </PortalLayout>
  )
}
