import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '40%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(100, 108, 255, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '30%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(83, 91, 242, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ maxWidth: 800, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography
            variant="overline"
            sx={{
              color: '#646cff',
              fontWeight: 700,
              letterSpacing: 2,
              mb: 2,
              display: 'block'
            }}
          >
            MODERN DATA MANAGEMENT
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '3rem', md: '4.5rem' },
              lineHeight: 1.1,
              mb: 3,
              color: 'white',
              letterSpacing: '-0.02em'
            }}
          >
            The Future of <Box component="span" sx={{ color: '#646cff' }}>Student Tracking</Box> is Here.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 5,
              lineHeight: 1.6,
              maxWidth: 600
            }}
          >
            Empower your institution with a high-performance interface designed for the next generation of educators.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#646cff',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                textTransform: 'none',
                borderRadius: 2,
                boxShadow: '0 4px 14px 0 rgba(100,108,255,0.39)',
                '&:hover': {
                  backgroundColor: '#535bf2',
                  boxShadow: '0 6px 20px rgba(100,108,255,0.23)',
                }
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'rgba(255,255,255,0.3)',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                textTransform: 'none',
                borderRadius: 2,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.05)'
                }
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}