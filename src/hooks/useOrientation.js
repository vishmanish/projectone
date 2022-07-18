import { useEffect, useState } from "react"
import { Dimensions } from "react-native"



export default useOrientation = () =>{

    const[screenInfo,setScreenInfo] = useState(Dimensions.get('screen'));

    useEffect(()=>{

        const onChange = (result) =>{
            setScreenInfo(result.screen);
        }

        Dimensions.addEventListener('change', onChange);


        return () => Dimensions.removeEventListener('change',onChange)
    } ,[]);

    return {
        ...screenInfo,
        isPortrait : screenInfo.height > screenInfo.width
    }
}



//how to use it--

// go to the page where want to use it-----
// inside function  define it-----
// const orientation = useOrientation()   // and also imported the hook 
// suppose first you defile the width and hight like dimension.get('screen')* height/ 100; 
// but now you just define like---
//  width = {orientation.width /3}
// height = {orientation.height/10}
// also pass the hook like props in components ----
//  < ButtonComponent   isPotrait = {orientation.isPortrait}> like this. 