import { Component,OnInit } from '@angular/core';
import { environment } from 'src/enviornment/enviornment';
import { PostService } from 'src/app/service/post.service';
import { DialogboxComponent } from 'src/app/shared/confirmationpop/dialogbox/dialogbox.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
datas:any=[];

  constructor(private postservice:PostService,public dialog: MatDialog){}
  ngOnInit(): void {
      this.postservice.getallPosts().subscribe(data => {
        // console.log(data.posts);
        this.datas=data.posts
        
      });
      // this.postservice.getjson().subscribe(console.log)
    }
    OnDelete(deleteId:any):void {
      const dialogRef = this.dialog.open(DialogboxComponent, {
        width: '300px',
        disableClose: true // Disable closing by clicking outside the dialog
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Confirmed');
this.datas=this.datas.filter((data:any) => data.id !=deleteId)
} else {
          console.log('Cancelled');
          // Action cancelled
        }
      });
      
    }
    // deletePost(data:any):void {
    //   console.log(data);
      
    // }
}


