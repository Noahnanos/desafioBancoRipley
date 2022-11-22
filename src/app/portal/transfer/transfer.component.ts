import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent {
  finderFormControl = new FormControl('', [Validators.required]);
  mountFormControl = new FormControl('', [Validators.required]);
}
