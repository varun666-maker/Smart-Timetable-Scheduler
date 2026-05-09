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
          </div>
        ))}
      </div>
    </PortalLayout>
  )
}
