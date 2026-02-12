import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import('./page/defaultPage/homepage.js'))
const UserDashboard = lazy(() => import('./page/user/user.dashboard.js'))
const UserLogin = lazy(() => import('./page/user/user.login.js'))
const UserRegister = lazy(() => import('./page/user/user.register.js'))
const AdminDashboard = lazy(() => import('./page/admin/admin.dashboard.js'))
const AdminLogin = lazy(() => import('./page/admin/admin.login.js'))
const ExamPage = lazy(() => import('./page/user/examPage.js'))
const InstructionsPage =  lazy(() => import('./page/user/instructionsPage.js'))

function App() {
  return (<>
    <BrowserRouter>
      <Suspense fallback={<div className="d-flex justify-content-center align-items-center vh-100">Loading ....</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/User/User-Dashboard" element={<UserDashboard />} />
          <Route path="/User/User-Login" element={<UserLogin />} />
          <Route path="/User/User-Register" element={<UserRegister />} />
          <Route path="/User/ExamPage" element={<ExamPage />} />
          <Route path="/User/InstructionsPage" element={<InstructionsPage />} />
          <Route path="/Admin/Admin-Dashboard" element={<AdminDashboard />} />
          <Route path="/Admin/Admin-Login" element={<AdminLogin />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>);
}

export default App;
