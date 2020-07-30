import { Component } from '@angular/core';
import { GithubService } from './services/github/github.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  results = {};
  title = 'thisdot';

  constructor(private github: GithubService) {
    github.getUsers("test").subscribe(data => {
      this.results = data
    })
  }
}
