import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <nav class="navbar">
      <div class="logo" routerLink="/">
        <span>🎵 ABCifras</span>
      </div>
      <div class="search-box">
        <i class="icon-search">🔍</i>
        <input type="text" placeholder="Buscar música ou artista..." />
      </div>
    </nav>
  `,
    styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: var(--bg-color);
      border-bottom: 1px solid var(--border-color);
    }
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--primary); /* Rosa */
      cursor: pointer;
    }
    .search-box {
      position: relative;
      width: 300px;
    }
    .search-box input {
      width: 100%;
      padding: 10px 15px 10px 35px;
      border-radius: 6px;
      border: 1px solid var(--border-color);
      background-color: var(--card-bg);
      color: white;
    }
    .search-box i {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-style: normal;
      font-size: 12px;
    }
  `]
})
export class Navbar { }