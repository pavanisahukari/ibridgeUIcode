import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { FrontEndConfig} from '../_services/frontendconfig'

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient,private frontendconfig:FrontEndConfig) { }
    config =this.frontendconfig.getServerUrl()
    getAll(skip,limit) {
        console.log(skip,limit,this.config.apiUrl)
        
        return this.http.get(this.config.apiUrl +'/users/audit?skip='+skip+'&limit='+limit)

        // return this.http.get(`${this.config.apiUrl}+'/users/audit?skip='+${skip}+'&limit='+${limit}`);
    }

    getById(id: number) {
        return this.http.get(`${this.config.apiUrl}/users/${id}`);
    }

    register(user: User) {
        console.log(this.config.apiUrl)
        return this.http.post(`${this.config.apiUrl}/users`, user);
    }

    update(user: User) {
        return this.http.put(`${this.config.apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.config.apiUrl}/users/${id}`);
    }
}