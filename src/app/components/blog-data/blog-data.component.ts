import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/models/blog-model/blog-model';

export interface BlogData {
 
}
@Component({
  selector: 'blog-data',
  templateUrl: './blog-data.component.html',
  styleUrls: ['./blog-data.component.css']
})
export class BlogDataComponent implements OnInit {

  @Input() singleArtical:any
  constructor(private http:HttpClient , private router:Router) {}

  public loadSingleArcitle():Observable<any>{
    return this.http.get("../../../assets/singleArcitle.json");
  }

  ngOnInit(): void {
    this.loadSingleArcitle().subscribe(data=>{
      console.log(data);
      this.singleArtical=data;
      console.log(this.singleArtical);
    })
  }
  public navigate(){
    this.router.navigate(['profile']);

  }

}
