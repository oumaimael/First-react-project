import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {
    return (
        <Box component="footer" sx={{ backgroundColor: '#1a1a1a', color: 'gray', py: 6, mt: 'auto', borderTop: '1px solid #333' }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, flexWrap: 'wrap', gap: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'white' }}>
                        React<Box component="span" sx={{ color: '#646cff' }}>APP</Box>
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Link href="#home" color="inherit" underline="hover">Home</Link>
                        <Link href="#about" color="inherit" underline="hover">About</Link>
                        <Link href="#contact" color="inherit" underline="hover">Contact</Link>
                    </Box>
                </Box>
                <Typography variant="body2" align="center" sx={{ opacity: 0.6 }}>
                    &copy; {new Date().getFullYear()} ReactAPP. All rights reserved.
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer

