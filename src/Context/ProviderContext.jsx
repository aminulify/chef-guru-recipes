import React, { useContext, useState } from 'react';
// import { useNavigation } from 'react-router-dom';
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

// const loadingSnipper = () =>{
//     const [spinner, setSnipper] = useState(true);
//     const navigation = useNavigation();
//     return(
//         <div>
//             {
//                 navigation.state==='loading' ? <BeatLoader color="#ef2853" size={20} /> :''
//             }
//         </div>
//     )
// }

export {ProviderContext, AppContext, useGlobalContext};