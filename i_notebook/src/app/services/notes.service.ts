import { Injectable } from '@angular/core';
import { Notes } from '../models/note.model';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Notes[] = [
    {
      id: 1,
      date: '12/02/21',
      title: 'Meeting with Ahmad',
      text: 'Discussing next steps for the angular web project.'
    },
    {
      id: 1,
      date: '15/02/21',
      title: 'next generatin fund meeting',
      text: 'thursday afternoon 12.02.2021, meeting with Alex and Maria to discuss regarding the next generation fund.'
    }
  ]
  constructor() { }

  getAllNotes() {
    return [...this.notes];
  }
}
