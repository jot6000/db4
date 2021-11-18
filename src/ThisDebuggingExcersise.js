import { useState useEffect } from "/react";

export default function ThisDebuggingExcersise(){
    const [words,setwords] = useEffect([])
    
    useState(() => {
        setwords(['this','debbuging','problem'])
    }, []);

    return(
        <p>
            {
                Words.map((word)=>(
                    <> {wórd}</>
                ))
            }
        !</p>
    )
}
















































































.