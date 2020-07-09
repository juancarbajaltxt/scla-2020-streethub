import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TamaleraPage } from './tamalera.page';

describe('TamaleraPage', () => {
  let component: TamaleraPage;
  let fixture: ComponentFixture<TamaleraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamaleraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TamaleraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
