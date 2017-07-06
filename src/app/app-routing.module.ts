import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './container/post-list-container/posts-list.component';
import { PostEditCreateComponent } from './container/post-edit-create-container/post-edit-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/lore', pathMatch: 'full' },
  { path: 'lore',  component: PostListComponent },
  { path: 'characters',  component: PostListComponent },
  { path: 'items', component: PostListComponent },
  { path: 'post/edit/:id', component: PostEditCreateComponent },
  { path: 'post/new/:contentType', component: PostEditCreateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
