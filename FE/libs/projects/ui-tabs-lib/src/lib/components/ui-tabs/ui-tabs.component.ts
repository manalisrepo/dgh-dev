import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { UiTab } from '../../constants/ui-tabs';

@Component({
  selector: 'ui-tabs',
  templateUrl: './ui-tabs.component.html',
  styleUrls: ['./ui-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UiTabComponent implements OnInit {
  @Input() public activeTab: string = '';
  @Input() public isCenter: boolean = false;
  @Input() public tabData: UiTab[] = [];
  @Output() selectTab = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public onClickTab(e: MouseEvent, item: UiTab): void {
    if (!item.disabled && this.activeTab !== item.tabName) {
      this.activeTab = item.tabName;
      this.selectTab.emit(this.activeTab);
    }
  }
}
