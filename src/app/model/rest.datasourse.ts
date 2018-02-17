import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './product.model';
import { Cart } from './cart.model';
import { Order } from './order.model';
import 'rxjs/add/operator/map';

const PROTOCOL = 'http';
const PORT = 3500;
@Injectable()
export class RestDataSource {
  baseUrl: string;
  response: any;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<HttpResponse<Product[]>> {
    this.http.get<Product[]>(this.baseUrl + 'products').subscribe(x => this.response = x );
    return this.response;
  }
  saveOrder(order: Order): Observable<HttpResponse<Order>> {
    this.http.post<Order>(this.baseUrl + 'products', order).subscribe(x => this.response = x );
    return this.response;
  }
}
