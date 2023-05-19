import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteComponent } from './quote.component';
import { QuoteService } from 'src/app/services/quote.service';

fdescribe('QuoteComponent', () => {
  let component: QuoteComponent;
  let quoteService : QuoteService
  let fixture: ComponentFixture<QuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteComponent ],
      providers:[QuoteService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    quoteService = TestBed.get(QuoteService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a quote', () => {

    const quotes = quoteService.getQuote()
    expect(component.quotesList).toBe(quotes)
  });

  it('should create a quote', () => {
    const quote = 'first'
    component.createQuote(quote)
    expect(component.quotesList.length).toBeGreaterThanOrEqual(1);
  });

  it('should remove the quote', () => {
    component.removeQuote(1);
    expect(component.quotesList.length).toBeLessThan(1)
  })
});
