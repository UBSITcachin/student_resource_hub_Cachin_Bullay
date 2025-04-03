import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Ensure the import statement is correct
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use routes from app.routes.ts
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
};
