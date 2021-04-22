//review page
import React, {Component} from "react";
import fire from './fire';
import '../App.css';

export class Reviews extends React.Component{

    //taking input from user
    state={
        text : ""
    }
    handleText=e=>{
        this.setState({
            text : e.target.value
        })
    }
    handleSubmit=e=>{
        let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
        fire.database().ref('messages').push(this.state.text);
        this.setState({
            text : ""
        })
        console.log(this.state.text)
        alert("Thanks for leaving a review!");
    }
    //comment section where review can be left and then is stored in firebase
    render(){
        return(
           <div className="Review" class="bg-img">
                <div class="container">
                <h4>Please tell us about your experience</h4>
                <textarea type="text" cols ="40" rows="30" onChange={this.handleText} id="inputText"></textarea>
                <br/>
                <button onClick={this.handleSubmit}>Submit</button>
                </div>   
           </div> 
        );
    }
}