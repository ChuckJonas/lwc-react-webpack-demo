import * as React from "react";

export interface HelloProps { contacts: any[]; error: string; }

export const Hello = (props: HelloProps) => {
    
    if(props.error){
        return <div>{props.error}</div>
    }

    let contactDivs = props.contacts ? props.contacts.map(c => <div><a href={`/${c.Id}`}>{c.Name}</a></div>) : null;

    return (
        <div>
            <h1>Hello... I am a react component.  These are the contacts you passed into me:</h1>
            {contactDivs}
        </div>
    )
}