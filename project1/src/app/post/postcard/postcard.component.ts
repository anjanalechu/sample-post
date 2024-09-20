import { Component, EventEmitter, Input,Output } from "@angular/core";
import { PostService } from "src/app/service/post.service";

@Component({
    selector: "app-postcard",
    templateUrl: "./postcard.component.html",
    styleUrls: ["./postcard.component.css"],
})
export class PostCardComponent{
    @Input() data:any;
  @Output() editEvent = new EventEmitter();

  Delete(id:any){
this.editEvent.emit(id);
}
// delete(id:any){
// }
}