import { useEffect } from 'react';

const useTitle = (dynamicTitle) => {


    useEffect(()=>{
        document.title = `${dynamicTitle} - Chef Guru`;
    },[dynamicTitle])
   

};

export default useTitle;