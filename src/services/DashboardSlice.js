import SliceFunction from "../store/GeneralSlice";

export const {
    slice: dashboardSlice,
    getAll: dashboard,
} = SliceFunction('dashboard', '/dashboard');