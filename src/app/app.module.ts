import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DishService } from './services/dish.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

import { baseURL } from './shared/baseurl';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        MenuComponent

    ],
    providers: [
        {provide: 'baseURL', useValue: baseURL},
        DishService,
        ProcessHTTPMsgService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
