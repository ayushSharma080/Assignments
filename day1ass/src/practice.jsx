import React from "react";

let price= React.createContext()
let disc = React.createContext();

function pract(){
    return(
        <div>
            <price.context.Provider value={4000}>
                <disc.context.Provider dis={30}>
                    <AppComp/>
                </disc.context.Provider>
            </price.context.Provider>
        </div>
    )
}

function AppComp(){
        return(
        <div>
        {/* <price.context.Consumer>
            {value=> <div>Actual Price : {value}</div>}
        </price.context.Consumer>

        <disc.context.Consumer>
            {dis=> <div>Discount Given : {dis}</div>}
        </disc.context.Consumer> */}

        <price.Consumer>
            {(value)=>{
                <disc.Consumer>
                    {(dis)=>{
                        const discPrice=value - (value*dis)/100;
                        return (
                        <div>
                            <div>Actual Price : {price}</div>
                            <div>Discount Given : {disc}%</div>
                            <div>Discounted Price : {discPrice}</div>
                        </div>
                        );
                    }}
                </disc.Consumer>
            }}
        </price.Consumer>        
        </div>
    )
}

export default pract;