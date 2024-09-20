import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCardComponent } from './post/postcard/postcard.component';
import { PostlistComponent } from './post/postlist/postlist.component';
import { EditcardComponent } from './post/editcard/editcard.component';
import { DialogboxComponent } from './shared/confirmationpop/dialogbox/dialogbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { CreatepostComponent } from './post/createpost/createpost.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    PostlistComponent,
    EditcardComponent,
    DialogboxComponent,
    CreatepostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
