import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../models/User';
import {HttpService} from '../../services/http/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @Output() authChange = new EventEmitter();
  @Input() isButton: boolean;

  user: User;
  errorMessage: string;

  constructor(private modalService: NgbModal, private httpService: HttpService) { }

  ngOnInit() {
    this.user = new User();
    this.errorMessage = null;
  }

  open(content) {
    this.authChange.emit(true);
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

  logIn() {
    this.httpService.logIn(this.user.username, this.user.password)
      .subscribe(value => {
          console.log(value);
          this.modalService.dismissAll();
          window.location.reload();
        },
        error => {
          this.errorMessage = 'Ошибка :  Логин или пароль не корректны';
        });
  }
}
