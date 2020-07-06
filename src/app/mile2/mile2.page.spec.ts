import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mile2Page } from './mile2.page';

describe('Mile2Page', () => {
  let component: Mile2Page;
  let fixture: ComponentFixture<Mile2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mile2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mile2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
