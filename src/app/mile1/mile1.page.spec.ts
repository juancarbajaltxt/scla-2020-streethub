import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mile1Page } from './mile1.page';

describe('Mile1Page', () => {
  let component: Mile1Page;
  let fixture: ComponentFixture<Mile1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mile1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mile1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
