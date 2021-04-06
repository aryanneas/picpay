import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { User } from '../../_models/user.model'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor() {}

  @Input() user: User

  @Output() payUser = new EventEmitter()

  ngOnInit() {}

  pay(id: any, name: string) {
    this.payUser.emit({ id, name })
  }
}
