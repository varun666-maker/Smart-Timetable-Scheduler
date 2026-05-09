import PortalLayout from '../../components/PortalLayout'
import { studentSubjects } from '../../data/mockData'
import { BookOpen } from 'lucide-react'

export default function Subjects() {
  const getColor = u => u < 60 ? 'var(--danger)' : u < 75 ? 'var(--warning)' : 'var(--success)'
  
  return (
    <PortalLayout role="student" title="My Subjects">
      <div className="grid-3">
        {studentSubjects.map((sub, i) => (
          <div key={i} className="card">
            <div className="flex items-center justify-between mb-16">
              <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={20} color="var(--primary)" />
              </div>
              <div className="badge badge-primary">{sub.code}</div>
            </div>
            <h3 className="mb-8">{sub.name}</h3>
            <div className="text-sm text-muted mb-16">{sub.faculty}</div>
            
            <div className="flex-col gap-8 mb-24" style={{ display: 'flex' }}>
              <div className="flex justify-between text-sm"><span>Credits</span><strong>{sub.credits}</strong></div>
              <div className="flex justify-between text-sm"><span>Classes/Week</span><strong>{sub.classesWeek}</strong></div>
              <div className="flex justify-between text-sm"><span>Room</span><strong>{sub.room}</strong></div>
            </div>
            
            <div style={{ padding: 16, background: 'var(--surface)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: 16 }}>
               <div style={{ position: 'relative', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="48" height="48" viewBox="0 0 36 36">
                    <path stroke="var(--border)" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path stroke={getColor(sub.attendance)} strokeWidth="3" strokeDasharray={`${sub.attendance}, 100`} fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <span style={{ position: 'absolute', fontSize: '0.7rem', fontWeight: 'bold' }}>{sub.attendance}%</span>
               </div>
               <div>
                 <div className="text-sm font-semibold">Attendance</div>
                 <div className="text-xs text-muted">{sub.attendance >= 75 ? 'Good standing' : 'Needs attention'}</div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </PortalLayout>
  )
}
