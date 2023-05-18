import { Injectable } from '@angular/core';
import { QuoteModel } from '../model/quotemodel';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }
  public quotesList : QuoteModel[]=[];

  public daysOfWeek = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri"];

  addNewQuote(quote:string){
    const date = new Date();
    const dayofWeek = this.daysOfWeek[date.getDay()];
    const day = date.getDay();
    const year = date.getFullYear();
    this.quotesList.push(new QuoteModel(quote, `${dayofWeek} ${day}, ${year}`))
  }

  getQuote(){
    return this.quotesList;
  }

  deleteQuote(index:number) {
    this.quotesList.splice(index,1)
  }
}
