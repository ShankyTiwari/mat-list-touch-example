import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-multiline-demo',
  templateUrl: './multiline-demo.component.html',
  styleUrls: ['./multiline-demo.component.scss']
})
export class MultilineDemoComponent implements OnInit {

  constructor() { }

  listData = new MatTableDataSource<ListItem>([
    {
      separator: false,
      name: 'Iron Man',
      img: '/assets/ironman.jpg',
      locked: true,
      description: `Iron Man is a fictional superhero. He was the first, and will probably be the last.`,
    },
    {
      separator: false,
      name: 'Captain America',
      img: '/assets/captainamerica.jpg',
      description: `Captain America is a fictional superhero.Captain America is the alter ego of Steve Rogers,
      a frail young man enhanced to the peak of human perfection by an experimental
      serum to aid the United States government's efforts in World War II.`,
    },
    {
      separator: false,
      name: 'Dr Strange',
      img: '/assets/drstange.jpg',
      description: `Doctor Stephen Vincent Strange is a fictional superhero.
      After a car accident severely damages his hands and hinders his ability to perform surgery,
      he searches the globe for a way to repair them and encounters the Ancient One. `,
    },
    {
      separator: false,
      name: 'The Batman',
      img: '/assets/batman.jpg',
      description: `Batman does not possess any superpowers.`,
    },
    {
      separator: false,
      name: 'The Winter Soldier',
      img: '/assets/wintersoldier.jpg',
      description: `Barnes grew up as an Army brat, ist extreamly good at Hand to hand combat and Martial arts`,
    }
  ]);

  ngOnInit(): void {
    console.log(this.listData)
  }

  listItemSwipeRight($event) {
    console.log($event)
  }

  listItemSwipeLeft($event) {
    console.log($event)
  }

  public evaluateSeparatorRequired(index: number, data: ListItem[]): boolean {
    return !!data[index].separator;
  }

}

interface ListItem {
  separator: boolean,
  name: string,
  img: string,
  locked?: boolean,
  description: string,
}