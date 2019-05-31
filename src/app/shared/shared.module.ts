import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';
import { UppercaseDirective } from './uppercase.directive';
import { HttpClient } from '@angular/common/http';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [AwesomePipe, HighlightDirective, UppercaseDirective],
  exports: [
    AwesomePipe,
    HighlightDirective,
    UppercaseDirective,
    CommonModule,
    FormsModule,
    TranslateModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
