/* global moment */
import { LightningElement, track, wire } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import App from '@salesforce/resourceUrl/app';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class LWCReactContainer extends LightningElement {

    @track contacts;
    @track error;

    @wire(getContactList)
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            console.log('Contacts',JSON.stringify(data));
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }

    async connectedCallback() {
        Promise.all([
            loadScript(this, App),
        ]).then(() => { /* callback */
            setTimeout(()=>mount(this.template.querySelector('div'), {contacts: this.contacts, error: this.error}), 1000)
            
        });
     }

}
