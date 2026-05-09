import PortalLayout from '../../components/PortalLayout'
import { Mail, Phone, Calendar, Hash, BookOpen, GraduationCap } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const performanceData = [
  { semester: 'Sem 1', cgpa: 8.2 },
  { semester: 'Sem 2', cgpa: 8.5 },
  { semester: 'Sem 3', cgpa: 8.8 },
  { semester: 'Sem 4', cgpa: 8.6 },
  { semester: 'Sem 5', cgpa: 9.0 },
]

export default function StudentProfile() {
  return (
    <PortalLayout role="student" title="Profile">
      <div className="grid-2">
        <div className="card text-center">
          <div style={{width:80,height:80,borderRadius:'50%',background:'linear-gradient(135deg,var(--primary),var(--primary-light))',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px',fontSize:'1.75rem',fontWeight:700,color:'#fff'}}>SD</div>
          <h2>Sarah Doe</h2>
          <div className="text-muted text-sm mt-8">B.Tech Computer Science</div>
          <div className="flex gap-8 justify-center mt-8">
            <div className="badge badge-primary">Semester 5</div>
            <div className="badge badge-teal">Batch A</div>
          </div>
          
          <div className="flex-col gap-12 mt-24" style={{display:'flex',textAlign:'left'}}>
            <div className="flex items-center gap-12"><Hash size={16} color="var(--text-muted)"/><span className="text-sm">Roll No: CS24100</span></div>
            <div className="flex items-center gap-12"><Mail size={16} color="var(--text-muted)"/><span className="text-sm">sarah.doe@student.nit.edu</span></div>
            <div className="flex items-center gap-12"><Phone size={16} color="var(--text-muted)"/><span className="text-sm">+91 98765 00000</span></div>
            <div className="flex items-center gap-12"><Calendar size={16} color="var(--text-muted)"/><span className="text-sm">DOB: 15 Aug 2004</span></div>
          </div>
        </div>
        
        <div>
          <div className="card mb-24">
            <div className="card-title mb-16">Academic Overview</div>
            <div className="grid-3 mb-24">
              <div style={{padding:16,background:'var(--surface)',borderRadius:'var(--radius-sm)',textAlign:'center'}}><div className="stat-value text-primary">8.8</div><div className="text-xs text-muted mt-8">CGPA</div></div>
              <div style={{padding:16,background:'var(--surface)',borderRadius:'var(--radius-sm)',textAlign:'center'}}><div className="stat-value text-success">85%</div><div className="text-xs text-muted mt-8">Attendance</div></div>
              <div style={{padding:16,background:'var(--surface)',borderRadius:'var(--radius-sm)',textAlign:'center'}}><div className="stat-value text-warning">90</div><div className="text-xs text-muted mt-8">Credits Earned</div></div>
            </div>
            <button className="btn btn-secondary w-full"><BookOpen size={16} />View Academic Records</button>
          </div>
          
          <div className="card">
            <div className="card-title mb-16">Performance Trend</div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="semester" tick={{fontSize:12}} />
                <YAxis domain={[0, 10]} tick={{fontSize:12}} />
                <Tooltip />
                <Line type="monotone" dataKey="cgpa" stroke="var(--primary)" strokeWidth={3} dot={{r: 4, fill: 'var(--primary)'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </PortalLayout>
  )
}
