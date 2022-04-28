import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/service/data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

users:any
displayedColumns=['id','login','avatar_url']
dataSource!:MatTableDataSource<any>;

@ViewChild('paginator') paginator!:MatPaginator;
@ViewChild(MatSort) matSort! : MatSort;

  constructor(private service:DataService) { 
  this.service.users().subscribe((data:any)=>{
    this.dataSource=new MatTableDataSource(data)
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.matSort;
   console.log(data);
   
    this.users=data
    
  })
  }

  ngOnInit(): void {
  }

  
}

