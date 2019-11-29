import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'new-task', loadChildren: './new-task/new-task.module#NewTaskPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'fauna', loadChildren: './fauna/fauna.module#FaunaPageModule' },
  { path: 'new-tasks', loadChildren: './new-tasks/new-tasks.module#NewTasksPageModule' },
  { path: 'details2/:id', loadChildren: './details2/details2.module#Details2PageModule' },
  { path: 'faunalist', loadChildren: './faunalist/faunalist.module#FaunalistPageModule' },
  { path: 'infofauna/:id', loadChildren: './infofauna/infofauna.module#InfofaunaPageModule' },
  { path: 'infoflora/:id', loadChildren: './infoflora/infoflora.module#InfofloraPageModule' },
  { path: 'flora', loadChildren: './flora/flora.module#FloraPageModule' },
  { path: 'new-event', loadChildren: './new-event/new-event.module#NewEventPageModule' },
  { path: 'event-info/:id', loadChildren: './event-info/event-info.module#EventInfoPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'eventdetails/:id', loadChildren: './eventdetails/eventdetails.module#EventdetailsPageModule' },
  { path: 'new-report', loadChildren: './new-report/new-report.module#NewReportPageModule' },
  { path: 'report', loadChildren: './report/report.module#ReportPageModule' },
  { path: 'inforeport/:id', loadChildren: './inforeport/inforeport.module#InforeportPageModule' },
];
@NgModule({
  imports:
    [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
  exports:
    [
      RouterModule
    ]
})
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
