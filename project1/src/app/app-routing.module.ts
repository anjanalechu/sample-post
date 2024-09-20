import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostlistComponent } from './post/postlist/postlist.component';
import {CreatepostComponent} from './post/createpost/createpost.component';

const routes: Routes = [
  { path: '', redirectTo: '/post', pathMatch: 'full' }, // Default route
  { path: 'post', component: PostlistComponent },
  {path:'createpost',component: CreatepostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
