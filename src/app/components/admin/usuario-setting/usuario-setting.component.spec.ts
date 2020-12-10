import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioSettingComponent } from './usuario-setting.component';

describe('UsuarioSettingComponent', () => {
  let component: UsuarioSettingComponent;
  let fixture: ComponentFixture<UsuarioSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
