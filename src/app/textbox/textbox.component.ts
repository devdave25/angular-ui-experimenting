import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {
    value;
    autocomplete = 'off';

    constructor() { }

    ngOnInit(): void {
    }

}
