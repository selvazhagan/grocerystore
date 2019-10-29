import { Component, OnInit, ViewChild, AfterViewChecked } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"]
})
export class ForgotPasswordComponent implements OnInit, AfterViewChecked {
  @ViewChild("f", { static: true }) forgotPassWordForm: NgForm;

  constructor() {}

  ngOnInit() {}

  onForgotPasswordSubmit() {
    console.table(this.forgotPassWordForm.value);
  }

  ngAfterViewChecked(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //using this approach , it has to have same object stsrcuture as form
    /*this.forgotPassWordForm.setValue({
      userId : {
        userName: 'selva@lbp.com',
        email:'raj'
      }
    });*/

    this.forgotPassWordForm.form.patchValue({
      userId: {
        email: "selva@ld.com"
      }
    });
  }
}
