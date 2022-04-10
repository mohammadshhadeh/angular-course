import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('form') templateForm: NgForm;
  reactiveForm: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidReactiveForm],
        // need update according to the new update
        // CustomValidators.asyncInvalidReactiveForm
      ),
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subscription: new FormControl('Basic'),
    });
  }

  onSubmitTd() {
    console.log('this.templateForm: ', {
      name: this.templateForm.value.name,
      email: this.templateForm.value.email,
      password: this.templateForm.value.password,
      subscription: this.templateForm.value.subscription,
    });
    this.templateForm.reset();
  }

  onSubmitRf() {
    console.log('this.reactiveForm: ', this.reactiveForm);
  }
}
