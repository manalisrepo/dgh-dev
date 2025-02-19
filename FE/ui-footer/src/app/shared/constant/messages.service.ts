import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

   errorMessages = {
    "UsernameRequired": "Please enter your Username!",
    "PasswordRequired": "Please enter your Password!",
    "CaptchaRequired": "Please enter capptcha!",
    "InvalidUsernameorPassword": "Username or Password is invalid",
    "mobileOtpRequored":"Mobile Otp is required",
    "emailOtpRequored":"Email Otp is required",
    "confirmapasswordRequired": "Please enter confirm Password!",
    "InvalidConfirmPassword": "Password and Confirm Password fields do not match.",
    "CurrentPasswordRequired":"Please enter current password"
  }
}


