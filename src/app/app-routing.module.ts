import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/site/home/home.component';
import { AboutComponent } from './components/site/about/about.component';
import { SkillsComponent } from './components/site/skills/skills.component';
import { WorkComponent } from './components/site/work/work.component';
import { ContactComponent } from './components/site/contact/contact.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  { path: 'posts', component: PostsComponent },

  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
