import {Component, OnInit} from '@angular/core';
import { Page } from '@nativescript/core/ui';
import { CheckBox } from '@nstudio/nativescript-checkbox';
import { AccountTypeService } from '~/app/shared/accounttype.service';
import { RouterExtensions } from "@nativescript/angular";


@Component({
    templateUrl: './newaccounttype.component.html'
})
export class NewAccountType implements OnInit {

    checkGeneral: Boolean = true;
    checkCredit: Boolean = false;
    checkDebit: Boolean = false;
    name: string;

    constructor(private page: Page,
        private accountTypeService: AccountTypeService,
        private router: RouterExtensions
    ) {
        
    }
    ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.setupCheckBox();
    }

    setupCheckBox() {
        let generalCheckBox: CheckBox = this.page.getViewById("checkGeneral");
        let creditCheckBox: CheckBox = this.page.getViewById("checkCredit");
        let debitCheckBox: CheckBox = this.page.getViewById("checkDebit");
        
        generalCheckBox.on('checkedChange',()=> {
            if (generalCheckBox.checked == true) {

                creditCheckBox.checked = false;
                debitCheckBox.checked = false;
                this.checkGeneral = true;
                this.checkCredit = false;
                this.checkDebit = false;
            }
        });
        creditCheckBox.on('checkedChange',()=> {
            if (creditCheckBox.checked == true) {
                generalCheckBox.checked=false;
                debitCheckBox.checked=false;
                this.checkGeneral = false;
                this.checkCredit = true;
                this.checkDebit = false;
            }
        })
        debitCheckBox.on('checkedChange',()=> {
            if (debitCheckBox.checked == true) {
                generalCheckBox.checked = false;
                creditCheckBox.checked = false;
                this.checkGeneral = false;
                this.checkCredit = false;
                this.checkDebit = true;
            }
        })
    }

    save() {

        this.accountTypeService
            .createAccountType(this.name, this.getAccountTypeFromBooleans())
            .subscribe(data => {
                console.log('Inserted data', data)
                this.back();
            })
    }

    private back() {
        this.router.back();
    }
    private getAccountTypeFromBooleans() {
        switch (true) {
            case this.checkGeneral:
                    return "GENERAL";
                break;
            case this.checkCredit:
                    return "CREDIT";
                break;
            case this.checkDebit:
                    return "DEBIT";
                break;
            default:
                throw Error("Invalid Account type selected");

        }
    }


}