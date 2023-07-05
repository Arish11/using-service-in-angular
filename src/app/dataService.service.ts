import { Injectable } from "@angular/core";
import { LoginService } from "./logging.service";

@Injectable()
export class DataService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private _loginServ:LoginService){

      }

      onAccountAdded(name: string, status: string) {
        this.accounts.push({name: name,status: status});
        this._loginServ.onStatusChange(status)
      }
    
      onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this._loginServ.onStatusChange(newStatus)
      }
}