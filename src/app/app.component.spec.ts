import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let header: HTMLElement
  let footer: HTMLElement
  let main: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  /** Header Tests */

  it('should have a header', () => {
    const fixture = TestBed.createComponent(AppComponent)
    header = fixture.nativeElement.querySelector('header')

    expect(header).toBeTruthy()
  })

  it('should have a logo in header', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const image = fixture.nativeElement.querySelector('header img')

    expect(image).toBeTruthy()
  })

  /** Main Tests */

  it('should have a main', () => {
    const fixture = TestBed.createComponent(AppComponent)
    main = fixture.nativeElement.querySelector('main')

    expect(main).toBeTruthy()
  })

  it('should display "Região" in main', () => {
    const fixture = TestBed.createComponent(AppComponent)
    main = fixture.nativeElement.querySelector('main')

    expect(main.textContent).toContain('Região da penha e adjacências.')
  })

  it('should display "Entrega" in main', () => {
    // TODO(Yuri): Colocar espaço na criação do SVG (lint)

    const fixture = TestBed.createComponent(AppComponent)
    main = fixture.nativeElement.querySelector('main .delivery h1')

    expect(main.textContent).toContain('Entrega deBebidas')
  })

  it('should display "Cervejas" in main', () => {
    const fixture = TestBed.createComponent(AppComponent)
    main = fixture.nativeElement.querySelector('main .beer h1')

    expect(main.textContent).toContain('Cervejas')
  })

  it('should display "Brahma" in main', () => {
    const fixture = TestBed.createComponent(AppComponent)
    main = fixture.nativeElement.querySelector('main .beer ul')

    expect(main.textContent).toContain('Brahma')
  })

  it('should display "Antarctica" in main', () => {
    const fixture = TestBed.createComponent(AppComponent)
    main = fixture.nativeElement.querySelector('main .beer ul')

    expect(main.textContent).toContain('Antarctica')
  })

  it('should display "Becks" in main', () => {
    const fixture = TestBed.createComponent(AppComponent)
    main = fixture.nativeElement.querySelector('main .beer ul')

    expect(main.textContent).toContain('Becks')
  })

  it('should display "Corona" in main', () => {
    const fixture = TestBed.createComponent(AppComponent)
    main = fixture.nativeElement.querySelector('main .beer ul')

    expect(main.textContent).toContain('Corona')
  })

  it('should display "Lata" inside beer list in main', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const list = fixture.nativeElement.querySelectorAll('main .beer ul li')

    list.forEach((element: HTMLElement) => {
      expect(element.textContent).toContain('Lata')
    })
  })

  it('should display "Lata" inside beer list in main', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const list = fixture.nativeElement.querySelectorAll('main .beer ul li')

    list.forEach((element: HTMLElement) => {
      expect(element.textContent).toContain('600ml')
    })
  })

  // TODO(Yuri): Verificar se dentro da beer list tem as imagens da cerveja

  /** Footer Tests */

  it('should have a footer', () => {
    const fixture = TestBed.createComponent(AppComponent)
    footer = fixture.nativeElement.querySelector('footer')

    expect(footer).toBeTruthy()
  })

  it('should have a logo in footer', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const image = fixture.nativeElement.querySelector('footer img')

    expect(image).toBeTruthy()
  })

  it('should have a h1 in footer', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const h1 = fixture.nativeElement.querySelector('footer h1')

    expect(h1).toBeTruthy()
  })

  it('should display "Peça Já" inside h1 in footer', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const h1 = fixture.nativeElement.querySelector('footer h1')

    expect(h1.textContent).toContain('Peça já')
  })

  it('should have a address in footer', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const address = fixture.nativeElement.querySelector('footer address')

    expect(address).toBeTruthy()
  })

  it('should display tel inside address in footer', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const address = fixture.nativeElement.querySelector('footer address')

    expect(address.textContent).toContain('(21) 98268-7459')
  })

  it('should display instagram inside address in footer', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const address = fixture.nativeElement.querySelector('footer address')

    expect(address.textContent).toContain('@piratasdeb_penha')
  })

  it('should display the address in footer', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const address = fixture.nativeElement.querySelector('footer address')

    expect(address.textContent).toContain(
      'Endereço: Rua Conde de Agrolongo, 990'
    )
  })
})
