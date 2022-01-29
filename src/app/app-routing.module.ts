import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/makes', pathMatch: 'full' },
	{
		path: 'makes',
		loadChildren: () =>
			import('./pages/makes/makes.module').then((m) => m.MakesModule),
	},
	// {
	//   path: 'login',
	//   loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
	// },
	// {
	//   path: 'users',
	//   loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
	// },
	{ path: '**', redirectTo: '/makes', pathMatch: 'full' },
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
