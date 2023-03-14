import {  Component, EventEmitter, OnInit, Output  } from '@angular/core';
import {CANDIDATS} from '../mock-candidat';

@Component({
  selector: 'app-modal-candidat',
  templateUrl: './modal-candidat.component.html',
  styleUrls: ['./modal-candidat.component.scss']
})
export class ModalCandidatComponent implements OnInit {

  candidats=CANDIDATS
  @Output() close : EventEmitter<string> = new EventEmitter<string>()
    constructor() { }
  
    ngOnInit(): void {
    }
   closeModal(){
      this.close.emit()
    }
  }
