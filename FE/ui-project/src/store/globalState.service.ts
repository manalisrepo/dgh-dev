import { BehaviorSubject } from 'rxjs';

class GlobalStateService {
  private countSubject = new BehaviorSubject<number>(0);
  count$ = this.countSubject.asObservable();

  increment() {
    const newValue = this.countSubject.value + 1;
    this.countSubject.next(newValue);
    console.log('🔄 Updated Count:', newValue);
  }

  getCount() {
    return this.countSubject.value;
  }
}

// ✅ Ensure only ONE instance of GlobalStateService exists
if (!(window as any).globalState) {
  (window as any).globalState = new GlobalStateService();
  console.log('✅ GlobalStateService initialized!');
} else {
  console.log('ℹ️ GlobalStateService already exists.');
}
