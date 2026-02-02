import React, { useContext } from 'react'

let numberContext= React.createContext(20);

function Cont(){
    return(
        <>
        <numberContext.Provider value={45} >
            <Display/>
        </numberContext.Provider>

        <Display2/>
        </>
    )
}

// function Display(){
    // return(
    //     <numberContext.Consumer>
    //         {value=> <div>The value is {value}</div>}
    //     </numberContext.Consumer>
    // )
// }

function Display(){
    const value=useContext(numberContext)
    return(
        <numberContext.Consumer>
            {value=> <div>The value is {value}</div>}
        </numberContext.Consumer>
    )
}

function Display2(){
    return(
        <numberContext.Consumer>
            {value=> <div>The value is {value}</div>}
        </numberContext.Consumer>
    )
}

export default Cont;