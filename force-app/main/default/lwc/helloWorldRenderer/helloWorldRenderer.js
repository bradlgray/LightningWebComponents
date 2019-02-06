import { LightningElement, track } from 'lwc';

export default class HelloWorldRenderer extends LightningElement {
    @track areDetailsVisible = false;

    handleChange(event) {
        this.areDetailsVisible = event.target.value;
        this.areDetailsVisible = event.target.value;
    }
}