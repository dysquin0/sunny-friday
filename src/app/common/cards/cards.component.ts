import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface DialogData {
  cards: any;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() data: any;

  ngOnInit(): void {}

  constructor(public dialog: MatDialog) {}

  openDialog(card: any) {
    this.dialog.open(OurProjectModalComponent, {
      data: {
        cards: card.title,
      },
      height: '650px',
      width: '900px',
    });
  }
}

@Component({
  selector: 'our-project-modal',
  templateUrl:
    '../../pages/home/components/our-projects/our-project-modal.component.html',
})
export class OurProjectModalComponent {
  safeUrl: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public sanitizer: DomSanitizer
  ) {
    this.safeUrl = sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/ty3U4R8fbLI`
    );
  }
}
