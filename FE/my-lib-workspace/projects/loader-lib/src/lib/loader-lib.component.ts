import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderLibService } from './loader-lib.service';

@Component({
  selector: 'lib-loader-lib',
  standalone: false,
  templateUrl: './loader-lib.component.html',
  styleUrl: './loader-lib.component.scss',
})
export class LoaderLibComponent {
  @Input() showLoader: any = false;
  @Input() loaderText: any = '';

  private subscription: Subscription | undefined;

  constructor(private loaderService: LoaderLibService) {
    this.subscription = loaderService.getMessage().subscribe((message) => {
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
