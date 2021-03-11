import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translate';

  supportLanguages = ['es', 'en', 'fr', 'ja'];

  constructor(private _translateService: TranslateService) {
    this._translateService.addLangs(this.supportLanguages);
    //establece un lenguaje por defecto
    // this._translateService.setDefaultLang('es');

    // Obtiene el lenguaje del navegador por defecto
    const browserLang = this._translateService.getBrowserLang();
    // Usa por defecto el lenguaje del navegador
    this._translateService.use(browserLang)
  }

  useLang(lang: string) {
    this._translateService.use(lang);
  }
}
