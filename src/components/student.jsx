import {students} from '../utils/data'
//MUI library for table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function StutentTable() {
  return (
    <TableContainer component={Paper} sx={{ width: '60%', margin: '0 auto', backgroundColor: '#272727ff', border: ' 1px solid whitesmoke' }}>
        <Table sx={{ minWidth: 650, '& .MuiTableCell-root': { color: 'whitesmoke', padding: '1rem 2rem'} }} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>Major</TableCell> 
            </TableRow>   
            </TableHead>
            <TableBody>
            {students.map((students) => (
                <TableRow key={students.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': {backgroundColor: '#444'} }}>
                <TableCell>{students.id}</TableCell>
                <TableCell>{students.name}</TableCell>
                <TableCell>{students.city}</TableCell>
                <TableCell>{students.grade}</TableCell>
                <TableCell>{students.major}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>

  );
}