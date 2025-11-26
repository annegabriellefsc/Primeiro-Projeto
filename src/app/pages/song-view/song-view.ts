import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Song {
    id: number;
    title: string;
    artist: string;
    key: string;
    genre: string;
}

@Component({
    selector: 'app-song-view',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="layout-container">
      
      <aside class="sidebar">
        <div class="sidebar-header">
          <h3>Músicas</h3>
          <span>{{ songs.length }} músicas</span>
        </div>
        
        <div class="song-list">
          <div 
            class="song-item" 
            *ngFor="let song of songs" 
            [class.active]="song.id === currentSong.id"
            (click)="selectSong(song)"
          >
            <div class="song-info">
              <strong>{{ song.title }}</strong>
              <small>{{ song.artist }}</small>
            </div>
            <div class="song-meta">
              <span class="badge-key">Tom: {{ song.key }}</span>
              <span class="badge-genre">{{ song.genre }}</span>
            </div>
          </div>
        </div>
      </aside>

      <main class="content">
        <header class="song-header">
          <div>
            <h1>{{ currentSong.title }}</h1>
            <p>{{ currentSong.genre }} • {{ currentSong.artist }}</p>
          </div>
          <div class="tone-box">Tom: <strong>{{ currentSong.key }}</strong></div>
        </header>

        <div class="alert-box">
          ℹ️ Os acordes estão destacados em <span style="color:var(--primary)">rosa</span>.
        </div>

        <div class="lyrics-container">
           <div class="line">
             <span class="chord">F</span> <span class="spacer"></span> <span class="chord">G7</span>
             <br>Olha que coisa mais linda, mais cheia de graça
           </div>
           <div class="line">
             <br><span class="chord">Gm7</span>
             <br>É ela a menina que vem e que passa
           </div>
           <div class="line">
             <br><span class="chord">Gb7</span> <span class="spacer"></span> <span class="chord">F</span> <span class="chord">Gb7</span>
             <br>Num doce balanço a caminho do mar
           </div>
        </div>
      </main>
    </div>
  `,
    styles: [`
    .layout-container {
      display: grid;
      grid-template-columns: 320px 1fr;
      min-height: calc(100vh - 70px);
    }

    .sidebar {
      background-color: var(--bg-color);
      border-right: 1px solid var(--border-color);
      padding: 1.5rem;
    }
    .sidebar-header {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 1.5rem;
      color: var(--text-muted);
      font-size: 0.9rem;
    }
    .song-item {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 0.8rem;
      cursor: pointer;
      transition: 0.2s;
    }
    .song-item:hover { border-color: var(--primary); }
    .song-item.active {
      border-color: var(--primary);
      box-shadow: 0 0 0 1px var(--primary);
    }
    .song-info { display: flex; flex-direction: column; margin-bottom: 0.5rem; }
    .song-info strong { color: var(--text-main); }
    .song-info small { color: var(--text-muted); }
    
    .badge-key, .badge-genre {
      font-size: 0.7rem;
      padding: 2px 6px;
      border-radius: 4px;
      background: #27272a;
      color: #a1a1aa;
      margin-right: 5px;
    }

    .content { padding: 3rem; max-width: 900px; }
    .song-header {
      display: flex; justify-content: space-between; align-items: flex-start;
      margin-bottom: 2rem;
    }
    .song-header h1 { font-size: 2rem; color: var(--primary); margin-bottom: 0.5rem; }
    .song-header p { color: var(--text-muted); }
    
    .tone-box {
      background: #27272a;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 0.8rem;
      border: 1px solid var(--primary);
    }

    .alert-box {
      background: rgba(39, 39, 42, 0.5);
      border: 1px solid var(--border-color);
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 3rem;
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    .lyrics-container { font-size: 1.1rem; line-height: 1.8; }
    .line { margin-bottom: 1.5rem; }
    .spacer { display: inline-block; width: 150px; } /* Espaço manual entre acordes */
  `]
})
export class SongView {
    songs: Song[] = [
        { id: 1, title: 'Garota de Ipanema', artist: 'Tom Jobim', key: 'F', genre: 'Bossa Nova' },
        { id: 2, title: 'Evidências', artist: 'Chitãozinho & Xororó', key: 'G', genre: 'Sertanejo' },
        { id: 3, title: 'Pais e Filhos', artist: 'Legião Urbana', key: 'E', genre: 'Rock' },
        { id: 4, title: 'Aquarela', artist: 'Toquinho', key: 'G', genre: 'MPB' },
    ];

    currentSong: Song = this.songs[0];

    selectSong(song: Song) {
        this.currentSong = song;
    }
}