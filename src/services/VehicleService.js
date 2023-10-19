import axios from 'axios';

const VEHICLE_BASE_API_URL = 'http://localhost:8080/api/v1/vehicle-request';

export function getAllVehicles(){
    return axios.get(VEHICLE_BASE_API_URL);
}

export function createVehicle(vehicle){
    return axios.post(VEHICLE_BASE_API_URL,vehicle);
}

export function getById(id){
    return axios.get(`${VEHICLE_BASE_API_URL}/${id}`);
}

export function updateVehicle(id, vehicle){
    return axios.put(`${VEHICLE_BASE_API_URL}/${id}`, vehicle);
}

export function deleteVehicle(id){
    return axios.delete(`${VEHICLE_BASE_API_URL}/${id}`);
}