import { configure, addDecorator } from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs/angular';

setOptions({
    name: 'Angular Material'
});

addDecorator(withKnobs);

// automatically import all files ending in *.stories.ts
const req = require.context('../src/app', true, /.stories.ts$/);
function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
