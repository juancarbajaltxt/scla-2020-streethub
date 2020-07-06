import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaqueroPage } from './taquero.page';

describe('TaqueroPage', () => {
  let component: TaqueroPage;
  let fixture: ComponentFixture<TaqueroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaqueroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaqueroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
