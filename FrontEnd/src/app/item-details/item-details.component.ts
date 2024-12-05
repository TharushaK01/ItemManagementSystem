import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnInit{

  id: number = 0;
  item: Item = new Item();
  constructor(private route: ActivatedRoute, private ItemService: ItemService){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.item = new Item();
    this.ItemService.getItemById(this.id).subscribe( data => {
      this.item = data;
    })
      
  }

}
