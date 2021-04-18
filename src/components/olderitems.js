import React from 'react';
//calling on array items from Review class
export class OlderItems extends React.Component{

    render(){
        return(
            <div>
                <p>{this.props.old.Experience}</p>
                <i>{this.props.old.Name}</i>
            </div>
        );
    }
}