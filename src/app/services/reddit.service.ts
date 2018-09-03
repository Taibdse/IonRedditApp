import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class RedditService{
    http:any;
    baseUrl: String;

    constructor(http:HttpClient){
        this.http = http;
        this.baseUrl = 'https://www.reddit.com/r';
    }

    getPosts(category, limit){
      // this.baseUrl+'/'+category+'/top.json?limit='+limit
      let url = `${this.baseUrl}/${category}/top.json?limit=${limit}`;
        return this.http.get(url).map(res => res.json());
    }
}