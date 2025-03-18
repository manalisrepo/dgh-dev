import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  constructor(private cdr: ChangeDetectorRef) {}
  isExpanded = true;

  menuItems = [
    {
      label: 'Dashboard',
      link: '/dashboard',
      icon: 'dashboard',
      faIcon: 'fa-th-large',
    },
    {
      label: 'My Requests',
      link: '/requests',
      icon: 'description',
      faIcon: 'fa-file-alt',
    },
    {
      label: 'My Drafts',
      link: '/drafts',
      icon: 'edit_document',
      faIcon: 'fa-file-edit',
    },
    {
      label: 'Production & Drilling',
      link: '/production',
      icon: 'engineering',
      faIcon: 'fa-industry',
    },
    {
      label: 'Finance & Settlements',
      link: '/finance',
      icon: 'account_balance_wallet',
      faIcon: 'fa-wallet',
    },
    {
      label: 'Factsheet',
      link: '/factsheet',
      icon: 'article',
      faIcon: 'fa-file-invoice',
    },
    {
      label: 'Help & Support',
      link: '/help',
      icon: 'help_outline',
      faIcon: 'fa-question-circle',
    },
  ];

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
    this.cdr.detectChanges(); // 🔥 Force change detection

    console.log('Sidebar expanded:', this.isExpanded);

    // Ensure global function is called
    if (typeof window !== 'undefined' && (window as any).toggleSidebar) {
      (window as any).toggleSidebar(this.isExpanded);
    }
  }
}
