import {NgModule} from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [SharedModule],
  declarations: [
    HeaderComponent,
    SidemenuComponent
  ],
  exports: [
    HeaderComponent,
    SidemenuComponent
  ]
})
export class AppLayoutModule {

}
