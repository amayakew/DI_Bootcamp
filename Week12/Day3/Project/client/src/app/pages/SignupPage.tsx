import {useState} from 'react';
import { TextField, Button, Container, Typography, Box, Link, Alert, CircularProgress } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import {registerUser} from '../../features/authSlice'

const SignupPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {errorRegister, loading} = useSelector((state: RootState) => state.auth);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = () => {
        if (!email || !username || !password) {
            alert('Please fill in all fields');
            return;
        };
        
        dispatch(registerUser({ email, username, password }))
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
            <Typography variant="h4" textAlign="center">Sign Up</Typography>
            {errorRegister && (<Alert severity="error">{errorRegister}</Alert>)}
            {showSuccess && (
                <Alert severity="success">
                    Signup successful! Please 
                    <Link component={RouterLink} to="/login"> Log in</Link>
                </Alert>
            )}
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
            />
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
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
            </Button>
            <Typography variant="body2" textAlign="center">
                Already have an account?{' '}
                <Link component={RouterLink} to="/login">
                    Log in
                </Link>
            </Typography>
          </Box>
        </Container>
      );
};

export default SignupPage;