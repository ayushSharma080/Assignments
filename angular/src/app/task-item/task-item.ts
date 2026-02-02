import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItemComponent implements OnInit {
  ngOnInit(): void {
    this.title = "Module 3";
    this.description = "Hello welcome to angular description";
    this.city = "Delhi";
  }

  title!: string;
  description!: string;
  city!: string;

  isShow = true;
  role = 'normal';
  movie_title = "Top 4 movies";

  isHighlighted = true;
  isItalic = true;
  textColor = 'blue';
  fontSize = 30;
  isActive = true;
  isDisabled = false;

  username = '';

  movies = [
    {
      title: "Titanic",
      director: "ABC",
      cast: "DCB",
      releaseDate: "20th Oct 1998"
    },
    {
      title: "PQR",
      director: "ABCD",
      cast: "DCBH",
      releaseDate: "24th Oct 1998"
    }
  ];
}
