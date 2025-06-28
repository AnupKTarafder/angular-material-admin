import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

const isDev = process.env['NODE_ENV'] === 'development';

const hostApi = isDev ? 'http://localhost' : 'https://sing-generator-node.herokuapp.com';
const portApi = isDev ? '8080' : '';
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}`;

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  config = {
    version: '1.2.0',
    remote: 'https://sing-generator-node.herokuapp.com',
    isBackend: environment.backend,
    hostApi,
    portApi,
    baseURLApi,
    auth: {
      email: 'admin@flatlogic.com',
      password: 'password',
    },
  };

  constructor() {}

  getConfig(): Object {
    return this.config;
  }
}
