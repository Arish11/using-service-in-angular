import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from '../logging.service';
import { DataService } from '../dataService.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers:[LoginService,DataService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  

  constructor(private _loginServ: LoginService, private _dataServ:DataService){}

  onSetTo(status: string) {
   this._dataServ.onStatusChanged(this.id,status)
    //console.log('A server status changed, new status: ' + status);
  }
}
