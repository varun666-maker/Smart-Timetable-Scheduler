import { useState } from 'react'
import PortalLayout from '../../components/PortalLayout'
import { calendarEvents } from '../../data/mockData'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function StudentCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  
  // Generating a mock 35-cell grid for a month view (May 2026)
  const daysInMonth = Array.from({length: 31}, (_, i) => i + 1);
  const startOffset = 5; // Friday start for May 2026
  const grid = Array(35).fill(null);
  daysInMonth.forEach((day, i) => grid[startOffset + i] = day);

  const getEventColor = (type) => {
      if (type === 'class') return '#3B82F6';
      if (type === 'exam') return '#EF4444';
      if (type === 'assignment') return '#F59E0B';
      if (type === 'event') return '#10B981';
      return 'var(--text-muted)';
  };

  const handleDateClick = (day) => {
      if (!day) return;
      const dateStr = `2026-05-${day.toString().padStart(2, '0')}`;
      const events = calendarEvents[dateStr];
      if (events) setSelectedDate({ day, dateStr, events });
      else setSelectedDate(null);
  }

  return (
    <PortalLayout role="student" title="Academic Calendar">
      <div className="card mb-24 flex items-center justify-between" style={{ padding: '16px 24px' }}>
         <div className="flex items-center gap-16">
            <button className="btn btn-icon btn-secondary"><ChevronLeft size={18} /></button>
            <span className="font-bold text-lg">May 2026</span>
            <button className="btn btn-icon btn-secondary"><ChevronRight size={18} /></button>
         </div>
         <div className="flex gap-16 text-sm">
            <div className="flex items-center gap-8"><span className="cal-dot" style={{background: '#3B82F6', width: 10, height: 10}}></span> Class</div>
            <div className="flex items-center gap-8"><span className="cal-dot" style={{background: '#EF4444', width: 10, height: 10}}></span> Exam</div>
            <div className="flex items-center gap-8"><span className="cal-dot" style={{background: '#F59E0B', width: 10, height: 10}}></span> Assignment</div>
            <div className="flex items-center gap-8"><span className="cal-dot" style={{background: '#10B981', width: 10, height: 10}}></span> Event</div>
         </div>
      </div>

      <div className="cal-grid">
         {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d} className="cal-head">{d}</div>)}
         {grid.map((day, i) => {
            const dateStr = day ? `2026-05-${day.toString().padStart(2, '0')}` : '';
            const events = calendarEvents[dateStr] || [];
            return (
              <div key={i} className={`cal-cell ${!day ? 'other-month' : ''}`} onClick={() => handleDateClick(day)}>
                 {day && <div className="cal-date">{day}</div>}
                 <div className="cal-dots">
                    {events.map((ev, j) => (
                       <div key={j} className="cal-dot" style={{ background: getEventColor(ev.type) }} title={ev.label}></div>
                    ))}
                 </div>
              </div>
            )
         })}
      </div>

      {selectedDate && (
        <div className="modal-overlay" onClick={() => setSelectedDate(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3 className="mb-16">Events for {selectedDate.dateStr}</h3>
            <div className="flex-col gap-12" style={{ display: 'flex' }}>
               {selectedDate.events.map((ev, i) => (
                  <div key={i} className="flex items-center gap-12" style={{ padding: '12px', background: 'var(--surface)', borderRadius: 'var(--radius-sm)' }}>
                     <div className="cal-dot" style={{ background: getEventColor(ev.type), width: 12, height: 12 }}></div>
                     <div className="font-semibold">{ev.label}</div>
                  </div>
               ))}
            </div>
            <div className="flex gap-8 mt-24">
              <button className="btn btn-secondary" onClick={() => setSelectedDate(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </PortalLayout>
  )
}
