import {Injectable} from '@angular/core';
import {SearchesData, GithubUserReturn} from "../../interfaces";
import {GithubService} from '../github/github.service';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  searches: SearchesData = {};

  constructor(public github: GithubService) {

  }

  public readonly currentData: BehaviorSubject<GithubUserReturn> = new BehaviorSubject<GithubUserReturn>({total_count: 0, incomplete_results: false, items: []});

  pullUsers(name: string, page: number) {
    try {
      const pageStr = page.toString()
      // See if we have this cached if so return those results
      console.log(this.searches)
      if (this.searches[name] && this.searches[name].items[pageStr]) {
        this.currentData.next(this.buildReturn(this.searches[name], pageStr))
      }
      this.github.getUsers(name, page).subscribe((results: GithubUserReturn) => {
        if (!this.searches[name]) {
          this.searches[name] = {
            total_count: results.total_count,
            incomplete_results: results.incomplete_results,
            items: {}
          }
        }
        this.searches[name].items[pageStr] = results.items;
        this.currentData.next(this.buildReturn(this.searches[name], pageStr))
      });
    } catch(e) {
      throw e;
    }
  }

  private buildReturn(theSearch, pageStr: string): GithubUserReturn {
    return {
      total_count: theSearch.total_count,
      incomplete_results: theSearch.incomplete_results,
      items: theSearch.items[pageStr]
    }
  }
}
