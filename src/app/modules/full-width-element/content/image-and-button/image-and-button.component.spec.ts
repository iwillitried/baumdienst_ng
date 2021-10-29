import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ImageAndButtonComponent } from "./image-and-button.component";

describe("ImageAndButtonComponent", () => {
  let component: ImageAndButtonComponent;
  let fixture: ComponentFixture<ImageAndButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAndButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAndButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
