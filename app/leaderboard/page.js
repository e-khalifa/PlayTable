"use client";

import { useEffect } from "react";
import useUserStore from "../stores/useUserStore";
import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Avatar } from "@mui/material";

const Leaderboard = () => {
    const { getUsers, users } = useUserStore();

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const sortedUsers = [...users].sort((a, b) => b.points - a.points);

    const rankColors = ["#FFD700", "#C0C0C0", "#CD7F32"];

    return (
        <Container
            maxWidth="md"
            sx={{
                mt: 4,
                backgroundColor: "#1a1a1a",
                p: 4,
                borderRadius: 3,
                boxShadow: 3,
                color: "#DDDDDD",
                textAlign: "center"
            }}
        >
            <Typography
                variant="h3"
                gutterBottom
                sx={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    color: "#FFC107",
                    textShadow: "2px 2px 6px rgba(0,0,0,0.6)"
                }}
            >
                Leaderboard
            </Typography>

            {sortedUsers.length > 0 ? (
                <List sx={{ width: "100%", bgcolor: "transparent" }}>
                    {sortedUsers.map((user, index) => (
                        <Paper
                            key={user.id}
                            elevation={3}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                p: 2,
                                mb: 2,
                                backgroundColor: "#242424",
                                border: index < 3 ? `2px solid ${rankColors[index]}` : "none",
                                boxShadow: "0px 4px 10px rgba(0,0,0,0.5)"
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <Avatar sx={{ bgcolor: rankColors[index] || "#007BFF", fontWeight: "bold" }}>
                                    {index + 1}
                                </Avatar>
                                <ListItemText
                                    primary={user.firstName}
                                    primaryTypographyProps={{
                                        fontSize: "1.2rem",
                                        fontWeight: 600,
                                        color: "#DDDDDD",
                                        fontFamily: "Orbitron, sans-serif"
                                    }}
                                />
                            </Box>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", color: rankColors[index] || "#007BFF" }}
                            >
                                {user.points} pts
                            </Typography>
                        </Paper>
                    ))}
                </List>
            ) : (
                <Typography variant="h6" sx={{ color: "#FF5733" }}>No users found</Typography>
            )}
        </Container>
    );
};

export default Leaderboard;
