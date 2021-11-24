import {useCallback} from 'react'; // чтобы реакт не входил в цикличную рекурсию

export const useMessage = () => {
    return useCallback((text)=>{
        if(window.M && text){
            window.M.toast({})
        }
    },[])
}