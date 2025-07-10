import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Toolbar from "./components/Toolbar"; // ← assumed exists
import useAuth from "./context/useAuth";
import MainLayout from "./components/MainLayout"; // ← assumed exists
function App() {
  return (
    <Router>
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </Router>
  );
}

// ✅ This is rendered *inside* AuthProvider, so useAuth works
function MainApp() {
  const { userData, currentUser } = useAuth();

  return (
    <div className="flex flex-col">
      {currentUser && userData && <Toolbar userName={userData.name} />}
      <div className="flex-1 bg-white">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/student"
            element={
              <ProtectedRoute>
                <MainLayout userName={userData?.name} showBackground={true}>
                  <StudentDashboard />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <MainLayout userName={userData?.name} showBackground={false}>
                  {/* <Dashboard /> */}
                </MainLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AuthProvider from "./context/AuthProvider";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Login from "./pages/Login";
// import StudentDashboard from "./pages/StudentDashboard";
// import TeacherDashboard from "./pages/TeacherDashboard";
// import MainLayout from "./components/MainLayout";
// import useAuth from "./context/useAuth";

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <MainApp />
//       </AuthProvider>
//     </Router>
//   );
// }

// function MainApp() {
//   const { userData, currentUser, loading } = useAuth();

//   // Optional loading fallback
//   if (loading) {
//     return (
//       <div className="h-screen flex items-center justify-center text-gray-600">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />

//       <Route
//         path="/student"
//         element={
//           <ProtectedRoute>
//             <MainLayout userName={userData?.name} showBackground={true}>
//               <StudentDashboard />
//             </MainLayout>
//           </ProtectedRoute>
//         }
//       />

//       <Route
//         path="/dashboard"
//         element={
//           <ProtectedRoute>
//             <MainLayout userName={userData?.name}>
//               <TeacherDashboard />
//               {/* Replace above if you have a different Dashboard component */}
//             </MainLayout>
//           </ProtectedRoute>
//         }
//       />
//     </Routes>
//   );
// }

// export default App;
