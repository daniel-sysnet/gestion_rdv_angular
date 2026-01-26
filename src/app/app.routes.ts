import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { FormDemandeComponent } from './features/demande-rdv/form-demande/form-demande.component';
import { DemandeRdvComponent } from './features/demande-rdv/demande-rdv.component';
import { ListDemandeComponent } from './features/demande-rdv/list-demande/list-demande.component';
import { PatientComponent } from './features/patient/patient.component';
import { RvComponent } from './features/rv/rv.component';

export const routes: Routes = [
  { path: 'dash', component: DashboardComponent },
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
  { path: 'form-demande', component: FormDemandeComponent },
  { path: 'demandes-rv', component: DemandeRdvComponent },
  { path: 'mes-demandes', component: ListDemandeComponent },
  { path: 'patients', component: PatientComponent },
  { path: 'mes-rv', component: RvComponent }
];
