import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.css'],
})
@Injectable()
export class WorkWithUsComponent implements OnInit {
  title: any;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  displayedColumns: string[] = ['job', 'department', 'location'];
  dataSource = new MatTableDataSource<JobDetails>(JOB_DATA);

  jobHeader: any;
  deptHeader: any;
  locationHeader: any;

  constructor(private translation: L10nTranslationService) {}
  ngOnInit(): void {
    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => {
        this.title = this.translation.translate('navigation.workWithUs');
        this.jobHeader = this.translation.translate(
          'workWithUsPage.table.header1'
        );
        this.deptHeader = this.translation.translate(
          'workWithUsPage.table.header2'
        );
        this.locationHeader = this.translation.translate(
          'workWithUsPage.table.header3'
        );
      },
    });
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput
      .split(',')
      .map((str) => +str);
  }
}

export interface JobDetails {
  job: string;
  department: string;
  location: string;
}

const JOB_DATA: JobDetails[] = [
  {
    job: 'Senior Art Director',
    department: 'Design',
    location: 'Bergen, Vestland, Norway',
  },
  { job: 'Senior Copywriter', department: 'Design', location: 'Remote' },
  {
    job: 'Art Director',
    department: 'Design',
    location: 'Bergen, Vestland, Norway',
  },
  {
    job: 'Account Manager',
    department: 'Administration',
    location: 'Bergen, Vestland, Norway',
  },
  {
    job: 'Account Director',
    department: 'Administration',
    location: 'Bergen, Vestland, Norway',
  },
  {
    job: 'Senior Film Producer',
    department: 'Design',
    location: 'Bergen, Vestland, Norway',
  },
  {
    job: 'Senior Art Director',
    department: 'Design',
    location: 'Bergen, Vestland, Norway',
  },
  {
    job: 'Group Communications Strategy Director',
    department: 'Marketing and Communications',
    location: 'Bergen, Vestland, Norway',
  },
  { job: 'Design Director', department: 'Design', location: 'Remote' },
  {
    job: 'Senior Data Strategist',
    department: 'Marketing and Communications',
    location: 'Bergen, Vestland, Norway',
  },
  {
    job: 'Senior Art Director',
    department: 'Design',
    location: 'Bergen, Vestland, Norway',
  },
  { job: 'Senior Copywriter', department: 'Design', location: 'Remote' },
  {
    job: 'Art Director',
    department: 'Design',
    location: 'Bergen, Vestland, Norway',
  },
  {
    job: 'Account Manager',
    department: 'Administration',
    location: 'Bergen, Vestland, Norway',
  },
  {
    job: 'Account Director',
    department: 'Administration',
    location: 'Bergen, Vestland, Norway',
  },
  {
    job: 'Senior Film Producer',
    department: 'Design',
    location: 'Bergen, Vestland, Norway',
  },
  {
    job: 'Senior Art Director',
    department: 'Design',
    location: 'Bergen, Vestland, Norway',
  },
  {
    job: 'Group Communications Strategy Director',
    department: 'Marketing and Communications',
    location: 'Bergen, Vestland, Norway',
  },
  { job: 'Design Director', department: 'Design', location: 'Remote' },
  {
    job: 'Senior Data Strategist',
    department: 'Marketing and Communications',
    location: 'Bergen, Vestland, Norway',
  },
];
