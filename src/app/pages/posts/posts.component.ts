import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // ? mensajes: any[] = [];

  mensajes: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
this.mensajes =  this.dataService.getPosts();
console.log(this.mensajes);

        // .subscribe((post: any[]) => {
        //   console.log(post);
        //   this.mensajes = post;
        // });
  }
  escuchaClick(id: number) {
    console.log('algo', id);
  }

}
