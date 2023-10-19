import { useEffect, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate } from "react-router-dom";
import * as vehicleService from '../services/VehicleService';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    } from '@mui/material';

export const VehicleTable = () => {
    const [vehicles, setVehicles]= useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        requestDataFromApi();
    }, []);

    function requestDataFromApi(){
        vehicleService.getAllVehicles()
        .then(res => {
            setVehicles(res.data);
        })
    }

    function goToUpdate(id){
        navigate(`/update/${id}`);
    }

    function deleteVehicle (id){
        vehicleService.deleteVehicle(id)
        .then(()=>{
            requestDataFromApi();
        })
    }

    return (
        <div >
            <Table sx={{minWidth:700}}>
                <TableHead sx={{}}>
                <TableRow>
                    <TableCell>
                        Id
                    </TableCell>                        
                    <TableCell>
                        First Name
                    </TableCell>
                    <TableCell>
                        Last Name
                    </TableCell>
                    <TableCell>
                        Email
                    </TableCell>
                    <TableCell>
                        Vehicle
                    </TableCell>
                    <TableCell>
                        Description
                    </TableCell>
                    <TableCell>
                        Created Date
                    </TableCell>
                    <TableCell align="right">
                        Actions
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        vehicles.map((vehicle)=> {
                            return(
                                <TableRow
                                    hover
                                    key={vehicle.id}
                                >
                                    <TableCell>
                                        {vehicle.id}
                                    </TableCell>
                                    <TableCell>
                                        {vehicle.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {vehicle.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {vehicle.email}
                                    </TableCell>
                                    <TableCell>
                                        {vehicle.vehicle}
                                    </TableCell>
                                    <TableCell>
                                        {vehicle.description}
                                    </TableCell>
                                    <TableCell>
                                        {vehicle.createAt}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton component="a" onClick={()=> goToUpdate(vehicle.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton component="a" onClick={()=> deleteVehicle(vehicle.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ) 
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}