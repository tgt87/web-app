import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

@Component({  
    selector: 'error-msg',
    template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <h4 class="modal-title">{{title}}</h4>
                     <button type="button" class="close" (click)="close()" >&times;</button>
                     
                   </div>
                   <div class="modal-body">
                     <p>{{message}}</p>
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-default" (click)="close()" >Cancel</button>
                   </div>
                 </div>
              </div>`
})
export class ErrorMsgComponent extends DialogComponent<null, null> {
  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }

}

