import {
  Component,
  OnInit
} from '@angular/core';
import { AutoCompleteItem } from '../../ng2-simple-autocomplete';

const remoteData = [
  { _id: '1', name: 'lorem', },
  { _id: '2', name: 'ipsum', },
  { _id: '3', name: 'pixel', },
];

@Component({
  selector: 'home',  // <home></home>
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  staticResults = [
    {
      text: 'ng2',
      value: '[value]',
    },
    {
      text: 'simple',
      value: '[value]',
    },
    {
      text: 'autocomplete',
      value: '[value]',
    },
    {
      text: 'bold text by html tag',
      markup: '<b>bold text</b> by html tag',
      value: '[value]',
    },
  ];

  asyncResults = [];

  inputStyle = {
    'width': '400px',
    'padding': '0 0.75em',
    'color': 'blue',
    'font-size': '14px',
    'border-radius': '2px',
    'border-color': 'purple',
    'height': '50px',
    'line-height': '50px',
  };
  searchStatic = '';
  searchStaticHistory = '';
  searchAsync = '';
  selectedStatic: AutoCompleteItem;
  selectedStaticHistory: AutoCompleteItem;
  selectedAsync: AutoCompleteItem;

  // constructor(
  // ) {
  // }

  public ngOnInit() {
  }

  onSelectStatic(v: AutoCompleteItem) {
    this.selectedStatic = v;
  }

  onSelectStaticWithHistory(v: AutoCompleteItem) {
    this.selectedStaticHistory = v;
  }

  onSelectAsync(v: AutoCompleteItem) {
    this.selectedAsync = v;
  }

  onChangeSearchAsync(search) {
    this.fetchRemoteData().then((result: any[]) => {
      this.asyncResults = result
        .filter(v => v.name.indexOf(search) > -1)
        .map((v) => {
          return { text: v.name, value: v._id };
        });
    });
  }

  fetchRemoteData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(remoteData);
      }, 200);
    });
  }


}
