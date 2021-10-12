import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  resultUrl: string

  constructor() {
    this.resultUrl = 'http://54.146.205.172:2020/student'
   }

   
}
