import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicExampleComponent } from './examples/basic/basic.component';
import { DynamicChangesExampleComponent } from './examples/dynamic-changes/dynamic-changes.component';
import { ScrollOverflowExampleComponent } from './examples/scrolloverflow/scrolloverflow.component';
import { TypeExampleComponent } from './examples/type-definitions/type.component';


const routes: Routes = [
  { path: '', component: BasicExampleComponent, pathMatch: 'full' },
  { path: 'dynamicChanges', component: DynamicChangesExampleComponent },
  { path: 'scrollOverflow', component: ScrollOverflowExampleComponent },
  { path: 'typeDefinitions', component: TypeExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
