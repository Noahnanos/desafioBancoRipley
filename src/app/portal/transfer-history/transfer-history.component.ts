import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TransferService } from 'src/app/services/transfer.service';

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

export class TransferHistoryComponent implements OnInit{
  displayedColumns: string[] = ['name', 'rut', 'bank', 'countType', 'mount' ];
  dataSource = new MatTableDataSource([]);

  
  constructor(private transferService: TransferService){}
  ngOnInit(): void {
    this.showHistory();
  }

  showHistory(){
    this.transferService.getHistory()
    .subscribe((response: any) => {
      console.log(response)
      const transfers = response.transfers.map((t:any) => ({
        name: t.recipient.username, 
        rut: t.recipient.rut, 
        bank: t.recipient.bank, 
        countType: t.recipient.accountType,
        mount: t.mount
      }));
      this.dataSource = new MatTableDataSource(transfers);
    })
  }


}

