'use strict';


describe('onliner', () => {

    const startPage = 'https://www.onliner.by';

    beforeEach(() => {
        browser.get(startPage)
    });


    it('should have title', () => {
        browser.get(startPage);
        //expect(page.pageTitle.getText()).toEqual('RESTAURANTS');
        //expect(page.resultsWrapper.isPresent()).toBe(true);
        console.log('I am here');
    });
});