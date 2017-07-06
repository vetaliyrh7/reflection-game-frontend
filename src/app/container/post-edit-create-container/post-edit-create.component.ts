import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PublicationService } from '../../services/publication.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-post-edit-create',
  templateUrl: './post-edit-create.component.html',
  styleUrls: ['./post-edit-create.component.css']
})

export class PostEditCreateComponent implements OnInit {
  currRoute: ActivatedRoute;
  router: Router;
  postId: String;
  contentType: String;
  editorContent: String;
  postData: Object;

  title: String;
  typeLabel: String;

  constructor(private _router: Router, private route: ActivatedRoute,
              private pubService: PublicationService, private location: Location) {
    this.router = _router;
    this.currRoute = route;
    this.postId = this.currRoute.snapshot.params['id'];
    this.contentType = this.currRoute.snapshot.params['contentType'];
    this.postData = null;
  }

  ngOnInit(): void {
    if (this.postId) {
      this.pubService.getPublication(this.postId)
        .then(post => {
          this.postData = post;
          this.title = post['title'];
          this.typeLabel = post['typeLabel'];
          this.editorContent = post['content']
        });
    }
  }

  updatePost(): void {
    const dataToSend = {
      title: this.title,
      content: this.editorContent,
      typeLabel: this.typeLabel
    };

    if (this.title !== '' && this.editorContent !== '' && this.typeLabel) {
      this.pubService.updatePublication(this.postId, dataToSend)
        .then(() => {
          this.location.back();
        })
        .catch(err => {
          alert(err)
        });
    } else {
      alert('Не все поля заполнены!!');
    }
  }

  createPost(): void {
    const dataToSend = {
      title: this.title,
      content: this.editorContent,
      typeLabel: this.typeLabel,
      type: this.contentType
    };

    if (this.title !== '' && this.editorContent !== '' && this.typeLabel) {
      this.pubService.addPublication(dataToSend)
        .then(() => {
          this.location.back();
        })
        .catch(err => {
          alert(err)
        });
    } else {
      alert('Не все поля заполнены!!');
    }
  }
}
