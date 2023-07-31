import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title:string;
  public project:Project;
  public status:string;
  public filesToUpload:Array<File>;

  constructor( 
    private _projectService:ProjectService,
    private _uploadService:UploadService
    ) { 
    this.title="crear Proyecto";
    this.project=new Project('', '', '','', 2019, '', '');
  }

  ngOnInit(): void {
  }
  
  onSubmit(form:any){

    //Guardar datos basicos
    this._projectService.saveProject(this.project).subscribe(
      response=> {
        if(response.project){
         
          
          //subir la imagen
          
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image' )
          .then((result:any)=>{
            this.status='success';
            console.log(result);
            form.reset();
          });
        }else{
          this.status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput:any){
    this.filesToUpload=<Array<File>>fileInput.target.files;
  }

}
