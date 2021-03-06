import { Component, AfterViewInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('searchFilterRef')
  searchFilterRef : ElementRef;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter<string>();

  private _searchFilter: string;
  get searchFilter(): string {
    return this._searchFilter;
  }

  set searchFilter(value: string) {
    this._searchFilter = value;
    this.valueChange.emit(value);
  }

  ngAfterViewInit(): void {
    this.searchFilterRef?.nativeElement.focus();
  }
}
