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
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.css']
})
export class DispatchComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
