import React, {useState} from 'react';
import ReduxHOC from "../src/components/reduxHOC";
import { useSelector } from 'react-redux'

const Hook = () => {
    const [count] = useState(0);

    const user = useSelector(
        state => state.user
    );
    console.log('user', user);


    return (
        <div>
            {count}
        </div>
    );
};

export default ReduxHOC(Hook);