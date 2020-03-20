import { Component, OnInit } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public imagesUrl;

  animal: string;
  name: string;

  constructor() { }


  ngOnInit(): void {
    // this.imagesUrl = ['IMAGE_URL1.jpg', 'IMAGE_URL2.jpg', 'IMAGE_URL3.jpg'];
  }

}
