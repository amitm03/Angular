import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeverComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { WarningalertComponent } from './warningalert/warningalert.component';
import { PipesexampleComponent } from './pipesexample/pipesexample.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { ShortenPipe } from './shorten.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { ReversePipe } from './reverse.component';
import { SortPipePipe } from './sort-pipe.pipe';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { PostComponent } from './post/post.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    SeverComponent,
    ServersComponent,
    SuccessalertComponent,
    WarningalertComponent,
    PipesexampleComponent,
    CustomPipeComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipePipe,
    ServiceDemoComponent,
    PostComponent,
    AccountComponent,
    NewAccountComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
