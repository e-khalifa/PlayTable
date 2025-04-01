"use client";

import { useEffect } from "react";
import useGameStore from "../stores/useGameStore";
import GameCard from "../components/card";
import { Container, Box, Typography, CircularProgress, Alert } from "@mui/material";

export default function Games() {
    const { games, fetchGames, error, loading } = useGameStore();

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <Container maxWidth="lg">
            <Typography
                variant="h3"
                gutterBottom
                textAlign="center"
                fontWeight={700}
                color="#FFD700"
                sx={{ textTransform: "uppercase", letterSpacing: 2, fontFamily: "Orbitron, sans-serif", textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
            >
                Game List
            </Typography>
            {loading && <CircularProgress sx={{ display: "block", margin: "auto" }} />}
            {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
            {
                !loading && !error && (
                    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
                        {games.slice(0, 12).map((game) => (
                            <Box key={game.id}>
                                <GameCard game={game} />
                            </Box>
                        ))}
                    </Box>
                )
            }
        </Container >
    );
}