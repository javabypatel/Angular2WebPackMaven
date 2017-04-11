import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TestComponent } from './test.component';
import { AnotherTestComponent } from './another.test.component';

const routes: Routes = [
    { 
        path: '',  
        component: TestComponent,
    },
    { 
        path: 'anotherTest',  
        component: AnotherTestComponent,
    }
];
export const TestRoutes: ModuleWithProviders = RouterModule.forChild(routes);