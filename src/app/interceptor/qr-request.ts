import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';


export class GetQRInterceptor implements HttpInterceptor {

    private cache = new Map<string, HttpResponse<any>>();

    intercept(req: HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        throw new Error("Method not implemented.");
    }


    get(req: HttpRequest<any>): HttpResponse<any> | undefined {
        
        const requestUrl = req.urlWithParams;
        const cached = this.cache.get(requestUrl);
        if (!cached) {
            return undefined;
        }

        return cached;

    }

}