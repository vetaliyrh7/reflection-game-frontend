import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicationService } from '../../services/publication.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})

export class PostListComponent implements OnInit {
  title: String;
  contentType: String;
  sortDirection: String;
  router: Router;
  postsList: Array<Object>;
  currSortField: String;
  sortFields: Array<Object>;

  constructor(private _router: Router, private route: ActivatedRoute, private pubService: PublicationService) {
    this.router = _router;
    this.title = '';
    this.sortDirection = 'desc';
    this.sortFields = [
      {
        label: 'По названию',
        value: 'title'
      },
      {
        label: 'По типу информации',
        value: 'typeLabel',
      },
      {
        label: 'По дате создания',
        value: 'createdAt'
      }
    ];
    this.currSortField = 'title';
    switch (this.router.url) {
      case '/lore': {
        this.title = 'Лор';
        this.contentType = 'lore';
        break;
      }
      case '/characters': {
        this.title = 'Персонажи';
        this.contentType = 'characters';
        break;
      }
      case '/items': {
        this.title = 'Предметы';
        this.contentType = 'items';
        break;
      }
      default: {
        this.title = '';
        break;
      }
    }
  }

  getPublications(): void {
    this.pubService.getPublications(this.contentType, this.currSortField, this.sortDirection)
      .then(posts => this.postsList = posts);
  }

  ngOnInit(): void {
    this.getPublications();
  }

  changeSortDirection(currSortField, direction): void {
    if (this.sortDirection !== direction) {
      this.sortDirection = direction;
    }
    if (this.currSortField !== currSortField) {
      this.currSortField = currSortField;
    }
    this.getPublications();
  }

  deletePost(id): void {
    this.pubService.removePublication(id)
    setTimeout(() => {
      this.getPublications();
    }, 100)
  }

  gotoEdit(id): void {
    this.router.navigate(['/post/edit', id]);
  }

  gotoNew(): void {
    this.router.navigate(['/post/new', this.contentType]);
  }
}
