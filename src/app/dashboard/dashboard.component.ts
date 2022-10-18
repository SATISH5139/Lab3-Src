import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public products:any = [];
  public ShowProduct(){

    var request = this.http.get("https://localhost:7084/get").toPromise();
    request.then((data)=> this.products = data);
  }
  


  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }

}
