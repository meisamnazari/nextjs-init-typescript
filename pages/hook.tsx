import React, {useState} from 'react';
import ReduxHOC from "../src/components/reduxHOC";
import { useSelector,useDispatch } from 'react-redux'

const Hook = () => {
    const [count] = useState(0);

    const user = useSelector(
        state => state.user
    );

    const dispatch=useDispatch();
    console.log('user', user);


    return (
        <div onClick={
            ()=> dispatch({type:"CHANGE_USER"})
        }>
            {count}
        </div>
    );
};

export default ReduxHOC(Hook);