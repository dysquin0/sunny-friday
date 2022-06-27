import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

export interface DialogData {
  cards: any;
  paragraphs: any;
}
var videoId: any;
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() data: any;
  @Input() cardType: any;

  ngOnInit(): void {}

  constructor(public dialog: MatDialog) {}

  openDialog(card: any) {
    videoId = card.videoId;
    if (this.cardType === 'projects') {
      this.dialog.open(OurProjectModalComponent, {
        data: {
          cards: card.title,
        },
        height: '650px',
        width: '900px',
      });
    } else if (this.cardType === 'projects-page') {
      this.dialog.open(OurProjectPageModalComponent, {
        data: {
          cards: card.title,
        },
        height: '650px',
        width: '900px',
      });
    } else {
      this.dialog.open(OurServicesModalComponent, {
        data: {
          cards: card.title,
          paragraphs: card.paragraphs,
        },
        height: 'auto',
        width: '900px',
      });
    }
  }
}

@Component({
  selector: 'our-project-modal',
  templateUrl: '../../pages/our-projects/our-project-modal.component.html',
})
export class OurProjectPageModalComponent {
  safeUrl: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public sanitizer: DomSanitizer
  ) {
    this.safeUrl = sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
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
      `https://www.youtube.com/embed/${videoId}`
    );
  }
}
@Component({
  selector: 'our-services-block-modal',
  templateUrl:
    '../../pages/home/components/our-services-block/our-services-block-modal.component.html',
})
export class OurServicesModalComponent {
  safeUrl: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public sanitizer: DomSanitizer
  ) {}
}
