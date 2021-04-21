//checklist of places to see/visit/do
import React from "react";
import {ListGroup} from 'react-bootstrap';

export class Checklist extends React.Component{

    render(){
        return(
            <div>
                <h3>Check out these amazing spots!</h3>
                <ListGroup>
                <ListGroup.Item>Slieve League Cliffs, County Donegal</ListGroup.Item>
                <ListGroup.Item>Downpatrick Head, County Mayo</ListGroup.Item>
                <ListGroup.Item>Doolough Valley, County Mayo</ListGroup.Item>
                <ListGroup.Item>Croagh Patrick, County Mayo</ListGroup.Item>
                <ListGroup.Item>Cliffs of Moher, County Clare</ListGroup.Item>
                <ListGroup.Item>Rossbeigh, County Kerry</ListGroup.Item>
                <ListGroup.Item>Slea Head, County Kerry</ListGroup.Item>
                <ListGroup.Item>Skellig Michael, County Kerry</ListGroup.Item>
                <ListGroup.Item>The Beara Peninsula, County Cork & Kerry</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}