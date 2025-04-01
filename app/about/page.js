"use client";
import { Container, Typography, Box } from "@mui/material";

const About = () => {
    return (
        <Container
            maxWidth="md"
            sx={{
                mt: 8,
                bgcolor: "#1a1a1a",
                color: "#fff",
                p: 4,
                textAlign: "center",
                borderRadius: 3,
                boxShadow: "0px 4px 15px rgba(0, 123, 255, 0.3)",
            }}
        >
            <Typography
                variant="h3"
                fontWeight={700}
                gutterBottom
                sx={{
                    fontFamily: "Orbitron, sans-serif",
                    color: "#FFC107",
                    textShadow: "3px 3px 10px rgba(255, 193, 7, 0.5)"
                }}
            >
                About PlayTable
            </Typography>
            <Typography
                variant="body1"
                color="rgba(255, 255, 255, 0.8)"
                sx={{
                    mb: 3,
                    lineHeight: 1.6,
                    fontSize: "18px",
                    fontWeight: 300
                }}
            >
                Welcome to **PlayTable**, the ultimate platform for gamers! Whether you love strategy, action, or party games, compete and connect with players worldwide in an immersive gaming experience.
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 4,
                    mt: 4
                }}
            >
                <Box
                    sx={{
                        p: 3,
                        bgcolor: "#292929",
                        borderRadius: 2,
                        width: "250px",
                        textAlign: "center",
                        boxShadow: "0px 4px 15px rgba(0, 123, 255, 0.3)",
                        transition: "0.3s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: "0px 4px 20px rgba(0, 123, 255, 0.5)"
                        }
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#007BFF",
                            fontFamily: "Orbitron, sans-serif"
                        }}
                    >
                        🎮 Play Anytime, Anywhere
                    </Typography>
                    <Typography variant="body2" color="rgba(255, 255, 255, 0.8)">
                        Enjoy a wide variety of online multiplayer games with smooth performance.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        p: 3,
                        bgcolor: "#292929",
                        borderRadius: 2,
                        width: "250px",
                        textAlign: "center",
                        boxShadow: "0px 4px 15px rgba(0, 123, 255, 0.3)",
                        transition: "0.3s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: "0px 4px 20px rgba(0, 123, 255, 0.5)"
                        }
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#007BFF",
                            fontFamily: "Orbitron, sans-serif"
                        }}
                    >
                        🏆 Compete with Friends
                    </Typography>
                    <Typography variant="body2" color="rgba(255, 255, 255, 0.8)">
                        Challenge your friends or climb the leaderboards against top players.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        p: 3,
                        bgcolor: "#292929",
                        borderRadius: 2,
                        width: "250px",
                        textAlign: "center",
                        boxShadow: "0px 4px 15px rgba(0, 123, 255, 0.3)",
                        transition: "0.3s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: "0px 4px 20px rgba(0, 123, 255, 0.5)"
                        }
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#007BFF",
                            fontFamily: "Orbitron, sans-serif"
                        }}
                    >
                        🚀 Fast & Lag-Free Gameplay
                    </Typography>
                    <Typography variant="body2" color="rgba(255, 255, 255, 0.8)">
                        Experience seamless gaming with optimized performance and zero lag.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default About;
