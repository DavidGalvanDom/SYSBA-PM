import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SYSBAPMAppComponent } from '../app/sysba-pm.component';

beforeEachProviders(() => [SYSBAPMAppComponent]);

describe('App: SYSBAPM', () => {
  it('should create the app',
      inject([SYSBAPMAppComponent], (app: SYSBAPMAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'sysba-pm works!\'',
      inject([SYSBAPMAppComponent], (app: SYSBAPMAppComponent) => {
    expect(app.title).toEqual('sysba-pm works!');
  }));
});
