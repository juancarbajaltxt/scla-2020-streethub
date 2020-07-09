import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FruitstandPage } from './fruitstand.page';

describe('FruitstandPage', () => {
  let component: FruitstandPage;
  let fixture: ComponentFixture<FruitstandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitstandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FruitstandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
