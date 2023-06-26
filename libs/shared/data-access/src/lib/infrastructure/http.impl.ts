import axios from 'axios'
import {from} from 'rxjs'
import {Http} from '../base'

export class HttpImpl<T> extends Http<T> {
  protected request<R, D = void>(method: string, path: string, data?: T | D) {
    const url = `${this.baseUrl}/${path}`
    const response = axios.request<R>({method, url, data})
    return from(response.then((res) => res.data))
  }
}
