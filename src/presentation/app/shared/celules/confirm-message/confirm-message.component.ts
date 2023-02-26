import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-message',
  templateUrl: './confirm-message.component.html',
  styleUrls: ['./confirm-message.component.scss'],
})
export class ConfirmMessageComponent {
  @Input() title: string = '';
  @Input() message: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string },
    private dialogRef: MatDialogRef<ConfirmMessageComponent>
  ) {
    this.title = data.title;
    this.message = data.message;
  }

  aceptar() {
    this.dialogRef.close(true);
  }
}
