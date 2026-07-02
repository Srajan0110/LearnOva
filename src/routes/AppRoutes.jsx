import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'

import Dashboard from '../pages/Dashboard/Dashboard.jsx'
import Courses from '../pages/Courses/Courses.jsx'
import Students from '../pages/Students/Students.jsx'
import MyLearning from '../pages/MyLearning/MyLearning.jsx'
import Assignment from '../pages/Assignment/Assignment.jsx'
import Quizzes from '../pages/Quizzes/Quizzes.jsx'
import LiveClasses from '../pages/LiveClasses/LiveClasses.jsx'
import CalendarPage from '../pages/Calendar/Calendar.jsx'
import Messages from '../pages/Messages/Messages.jsx'
import Notes from '../pages/Notes/Notes.jsx'
import Certificate from '../pages/Certificate/Certificate.jsx'
import Profile from '../pages/Profile/Profile.jsx'
import Settings from '../pages/Settings/Settings.jsx'
import Login from '../pages/Login/Login.jsx'
import Register from '../pages/Register/Register.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'

function AppRoutes() {
  return (
    <Routes>
      {/* Public auth routes render without the dashboard shell */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* App routes render inside the sidebar/navbar shell */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/my-learning" element={<MyLearning />} />
        <Route path="/assignments" element={<Assignment />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/live-classes" element={<LiveClasses />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
