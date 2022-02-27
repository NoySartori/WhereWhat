import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const routes: Routes = [
  {
    path:'articles',
    component:BlogsComponent
  },
  {
    path:'about',
    component:AboutComponent
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
