import React, {useReducer} from "react";
import AlertContext from "./alertContext";
import {SET_ALERT, REMOVE_ALERT } from "../types";
import alertReducer from "./alertReducer";

const AlertState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(alertReducer, initialState);


    // Clear Users
    const setAlert = (alert) => {
        dispatch({ type: SET_ALERT, payload: alert });
        setTimeout(removeAlert, 3000)
    };

    // Set Loading
    const removeAlert = () => dispatch({ type: REMOVE_ALERT });

    return (
        <AlertContext.Provider
            value={{
                alert: state,
                setAlert,
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertState;
