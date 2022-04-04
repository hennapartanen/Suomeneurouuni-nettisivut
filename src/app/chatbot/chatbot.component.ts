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

  constructor() { }

  ngOnInit(): void {

  }

  popMessages = [
    {
      user: 'Yhteydenottobotti🤖',
      msg: '👋Hei olen Suomen Eurouuni yhteydenottobotti'
    }
  ];

  messages = [
    {
      user: 'Yhteydenottobotti🤖',
      msg: '👋Hei olen Suomen Eurouuni yhteydenottobotti'
    },
    {
      user: 'Yhteydenottobotti🤖',
      msg: 'Valitse aihe jonka kanssa tarvitset apua alta'
    }
  ];

  function() {
    this.showBtn = !this.showBtn;
  }

  checkChange() {
    this.checked = !this.checked;
    let wrapper = document.getElementById("wrapper0");
    wrapper.style.display = "none";
  }

  scroll = (): void => {
    let scrollHeigth;
    let wrapper = document.getElementById("wrapper0");

    if (window.innerWidth < 150) {
      scrollHeigth = 10;
    }
    else {
      scrollHeigth = 1000;
    }

    if (window.scrollY >= scrollHeigth) {
      wrapper.className = "wrapper0 show";
    }
  }
}
