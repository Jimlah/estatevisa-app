import SliceFunction from "../store/GeneralSlice";

export const {
    slice: visitorSlice,
    getAll: getAllVisitors,
    getById: getVisitorById,
    create: createVisitor,
    update: updateVisitor,
    remove: removeVisitor,
    clearState: clearVisitorState
} = SliceFunction('visitors', '/visitors');