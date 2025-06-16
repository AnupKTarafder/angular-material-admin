import {Component, Inject} from '@angular/core';
import {MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef} from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-subscribed',
  templateUrl: './subscribed.component.html',
  styleUrls: ['./subscribed.component.scss']
})
export class SubscribedComponent {

  constructor(
    public dialogRef: MatDialogRef<SubscribedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public close(): void {
    this.dialogRef.close();
  }

}
