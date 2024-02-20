import React, { useContext, useState } from 'react';
const AppContext = React.createContext();

const ProviderContext = ({children}) => {
    const [dayMode, setDayMode] = useState(true);
    return (
        <AppContext.Provider value={{dayMode, setDayMode}}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {ProviderContext, AppContext, useGlobalContext};