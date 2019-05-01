import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../models/User';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @Output() authChange = new EventEmitter();

  user: User;
  errorMessage: string;

  constructor(private modalService: NgbModal, private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.errorMessage = null;
  }

  open(content) {
    this.authChange.emit(false);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  close($event: boolean) {
    if (event) {
      this.modalService.dismissAll();
    }
  }

  register() {
    this.userService.createAccount(this.user)
      .subscribe(value => {
        console.log(value);
        this.modalService.dismissAll();
        window.location.reload();
      }, err => {
        console.log(err);
        this.errorMessage = 'Ошибка :  Пользователь с таким логином уже зарегистрировван';
      });
  }
}
