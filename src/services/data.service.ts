import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class DataService {
    data: any;
    http: any;
    constructor(http: Http){
        this.http = http;
    }
    retrieveData(){
        this.http.get('./assets/listing.json').subscribe(res => {
            this.data = res.json();
        }); 
    }
    getData(){
        return this.data;
    }
}