import { Injectable } from '@angular/core'

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'
import {
  User,
  TransactionPayload,
  HttpResponseStatus,
} from '../_models/user.model'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserRoute = environment.user_API
  paymentUserRoute = environment.payment_API

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(this.getUserRoute)
      .pipe(retry(2), catchError(this.handleError))
  }

  payUser(body: TransactionPayload): Observable<HttpResponseStatus> {
    return this.httpClient
      .post<any>(this.paymentUserRoute, body)
      .pipe(retry(2), catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`
    }
    console.log(errorMessage)
    return throwError(errorMessage)
  }
}
