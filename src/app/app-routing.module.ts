import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { FarmerComponent } from './farmer/farmer.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { DistributionComponent } from './trade/distribution/distribution.component';
import { RetailComponent } from './trade/retail/retail.component';
import { RegulationComponent } from './regulation/regulation.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CheckInComponent } from './orders/check-in/check-in.component';
import { DispatchComponent } from './orders/dispatch/dispatch.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AssetComponent } from './asset/asset.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingsComponent } from './settings/settings.component';
import { TradeComponent } from './trade/trade.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'auth', component: AuthComponent },
    { path: 'signin', component: SigninComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'farmer', component: FarmerComponent},
    { path: 'warehouse', component: WarehouseComponent},
    { path: 'logistics', component: LogisticsComponent },
    { path: 'trade', component: TradeComponent},
    { path: 'distribution', component: DistributionComponent},
    { path: 'retail', component: RetailComponent},
    { path: 'regulation', component: RegulationComponent},
    { path: 'consumer', component: ConsumerComponent},
    { path: 'assets', component: AssetComponent},
    { path: 'orders', component: OrdersComponent },
    { path: 'checkin', component: CheckInComponent},
    {path: 'dispatch', component: DispatchComponent},
    { path: 'timeline', component: TimelineComponent},
    { path: 'settings', component: SettingsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent }
];

@NgModule({
    imports: [
         RouterModule.forRoot(routes)
     ],
    exports: [
           RouterModule
     ]
})

export class AppRoutingModule {}
