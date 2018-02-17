import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './product.model';
import { Cart } from './cart.model';
import { Order } from './order.model';

const PROTOCOL = 'http';
const PORT = 3500;
@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'login', { name: user, password: pass });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }
  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'products', order);
  }
}
