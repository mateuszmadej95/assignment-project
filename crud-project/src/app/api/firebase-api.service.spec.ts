/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FirebaseApiService } from './firebase-api.service';

describe('Service: FirebaseApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseApiService]
    });
  });

  it('should ...', inject([FirebaseApiService], (service: FirebaseApiService) => {
    expect(service).toBeTruthy();
  }));
});
