import { Component, OnInit, Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.css']
})
@Injectable()
export class WorkWithUsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  title = 'Work with us';
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  displayedColumns: string[] = ['job', 'department', 'location'];
  dataSource = new MatTableDataSource<JobDetails>(JOB_DATA);

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}

export interface JobDetails {
  job: string;
  department: string;
  location: string;
}

const JOB_DATA: JobDetails[] = [
  {job: 'Senior Art Director', department: 'Design', location: 'Bergen, Vestland, Norway'},
  {job: 'Senior Copywriter', department: 'Design', location: 'Remote'},
  {job: 'Art Director', department: 'Design', location: 'Bergen, Vestland, Norway'},
  {job: 'Account Manager', department: 'Administration', location: 'Bergen, Vestland, Norway'},
  {job: 'Account Director', department: 'Administration', location: 'Bergen, Vestland, Norway'},
  {job: 'Senior Film Producer', department: 'Design', location: 'Bergen, Vestland, Norway'},
  {job: 'Senior Art Director', department: 'Design', location: 'Bergen, Vestland, Norway'},
  {job: 'Group Communications Strategy Director', department: 'Marketing and Communications', location: 'Bergen, Vestland, Norway'},
  {job: 'Design Director', department: 'Design', location: 'Remote'},
  {job: 'Senior Data Strategist', department: 'Marketing and Communications', location: 'Bergen, Vestland, Norway'},
];


