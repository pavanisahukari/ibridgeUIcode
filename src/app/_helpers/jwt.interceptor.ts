import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}
    currentUser
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        this.currentUser = this.authenticationService.currentUserValue;
        console.log(this.currentUser)
        if (this.currentUser && this.currentUser.user.role) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${this.currentUser.user.role}`
                }
            });
        }

        return next.handle(request);
    }
}