import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";

describe('HeroesComponent (shallow test)', () => {

  let fixture: ComponentFixture<HeroesComponent>
  let mockHeroService
  let HEROES

  @Component({
    selector: 'app-hero',
    template: '<div></div>'
  })
  class FakeHeroComponent {
    @Input() hero: Hero;
  }

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'SpiderDude', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 }, 
      { id: 3, name: 'SuperDude', strength: 55 }
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent, 
        FakeHeroComponent
      ], 
      providers: [
        {
          provide: HeroService, 
          useValue: mockHeroService
        }
      ],
      // schemas: [NO_ERRORS_SCHEMA]
    })

    fixture = TestBed.createComponent(HeroesComponent)
  })

  it('should set heroes correctly from the service', () => {
    // Arrange

    // Act
    mockHeroService.getHeroes.and.returnValue(of(HEROES))
    fixture.detectChanges()

    // Assert
    expect(fixture.componentInstance.heroes.length).toBe(3)
  })

  it('should create one li for each hero', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES))
    fixture.detectChanges()

    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3)
  })

})