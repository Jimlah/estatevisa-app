import SliceFunction from "../store/GeneralSlice";

export const {
    slice: estateSlice,
    getAll: getAllEstates,
    getById: getEstateById,
    create: createEstate,
    update: updateEstate,
    remove: removeEstate,
} = SliceFunction('estates', '/estates');