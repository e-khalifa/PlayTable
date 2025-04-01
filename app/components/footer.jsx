"use client";

import { Box, Container, Typography, IconButton } from "@mui/material";
import Link from "next/link";

import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#121212",
                color: "grey",
                padding: "10px 0",
                textAlign: "center",
                width: "100%",
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 20px"
                }}
            >
                <Typography variant="caption">
                    © {new Date().getFullYear()} PlayTable. All rights reserved.
                </Typography>

                <Box>
                    <Link href="/about">
                        About
                    </Link>

                    <Link href="https://zgithub.com/e-khalifa" target="_blank" rel="noopener noreferrer">
                        <IconButton sx={{ color: "grey" }}>
                            <GitHubIcon />
                        </IconButton>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
