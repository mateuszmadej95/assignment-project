/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JsonApiService } from './json-api.service';

describe('Service: JsonApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonApiService]
    });
  });

  it('should ...', inject([JsonApiService], (service: JsonApiService) => {
    expect(service).toBeTruthy();
  }));
});
