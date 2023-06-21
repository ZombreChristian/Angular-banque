// import { Injectable } from '@angular/core';
// import { LightInfoInput } from '../components/light-info/light-info.component';

// @Injectable()
// export class FirstService {

//   constructor() { }

//   public initializeAccountInfo: Array<LightInfoInput>=
//      [
//     {
//       title : 'Account balance',
//       amount : 21560,
//       infoStyle: 'bg-primary'
//     },
//     {
//       title : 'Highest transfert',
//       amount : 21560,
//       infoStyle: 'bg-warning'
//     },
//     {
//       title : 'Highest deposit',
//       amount : 9560,
//       infoStyle: 'bg-success'
//     },
//     {
//       title : 'test',
//       amount : 9560,
//       infoStyle: 'bg-danger'
//     }
//   ];

// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
// import { TransactionDto } from './transaction-dto';
import { Observable } from 'rxjs';

@Injectable()
export class FirstService {

  rootUrl = 'http://localhost:4200';

  constructor(
    private httpClient: HttpClient
  ) { }

  findAllTransactions(): Observable<any> {
    let _headers: HttpHeaders = new HttpHeaders();
    // _headers = _headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJteXVzZXJAZ21haWwuY29tIiwiZXhwIjoxNjY1NDQwMjM5LCJpYXQiOjE2NjQ3MjAyMzksImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX1VTRVIifV19.UVs4VclebetFTiTg8tB7v7USQ6MSHfS_iStTAze9QFk');
    const request = new HttpRequest<any>(
      'GET',
      this.rootUrl + '/transactions/',
      {
        // headers: _headers,
        params: null,
        responseType: 'json'
      }
    );
    return this.httpClient.request(request)
    .pipe(
      filter(r => r instanceof HttpResponse),
      map(res => res as any)
    );
  }


}
