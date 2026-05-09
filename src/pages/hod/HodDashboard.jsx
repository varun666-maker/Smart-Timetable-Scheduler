import PortalLayout from '../../components/PortalLayout'
import { recentActivity } from '../../data/mockData'
import { CalendarDays, CheckCircle, Building2, AlertTriangle, Clock } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const stats = [
  {label:'Timetables Generated',value:'12',icon:CalendarDays,color:'#4F46E5',bg:'rgba(79,70,229,0.1)'},
  {label:'Pending Approvals',value:'5',icon:Clock,color:'#F59E0B',bg:'rgba(245,158,11,0.1)'},
  {label:'Active Departments',value:'4',icon:Building2,color:'#14B8A6',bg:'rgba(20,184,166,0.1)'},
  {label:'Conflicts Detected',value:'3',icon:AlertTriangle,color:'#EF4444',bg:'rgba(239,68,68,0.1)'},
]

const donutData = [
  {name:'Published',value:5,color:'#10B981'},
  {name:'Under Review',value:3,color:'#F59E0B'},
  {name:'Pending',value:2,color:'#3B82F6'},
  {name:'Draft',value:2,color:'#9CA3AF'},
]

const todayOverview = [
  {label:'Classes Scheduled',value:'42'},
  {label:'Faculty Engaged',value:'18'},
  {label:'Rooms Utilized',value:'12'},
  {label:'Free Slots',value:'8'},
]

const approvals = [
  {title:'CSE Sem-5 Timetable v3',dept:'Computer Science',status:'Pending'},
  {title:'ECE Sem-3 Timetable v1',dept:'Electronics',status:'Pending'},
  {title:'ME Sem-7 Timetable v2',dept:'Mechanical',status:'Under Review'},
]

export default function HodDashboard() {
  return (
    <PortalLayout role="hod" title="Dashboard">
      <div className="stats-row">
        {stats.map(s => (
          <div className="stat-card" key={s.label}>
            <div className="stat-card-inner">
              <div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-value">{s.value}</div>
              </div>
              <div className="stat-icon" style={{background:s.bg}}>
                <s.icon size={22} color={s.color} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid-3">
        <div className="card">
          <div className="card-title mb-16">Timetable Status</div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={donutData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" paddingAngle={3}>
                {donutData.map((d,i) => <Cell key={i} fill={d.color} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex gap-16 justify-between mt-8" style={{flexWrap:'wrap'}}>
            {donutData.map(d => (
              <div key={d.name} className="flex items-center gap-8">
                <span style={{width:8,height:8,borderRadius:'50%',background:d.color,display:'inline-block'}} />
                <span className="text-sm text-muted">{d.name} ({d.value})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-title mb-16">Today's Overview</div>
          <div className="flex-col gap-12" style={{display:'flex'}}>
            {todayOverview.map(o => (
              <div key={o.label} className="flex items-center justify-between" style={{padding:'12px 16px',background:'var(--surface)',borderRadius:'var(--radius-sm)'}}>
                <span className="text-sm">{o.label}</span>
                <span className="font-bold">{o.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-title mb-16">Upcoming Approvals</div>
          <div className="flex-col gap-12" style={{display:'flex'}}>
            {approvals.map((a,i) => (
              <div key={i} style={{padding:'14px 16px',background:'var(--surface)',borderRadius:'var(--radius-sm)'}}>
                <div className="font-semibold text-sm">{a.title}</div>
                <div className="text-xs text-muted mt-8">{a.dept}</div>
                <span className={`badge mt-8 ${a.status==='Pending'?'badge-warning':'badge-info'}`}>{a.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card mt-24">
        <div className="card-title mb-16">Recent Activity</div>
        <div className="timeline">
          {recentActivity.map((a,i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-time">{a.time}</div>
              <div className="timeline-content">
                <div className="timeline-title">{a.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PortalLayout>
  )
}
