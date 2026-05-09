import { Bell } from 'lucide-react'

export default function TopBar({ title }) {
  return (
    <header className="topbar">
      <h1 className="topbar-title">{title}</h1>
      <div className="topbar-actions">
        <div className="topbar-bell">
          <Bell />
          <span className="topbar-bell-badge" />
        </div>
        <div className="topbar-avatar">AK</div>
      </div>
    </header>
  )
}
