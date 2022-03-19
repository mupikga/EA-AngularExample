import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTracksComponent } from './listar-tracks.component';

describe('ListarTracksComponent', () => {
  let component: ListarTracksComponent;
  let fixture: ComponentFixture<ListarTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTracksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
