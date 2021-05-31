import { Injectable } from "@angular/core"
import { from, Observable } from "rxjs"
import {DBService} from "./db.service"

@Injectable({
    providedIn: 'root',
})
export class AccountTypeService {
    constructor(public dbService: DBService) {

    }

    getAccountTypes(): Observable<any> {
        console.log('Getting Account types', this.dbService.getDb());
        const $select = from(this.dbService.getDb().all('select * from accounttype'));

        return $select;
    }
}