import { LoginComponent } from './pages/login/login.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { MyContactListComponent } from './pages/my-contact-list/my-contact-list.component';
import { MyTransactionsComponent } from './pages/my-transactions/my-transactions.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainAdminPageComponent } from './admin/main-admin-page/main-admin-page.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
    {
      path: 'user',
      component: MainPageComponent,
      children:[
        {
          path: 'my-transactions',
          component: MyTransactionsComponent
        },
        {
          path: 'dashboard',
          component: UserDashboardComponent
        },
        {
          path: '',
          redirectTo:'dashboard',
          pathMatch:'full'
        },
        {
          path: 'my-contact-list',
          component: MyContactListComponent
        },
        {
          path: 'new-transaction',
          component: NewTransactionComponent
        },
        {
          path: 'new-contact',
          component: NewContactComponent
        },
        {
          path: 'profile',
          component: ProfileComponent
        },

        {
          path: 'menu',
          component: MenuComponent
        },
        {
          path: 'manage-users',
          component: ManageUsersComponent
        },
      ]
    },

    {
      path: 'admin',
      component: MainAdminPageComponent,
      children:[
        {
          path: 'dashboard',
          component: AdminDashboardComponent
        },
        {
          path: 'customers',
          component: ManageUsersComponent
        },
        {
          path: '',
          redirectTo:'dashboard',
          pathMatch:'full'
        },
      ]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
