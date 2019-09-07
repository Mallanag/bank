import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
bank
list={}
filteredData={}

  constructor(public http:HttpClient) { }

  ngOnInit() {
  }
search(t){
  this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI').subscribe(data=>{
    this.list=data
  })
}
  search1(t){
    this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=BANGALORE').subscribe(data=>{
      this.list=data
    })
}
search2(t){
  this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=DELHI').subscribe(data=>{
    this.list=data
  })

}
search3(t){
  this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=KOLKATA').subscribe(data=>{
    this.list=data
  })

}
search4(t){
  this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=CUTTACK').subscribe(data=>{
    this.list=data
  })
}
submit(value){
  var val=document.getElementById("dropdown");
  
}
// onChange() {
//   console.log('ran');
//   this.filteredData = this.list.filter(
//     datum => (datum.name.indexOf(this.bank) > -1 || datum.text.indexOf(this.bank) > -1));

//   console.log(this.bank);

// }

}
