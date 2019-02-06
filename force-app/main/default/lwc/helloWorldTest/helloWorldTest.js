
import { LightningElement, track } from 'lwc';
export default class HelloWorldTest extends LightningElement {
    
    @track greeting = 'World';

    handleCh(even) {
        this.greeting = even.target.value;
    }
}