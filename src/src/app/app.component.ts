import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public currentActiveTab: string = 'home';
  public title = '';
  constructor(private titleService: Title, private router: Router) {}

  ngOnInit () {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.title = this.getTitle(this.router.routerState, this.router.routerState.root).join(' | ');
        this.titleService.setTitle(this.title);
      }
    });
  }

  private getTitle(state: any, parent: any): string[] {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(...this.getTitle(state, state.firstChild(parent)));
    }

    return data;
  }

  change(menuActice: string) {
    this.currentActiveTab = menuActice;
  }
}
