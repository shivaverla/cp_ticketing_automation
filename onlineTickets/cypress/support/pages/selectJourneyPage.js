
export class SelectJourney {

    static CANCEL_BTN = 'input[id="exitButton"]';

    clickCancelButton() {
        cy.get(SelectJourney.CANCEL_BTN).click( { timeout: 5000 });
    }

    verifyPageTitle(expectedTitle) {
        return cy.title().then((pageTitle) => {
            cy.log('Page Title:', pageTitle);
            expect(pageTitle).to.equal(expectedTitle);
        });
    }

}

export const selectJourney = new SelectJourney();