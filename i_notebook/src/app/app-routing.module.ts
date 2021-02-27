import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'notes',
    
    children: [
      {
        path: '', 
        loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
      }, 
      {
        path: ':noteId',
        loadChildren: () => import('./note-details/note-details.module').then( m => m.NoteDetailsPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
