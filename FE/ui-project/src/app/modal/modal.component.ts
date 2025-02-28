import { Component, ElementRef, Input } from '@angular/core';
import { ModalService } from '../modal.service';
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
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() id: string = 'hi';
  private element: any;
  @Input() modalConfig: ModalConfig | undefined;

  constructor(private modalService: ModalService, private el: ElementRef) {
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

    this.element.addEventListener('click', function (e: any) {
      if (
        e.target.className === 'model-close-btn' ||
        e.target.className === 'close-image'
      ) {
        modal.close();
      }
    });
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
  }
}
