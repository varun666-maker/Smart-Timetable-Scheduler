import { useState } from 'react'
import { classroomStatusData } from '../data/mockData'

export default function ClassroomStatus({ role }) {
  const [rooms, setRooms] = useState(classroomStatusData)

  const toggleStatus = (index) => {
    if (role !== 'faculty') return;
    const newRooms = [...rooms];
    newRooms[index].occupied = !newRooms[index].occupied;
    if (!newRooms[index].occupied) {
       newRooms[index].faculty = '';
       newRooms[index].subject = '';
    } else {
       newRooms[index].faculty = 'You';
       newRooms[index].subject = 'Ad-hoc Session';
    }
    setRooms(newRooms);
  }

  return (
    <div className="card mt-24">
      <div className="card-title mb-16">Live Classroom Status</div>
      <div className="grid-3">
        {rooms.map((r, i) => (
          <div key={i} style={{ padding: '16px', background: 'var(--surface)', borderRadius: 'var(--radius-sm)', borderLeft: r.occupied ? '4px solid var(--danger)' : '4px solid var(--success)' }}>
            <div className="flex justify-between items-center mb-8">
              <span className="font-semibold">{r.name}</span>
              <span className={`badge ${r.occupied ? 'badge-danger' : 'badge-success'}`}>{r.occupied ? 'Occupied' : 'Free'}</span>
            </div>
            {r.occupied ? (
              <div className="text-xs text-muted">
                <div className="font-semibold" style={{ color: 'var(--text)' }}>{r.subject}</div>
                <div>{r.faculty}</div>
              </div>
            ) : (
              <div className="text-xs text-muted">Currently available</div>
            )}
            {role === 'faculty' && (
              <button className="btn btn-sm mt-12 w-full" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }} onClick={() => toggleStatus(i)}>
                {r.occupied ? 'Mark as Free' : 'Mark as Occupied'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
