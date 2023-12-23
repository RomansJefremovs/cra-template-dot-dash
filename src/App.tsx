import React from 'react';
import ProtectedRoute from "./Dash/Protected/ProtectedRoute";
import Dashboard from "./Dash/Dashboard";
import Login from "./Dash/Login/Login";
import HomePage from "./Dot/Pages/HomePage";
import NotFound from "./Dot/Pages/NotFound";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {useThemeContext} from "./Contexts/ThemeContext";
import {Box, ThemeProvider} from "@mui/material";
import {AuthProvider} from "./Contexts/Auth";
import ChildComponent from "./Dash/ChildrenComponents/ChildComponent/ChildComponent";
import CssBaseline from "@mui/material/CssBaseline";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin-dashboard",
    element: (
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
    ),
    children: [
      { path: "child", element: <ProtectedRoute><ChildComponent /></ProtectedRoute> },
    ],
  },
  {
    path: "*",
    element: <NotFound/>,
  },
]);
function App() {
const {theme} = useThemeContext();
  return (
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Box width={'100%'} height={'100%'} bgcolor={theme.palette.background.default}>
              <RouterProvider router={router} />
            </Box>
          </AuthProvider>
          <CssBaseline />
        </ThemeProvider>
  );
}

export default App;
