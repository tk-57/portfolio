import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';

export default function Footer() {
    return (
        <>
            <CssBaseline />
            <AppBar
                color="primary"
                component="footer"
                position="static"
                sx={{ marginTop: 'auto' }}
            >
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '60px',
                        }}
                    >
                        <Typography variant="body2" sx={{ color: "#FFF" }}>
                            2024 © kt.
                        </Typography>
                    </Box>
                </Container>
            </AppBar>
        </>
    );
}