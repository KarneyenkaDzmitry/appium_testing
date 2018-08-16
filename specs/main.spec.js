'use strict';
const searchField = $('.search-box');
const menu = $('div.nav-toggle-btn');
const menuHotelReff = $('#Hotel');
const startPage = 'https://www.bellagio.com';

describe('bellagio.com ', () => {

    beforeEach(() => {
        browser.get(startPage);
    });

    it('should have a text - "BOOK A ROOM"', () => {
        expect($('div.nav-booking').getText()).toContain('BOOK A ROOM');
    });

    it('can choose room in field - "reservation"', () => {
        menu.click();
        expect(menuHotelReff.getText()).toContain('HOTEL');
    });

    it('should open menu with search field at the top', () => {
        menu.click();
        expect(searchField.isDisplayed()).toBeTruthy();
    });
});