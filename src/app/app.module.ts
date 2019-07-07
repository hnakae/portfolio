import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './components/layout/sidemenu/sidemenu.component';
import { HomeComponent } from './components/site/home/home.component';
import { AboutComponent } from './components/site/about/about.component';
import { SkillsComponent } from './components/site/skills/skills.component';
import { WorkComponent } from './components/site/work/work.component';
import { ContactComponent } from './components/site/contact/contact.component';
import { ContentComponent } from './components/layout/content/content.component';
import { GmapComponent } from './components/api/gmap/gmap.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    ContactComponent,
    ContentComponent,
    GmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      // please dont use this key lol
      apiKey: 'AIzaSyBEkdHuhopLCGmsNAOUJiusigM5AOJOMUk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
