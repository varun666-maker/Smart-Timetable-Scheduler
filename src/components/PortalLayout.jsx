import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default function PortalLayout({ role, title, children }) {
  return (
    <div className="portal-layout">
      <Sidebar role={role} />
      <div className="main-content">
        <TopBar title={title} />
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  )
}
