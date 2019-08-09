/* global moment */
import { LightningElement, wire } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import App from '@salesforce/resourceUrl/app';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class LWCReactContainer extends LightningElement {

    @wire(getContactList)
    wiredContacts({ error, data }) {
        Promise.all([
            loadScript(this, App),
        ]).then(() => {
            mount(this.template.querySelector('div'), { contacts: data, error: error });
        });
    }

}
