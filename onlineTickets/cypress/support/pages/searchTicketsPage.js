const data = require("../../fixtures/testData.json");


export class SearchTickets {

    static SEARCH_FORM = '[id="searchTimetableForm"]';
    static DEPARTURE = '[name="textBoxPartida"]';
    static ARRIVAL = '[name="textBoxChegada"]';
    static DEPARTURE_DATE = '[id="datepicker-first"]';
    static ARRIVAL_DATE = '[id="datepicker-second"]';
    static SUBMIT_BTN = 'input[value="Submit »"]';


    formFields = [
        { selector: SearchTickets.DEPARTURE, value: data.departure },
        { selector: SearchTickets.ARRIVAL, value: data.arrival },
        { selector: SearchTickets.DEPARTURE_DATE, value: this.getFormattedDate(3) },
        { selector: SearchTickets.ARRIVAL_DATE, value: this.getFormattedDate(5) }
    ];

    getURL() {
        return cy.url();
    }

    getFormattedDate(daysAhead) {
        const date = new Date();
        date.setDate(date.getDate() + daysAhead);
        const day = date.getDate();
        const month = date.toLocaleString("en-GB", { month: "long" });
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    }

    visitWebsite() {
        cy.visit(data.url,{ timeout: 60000 });
    }

    clickSubmitButton() {
        cy.get(SearchTickets.SUBMIT_BTN).click();
    }

    enterTravelDetails() {
        cy.get(SearchTickets.SEARCH_FORM).within(() => {
            cy.get(SearchTickets.DEPARTURE)
                .type("Lagos")
                .wait(1000)
                .type('{downarrow}')
                .type('{enter}');

            cy.get(SearchTickets.ARRIVAL)
                .type("Porto Campanha")
                .wait(1000)
                .type('{downarrow}')
                .type('{enter}');

            cy.get(SearchTickets.DEPARTURE_DATE)
                .wait(1000)
                .type('{selectall}{del}')
                .type(this.getFormattedDate(3),{ force: true })
                .type('{enter}')
                .wait(2000);

            cy.get(SearchTickets.ARRIVAL_DATE)
                .invoke('val', this.getFormattedDate(5),{ force: true })
                .trigger('change');
        });
    }

    validateFormFields() {
    this.formFields.forEach((field) => {
        cy.get(field.selector)
            .should('exist') 
            .should('be.visible') 
            .should('be.enabled')
            .wait(1000)
            .and('have.value', field.value);
    });
}


}

export const searchTickets = new SearchTickets();
