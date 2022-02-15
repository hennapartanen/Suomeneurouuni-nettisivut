import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  faTimes = faTimes;
  faComment = faComment;
  checked: boolean = false;

  showBtn: boolean = true;

  messages = [
    {
      user: 'chatbot',
      msg: 'Hei olen Suomen Eurouuni chatbot!'
    },
    {
      user: 'chatbot',
      msg: 'Valitse aihe jonka kanssa tarvitset apua alta'
    }
  ];

  messageSender = 'chatbot';

  addButton() {
    this.showBtn = !this.showBtn;
  }

  checkChange() {
    this.checked = !this.checked;
  }

  ngOnInit() {

  }

  constructor() { }
}
