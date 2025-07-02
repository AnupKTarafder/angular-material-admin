import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private current: string = 'blue';
  private mode: string = 'light';
  private updateThemeObservable = new BehaviorSubject<string>(this.current);
  private updateModeObservable = new BehaviorSubject<string>(this.mode);

  public currentTheme = this.updateThemeObservable.asObservable();

  public currentMode = this.updateModeObservable.asObservable();

  public setBlueTheme(): void {
    this.current = 'blue';

    this.updateThemeObservable.next('blue');
  }

  public setPinkTheme(): void {
    this.current = 'pink';

    this.updateThemeObservable.next('pink');
  }

  public setGreenTheme(): void {
    this.current = 'green';

    this.updateThemeObservable.next('green');
  }

  public setDarkMode(value: boolean): void {
    this.mode = value ? 'dark' : 'light';

    this.updateModeObservable.next(this.mode);
  }
}
