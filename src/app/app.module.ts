import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.component';
import { NavBarModule } from './components/navbar';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { APP_ROUTES } from './routes';
import { API_REF_PROVIDER } from './services/api-ref/api-ref.service';
import { ComponentPageTitle } from './services/page-title/page-title';
import { PROGRAMMATIC_PRELOAD_STRATEGY_PROVIDER } from './services/programmatic-preload/programmatic-preload-strategy.provider';
import { ProgrammaticPreloadingStrategy } from './services/programmatic-preload/progrommatic-preloading-strategy';
import { ROUTE_PROVIDER } from './services/route/route.service';
import { VersionService } from './services/version/version';
import { HomepageModule } from './views/homepage/homepage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CustomMaterialModule,
    HttpClientModule,
    HomepageModule,
    FooterModule,
    NavBarModule,
    RouterModule.forRoot(APP_ROUTES, {
      // useHash: true,
      preloadingStrategy: ProgrammaticPreloadingStrategy,
    }),
  ],
  exports: [],
  providers: [
    ComponentPageTitle,
    PROGRAMMATIC_PRELOAD_STRATEGY_PROVIDER,
    API_REF_PROVIDER,
    ROUTE_PROVIDER,
    VersionService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
