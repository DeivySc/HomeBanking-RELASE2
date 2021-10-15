import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HomeRoutingModule } from "./home-routing.module";
import { LimitOperationsComponent } from './limit-operations/limit-operations.component';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";
import { DialogLimitOpComponent } from './limit-operations/dialog-limit-op/dialog-limit-op.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { DialogSuccessComponent } from './limit-operations/dialog-success/dialog-success.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxMaskModule } from "ngx-mask";
import { CurrencyInputDirective } from "./currency.pines";
import { TransfersDashboardComponent } from './transfers-dashboard/transfers-dashboard.component';
import { MatOptionModule, MatRippleModule } from "@angular/material/core";
import { TransferInternalComponent } from './transfer-internal/transfer-internal.component';
import { TransferExternalComponent } from './transfer-external/transfer-external.component';
import { MatStepperModule } from "@angular/material/stepper";
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { TransferTercerosComponent } from './transfer-terceros/transfer-terceros.component';
import { DialogFrecuentesComponent } from './dialog-frecuentes/dialog-frecuentes.component';
import { DialogErrorComponent } from './transfers-dashboard/dialog-error/dialog-error.component';
import { MatTooltipModule } from "@angular/material/tooltip";
import { TerminosCondicionesComponent } from './transfer-external/terminos-condiciones/terminos-condiciones.component';
import { IMaskDirectiveModule, IMaskModule } from "angular-imask";
import { DialogErrorExtComponent } from "./transfer-external/dialog-error-ext/dialog-error-ext.component";
import { ActTokenComponent } from './act-token/act-token.component';
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PerfilDashboardComponent } from './perfil-dashboard/perfil-dashboard.component';
import { AdvertenciaComponent } from './perfil-dashboard/advertencia/advertencia.component';
import { DialogPerfilComponent } from './perfil-dashboard/dialog-perfil/dialog-perfil.component';
import { DesactTokenComponent } from './desact-token/desact-token.component';
import { DialogWarningComponent } from './desact-token/dialog-warning/dialog-warning.component';
import {PasswordComponent} from "../components/password/password.component";



@NgModule({
  declarations: [
    LimitOperationsComponent,
    DialogLimitOpComponent,
    DialogSuccessComponent,
    CurrencyInputDirective,
    TransfersDashboardComponent,
    TransferInternalComponent,
    TransferExternalComponent,
    TransferTercerosComponent,
    DialogFrecuentesComponent,
    DialogErrorComponent,
    DialogErrorExtComponent,
    TerminosCondicionesComponent,
    ActTokenComponent,
    PerfilDashboardComponent,
    AdvertenciaComponent,
    DialogPerfilComponent,
    DesactTokenComponent,
    DialogWarningComponent,
    PasswordComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        NgxMaskModule.forRoot(),
        MatRippleModule,
        MatStepperModule,
        MatSelectModule,
        MatOptionModule,
        MatRadioModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        MatTooltipModule,
        IMaskModule,
        MatListModule,
        MatProgressSpinnerModule
    ],exports:[
      PasswordComponent
  ],
  providers: [
    CurrencyPipe
  ]
})
export class HomeModule { }
