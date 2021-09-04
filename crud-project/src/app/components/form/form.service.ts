import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private readonly formBuilder: FormBuilder) { }

  public initFormGroup(): FormGroup {
    const formGroup = this.formBuilder.group({
      id: this.formBuilder.control('', [Validators.required]),
      title: this.formBuilder.control('', [Validators.required, Validators.minLength(7)]),
      author: this.formBuilder.control('', [Validators.required]),
    });

    return formGroup;
  }

}
