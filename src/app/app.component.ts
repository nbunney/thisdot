import {Component, OnInit} from '@angular/core';
import {DataService} from "./services/data/data.service";
import {GithubUserReturn} from "./interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'thisdot';
  results = {};
  page = 1;
  searchTerm = "";

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.currentData.subscribe((userData: GithubUserReturn) => {
      this.results = userData;
    });
    this.dataService.pullUsers("test", 4);
  }
}
