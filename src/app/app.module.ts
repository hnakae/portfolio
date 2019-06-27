import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './components/layout/sidemenu/sidemenu.component';
import { HomeComponent } from './components/site/home/home.component';
import { AboutComponent } from './components/site/about/about.component';
import { SkillsComponent } from './components/site/skills/skills.component';
import { WorkComponent } from './components/site/work/work.component';
import { ContactComponent } from './components/site/contact/contact.component';
import { ContentComponent } from './components/layout/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    ContactComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
