import { Component } from '@angular/core';
import { assetUrl } from '../../../single-spa/asset-url';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  imageUrl = assetUrl('dghlogo.jpg');
}
