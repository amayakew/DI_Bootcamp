import {useState} from 'react';
import { TextField, Button, Container, Typography, Box, Link, CircularProgress, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import {loginUser} from '../../features/authSlice'


const LoginPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {errorLogin, loading} = useSelector((state: RootState) => state.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = () => {
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        };
        dispatch(loginUser({ email, password }))
        .unwrap()
        .then(() => {
            setShowSuccess(true);
        })
        .catch(() => {
            setShowSuccess(false);
        });
    };


    return (
        <Container maxWidth="sm">
          <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h4" textAlign="center">Log In</Typography>
            {errorLogin && (<Alert severity="error">{errorLogin}</Alert>)}
            {showSuccess && (
                <Alert severity="success">
                    Logged In successful! Redirecting...
                </Alert>
            )}
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit} disabled={loading}>
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Log In'}
            </Button>
            <Typography variant="body2" textAlign="center">
                Don't have an account?{' '}
                <Link component={RouterLink} to="/signup">
                    Sign Up
                </Link>
            </Typography>
          </Box>
        </Container>
      );
};

export default LoginPage;