import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  resultUrl: string

  constructor() {
    this.resultUrl = 'http://localhost:2020/student'
   }

   
}
