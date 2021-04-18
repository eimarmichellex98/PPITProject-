//review page
import React from "react";
import { OldReviews } from "./oldreviews";

export class Reviews extends React.Component{
    //displaying older reviews
    state = {

        oldreviews: [
            {
                "Experience": "I enjoyed the journey with my family" ,
                "Name": "Noel Browne",
            },
            {
                "Experience": "I've always wanted to see the Cliffs of Moher in person, the view was breathtaking." ,
                "Name": "Maureen H.",
            },
            {
                "Experience": "The Great Atlantic Way is a journey to experience " +
                "for the spectacular landscape, rich culture and the friendly people" ,
                "Name": "Tadhg O'Conaire",
            }
        ]

    }

    render(){
        return(
            <div>
                <h3>Please tell us about your experience</h3>
                <form>
                <label>
                     Your experience: 
                    <input type="text" name="name" />
                </label><br></br>
                <label>
                     Your Name: 
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                </form>
                <h4>Reviews from other people</h4>
                <OldReviews old={this.state.oldreviews} ></OldReviews>
            </div>
        );
    }
}