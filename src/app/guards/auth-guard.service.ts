import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor() { }

    public canActivate(): Observable<boolean> | boolean {
        return true;
    }
}