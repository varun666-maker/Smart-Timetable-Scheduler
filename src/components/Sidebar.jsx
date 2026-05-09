import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Settings, CalendarDays, AlertTriangle, Users, FileText, Megaphone, ClipboardList, BookOpen, Bell, ArrowLeftRight, UserCircle, BarChart3, GraduationCap, MessageSquare, Calendar, Star, LogOut } from 'lucide-react'

const iconMap = { LayoutDashboard, Settings, CalendarDays, AlertTriangle, Users, FileText, Megaphone, ClipboardList, BookOpen, Bell, ArrowLeftRight, UserCircle, BarChart3, GraduationCap, MessageSquare, Calendar, Star }

const hodNav = [
  {to:'/hod/dashboard',icon:'LayoutDashboard',label:'Dashboard'},
  {to:'/hod/setup',icon:'ClipboardList',label:'Setup Wizard'},
  {to:'/hod/timetable',icon:'CalendarDays',label:'Timetable Review'},
  {to:'/hod/conflicts',icon:'AlertTriangle',label:'Conflict Detection'},
  {to:'/hod/workload',icon:'BarChart3',label:'Faculty Workload'},
  {to:'/hod/leave',icon:'FileText',label:'Leave Requests'},
  {to:'/hod/announcements',icon:'Megaphone',label:'Announcements'},
  {to:'/hod/settings',icon:'Settings',label:'Settings'},
]
const facultyNav = [
  {to:'/faculty/dashboard',icon:'LayoutDashboard',label:'Dashboard'},
  {to:'/faculty/timetable',icon:'CalendarDays',label:'My Timetable'},
  {to:'/faculty/daily',icon:'BookOpen',label:'Daily Schedule'},
  {to:'/faculty/leave',icon:'FileText',label:'Leave Request'},
  {to:'/faculty/swap',icon:'ArrowLeftRight',label:'Swap Request'},
  {to:'/faculty/workload',icon:'BarChart3',label:'Workload'},
  {to:'/faculty/notifications',icon:'Bell',label:'Notifications'},
  {to:'/faculty/profile',icon:'UserCircle',label:'Profile'},
]
const studentNav = [
  {to:'/student/dashboard',icon:'LayoutDashboard',label:'Dashboard'},
  {to:'/student/timetable',icon:'CalendarDays',label:'My Timetable'},
  {to:'/student/subjects',icon:'BookOpen',label:'Subjects'},
  {to:'/student/exams',icon:'ClipboardList',label:'Exam Schedule'},
  {to:'/student/notifications',icon:'Bell',label:'Notifications'},
  {to:'/student/calendar',icon:'Calendar',label:'Calendar'},
  {to:'/student/profile',icon:'UserCircle',label:'Profile'},
  {to:'/student/feedback',icon:'MessageSquare',label:'Feedback'},
]

const navMap = { hod: hodNav, faculty: facultyNav, student: studentNav }
const roleLabel = { hod: 'HOD / Admin', faculty: 'Faculty', student: 'Student' }

export default function Sidebar({ role }) {
  const nav = useNavigate()
  const items = navMap[role] || []
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">ST</div>
        <span>SmartTable</span>
      </div>
      <nav className="sidebar-nav">
        {items.map(it => {
          const Icon = iconMap[it.icon]
          return (
            <NavLink key={it.to} to={it.to} className={({isActive}) => `sidebar-item${isActive ? ' active' : ''}`}>
              {Icon && <Icon />}
              {it.label}
            </NavLink>
          )
        })}
      </nav>
      <div className="sidebar-footer">
        <div className="text-xs text-muted mb-8">{roleLabel[role]} Portal</div>
        <button className="sidebar-item" onClick={() => nav('/')} style={{width:'100%'}}>
          <LogOut size={20} />
          Exit Portal
        </button>
      </div>
    </aside>
  )
}
