import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmMessageComponent } from '../celules/confirm-message/confirm-message.component';
import { MessageComponent } from '../celules/message/message.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public dialog: MatDialog) {}

  showModalMessage(title: string, message: string) {
    const dialogRef = this.dialog.open(MessageComponent, {
      data: { title, message },
    });
  }

  showDialogConfirm(title: string, message: string, callback: () => void) {
    const dialogRef = this.dialog.open(ConfirmMessageComponent, {
      data: {
        title,
        message,
      },
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        callback();
      }
    });
  }
}
