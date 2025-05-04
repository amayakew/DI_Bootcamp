import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignupPage from './app/pages/SignupPage';
import LoginPage from './app/pages/LoginPage';
import HomePage from './app/pages/HomePage';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './app/store';
import {refreshToken} from './features/authSlice';
import { useEffect } from 'react';
import StoryViewerPage from './app/pages/StoryViewerPage';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage />} />
        <Route path="/signup" element={isLoggedIn ? <Navigate to="/home" /> : <SignupPage />} />
        <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/stories/:id" element={<StoryViewerPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
  </BrowserRouter>
  );
};

export default App;
