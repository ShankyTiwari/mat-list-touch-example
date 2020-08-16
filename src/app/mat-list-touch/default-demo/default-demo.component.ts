import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-default-demo',
  templateUrl: './default-demo.component.html',
  styleUrls: ['./default-demo.component.scss']
})
export class DefaultDemoComponent implements OnInit {

  constructor() { }

  listData = new MatTableDataSource<ListItem>([
    {
        separator: true,
        name: 'Iron Man',
        icon: 'pan_tool',
        start: Date.now(),
        end: Date.now(),
        locked: true,
        description: `Iron Man is a fictional superhero. He was the first, and will probably be the last.`,
    },
    {
      separator: false,
      name: 'Captain America',
      icon: 'view_stream',
      start: Date.now(),
      end: Date.now(),
      description: `Captain America is a fictional superhero.Captain America is the alter ego of Steve Rogers,
      a frail young man enhanced to the peak of human perfection by an experimental
      serum to aid the United States government's efforts in World War II.`,
    },
    {
      separator: true,
      name: 'Dr Strange',
      icon: 'offline_bolt',
      start: Date.now(),
      end: Date.now(),
      description: `Doctor Stephen Vincent Strange is a fictional superhero.
      After a car accident severely damages his hands and hinders his ability to perform surgery,
      he searches the globe for a way to repair them and encounters the Ancient One. `,
    },
    {
      separator: true,
      name: 'Black Panther',
      icon: 'offline_bolt',
      start: Date.now(),
      end: Date.now(),
      description: `After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.`,
    },
    {
      separator: false,
      name: 'Adam Warlock',
      icon: 'offline_bolt',
      start: Date.now(),
      end: Date.now(),
      description: `Ellie gave him the name "Adam," because she thought he needed two names instead of one, as it was on their planet.`,
    }
  ]);

  ngOnInit(): void {
  }

  listItemSwipeRight($event) {
    console.log($event)
  }

  listItemSwipeLeft($event) {
    console.log($event)
  }

  public evaluateSeparatorRequired(data: ListItem[], index: number): boolean {
    if(data[index]) {
      return !!(data[index].separator);
    }
    return false;
  }

}

interface ListItem {
  separator: boolean,
  name: string,
  icon: string,
  start: number,
  end: number,
  locked?: boolean,
  description: string,
}