import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.setPageActive('order');
  }

  search(event: any) {
    const fValue = (event.target as HTMLInputElement).value;
    // this.listData.filter = fValue.trim().trim().toLowerCase();
  }

}
