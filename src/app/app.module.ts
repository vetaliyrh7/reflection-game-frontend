import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { TinymceModule } from 'angular2-tinymce';

// Services
import { PublicationService } from './services/publication.service';

// Angular material components
import { MdToolbarModule, MdButtonModule, MdCardModule, MdListModule,
         MdIconModule, MdChipsModule, MdTooltipModule, MdInputModule,
         MdSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// TinyMCE
import 'tinymce/plugins/paste/plugin.js';
import 'tinymce/plugins/autoresize/plugin.js';
import 'tinymce/plugins/table/plugin.js';
import 'tinymce/plugins/link/plugin.js';
import 'tinymce/plugins/image/plugin.js';
import 'tinymce/plugins/code/plugin.js';

// My components
import { AppComponent } from './app.component';
import { PostListComponent } from './container/post-list-container/posts-list.component';
import { PostEditCreateComponent } from './container/post-edit-create-container/post-edit-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostEditCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdIconModule,
    MdChipsModule,
    MdTooltipModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdSelectModule,
    TinymceModule.withConfig({
      plugins: ['paste', 'autoresize', 'table', 'link', 'image', 'code'],
      skin_url: '/assets/skins/lightgray'
    })
  ],
  providers: [PublicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
