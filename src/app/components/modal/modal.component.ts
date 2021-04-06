import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { UserService } from '../../_services/user.service'
import {
  TransactionPayload,
  HttpResponseStatus,
} from '../../_models/user.model'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  cards: any[] = [
    {
      id: 1,
      card_number: '1111 1111 1111 1111',
      cvv: 789,
      expiry_date: '01/18',
    },
    {
      id: 2,
      card_number: '4111 1111 1111 1234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ]
  selected: number = 1

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  @Input() UserData: any

  @Output() PaymentSucess = new EventEmitter()

  emitSuccess(msg: boolean) {
    this.PaymentSucess.emit(msg)
  }

  paymentForm = new FormGroup({
    amount: new FormControl('', Validators.required),
    card: new FormControl('1', Validators.required),
  })

  savePaymentData() {
    let selectedCard = this.cards.find(
      (element) => element.id == this.paymentForm.value.card
    )

    let body: TransactionPayload = {
      card_number: selectedCard.card_number.replace(/\s/g, ''),
      cvv: selectedCard.cvv,
      expiry_date: selectedCard.expiry_date,
      destination_user_id: this.UserData.id,
      value: this.paymentForm.value.amount,
    }

    this.userService.payUser(body).subscribe((status: HttpResponseStatus) => {
      this.toastr.success('Pagamento', status.status)
    })
  }
}
