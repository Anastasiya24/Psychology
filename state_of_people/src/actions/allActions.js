export const getFace = (data) => dispatch => {
    dispatch({
        type: 'GET_FACE',
        payload: data
    });
};

export const getEyes = (data) => dispatch => {
    dispatch({
        type: 'GET_EYES',
        payload: data
    });
};

export const getHands = (data) => dispatch => {
    dispatch({
        type: 'GET_HANDS',
        payload: data
    });
};

export const getLegs = (data) => dispatch => {
    dispatch({
        type: 'GET_LEGS',
        payload: data
    });
};

export const getPalms = (data) => dispatch => {
    dispatch({
        type: 'GET_PALMS',
        payload: data
    });
};

export const getShoulders = (data) => dispatch => {
    dispatch({
        type: 'GET_SHOULDERS',
        payload: data
    });
};