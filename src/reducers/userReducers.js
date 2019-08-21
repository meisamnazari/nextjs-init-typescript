
import {CHANGE_USER} from '../actions/types'

const Initial_State={
    user:false
};

export default (state=Initial_State,action)=>{
    switch (action.type){
        case CHANGE_USER:
            return {...state,user:true}
        default:
            return state;
    }
}