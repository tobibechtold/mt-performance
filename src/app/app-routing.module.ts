import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NewsDetailComponent} from "./components/news-detail/news-detail.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: 'news/:id', component: NewsDetailComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      initialNavigation: 'enabledBlocking'
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
