import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles: ['@media (max-width: 1180px) { .mobileNav { display: inline !important;} }'
]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {

      $('.first-button').on('click', function () {
          console.log("handler fired");
        $('.animated-icon1').toggleClass('open');
      });
      });
  }

}
