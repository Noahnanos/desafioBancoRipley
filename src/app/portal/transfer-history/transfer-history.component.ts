import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  rut: string;
  bank: string;
  countType: string;
  mount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: "max jara fierro", rut: '16314626-6', bank: "banco del desarrollo", countType: 'vista', mount: 10000},
  {name: "max jara fierro", rut: '16314626-6', bank: "banco del desarrollo", countType: 'vista', mount: 10000},
  {name: "max jara fierro", rut: '16314626-6', bank: "banco del desarrollo", countType: 'corriente', mount: 10000},
  {name: "max jara fierro", rut: '16314626-6', bank: "banco del desarrollo", countType: 'corriente', mount: 10000},
  {name: "max jara fierro", rut: '16314626-6', bank: "banco del desarrollo", countType: 'corriente', mount: 10000},
  {name: "max jara fierro", rut: '16314626-6', bank: "banco del desarrollo", countType: 'corriente', mount: 10000},
  {name: "max jara fierro", rut: '16314626-6', bank: "banco del desarrollo", countType: 'corriente', mount: 10000},
  {name: "max jara fierro", rut: '16314626-6', bank: "banco del desarrollo", countType: 'corriente', mount: 10000},
  {name: "max jara fierro", rut: '16314626-6', bank: "banco del desarrollo", countType: 'corriente', mount: 10000},
  
  
];

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.scss']
})

export class TransferHistoryComponent {
  displayedColumns: string[] = ['name', 'rut', 'bank', 'countType', 'mount' ];
  dataSource = new MatTableDataSource(ELEMENT_DATA) ;

}

