import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MUSICAS } from './musica-data';



@Component({
  selector: 'app-song-view',
  standalone: true,
  imports: [CommonModule],
  styleUrl: 'song-view.css',
  templateUrl: 'song-view.html'
})
export class SongView {

  songs = MUSICAS;
  currentSong = this.songs[0];

  selectSong(song: any) {
    this.currentSong = song;
    window.scrollTo(0, 0);
  }

  formatLyrics(text: string): string {
    return text.replace(/\[(.*?)\]/g, '<span class="chord">$1</span>');
  }
}