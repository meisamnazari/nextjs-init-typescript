import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
// import * as actions from '../actions';


const ReduxHOC=(Page)=>{
     class PageWrapper extends  Component{
        render() {
            return(
                <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                    <Page {...this.props}/>
                </Provider>
            )
        }
    }

    return PageWrapper;
};

export default ReduxHOC;

