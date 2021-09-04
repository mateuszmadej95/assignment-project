import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { JsonApiService } from 'src/ProjectApi/json-api.service';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  public formGroup: FormGroup;
  public saveDisabled = false;

  private subscriptionSink: Subscription[] = [];

  constructor(
    private readonly formService: FormService,
    private readonly jsonApiService: JsonApiService,
    private readonly router: Router,
    ) { }

  public ngOnInit(): void {
    this.formGroup = this.formService.initFormGroup();
  }

  public ngOnDestroy(): void {
    this.subscriptionSink.forEach(sub => sub.unsubscribe());
  }

  public navigateBack(): void {
    this.router.navigate(['/']);
  }

  public saveItem(): void {
    const fgValues = this.formGroup.value;
    const newItem = {
      id: fgValues.id,
      title: fgValues.title,
      author: fgValues.author
    };

    this.saveDisabled = true;
    this.subscriptionSink.push(this.jsonApiService.addTableItem(newItem).subscribe());
    this.navigateToTable();
  }

  private navigateToTable() {
    setTimeout(() => {
      this.router.navigate(['/table'])
    }, 1000);
  }
}
