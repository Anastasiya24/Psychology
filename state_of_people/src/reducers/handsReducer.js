const initialState = {
    choice: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_HANDS':
            return { choice: action.payload };

        default: return state;
    }
}
