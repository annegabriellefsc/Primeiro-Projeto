import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <div class="hero-section">
      <div class="badge">✨ Músicas Brasileiras</div>
      <h1>Aprenda a tocar suas <br><span class="highlight">músicas favoritas</span></h1>
      <p>Acesse as cifras das suas músicas preferidas.</p>
      
      <button class="btn-primary" routerLink="/musica/1">Começar a tocar 🎸</button>
    </div>

    <div class="features-grid">
      <div class="card" *ngFor="let item of features">
        <div class="icon">{{ item.icon }}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  `,
    styles: [`
    :host { display: block; max-width: 1200px; margin: 0 auto; padding: 2rem; }
    
    .hero-section {
      text-align: center;
      padding: 4rem 0;
    }
    .badge {
      background: #27272a;
      color: var(--primary);
      padding: 5px 12px;
      border-radius: 20px;
      display: inline-block;
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }
    h1 { font-size: 3.5rem; line-height: 1.1; margin-bottom: 1rem; }
    .highlight { 
      background: -webkit-linear-gradient(45deg, #fff, var(--primary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p { color: var(--text-muted); margin-bottom: 2rem; }
    
    .btn-primary {
      background-color: var(--primary);
      color: white;
      border: none;
      padding: 12px 32px;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.3s;
    }
    .btn-primary:hover { filter: brightness(1.1); }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-top: 3rem;
    }
    .card {
      background: var(--card-bg);
      padding: 1.5rem;
      border-radius: 12px;
      border: 1px solid var(--border-color);
    }
    .card .icon {
      background: #27272a;
      width: 40px;
      height: 40px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 8px;
      color: var(--primary);
      margin-bottom: 1rem;
    }
    .card p { font-size: 0.9rem; margin: 0; }
  `]
})
export class Home {
    features = [
        { icon: '🎵', title: 'Grandes Clássicos', desc: 'As melhores músicas da MPB e Rock.' },
        { icon: '🎸', title: 'Fácil de Tocar', desc: 'Cifras simplificadas para iniciantes.' },
        { icon: '🔍', title: 'Busca Rápida', desc: 'Encontre rapidamente o que procura.' }
    ];
}