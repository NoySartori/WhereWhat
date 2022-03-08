import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogDataComponent } from './components/blog-data/blog-data.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path:'articles',
    component:BlogsComponent,
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'blog',
    component:BlogDataComponent
  },
  {
    path:'',
    component:BlogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
