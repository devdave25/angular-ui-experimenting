import { storiesOf } from '@storybook/angular';
import { TextboxComponent } from './textbox.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const moduleMetaData = {
    imports: [
        MatInputModule,
        MatFormFieldModule
    ]
};

export default {
    title: 'Title',
    // component: TextboxComponent,
    // moduleMetadata: moduleMetaData
};

storiesOf('Textbox', module)
    .add('Default', () => ({
        component: TextboxComponent,
        moduleMetadata: moduleMetaData
    }))
    .add('With Autocomplete', () => ({
        component: TextboxComponent,
        props: {
            autocomplete: 'on'
        },
        moduleMetadata: moduleMetaData
    }))
    .add('With prefilled text', () => ({
        component: TextboxComponent,
        props: {
            value: 'this input is prefilled'
        },
        moduleMetadata: moduleMetaData
    }));
