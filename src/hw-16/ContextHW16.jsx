import {createContext, useEffect, useState} from "react";
export  const ContextHW16=createContext(null);
export  const ProviderHW16=({children})=>{
    const [good,setGood]=useState(0)
    const [neutral,setNeutral]=useState(0)
    const [bad,setBad]=useState(0)
    const [total,setTotal]=useState(0)
    const [positivePercentage,setPositivePercentage]=useState(0)
    useEffect(()=>{
        setTotal(good+neutral+bad)
    },[good,neutral,bad])
    const goodFeedback=()=>{
        setGood(good+1)
    }
    const neutralFeedback=()=>{
        setNeutral(neutral+1)
    }
    const badFeedback=()=>{
        setBad(bad+1)
    }
    useEffect(()=>{
        if(good||total!==0){
            setPositivePercentage(Math.round((good / total) * 100))
        }else{
            setPositivePercentage(0)
        }
    },[good,total])
    return(
        <ContextHW16.Provider value={{good,neutral,bad,total,positivePercentage,goodFeedback,neutralFeedback,badFeedback}}>
            {children}
        </ContextHW16.Provider>
    )
}