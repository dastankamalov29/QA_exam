class ViewAndEditPage {
    get user () { return $('tbody tr.crm-navigator-table__row:nth-child(1)')}
    get userSurname () { return $('#mat-input-1')}
    get userFirstname () { return $('#mat-input-2')}
    get dateOfBirth () { return $('#mat-input-4')}
    get telButton () { return $('.tel span')}
    get phonenumber () { return $('input[formcontrolname="phone"]')}
    get email () { return $('input[formcontrolname="email"]')}
    get saveTelButton () { return $('.mat-raised-button:nth-child(2)')}
    get saveButton () { return $('.save-btn button')}

    async doEdit(surname, firstname, dob, phonenumber, email) {
        await this.user.click();
        await browser.pause(5000);
        await this.userSurname.setValue(surname);
        await this.userFirstname.setValue(firstname);
        await this.dateOfBirth.setValue(dob);
        await this.telButton.click();
        await browser.pause(2000);
        await this.phonenumber.setValue(phonenumber);
        await this.email.setValue(email);
        await this.saveTelButton.click();
        await browser.pause(2000);
        await this.saveButton.click();
        await browser.pause(5000);
    }
}

module.exports = new ViewAndEditPage();