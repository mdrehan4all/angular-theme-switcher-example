import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: 'day-theme' | 'night-theme' = 'day-theme';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setTheme(theme: 'day-theme' | 'night-theme') {
    this.renderer.removeClass(document.body, this.currentTheme);
    this.currentTheme = theme;
    this.renderer.addClass(document.body, theme);
  }

  getTheme(): 'day-theme' | 'night-theme' {
    return this.currentTheme;
  }
}
