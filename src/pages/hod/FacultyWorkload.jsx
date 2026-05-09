import PortalLayout from '../../components/PortalLayout'
import { faculty } from '../../data/mockData'

export default function FacultyWorkload() {
  const getColor = u => u > 95 ? 'var(--danger)' : u > 80 ? 'var(--warning)' : 'var(--success)'
  const getStatus = u => u > 95 ? 'Overloaded' : u > 80 ? 'High' : 'Normal'
  const getBadge = u => u > 95 ? 'badge-danger' : u > 80 ? 'badge-warning' : 'badge-success'

  return (
    <PortalLayout role="hod" title="Faculty Workload">
      <div className="table-wrapper">
        <table className="table">
          <thead><tr><th>Faculty Name</th><th>Total Classes</th><th>Total Hours</th><th>Max Limit</th><th>Utilization</th><th>Status</th></tr></thead>
          <tbody>
            {faculty.map(f => (
              <tr key={f.id}>
                <td className="font-semibold">{f.name}</td>
                <td>{f.totalClasses}</td>
                <td>{f.totalHours} hrs</td>
                <td>{f.maxLimit} hrs</td>
                <td style={{minWidth:180}}>
                  <div className="flex items-center gap-12">
                    <div className="progress-bar" style={{flex:1}}>
                      <div className="progress-fill" style={{width:`${f.utilization}%`,background:getColor(f.utilization)}} />
                    </div>
                    <span className="text-sm font-semibold" style={{color:getColor(f.utilization)}}>{f.utilization}%</span>
                  </div>
                </td>
                <td><span className={`badge ${getBadge(f.utilization)}`}>{getStatus(f.utilization)}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PortalLayout>
  )
}
