//review page
import React, {Component} from "react";
import fire from './fire';
import '../App.css';

export class Reviews extends React.Component{

    //taking input from user
    state={
        text : "",
        reviews : []
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

    componentDidMount() {
        this.fetchReviews()
    }

    fetchReviews(){
        fire.database().ref( 'messages' ).get().then( fetchedData => {
            let newReviews = [];

            fetchedData.forEach( review => {
                newReviews.push((
                    <div className="bg-white border border-black rounded-xl border-opacity-40 px-6 pt-2 pb-2 shadow-lg xl:w-62 2xl:w-68 max-w-96 text-sm lg:text-base" style={{minHeight: "7rem"}}>
                        <span>{review?.val() ?? "undefined"}</span>
                    </div>
                ))
            })

            this.setState( {
                reviews: newReviews
            } )
        })
    }

    //comment section where review can be left and then is stored in firebase
    render(){
        return(
			<div className="flex md:px-4 lg:px-52 text-left">
				<div className="mr-8">
					<form>
						<h1 className="text-xl pb-2 text-gray-800">Tell us about your experience</h1>
						<textarea rows={4} className="border w-96 mb-2 text-left align-top shadow-md p-2" id="inputText" onChange={this.handleText}/>

						<br/>

						<button className="bg-blue-600 hover:bg-blue-800 text-white p-2 px-4 shadow-lg rounded-xl" onClick={this.handleSubmit}>
							Submit
						</button>
					</form>
				</div>

				<div className="grid justify-center grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                    { this.state.reviews }
                </div>
			</div>


        //    <div className="Review" class="bg-img">
        //         <div class="container">
        //         <h4>Please tell us about your experience</h4>
        //         <textarea type="text" cols ="40" rows="30" onChange={this.handleText} id="inputText"></textarea>
        //         <br/>
        //         <button onClick={this.handleSubmit}>Submit</button>
        //         </div>
        //    </div>
        );
    }
}