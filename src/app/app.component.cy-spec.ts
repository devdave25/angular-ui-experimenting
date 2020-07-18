/// <reference types="cypress" />
import { mount } from 'cypress-angular-unit-test';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('works', () => {
    mount(AppComponent);
  });
});
