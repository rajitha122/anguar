import { Component, EventEmitter, Output} from  '@angular/core';


@Component({
 selector :'app-header',
 templateUrl : './header.component.html'
})
export class headerComponent{
//to listen this event outside of the component we use @output
//to make it listenable to app component use @ output
    @Output() featureselected =new EventEmitter<string>();

//we have to emit our own event
    onSelect(message :string)
    {
       this.featureselected.emit(message);
    }
}