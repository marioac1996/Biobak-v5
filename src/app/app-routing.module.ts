import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NoLoginGuard } from "./guards/no-login.guard";

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate : [NoLoginGuard] },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule', canActivate : [AuthGuard] },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate : [AuthGuard] },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule', canActivate : [AuthGuard] },
  { path: 'new-task', loadChildren: './new-task/new-task.module#NewTaskPageModule', canActivate : [AuthGuard] },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'fauna', loadChildren: './fauna/fauna.module#FaunaPageModule', canActivate : [AuthGuard] },
  { path: 'new-tasks', loadChildren: './new-tasks/new-tasks.module#NewTasksPageModule', canActivate : [AuthGuard] },
  { path: 'details2/:id', loadChildren: './details2/details2.module#Details2PageModule', canActivate : [AuthGuard] },
  { path: 'faunalist', loadChildren: './faunalist/faunalist.module#FaunalistPageModule' },
  { path: 'infofauna/:id', loadChildren: './infofauna/infofauna.module#InfofaunaPageModule' },
  { path: 'infoflora/:id', loadChildren: './infoflora/infoflora.module#InfofloraPageModule' },
  { path: 'flora', loadChildren: './flora/flora.module#FloraPageModule' },
  { path: 'new-event', loadChildren: './new-event/new-event.module#NewEventPageModule', canActivate : [AuthGuard] },
  { path: 'event-info/:id', loadChildren: './event-info/event-info.module#EventInfoPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule', canActivate : [AuthGuard] },
  { path: 'eventdetails/:id', loadChildren: './eventdetails/eventdetails.module#EventdetailsPageModule', canActivate : [AuthGuard] },
  { path: 'new-report', loadChildren: './new-report/new-report.module#NewReportPageModule' },
  { path: 'report', loadChildren: './report/report.module#ReportPageModule', canActivate : [AuthGuard] },
  { path: 'inforeport/:id', loadChildren: './inforeport/inforeport.module#InforeportPageModule', canActivate : [AuthGuard] },
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
