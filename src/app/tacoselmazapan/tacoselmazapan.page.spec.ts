import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TacoselmazapanPage } from './tacoselmazapan.page';

describe('TacoselmazapanPage', () => {
  let component: TacoselmazapanPage;
  let fixture: ComponentFixture<TacoselmazapanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacoselmazapanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TacoselmazapanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
