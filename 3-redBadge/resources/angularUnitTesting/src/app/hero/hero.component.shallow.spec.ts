import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HeroComponent (shallow test)', () => {

  let fixture: ComponentFixture<HeroComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent], 
      schemas: [NO_ERRORS_SCHEMA]
    })

    fixture = TestBed.createComponent(HeroComponent)
  })

  it('should have the correct hero', () => {
    // Arrange

    // Act
    fixture.componentInstance.hero = {
      id: 1,
      name: 'SuperDude',
      strength: 3
    }

    // Assert
    expect(fixture.componentInstance.hero.name).toEqual('SuperDude')
  })
  
  it('should render the hero name in a tag', () => {
    // Arrange
    fixture.componentInstance.hero = {
      id: 1,
      name: 'SuperDude',
      strength: 3
    }

    // Act
    fixture.detectChanges()

    // Assert
    let deA = fixture.debugElement.query(By.css('a'))
    expect(deA.nativeElement.textContent).toContain('SuperDude')
  })
})