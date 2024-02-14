import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

export default function CustomTable({ doctors }) {
  console.log('table', doctors);
  const navigate = useNavigate();
  const handleClick = (doctor) => {
    navigate(`doctor-details/${doctor.id}`, { state: doctor });
    // console.log('table', doctor.id);

  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:900}}>Name</TableCell>
            <TableCell sx={{fontWeight:900}} align="center">specialization</TableCell>
            <TableCell sx={{fontWeight:900}} align="center">isVerified</TableCell>
            <TableCell sx={{fontWeight:900}} align="center">View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doctors?.map((doctor, index) => (
            <TableRow
              key={doctor.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                {doctor.name}
              </TableCell>
              <TableCell align="center">

                {doctor?.specialization.map((specialization) => (
                  <span key={specialization._id}>{specialization.name}</span>
                ))}


              </TableCell>
              <TableCell align="center" sx={{
                color: doctor.isVerified ? "green" : "red"
              }}>
                {doctor.isVerified ? "Verified" : "Not Verified"}</TableCell>
              <TableCell align="center">

              <Button onClick={() => handleClick(doctor)}>
                  View Info
                </Button>

              </TableCell>

            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}