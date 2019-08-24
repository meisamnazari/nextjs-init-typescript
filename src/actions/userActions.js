import {
    CHANGE_USER
}
from './types';

export const changeUser=()=>{
    return (dispatch)=>{
        dispatch({
            type:CHANGE_USER
        })
    }
}