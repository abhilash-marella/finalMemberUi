import { TestBed } from '@angular/core/testing';

import { MemberService } from './memberservice.service';

describe('MemberServiceService', () => {
  let service: MemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
