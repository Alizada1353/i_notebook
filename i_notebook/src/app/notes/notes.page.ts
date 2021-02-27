import { Component, OnInit } from '@angular/core';
import { Notes } from '../models/note.model';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  notes: Notes[];
  constructor(private n_sercice: NotesService) { }

  ngOnInit() {
    this.notes = this.n_sercice.getAllNotes();
  }

}
