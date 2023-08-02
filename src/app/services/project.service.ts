import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import {Project} from '../models/project';
import {Global} from './global';

@Injectable()
export class ProjectService{
    public url:string;
    constructor ( private _http: HttpClient){
        this.url=Global.url;
    }
testService(){
    return 'Probando servicio de Angular';
}

saveProject(project:Project):Observable<any>{
    let params=JSON.stringify(project);
    let headers= new HttpHeaders().set('content-type', 'application/json');
    return this._http.post(this.url + 'save-project', params, {headers: headers});
}

getProjects(): Observable<any>{
    let headers = new HttpHeaders().set('content-type', 'application/json');
    return this._http.get(this.url+ 'projects', {headers:headers});
}

getProject(id:any):Observable<any>{                                                                 //el any del id: se lo puse yo por que me tiraba error.
    let headers=new HttpHeaders().set('content-type', 'application/json');
    return this._http.get(this.url+'project/'+id, {headers:headers});
}
deleteProject(id:any):Observable<any>{                                                                 //el any del id: se lo puse yo por que me tiraba error.
    let headers=new HttpHeaders().set('content-type', 'application/json');
    return this._http.delete(this.url+'project/'+id, {headers:headers});
}

}