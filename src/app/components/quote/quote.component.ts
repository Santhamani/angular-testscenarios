import { Component, OnInit } from '@angular/core';
import { QuoteModel } from 'src/app/model/quotemodel';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit{

  public quotesList: QuoteModel[] = []
  public quoteText : string = ''
  constructor(private quoteService:QuoteService){}

  ngOnInit(){
    this.quotesList = this.quoteService.getQuote()
  }

  createQuote(quote:string){
    this.quoteService.addNewQuote(this.quoteText);
  }

  removeQuote(index:number){
    this.quoteService.deleteQuote(index);
  }
}
