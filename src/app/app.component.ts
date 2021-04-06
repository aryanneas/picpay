import { Component, OnInit } from '@angular/core'
import { UserService } from './_services/user.service'
import { User } from './_models/user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Desafio Picpay Front-end'

  user = {} as User
  users: User[]

  statePaymentModal = false

  selectedUser: any

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users
    })
  }

  payUser(userData: object) {
    this.selectedUser = userData
    this.setStatePaymentModal(true)
  }

  setStatePaymentModal(statePaymentModal: boolean) {
    this.statePaymentModal = statePaymentModal
  }

  showModalConfirmation(userDataConfirmation: object) {
    console.log(userDataConfirmation)
  }
}
