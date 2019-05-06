import { Component, OnInit, OnDestroy, OnChanges, ChangeDetectionStrategy} from '@angular/core';
import { AuthService, CommonService, ProfileService } from '../../services/index';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { NgModel, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class LoginComponent implements OnInit, OnDestroy {
  model = { email: '', password: ''};
  loginForm: FormGroup;
  isSubmitted  =  false;
  constructor( private router: Router, private activateRoute: ActivatedRoute, private authService: AuthService) {

  }

  get formControls() { return this.loginForm.controls; }

  ngOnInit() {
    // this.loginForm  =  this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }


  ngOnDestroy() {

  }


  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value);
    // this.router.navigateByUrl('/admin');
  }


}
