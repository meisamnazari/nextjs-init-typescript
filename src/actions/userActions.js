import {
    CHANGE_USER
}
from './types';

export const chaneUser=()=>{
    return (dispatch)=>{
        dispatch({
            type:CHANGE_USER
        })
    }
}