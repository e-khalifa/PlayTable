"use client";

import { Box, Button, Card, Container, TextField, Typography } from "@mui/material";
import Link from "next/link";
import useUserStore from "../stores/useUserStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "../stores/useAuthStore";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const { getUsers, users } = useUserStore();
    const { login } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find((u) => u.email === email);
        if (user) {
            if (user.password === password) {
                login(user);
                router.push('/games');
            } else {
                alert('Wrong Password');
            }
        } else {
            alert('User not found, register first');
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
                    Welcome Back!
                </Typography>
                <Typography variant="body1" color="rgba(255, 255, 255, 0.7)" sx={{ mb: 3 }}>
                    Dive into a world of endless gaming adventures!
                </Typography>

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
                        mb: 3
                    }}
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                />

                {/* Sign In Button */}
                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleLogin}
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
                    Sign In
                </Button>

                <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                    Don't have an account?{" "}
                    <Link href="/register" style={{ color: "#FFC107", textDecoration: "none", fontWeight: "bold" }}>
                        Sign up!
                    </Link>
                </Typography>
            </Card>
        </Container>
    );
};

export default Login;
