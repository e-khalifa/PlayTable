"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import useAuthStore from "../stores/useAuthStore";
import { Button } from "@mui/material";

const NavBar = () => {
    const { currentUser, logout } = useAuthStore();
    const handleLogout = () => {
        logout();
    }
    return (
        <AppBar position="static" sx={{ backgroundColor: "#1a1a1a", mb: 5, boxShadow: 3 }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link href="/games" style={{ textDecoration: "none" }}>
                    <Typography variant="h5" sx={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, color: "#FFD700", textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}>
                        PlayTable
                    </Typography>
                </Link>
                <div style={{ display: "flex", gap: "20px" }}>
                    <Link href="/leaderboard" style={{ textDecoration: "none", color: "#FFD700", fontWeight: "bold", fontFamily: "Orbitron, sans-serif" }}>Leaderboard</Link>
                    {currentUser ?
                        <Link href="#" onClick={handleLogout} style={{ textDecoration: "none", color: "#FFD700", fontWeight: "bold", fontFamily: "Orbitron, sans-serif", cursor: "pointer" }}>
                            Logout
                        </Link>
                        :
                        <Link href="/login" style={{ textDecoration: "none", color: "#FFD700", fontWeight: "bold", fontFamily: "Orbitron, sans-serif" }}>Login</Link>
                    }                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
