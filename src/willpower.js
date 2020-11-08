import React from 'react'

function willpower(Power) {

    const  newcomponent=(props)=>{
        console.log("3" +props)

            return(
                <div style={{backgroundColor:"orange"}}>
                        <Power  name="rahul" {...props}/>
                </div>
            )
    }

    return newcomponent;
}

export default willpower
