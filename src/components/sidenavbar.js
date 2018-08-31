import React, { Component } from 'react';
import {SideNav, SideNavItem, Collapsible, CollapsibleItem} from "react-materialize";
import {Link} from 'react-router';

class Side extends Component{
    render(){
        return(
            <div>
            <SideNav fixed style={{'position': 'inherit'}} >
            <Collapsible className="black-text" >
                <CollapsibleItem className="upperIt" header='Model Creator' icon='create'>
                    <SideNavItem waves >
                        <Link to={'/createModel'}>Create Model</Link>
                    </SideNavItem>
                    <SideNavItem waves >Show Model Gradient</SideNavItem>
                    <SideNavItem waves >Delete Model</SideNavItem>
                    <SideNavItem waves >Check Training History</SideNavItem>
                </CollapsibleItem>
                <CollapsibleItem className="upperIt" header='Data Provider' icon='file_copy'>
                    <SideNavItem waves >Create Model</SideNavItem>
                    <SideNavItem waves >Show Model Gradient</SideNavItem>
                    <SideNavItem waves >Delete Model</SideNavItem>
                    <SideNavItem waves >Check Training History</SideNavItem>
                </CollapsibleItem>
            </Collapsible>
            </SideNav>
            </div>
        );
    }
}

export default Side;