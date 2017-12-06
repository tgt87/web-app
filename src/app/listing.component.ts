import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent {
    items = [];
    constructor(private dataService: DataService) {   
      this.items = dataService.getData();
    }

    // ngOnInit(){
    //   this.items = this.dataService.getData();
    //   console.log(this.items)
    // }
}
