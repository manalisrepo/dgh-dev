import { Injectable } from '@angular/core';
// import  *  as CryptoJS from  'crypto-js';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EncryptService {
  constructor() {}

  encrypt(txt: any): string {
    return '';
    // return CryptoJS.AES.encrypt(txt, environment.encryptionKey).toString();
  }

  decrypt(txtToDecrypt: any) {
    return '';
    // return CryptoJS.AES.decrypt(txtToDecrypt, environment.encryptionKey).toString(CryptoJS.enc.Utf8);
  }
}
