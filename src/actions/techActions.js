import { GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR, SET_LOADING } from './types';
// get techs from the db
export const getTechs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data,
        });

    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.respnse.data
        })
    } 
};

// add new log
export const addTech = (tech) => async dispatch => {
    try {
        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {'Content-Type': 'application/json'
        }
        });
        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data,
        });

    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.respnse.data
        })
    } 
};

// delete Tecg
export const deleteTech = (id) => async dispatch => {
    try {
        await fetch(`/techs/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_TECH,
            payload: id,
        });

    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.respnse.data
        })
    } 
};

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
};