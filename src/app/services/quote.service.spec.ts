import { TestBed } from '@angular/core/testing';

import { QuoteService } from './quote.service';

fdescribe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add newQuote', () =>{
    const quoteText = "This is my first quote"
    service.addNewQuote(quoteText)
    expect(service.quotesList.length).toBeGreaterThanOrEqual(1);
  });

  it('should call getQuote', () => {
    const myQuotesList = 'First Quote';
    service.addNewQuote(myQuotesList)
    service.getQuote()
    expect(service.quotesList.length).toBeGreaterThanOrEqual(1);
  });

  it('should remove quote from the list', () => {
    service.deleteQuote(1)
    service.quotesList.splice(1,0)
    expect(service.quotesList.length).toBeLessThan(1);
  })
});
