import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChurrosPage } from './churros.page';

describe('ChurrosPage', () => {
  let component: ChurrosPage;
  let fixture: ComponentFixture<ChurrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChurrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChurrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
