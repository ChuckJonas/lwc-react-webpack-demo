import * as React from "react";
import { Card, Button } from '@salesforce/design-system-react';

export interface HelloProps { contacts: any[]; error: string; }

export const Hello = (props: HelloProps) => {
    
    if(props.error){
        return <div>{props.error}</div>
    }

    let contactDivs = props.contacts ? props.contacts.map(c => <div><a href={`/${c.Id}`}>{c.Name}</a></div>) : null;

    return (
        <Card heading='I am a react component' bodyClassName="slds-p-horizontal_small">
            <h1>These are the contacts you passed into me:</h1>
            {contactDivs}
            <Button label="Hello Button" />
        </Card>
    )
}