import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface AssetElement {
  position: number;
  asset: string;
  quantity: number;
  weight: number;
  business: string;
  location: string;
  orderNo: number;
  receive: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Avocados', weight: 100, symbol: 'H'},
  ];

// const ASSET_DATA: AssetElement[] = [
//   {position: 1, asset: 'Hydrogen', quantity: 1000, weight: 1.0079, business: 'Delamare', location: 'Limuru', orderNo: 3, receive: 'ten'}
// ];


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;

  // displayedColumns: string[] = ['position', 'asset', 'weight', 'symbol'];
  // dataSource = ASSET_DATA;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(
    // private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    // this.firstFormGroup = this.formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this.formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
    // this.thirdFormGroup = this.formBuilder.group({
    //   thirdCtrl: ['', Validators.required]
    // });
    // this.fourthFormGroup = this.formBuilder.group({
    //   fourthCtrl: ['', Validators.required]
    // });
    // this.fifthFormGroup = this.formBuilder.group({
    //   fifthCtrl: ['', Validators.required]
    // });
    // this.sixthFormGroup = this.formBuilder.group({
    //   sixthCtrl: ['', Validators.required]
    // });
    // this.seventhFormGroup = this.formBuilder.group({
    //   seventhCtrl: ['', Validators.required]
    // });
  }

}
