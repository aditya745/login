import { NgModule } from "@angular/core";
import {
  MatInputModule,
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatRadioModule,
  MatTabsModule,
  MatProgressSpinnerModule
} from "@angular/material";

const materialComponents = [
  MatInputModule,
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatRadioModule,
  MatTabsModule,
  MatProgressSpinnerModule
];

@NgModule({
  exports: [materialComponents],
  imports: [materialComponents]
})
export class MaterialModule {}
