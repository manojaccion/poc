import { Component, OnInit, ElementRef, Directive, HostListener, HostBinding, OnDestroy, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Location } from '@angular/common';
import { ProfileService } from 'src/app/services/profile.service';
@Component({
  selector: 'app-app-layout-header',
  templateUrl: './app-layout-header.component.html',
  styleUrls: ['./app-layout-header.component.scss']
})
export class AppLayoutHeaderComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private _eref: ElementRef, private _location: Location, private profile: ProfileService) {

  }

  ngOnInit() {

  }
  editUserProfile() {
    // this.profile.editGeneralProf("Edit General");
  }
  editChurchProfile(){
    //  this.profile.changeMessage("Edit Church General");
  }
  newMessage() {
    // this.profile.changeMessage("Hello from Sibling")
  }

  ngOnDestroy() {

  }

  showProfile() {

  }

  showNotification(){

  }

  navigateBackHead() {
    this._location.back();
  }

  closeDropdown(event) {

  }

  logout() {
    // gigya.socialize.logout({ callback: this.gigClass.onLogoutResponse.bind(this) });
  }
}
