import SliceFunction from "../store/GeneralSlice";

export const {
    slice: houseSlice,
    getAll: getAllHouses,
    getById: getHouseById,
    create: createHouse,
    update: updateHouse,
    remove: removeHouse,
    clearState: clearHouseState
} = SliceFunction('houses', '/houses');