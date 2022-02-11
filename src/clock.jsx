import React from "react"; 

class Clock extends React.Component {
    constructor(props){
        super(props); 
        this.state = {time: new Date()}; 
    }
    render(){
        return (
            <div>
                <h1>clock</h1>
            </div>
            
        )
    }

    tick(){
        let newDate = new Date(); 
        this.setState({newDate}); 
    }
}

export default Clock; 

