import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'] 
})
export class NavigationComponent {
  ls = localStorage;

  constructor(private router: Router) {}

  homeredirect(){
    this.router.navigate(['customer']);
  }

  registerHandler() {
    this.router.navigate(['register']);
  }

  signupHandler() {
    this.router.navigate(['signup']);
  }

  logoutHandler() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  viewUserDetails() {
    const email = localStorage.getItem('email'); 
    if (email) {
      alert(`User Details:\nEmail: ${email}`); 
    } else {
      alert('No user is logged in.');
    }
  }
}