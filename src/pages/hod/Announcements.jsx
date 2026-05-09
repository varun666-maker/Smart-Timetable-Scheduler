import { useState } from 'react'
import PortalLayout from '../../components/PortalLayout'
import { announcements } from '../../data/mockData'
import { Plus, Send, Megaphone } from 'lucide-react'

export default function Announcements() {
  const [composing, setComposing] = useState(false)
  return (
    <PortalLayout role="hod" title="Announcements">
      <div className="flex justify-between items-center mb-24">
        <h3>{announcements.length} Announcements</h3>
        <button className="btn btn-primary" onClick={()=>setComposing(!composing)}><Plus size={16}/>New Announcement</button>
      </div>
      {composing && (
        <div className="card mb-24" style={{borderLeft:'4px solid var(--primary)'}}>
          <h4 className="mb-16">Compose Announcement</h4>
          <div className="form-group"><label className="form-label">Title</label><input className="form-input" placeholder="Announcement title"/></div>
          <div className="form-group"><label className="form-label">Content</label><textarea className="form-textarea" placeholder="Write your announcement..." rows={4}/></div>
          <div className="flex gap-8">
            <button className="btn btn-primary"><Send size={14}/>Publish</button>
            <button className="btn btn-secondary" onClick={()=>setComposing(false)}>Cancel</button>
          </div>
        </div>
      )}
      <div className="flex-col gap-16" style={{display:'flex'}}>
        {announcements.map(a => (
          <div className="card" key={a.id}>
            <div className="flex items-center gap-12 mb-8">
              <div style={{width:36,height:36,borderRadius:'var(--radius-sm)',background:'var(--primary-bg)',display:'flex',alignItems:'center',justifyContent:'center'}}><Megaphone size={18} color="var(--primary)"/></div>
              <div style={{flex:1}}>
                <div className="font-semibold">{a.title}</div>
                <div className="text-xs text-muted">{a.author} · {a.date}</div>
              </div>
            </div>
            <p className="text-sm text-muted">{a.content}</p>
          </div>
        ))}
      </div>
    </PortalLayout>
  )
}
