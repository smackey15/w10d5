import React from "react"; 

class Clock extends React.Component {
    constructor(props){
        super(props); 
        this.state = {time: new Date()}; 
    }

    tick(){
        // let newDate = {time: new Date()}; 
        this.setState({time: new Date()}); 
    }

    render(){
        return (

            <div>
                <ul>{setInterval(this.tick(), [delay, 1000])}</ul>
                <h1>clock</h1>
            </div>
        )
    }

}

export default Clock; 

