import { Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { LinksComponent } from './components/links/links.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

export const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' }, // Redirect empty path to home
    { path: 'main', component: BodyComponent },
    { path: 'links', component: LinksComponent },
    { path: 'portfolio', component: PortfolioComponent }
];
