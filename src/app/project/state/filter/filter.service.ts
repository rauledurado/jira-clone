import { Injectable } from '@angular/core';
import { FilterStore, createInitialFilterState } from './filter.store';
import { ProjectQuery } from '@raulsanz/project/state/project/project.query';
@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor(private store: FilterStore,public projectQuery: ProjectQuery) {}

  updateSearchTerm(searchTerm: string) {
    const answer = this.projectQuery.searchForUser$(searchTerm);
    answer.subscribe( val => {
      console.log(val);
    });
    this.store.update({
      searchTerm
    });
  }

  toggleUserId(userId: string) {
    this.store.update((state) => {
      const hasUser = state.userIds.includes(userId);
      const userIds = hasUser
        ? state.userIds.filter((x) => x !== userId)
        : [...state.userIds, userId];
      return {
        ...state,
        userIds
      };
    });
  }

  toggleOnlyMyIssue() {
    this.store.update((state) => {
      const onlyMyIssue = !state.onlyMyIssue;
      return {
        ...state,
        onlyMyIssue
      };
    });
  }

  toggleIgnoreResolve() {
    this.store.update((state) => {
      const ignoreResolved = !state.ignoreResolved;
      return {
        ...state,
        ignoreResolved
      };
    });
  }

  resetAll() {
    this.store.update((state) => ({
      ...state,
      ...createInitialFilterState()
    }));
  }
}
