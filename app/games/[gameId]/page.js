"use client";

import useGameStore from '@/app/stores/useGameStore';
import { Container, Typography, Box, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useParams } from 'next/navigation';
import { useEffect } from "react";
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ComputerIcon from '@mui/icons-material/Computer';
import BusinessIcon from '@mui/icons-material/Business';
import LinkIcon from '@mui/icons-material/Link';

const GameId = () => {
    const { gameId } = useParams();
    const { getGameById, game } = useGameStore();

    useEffect(() => {
        if (gameId) {
            getGameById(gameId);
        }
    }, []);

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                width: "100vw",
                minHeight: "100vh",
                p: 0
            }}
        >
            <Typography
                variant="h3"
                gutterBottom
                textAlign="center"
                sx={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    color: "#FFC107",
                    textShadow: "2px 2px 6px rgba(0,0,0,0.6)"
                }}
            >
                {game.title}
            </Typography>

            <Card sx={{
                display: "flex", justifyContent: "center", margin: "auto", backgroundColor: "#242424", borderRadius: 3, boxShadow: 3, p: 2, mb: 3, width: "95%"

            }}>
                <CardMedia
                    component="img"
                    image={game.thumbnail}
                    alt={game.title}
                    sx={{ width: 300, borderRadius: 2 }}
                />
                <CardContent sx={{ flex: 1, ml: 3 }}>
                    <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 1, color: "lightgrey" }}>
                        <SportsEsportsIcon sx={{ color: "#007BFF", mr: 1 }} /> <strong>Genre: </strong> {game.genre}
                    </Typography>
                    <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 1, color: "lightgrey" }}>
                        <ComputerIcon sx={{ color: "#007BFF", mr: 1 }} /> <strong>Platform: </strong> {game.platform}
                    </Typography>
                    <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 1, color: "lightgrey" }}>
                        <BusinessIcon sx={{ color: "#007BFF", mr: 1 }} /> <strong>Publisher: </strong> {game.publisher}
                    </Typography>
                    <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 1, color: "lightgrey" }}>
                        <BusinessIcon sx={{ color: "#007BFF", mr: 1 }} /> <strong>Developer: </strong> {game.developer}
                    </Typography>
                    <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 1, color: "lightgrey" }}>
                        <CalendarMonthIcon sx={{ color: "#007BFF", mr: 1 }} /> <strong>Relejase Date: </strong> {game.release_date}
                    </Typography>
                </CardContent>
            </Card>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 3
                }}
            >
                <iframe
                    src={game.game_url}
                    width="95%"
                    height="800px"
                    style={{
                        border: "none",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 10px rgba(0,0,0,0.5)"
                    }}
                    allowFullScreen
                ></iframe>
            </Box>
        </Container >
    );
};

export default GameId;
