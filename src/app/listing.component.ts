import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit{
    items = [];
    constructor(private dataService: DataService) {   

    }

    ngOnInit(){
      this.items = this.dataService.getData();
    }
}
