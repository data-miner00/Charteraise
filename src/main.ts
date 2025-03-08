import { bootstrapApplication } from '@angular/platform-browser';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch(console.error);
