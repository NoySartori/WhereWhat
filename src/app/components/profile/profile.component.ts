import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user-model/user-model';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  
  @Input() profile: any = []
  constructor(private http:HttpClient ,  private router:Router) {}

  public loadProfileData():Observable<any>{
    return this.http.get("../../../assets/profiles.json");
  }

  public navigate(){
    this.router.navigate(['blog']);

  }

  ngOnInit(): void {
    console.log("profile")
    this.loadProfileData().subscribe(data=>{
      this.profile=data
      console.log(data);
    })
  }

}
