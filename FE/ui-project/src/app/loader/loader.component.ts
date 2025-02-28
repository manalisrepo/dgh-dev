import { Component, Input } from '@angular/core';
import { ModalService } from '../modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  @Input() showLoader: any = false;
  @Input() loaderText: any = '';

  private subscription: Subscription | undefined;

  constructor(private loaderService: ModalService) {
    loaderService.subject.subscribe((message) => {
      if (message && message != '') {
        if (message?.showLoader) {
          this.showLoader = message.showLoader;
        }
        if (message?.loaderMsg) {
          this.loaderText = message.loaderMsg;
        }
      } else {
        this.showLoader = false;
        this.loaderText = '';
      }
    });
  }
}
