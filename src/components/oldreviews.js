import React from 'react';
import { OlderItems } from './olderitems';

//map and arrow function calling array from Reviews and displaying what is shown in the OlderItems class
export class OldReviews extends React.Component{

    render(){
        return this.props.old.map( (old)=>{
            return <OlderItems old={old}></OlderItems>
        })
    }
}