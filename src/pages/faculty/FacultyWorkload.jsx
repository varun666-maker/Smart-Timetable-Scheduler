import PortalLayout from '../../components/PortalLayout'
import { BookOpen, CheckCircle, Clock, BarChart3 } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'

const stats = [
  {label:'Total Assigned',value:'22',icon:BookOpen,color:'#4F46E5',bg:'rgba(79,70,229,0.1)'},
  {label:'Classes Taken',value:'18',icon:CheckCircle,color:'#10B981',bg:'rgba(16,185,129,0.1)'},
  {label:'Remaining',value:'4',icon:Clock,color:'#F59E0B',bg:'rgba(245,158,11,0.1)'},
  {label:'Workload %',value:'87%',icon:BarChart3,color:'#3B82F6',bg:'rgba(59,130,246,0.1)'},
]
const donut = [{name:'Theory',value:14,color:'#4F46E5'},{name:'Lab',value:6,color:'#14B8A6'},{name:'Mentoring',value:2,color:'#F59E0B'}]
const barData = [{sub:'DS',classes:8},{sub:'OS',classes:6},{sub:'DS Lab',classes:4},{sub:'Mentoring',classes:2}]

export default function FacultyWorkload() {
  return (
    <PortalLayout role="faculty" title="Workload">
      <div className="stats-row">
        {stats.map(s=>(
          <div className="stat-card" key={s.label}>
            <div className="stat-card-inner">
              <div><div className="stat-label">{s.label}</div><div className="stat-value">{s.value}</div></div>
              <div className="stat-icon" style={{background:s.bg}}><s.icon size={22} color={s.color}/></div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid-2">
        <div className="card">
          <div className="card-title mb-16">Workload Distribution</div>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart><Pie data={donut} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" paddingAngle={3}>{donut.map((d,i)=><Cell key={i} fill={d.color}/>)}</Pie><Tooltip/></PieChart>
          </ResponsiveContainer>
          <div className="flex gap-16 justify-between mt-8">
            {donut.map(d=><div key={d.name} className="flex items-center gap-8"><span style={{width:8,height:8,borderRadius:'50%',background:d.color,display:'inline-block'}}/><span className="text-sm text-muted">{d.name} ({Math.round(d.value/22*100)}%)</span></div>)}
          </div>
        </div>
        <div className="card">
          <div className="card-title mb-16">Classes per Subject</div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}><CartesianGrid strokeDasharray="3 3" stroke="var(--border)"/><XAxis dataKey="sub" tick={{fontSize:12}}/><YAxis tick={{fontSize:12}}/><Tooltip/><Bar dataKey="classes" fill="var(--primary)" radius={[6,6,0,0]}/></BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </PortalLayout>
  )
}
