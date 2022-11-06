import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element with src= <image route>', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      'assets/images/vivero6.jpeg'
    );
  });

  it('should have an img element with alt= vivero', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual('vivero');
  });

  it('should have a title of application', () => {
    const element: HTMLElement = debug.query(By.css('h1')).nativeElement;
    expect(element.textContent).toContain(component.title);
  });
});
