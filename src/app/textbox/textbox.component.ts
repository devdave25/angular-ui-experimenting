import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
