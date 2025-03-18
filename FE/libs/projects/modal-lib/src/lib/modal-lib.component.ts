import { Component, EventEmitter, Input, Output } from '@angular/core';
interface ModalConfig {
  modalTitle: string;
  dismissButtonLabel?: string;
  closeButtonLabel?: string;
  disableCloseButton?: boolean;
  disableDismissButton?: boolean;
  hideCloseButton?: boolean;
  hideDismissButton?: boolean;
}
@Component({
  selector: 'lib-modal-lib',
  templateUrl: './modal-lib.component.html',
  styleUrl: './modal-lib.component.scss'
})
export class ModalLibComponent {
  @Input() modalConfig: ModalConfig | undefined;
  @Output() saved: EventEmitter<any> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();  

  constructor() {
    
  }

  ngOnInit(): void {
  }

  close(){
    this.closed.emit('closed');
  }

  closeSave(){
    this.saved.emit('Saved');
  }
}
