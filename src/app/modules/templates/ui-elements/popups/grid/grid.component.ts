import { Component, OnInit } from '@angular/core';
import {MatLegacyDialogRef as MatDialogRef} from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  constructor(
    public dialogRef: MatDialogRef<GridComponent>
  ) { }

  public close(): void {
    this.dialogRef.close();
  }
}
