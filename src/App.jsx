import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HodDashboard from './pages/hod/HodDashboard'
import SetupWizard from './pages/hod/SetupWizard'
import TimetableReview from './pages/hod/TimetableReview'
import FacultyWorkloadHod from './pages/hod/FacultyWorkload'
import LeaveRequestsHod from './pages/hod/LeaveRequests'
import AnnouncementsHod from './pages/hod/Announcements'
import SettingsHod from './pages/hod/Settings'
import ManageUsers from './pages/hod/ManageUsers'
import FacultyDashboard from './pages/faculty/FacultyDashboard'
import FacultyTimetable from './pages/faculty/FacultyTimetable'
import DailySchedule from './pages/faculty/DailySchedule'
import FacultyLeave from './pages/faculty/FacultyLeave'
import SwapRequest from './pages/faculty/SwapRequest'
import FacultyWorkload from './pages/faculty/FacultyWorkload'
import FacultyNotifications from './pages/faculty/FacultyNotifications'
import FacultyProfile from './pages/faculty/FacultyProfile'
import StudentDashboard from './pages/student/StudentDashboard'
import StudentTimetable from './pages/student/StudentTimetable'
import Subjects from './pages/student/Subjects'
import StudentNotifications from './pages/student/StudentNotifications'
import StudentCalendar from './pages/student/StudentCalendar'
import StudentProfile from './pages/student/StudentProfile'
import Feedback from './pages/student/Feedback'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/hod/dashboard" element={<HodDashboard />} />
      <Route path="/hod/setup" element={<SetupWizard />} />
      <Route path="/hod/timetable" element={<TimetableReview />} />
      <Route path="/hod/workload" element={<FacultyWorkloadHod />} />
      <Route path="/hod/leave" element={<LeaveRequestsHod />} />
      <Route path="/hod/announcements" element={<AnnouncementsHod />} />
      <Route path="/hod/users" element={<ManageUsers />} />
      <Route path="/hod/settings" element={<SettingsHod />} />
      <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
      <Route path="/faculty/timetable" element={<FacultyTimetable />} />
      <Route path="/faculty/daily" element={<DailySchedule />} />
      <Route path="/faculty/leave" element={<FacultyLeave />} />
      <Route path="/faculty/swap" element={<SwapRequest />} />
      <Route path="/faculty/workload" element={<FacultyWorkload />} />
      <Route path="/faculty/notifications" element={<FacultyNotifications />} />
      <Route path="/faculty/profile" element={<FacultyProfile />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/student/timetable" element={<StudentTimetable />} />
      <Route path="/student/subjects" element={<Subjects />} />
      <Route path="/student/notifications" element={<StudentNotifications />} />
      <Route path="/student/calendar" element={<StudentCalendar />} />
      <Route path="/student/profile" element={<StudentProfile />} />
      <Route path="/student/feedback" element={<Feedback />} />
    </Routes>
  )
}
