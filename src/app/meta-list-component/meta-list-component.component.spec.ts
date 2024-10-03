import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaListComponentComponent } from './meta-list-component.component';

describe('MetaListComponentComponent', () => {
  let component: MetaListComponentComponent;
  let fixture: ComponentFixture<MetaListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetaListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
