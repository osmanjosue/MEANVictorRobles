import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  public title:string;
  public project:Project;
  public status:string;

  constructor( private _projectService:ProjectService) { 
    this.title="crear Proyecto";
    this.project=new Project('', '', '','', 2019, '', '');
  }

  ngOnInit(): void {
  }
  
  onSubmit(form:any){
    this._projectService.saveProject(this.project).subscribe(
      response=> {
        if(response.project){
          this.status='success';
          form.reset();
        }else{
          this.status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
