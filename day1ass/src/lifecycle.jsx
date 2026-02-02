import React from "react";

class Music extends React.Component {

  constructor(props) {         
    super(props);
    this.state = {
      instrument: "Guitar"
    };
  }
shouldComponentUpdate(){
    return true;
}
//   static getDerivedStateFromProps(props, state) { 
//     return { instrument: props.New };               
//   }
change=()=>{
    this.setState({instrument:"Piano"})
}

//   componentDidMount() {        
//     setTimeout(() => {
//       this.setState({ instrument: "Piano" });
//     }, 3000);                  
//   }

getSnapshotBeforeUpdate(){
    document.getElementById("c1").innerHTML="Previous insturment" + prevState.instrument;
}

componentDidUpdate(){
    document.getElementById("c2").innerHTML="Previous insturment" + this.state.instrument;
}

  render() {                    
    return (
      <div>
        <h2>
          I know how to play this {this.state.instrument} instrument
        </h2>
        <button type="button" onClick={this.change}>Change Instrument</button>
        <div id="c1"></div>
        <div id="c2"></div>
      </div>
    );
  }
}

export default Music;            
