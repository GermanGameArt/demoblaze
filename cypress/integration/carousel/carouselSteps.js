import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let previusImage;
let nextImage;

Given('I am on the homepage', () => {
  cy.visit('/');
  previusImage = cy.get('.carousel-inner .carousel-item.active img').invoke('attr', 'src');
  nextImage = cy.get('.carousel-inner .carousel-item.active img').invoke('attr', 'src');
});

When('I click on the previous button of the carousel', () => {
  cy.get('.carousel-control-prev').click();
});

When('I click on the next button of the carousel', () => {
  cy.get('.carousel-control-next').click();
});

Then('I should see previous image in the carousel', () => {
  cy.get('.carousel-inner .carousel-item.active img').invoke('attr', 'src').then((src) => {
    expect(src).not.to.equal(previusImage);
  });
});

Then('I should see next image in the carousel', () => {
  cy.get('.carousel-inner .carousel-item.active img').invoke('attr', 'src').then((src) => {
    expect(src).not.to.equal(nextImage);
  });
});