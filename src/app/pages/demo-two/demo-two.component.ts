import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-demo-two',
  templateUrl: './demo-two.component.html',
  styleUrls: ['./demo-two.component.scss']
})
export class DemoTwoComponent implements OnInit {

  constructor() { }

  listData = new MatTableDataSource<ListItem>([
    {
        name: 'Iron Man',
        icon: 'pan_tool',
        start: Date.now(),
        end: Date.now(),
        description: `Iron Man is a fictional superhero. He was the first, and will probably be the last.`,
    },
    {
        name: 'Captain America',
        icon: 'view_stream',
        start: Date.now(),
        end: Date.now(),
        description: `Captain America is a fictional superhero.Captain America is the alter ego of Steve Rogers,
        a frail young man enhanced to the peak of human perfection by an experimental
        serum to aid the United States government's efforts in World War II.`,
    },
    {
        name: 'Dr Strange',
        icon: 'offline_bolt',
        start: Date.now(),
        end: Date.now(),
        description: `Doctor Stephen Vincent Strange is a fictional superhero.
        After a car accident severely damages his hands and hinders his ability to perform surgery,
        he searches the globe for a way to repair them and encounters the Ancient One. `,
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
    return false;
  }

}

interface ListItem {
  name: string,
  icon: string,
  start: number,
  end: number,
  description: string,
}
