import React, {Component} from 'react';
import ReduxHOC from "../src/components/reduxHOC";
import {connect} from "react-redux";

class User extends Component<any, any> {
    render() {
        return (
            <div style={{backgroundColor:'red'}}>
                Gajinooooooooooooooooooooooooooo
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.user.user
    }
};

export default ReduxHOC(connect(mapStateToProps)(User));