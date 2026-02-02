import React from 'react'

class Flight extends React.Component{

    render(){
        return(
            <div>
                <h2>Flight Details</h2>
                <br />
                <FlightInfo airline_name="Air India" airline_code="3254" seats="200" 
                source="Delhi" destination="Mumbai" price ="15000"/>
                <br />
            </div>
        )
    }
}

class FlightInfo extends React.Component{
    render(){
        return(
            <div>
                <h3>Flight Info</h3>
                <p>AirLine Name : {this.props.airline_name}</p>
                <p>AirLine Code : {this.props.airline_code}</p>
                <p>Number of Seats : {this.props.seats}</p>

                <RouteInfo source="Delhi" destination="Mumbai"/>
                <br />
                <PriceInfo price ="15000"/>
                <br />
            </div>
        )
    }
}

class RouteInfo extends React.Component{
    render(){
        return(
            <div>
                <h3>Route Info</h3>
                <p>Source : {this.props.source}</p>
                <p>Destination : {this.props.destination}</p>
            </div>
        )
    }
}

class PriceInfo extends React.Component{
    render(){
        return(
            <div>
                <h3>Price Info</h3>
                <p>Price : {this.props.price}</p>
            </div>
        )
    }
}

export default Flight
