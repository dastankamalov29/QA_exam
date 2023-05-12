class ClientsPage {
    get userSurname () { return $('input[formcontrolname="userSurname"]') }
    get userFirstname () { return $('input[formcontrolname="userName"]') }
    get maleRadioButton () { return $('mat-radio-group mat-radio-button:nth-child(1) div[class="mat-radio-label-content"]') }
    get emailField () { return $('input[formcontrolname="email"]') }
    get phoneNumberField () { return $('input[formcontrolname="phone"]') }
    get datebirthField () { return $('input[formcontrolname="birthday"]') }
    get saveButton () { return $('button[name="save"]') }

    async doFill(surname, firstname, email, phonenumber, dateOfBirth) {
        await this.userSurname.setValue(surname);
        await this.userFirstname.setValue(firstname);
        await this.maleRadioButton.click();
        await this.emailField.setValue(email);
        await this.phoneNumberField.setValue(phonenumber);
        await this.datebirthField.setValue(dateOfBirth);
        await this.saveButton.click();
    }
}

module.exports = new ClientsPage();