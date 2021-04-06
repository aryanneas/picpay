import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { UserComponent } from './components/user/user.component'
import { ModalComponent } from './components/modal/modal.component'
import { ReactiveFormsModule } from '@angular/forms'
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ToastrModule } from 'ngx-toastr'

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null

@NgModule({
  declarations: [AppComponent, UserComponent, ModalComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      iconClasses: {
        success: 'toast-success',
      },
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
