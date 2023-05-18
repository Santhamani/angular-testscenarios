import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit{

  constructor(private quoteService:QuoteService){}

  ngOnInit(){

  }

  createQuote(quote:string){
    this.quoteService.addNewQuote(quote);
  }



}
