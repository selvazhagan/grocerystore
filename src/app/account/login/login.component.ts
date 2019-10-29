import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { AuthenticateService } from '@app/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CustomObserver } from '@app/core/customer-observer';
import { AppData, Customer } from '@app/shared/model/appData';
import { CUSTOMER } from '@app/app.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // We can use NONE,EMULATED,NATIVE,SHADOWDOM
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('passwordInput', { static: false }) passwordInput: ElementRef;
  errorFlag = true;
  forBiddenNames = ['selva@lbp.com', 'Raj@lbp.com'];
  private subsciption: Subscription;

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(
      null,
      [
        Validators.required,
        Validators.email,
        this.forbiidenUserName.bind(this)
      ],
      [this.forBiddenUserNameOnServer.bind(this)]
    ),
    password: new FormControl(null, Validators.required)
  });

  constructor(
    private authenticateService: AuthenticateService,
    private router: Router,
    private store: Store <AppData>
  ) {}

  ngOnInit() {
    //custom observer
    /* this.subsciption = new CustomObserver()
      .customObserverMethod()
      .subscribe(data => {
        console.log(data);
      });*/
  }

  //login(userNameInput: HTMLInputElement) {
  login() {
    //console.log(userNameInput.value);
    //console.log(this.passwordInput.nativeElement.value);
    const customer = this.authenticateService.authenticate(
      this.loginForm.value.userName,
      this.loginForm.value.password
    );
    console.log(customer);
    console.log('***********************');
    this.store.select('customer').subscribe((customers: Customer) => {
      console.log(customers);
      console.log('&&&&&&&&&&&&&&&&&&&&&&&');
    });
    //this.store.dispatch(CUSTOMER, )
    this.errorFlag = false;
    this.router.navigate(['/product/productsubcategory/Dal'], {
      queryParams: {
        id: 'Dal'
      },
      fragment: 'loading',
      queryParamsHandling: 'preserve'
    });
  }

  forbiidenUserName(control: FormControl): { [errorCode: string]: boolean } {
    if (this.forBiddenNames.includes(control.value)) {
      return { 403 : true };
    }
    return null;
  }

  forBiddenUserNameOnServer(
    control: FormControl
  ): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'selva1@lbp.com') {
          resolve({ 403: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    //this.subsciption.unsubscribe();
  }
}
