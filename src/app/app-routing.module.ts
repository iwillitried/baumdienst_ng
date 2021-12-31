import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './components/pages/home-page/home-page.component';
import {TopicPageComponent} from './components/pages/topic-page/topic-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: ':id', component: TopicPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
