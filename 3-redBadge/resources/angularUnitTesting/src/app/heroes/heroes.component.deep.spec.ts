import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { HeroComponent } from "../hero/hero.component";
import { HeroService } from "../hero.service";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";

describe('HeroesComponent (deep test)', () => {

  let fixture: ComponentFixture<HeroesComponent>
  let mockHeroService
  let HEROES

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
        HeroComponent
      ], 
      providers: [
        { provide: HeroService, useValue: mockHeroService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    fixture = TestBed.createComponent(HeroesComponent)
    mockHeroService.getHeroes.and.returnValue(of(HEROES))

    fixture.detectChanges()
  })

  it('should call heroService.deleteHero when the HeroCompoent\'s delete button is clicked', () => {
    spyOn(fixture.componentInstance, 'delete')
    mockHeroService.getHeroes.and.returnValue(of(HEROES))

    fixture.detectChanges()

    const heroComponents = fixture.debugElement.queryAll(By.directive(HeroComponent))
    heroComponents[0].query(By.css('button'))
      .triggerEventHandler('click', { stopPropagation: () => {} })
    // heroComponents[0].componentInstance.delete.emit(undefined)

    expect(fixture.componentInstance.delete).toHaveBeenCalledWith(HEROES[0])
  })
})