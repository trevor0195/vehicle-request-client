import {VehicleTable} from "../components/VehicleTable";
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom";

export const Vehicle =() => {
    const navigate = useNavigate();

    function addVehicle(){
        navigate("/add")
    }

    return(
        <>
            <Button variant="outlined" onClick={e => addVehicle()}>Add Request</Button>
            <VehicleTable />
        </>
    )
}