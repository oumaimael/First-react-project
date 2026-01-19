import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Greeting = () => {
    const [name, setName] = useState("");
    const [displayName, setDisplayName] = useState("");
    return (
        <div>
            <Stack spacing={2} direction="row" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }}} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Required" variant="outlined" required value={name} onChange={(e) => setName(e.target.value)} 
                    sx={{input: { color: 'white' },Label: { color: 'white' }, 
                    '& .MuiOutlinedInput-root': {'& fieldset': { borderColor: 'white'}, '&:hover fieldset': { borderColor: 'white'}, '&.Mui-focused fieldset': { borderColor: 'white'}}}} />
                </Box>
                <Button sx={{color: 'white'}} variant="outlined" onClick={() => {
                    setDisplayName(name);
                }}>
                    Send
                </Button>
                <Button sx={{color: 'white'}} variant="outlined" onClick={() => {
                    setName('');
                    setDisplayName('');
                }}>
                    Reset
                </Button>
            </Stack>
            <Box component="p" sx={{ color: 'white', border: '1px solid white',width: '30ch',p: '1rem 2rem', margin: '20px auto'}}>
            Hello {displayName}
            </Box>
        </div>
    )
}

export default Greeting