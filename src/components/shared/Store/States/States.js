import default_state from "./defaultState";

export const yachts_content = (
    state = default_state.yachts_content,
    action
) => {
    switch (action.type) {
        case "DOWNLOAD_YACHTS":
            return {
                ...state,
                data: action.payload.data,
            };
        default:
            return state;
    }
};

export const current_yacht = (
    state = default_state.yachts_content,
    action
) => {
    switch (action.type) {
        case "CURRENT_YACHT":
            return {
                ...state,
                data: action.payload.data,
            };
        default:
            return state;
    }
};