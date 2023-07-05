import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../logging.service';
import { DataService } from '../dataService.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers:[LoginService,DataService]
})
export class NewAccountComponent {
 

  constructor(private _loggingServ:LoginService,private _dataServ:DataService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this._dataServ.onAccountAdded(accountName, accountStatus)
    //this._loggingServ.onStatusChange(accountStatus)
  }
}
