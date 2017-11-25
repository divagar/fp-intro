import { Injectable } from '@angular/core';

@Injectable()
export class LSService {

  constructor() {
  }

  public store(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  public retrieve(key) {
    let val = JSON.parse(localStorage.getItem(key));
    //if (!val) throw 'No value found!';
    return val;
  }

}