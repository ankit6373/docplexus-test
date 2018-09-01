import { Component, OnInit } from '@angular/core';
import { Quote }  from '../../models/quote.interface';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quotes : Quote[];
  p:       Number = 1;
  grid:    boolean = true;

  constructor(private mainservice:MainService) { }
 
  ngOnInit() {
    this.getQuotes();
  }

  public getQuotes(){
       return this.mainservice.getData()
              .subscribe(
                response => {
                  this.quotes = response;
                },
                error => {
                  console.log(error);
                }
              );
  }

  public changeView(){
    this.grid = ! this.grid;
  }

}
