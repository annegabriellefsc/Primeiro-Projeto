import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SongView } from './pages/song-view/song-view';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'musica/:id', component: SongView },
    { path: '**', redirectTo: '' }
];