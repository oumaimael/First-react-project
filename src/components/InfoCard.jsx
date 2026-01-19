import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const InfoCard = (props) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 4,
                height: '100%',
                borderRadius: 4,
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                transition: 'transform 0.3s ease-in-out, border-color 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor:'#646cff',
                    background: 'rgba(255, 255, 255, 0.05)',
                },
            }}
        >

            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>
                {props.title}
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.7 }}>
                {props.description}
            </Typography>
        </Paper>
    );
};

export default InfoCard;
