import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';

// import { MglTimelineModule } from 'angular-mgl-timeline';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { FarmerComponent } from './farmer/farmer.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { TradeComponent } from './trade/trade.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { RegulationComponent } from './regulation/regulation.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentsComponent } from './payments/payments.component';
import { HomeComponent } from './home/home.component';
import { RetailComponent } from './trade/retail/retail.component';
import { DistributionComponent } from './trade/distribution/distribution.component';
import { DispatchComponent } from './orders/dispatch/dispatch.component';
import { CheckInComponent } from './orders/check-in/check-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AssetComponent } from './asset/asset.component';

import { AppRoutingModule } from './app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavtabsComponent } from './navtabs/navtabs.component';
import { SettingsComponent } from './settings/settings.component';
// import { SliderModule } from 'angular-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    FarmerComponent,
    LogisticsComponent,
    WarehouseComponent,
    TradeComponent,
    ConsumerComponent,
    RegulationComponent,
    LoginComponent,
    OrdersComponent,
    PaymentsComponent,
    HomeComponent,
    RetailComponent,
    DistributionComponent,
    DispatchComponent,
    CheckInComponent,
    DashboardComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    TimelineComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent,
    AssetComponent,
    SidenavComponent,
    NavtabsComponent,
    SettingsComponent
    // SliderModule
    // AngularFireModule,
    // AngularFireDatabaseModule
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
    // ReactiveFormsModule
    // FormControlDirective
    // MglTimelineModule
    // FormsModule,
    // ReactiveFormsModule,
    // FormControlDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
