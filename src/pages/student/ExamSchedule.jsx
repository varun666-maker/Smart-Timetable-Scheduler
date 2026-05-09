import PortalLayout from '../../components/PortalLayout'
import { exams } from '../../data/mockData'
import { Calendar, Clock, MapPin } from 'lucide-react'

export default function ExamSchedule() {
  const getUrgency = (days) => {
    if (days <= 7) return 'badge-danger';
    if (days <= 14) return 'badge-warning';
    return 'badge-info';
  };

  return (
    <PortalLayout role="student" title="Exam Schedule">
      <div className="flex justify-between items-center mb-24">
        <h3>Upcoming Exams</h3>
        <button className="btn btn-primary">View Full Timetable</button>
      </div>
      <div className="flex-col gap-16" style={{ display: 'flex' }}>
        {exams.map((ex, i) => (
          <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px' }}>
            <div className="flex items-center gap-16">
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: 'var(--surface-2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span className="text-xs font-semibold text-muted">{new Date(ex.date).toLocaleString('default', { month: 'short' })}</span>
                <span className="font-bold text-lg">{new Date(ex.date).getDate()}</span>
              </div>
              <div>
                <div className="font-bold text-lg mb-4">{ex.subject} <span className="text-sm font-normal text-muted ml-8">{ex.code}</span></div>
                <div className="flex items-center gap-16 text-sm text-muted">
                  <div className="flex items-center gap-4"><Clock size={14} />{ex.time} ({ex.duration})</div>
                  <div className="flex items-center gap-4"><MapPin size={14} />{ex.hall}</div>
                </div>
              </div>
            </div>
            <div>
               <span className={`badge ${getUrgency(ex.daysLeft)}`}>In {ex.daysLeft} Days</span>
            </div>
          </div>
        ))}
      </div>
    </PortalLayout>
  )
}
