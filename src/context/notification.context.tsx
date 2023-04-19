import React from 'react'
import { Notification } from '../components';
import { AlertColor } from "@mui/material";

type NotificationContextProps = {
    getError: (msg: string) => void;
    getSuccess: (msg: string) => void;
}

const NotificationContext = React.createContext<NotificationContextProps | null>(null);

export const NotificationProvider:React.FC<{children: JSX.Element}> = ({children}) =>
{
    const [message, setMessage] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState<AlertColor | undefined>(undefined);

    const handleCloseFn = () => {
        setOpen(false);
    }

    const getErrorFn = (msg: string) => {
        setOpen(true);
        setMessage(msg);
        setSeverity("error");
    };

    const getSuccessrFn = (msg: string) => {
        setOpen(true);
        setMessage(msg);
        setSeverity("success");
    };

    //const getError = () => {};

    const value = {
        getError: getErrorFn,
        getSuccess: getSuccessrFn
        //getError
    };
    return(
        <NotificationContext.Provider value={value}>
            <Notification handleClose={handleCloseFn} open={open} severity={severity} message={message}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const context = React.useContext(NotificationContext);
    if(!context) throw new Error("No existe el contexto");
    return context;
}