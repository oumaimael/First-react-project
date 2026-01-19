import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Header() {
    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#1a1a1a', boxShadow: 'none', borderBottom: '1px solid #333' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 700, letterSpacing: '1px' }}>
                    <Box component="span" sx={{ color: 'white' }}>React</Box>
                    <Box component="span" sx={{ color: '#646cff' }}>APP</Box>
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit" href="#home" sx={{ textTransform: 'none' }}>Home</Button>
                    <Button color="inherit" href="#about" sx={{ textTransform: 'none' }}>About</Button>
                    <Button
                        variant="contained"
                        href="#contact"
                        sx={{
                            backgroundColor: '#646cff',
                            textTransform: 'none',
                            '&:hover': { backgroundColor: '#535bf2' }
                        }}
                    >
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header

