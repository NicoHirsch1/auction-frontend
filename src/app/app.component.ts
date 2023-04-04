import { Component, OnInit } from '@angular/core';
import { AuctionService } from "./services/auction.service";
import { Auction } from "./models/auction.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  auction: Auction | null = null;

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
    this.getAuctionById(2001);
  }

  getAuctionById(id: number) {
    this.auctionService.getById(id).subscribe({
      next: value => this.auction = value,
      error: err => alert(err.message)
    });
  }
}
