import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TacoslospelonesPage } from './tacoslospelones.page';

describe('TacoslospelonesPage', () => {
  let component: TacoslospelonesPage;
  let fixture: ComponentFixture<TacoslospelonesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacoslospelonesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TacoslospelonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
