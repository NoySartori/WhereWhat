import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import { Blog } from 'src/app/models/blog-model/blog-model';
import * as exampleData from '../../../assets/blogs.json';
import { Router } from '@angular/router';

@Component({
  selector: 'blogs-component',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  
  @Input() blogList: any = []

  constructor(private http:HttpClient , private router:Router) {}

  public loadAllBlogs():Observable<any>{
    return this.http.get("../../../assets/blogs.json");
  }

  public navigate(){
    this.router.navigate(['blog']);

  }

  ngOnInit(): void {
    this.loadAllBlogs().subscribe(data=>{
      console.log(data);
      this.blogList=data;
      console.log(this.blogList);
    })
  }

}
