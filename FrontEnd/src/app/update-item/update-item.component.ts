import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { error } from 'console';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrl: './update-item.component.css'
})
export class UpdateItemComponent implements OnInit{
  id: number= 0;
  item: Item = new Item();
  constructor( private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router){}


  ngOnInit(): void {
    this.item = new Item();

    this.id = this.route.snapshot.params['id'];

      this.itemService.getItemById(this.id)
      .subscribe(data => {
        console.log(data)
        this.item = data;
      },
    error => console.log(error));
  }

  updateItem(){
    this.itemService.updateItem(this.id, this.item)
    .subscribe(data =>{
      console.log(data);
      this.item =new Item();
      this.gotoList();
    }, error => console.log(error));
  }
  onSubmit(){
    this.updateItem();
    }
    gotoList() {
      this.router.navigate(['/items']); 
    }
  }



