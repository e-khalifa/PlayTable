"use client";
import { Box, Button, Card, Container, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useAuthStore from '../stores/useAuthStore';
import useUserStore from '../stores/useUserStore';
import Link from 'next/link';

const Register = () => {
    const [firstName, setfName] = useState('');
    const [lastName, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setCpassword] = useState('');
    const { getUsers, addUser, users } = useUserStore();
    const { login } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const handleRegister = (e) => {
        e.preventDefault();
        const user = users.find((u) => u.email === email);
        if (user) {
            alert('Email is already in use, please sign in.');
        } else if (password !== confirmPassword) {
            alert('Passwords must match.');
        } else {
            const newUser = { firstName, lastName, email, password };
            addUser(newUser);
            login(newUser);
            router.push('/games');
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 6 }}>
            <Card
                sx={{
                    borderRadius: 3,
                    bgcolor: "#1a1a1a",
                    color: "#fff",
                    p: 4,
                    textAlign: "center",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.7)"
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                        fontFamily: "Orbitron, sans-serif",
                        color: "#FFC107",
                        textShadow: "2px 2px 6px rgba(0,0,0,0.6)"
                    }}
                >
                    Create an Account
                </Typography>
                <Typography variant="body1" color="rgba(255, 255, 255, 0.7)" sx={{ mb: 3 }}>
                    Join PlayTable and explore an amazing world of Games!
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <TextField
                        required
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        sx={{
                            input: { color: "#fff" },
                            label: { color: "#aaa" },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: "#444" },
                                '&:hover fieldset': { borderColor: "#FFC107" },
                                '&.Mui-focused fieldset': { borderColor: "#FFC107" },
                            }
                        }}
                        value={firstName}
                        onChange={(e) => setfName(e.target.value)}
                    />
                    <TextField
                        required
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        sx={{
                            input: { color: "#fff" },
                            label: { color: "#aaa" },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: "#444" },
                                '&:hover fieldset': { borderColor: "#FFC107" },
                                '&.Mui-focused fieldset': { borderColor: "#FFC107" },
                            }
                        }}
                        value={lastName}
                        onChange={(e) => setlName(e.target.value)}
                    />
                </Box>

                <TextField
                    required
                    type="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    sx={{
                        input: { color: "#fff" },
                        label: { color: "#aaa" },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: "#444" },
                            '&:hover fieldset': { borderColor: "#FFC107" },
                            '&.Mui-focused fieldset': { borderColor: "#FFC107" },
                        },
                        mb: 2
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    required
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    sx={{
                        input: { color: "#fff" },
                        label: { color: "#aaa" },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: "#444" },
                            '&:hover fieldset': { borderColor: "#FFC107" },
                            '&.Mui-focused fieldset': { borderColor: "#FFC107" },
                        },
                        mb: 2
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <TextField
                    required
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    sx={{
                        input: { color: "#fff" },
                        label: { color: "#aaa" },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: "#444" },
                            '&:hover fieldset': { borderColor: "#FFC107" },
                            '&.Mui-focused fieldset': { borderColor: "#FFC107" },
                        },
                        mb: 3
                    }}
                    value={confirmPassword}
                    onChange={(e) => setCpassword(e.target.value)}
                />

                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleRegister}
                    sx={{
                        bgcolor: "#FFC107",
                        color: "#000",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontFamily: "Orbitron, sans-serif",
                        "&:hover": { bgcolor: "#FFA000" },
                        mb: 2,
                        py: 1.2
                    }}
                >
                    Sign Up
                </Button>

                <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                    Already have an account?{" "}
                    <Link href="/login" style={{ color: "#FFC107", textDecoration: "none", fontWeight: "bold" }}>
                        Sign in!
                    </Link>
                </Typography>
            </Card>
        </Container>
    );
};

export default Register;
