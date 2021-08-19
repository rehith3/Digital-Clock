import React, {Component, useState} from "react";
import '../styles/App.css';


function gen(){
    const cd=new Date();
    const hr=cd.getHours();
    const min=cd.getMinutes();
    const sec=cd.getSeconds();
    cd.setHours(9)
     
    return hr+":"+min+":"+sec+" "+(hr>=12?'PM':'AM');
}

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            time:gen(),
        }
    }

    componentDidMount(){
        this.intervalId=setInterval(()=>{
            this.setState({time:gen()})
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }


    render() {

        return(
               <div className="Clock">
                    <h3 id="time">{this.state.time}</h3>
               </div>
        )
    }
}


export default App;
