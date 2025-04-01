"use client";

import { Card, CardMedia, CardContent, Typography, Button, CardActions } from "@mui/material";
import { useRouter } from "next/navigation";
import useAuthStore from "../stores/useAuthStore";
import useUserStore from "../stores/useUserStore";

const GameCard = ({ game }) => {
    const { currentUser } = useAuthStore();
    const { updateUser } = useUserStore();
    const router = useRouter();

    const handlePlayNow = () => {
        if (currentUser) {
            router.push(`/games/${game.id}`); updateUser({ ...currentUser, points: (currentUser.points || 0) + 10 });
        } else {
            router.push('/login');
        }
    };

    return (
        <Card
            sx={{
                width: 300,
                height: 420,
                m: 2,
                boxShadow: 3,
                backgroundColor: "#242424",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}
        >
            <CardMedia
                component="img"
                image={game.thumbnail}
                alt={game.title}
                sx={{ height: 160, objectFit: "cover" }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                    {game.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="rgba(255, 255, 255, 0.7)"
                    sx={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }}
                >
                    {game.short_description}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                    <strong>Genre:</strong> {game.genre}
                </Typography>
                <Typography variant="body2">
                    <strong>Platform:</strong> {game.platform}
                </Typography>
                <Typography variant="body2">
                    <strong>Developer:</strong> {game.developer}
                </Typography>
                <Typography variant="body2">
                    <strong>Release Date:</strong> {game.release_date}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "end" }}>
                <Button size="small" onClick={handlePlayNow} variant="contained" sx={{ backgroundColor: "#007BFF", color: "#242424", fontWeight: "bold", fontFamily: "Orbitron, sans-serif" }}>
                    Play Now
                </Button>
            </CardActions>
        </Card>
    );
};

export default GameCard;
