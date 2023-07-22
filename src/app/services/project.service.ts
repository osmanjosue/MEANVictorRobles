import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import {Project} from '../models/project';
import {Global} from './global';

@Injectable()
export class ProjectService{
    public url:string;
    constructor (_http: HttpClient){
        this.url=Global.url;
    }
testService(){
    return 'Problando servicio de Angular';
}
}