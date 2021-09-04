import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private readonly formService: FormService) { }

  public ngOnInit(): void {
    this.formGroup = this.formService.initFormGroup();

    this.formGroup.valueChanges.subscribe(val => {
      console.log(this.formGroup)
    })
  }

  public navigateBack(): void {
    console.log('navigate back')
  }

  public saveItem(): void {
    console.log('saving', this.formGroup)
  }
}
