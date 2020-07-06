import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrepaselreyPage } from './crepaselrey.page';

describe('CrepaselreyPage', () => {
  let component: CrepaselreyPage;
  let fixture: ComponentFixture<CrepaselreyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrepaselreyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrepaselreyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
