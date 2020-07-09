import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EloteroPage } from './elotero.page';

describe('EloteroPage', () => {
  let component: EloteroPage;
  let fixture: ComponentFixture<EloteroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EloteroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EloteroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
