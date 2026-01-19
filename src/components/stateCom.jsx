import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const StateCom = (props) => {
    const [count, setCount] = useState(props.count)
    return (
            <Stack spacing={2} direction="row">
                <Button sx={{color: 'white'}} variant="outlined" onClick={() => setCount(count + 1)}>
                    increase
                </Button>
                <p>count is {count}</p>
                <Button sx={{color: 'white'}} variant="outlined" onClick={() => setCount(count - 1)}>
                    decrease
                </Button>
            </Stack>
    )
}
    
export default StateCom
