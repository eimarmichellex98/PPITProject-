//review page
import React from "react";

export class Reviews extends React.Component{

    render(){
        return(
            <div>
                <h3>Please tell us about your experience</h3>
                <form>
                <label>
                     Your experience: 
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                </form>
                <p>Reviews from others</p>

            </div>
        );
    }
}