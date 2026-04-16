import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import StudentDashboard from "./pages/studentDashboard";
import Calender from "./pages/Calender";
import Attendance from "./pages/Attendance";
import Chat from "./pages/Chat";
import SemesterAttendance from "./pages/SemesterAttendance";
import Feedback from "./pages/Feedback";
import WeeklySubjectFeedback from "./pages/WeeklySubjectFeedback";
import ApplyLeave from "./pages/ApplyLeave";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/calendar" element={<Calender />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/semester-attendance" element={<SemesterAttendance />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/weekly-subject-feedback" element={<WeeklySubjectFeedback />} />
      <Route path="/apply-leave" element={<ApplyLeave />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
