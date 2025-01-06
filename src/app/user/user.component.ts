import { Component, computed, Input, input, output, Output, EventEmitter} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };



@Component({
  selector: 'app-user',
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: false
})
export class UserComponent {

  @Input({required:true}) user!: User;
  @Input({required:true}) selected!: boolean;


  // @Input({required:true}) id!: string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  @Output() select=new EventEmitter<string>();
  // select=output<string>();

  // avatar=input.required<string>();
  // name=input.required<string>();
  // imagePath = computed(() =>{
  //   return 'users/' + this.avatar();
  // });
  get imagePath() {
    return 'users/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }


}
