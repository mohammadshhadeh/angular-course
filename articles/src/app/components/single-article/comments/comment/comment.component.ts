import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../../../shared/article.interface'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comments: Comment[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
