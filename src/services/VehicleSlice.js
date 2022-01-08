import SliceFunction from "../store/GeneralSlice";

export const {
    slice: vehicleSlice,
    getAll: getAllVehicles,
    getById: getVehicleById,
    create: createVehicle,
    update: updateVehicle,
    remove: removeVehicle,
    clearState: clearVehicleState
} = SliceFunction('vehicle', '/vehicle');