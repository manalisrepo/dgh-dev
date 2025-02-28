import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ModalLibService } from './modal-lib.service';
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
  standalone: false,
  templateUrl: './modal-lib.component.html',
  styleUrl: './modal-lib.component.scss',
})
export class ModalLibComponent {
  @Input() id: string = '';
  private element: any;
  @Input() modalConfig: ModalConfig | undefined;
  @Output() saved: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: ModalLibService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    let modal = this;

    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }
    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', function (e: any) {
      if (e.target.className === 'modal__overlay modal__overlay--toggle') {
        modal.close();
      }
    });

    //   this.element.addEventListener('click', function (e: any) {
    //     if (e.target.className === 'model-close-btn' || e.target.className === 'close-image' ) {
    //         modal.close();
    //     }
    // });
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    //console.log(this.element);
    this.element.style.display = 'block';
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    this.modalService.close(this.id);
    this.modalService.remove(this.id);
    this.element.remove();
    this.id = '';
  }
  closeSave() {
    this.saved.emit('Saved');
    this.element.style.display = 'none';
    this.modalService.close(this.id);
    this.modalService.remove(this.id);
    this.element.remove();
    this.id = '';
  }
}
