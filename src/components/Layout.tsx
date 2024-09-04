import Container from '@mui/material/Container';
import Header from './Header';
import { createTheme, ThemeProvider } from '@mui/material';
import Footer from './Footer';


const themeOptions = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#FFF',
            paper: '#212121',
        },
        text: {
            primary: '#000',
        },
        primary: {
            main: 'rgb(120, 200, 255)',
        },
        secondary: {
            main: '#f48fb1',
        },
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#FFF',
                },
            },
        },
    },
});

export default function Layout({ children }: any) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ThemeProvider theme={themeOptions}>
                <Header />
                <Container maxWidth="xl">
                    {children}
                </Container>
                <Footer />
            </ThemeProvider>
        </div>
    );
}