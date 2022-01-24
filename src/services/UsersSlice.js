import SliceFunction from "../store/GeneralSlice";

export const {
    slice: usersSlice,
    getAll: getAllUsers,
    getById: getUserById,
} = SliceFunction('users', '/users');