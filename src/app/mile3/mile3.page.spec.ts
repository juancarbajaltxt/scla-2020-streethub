import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mile3Page } from './mile3.page';

describe('Mile3Page', () => {
  let component: Mile3Page;
  let fixture: ComponentFixture<Mile3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mile3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mile3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
