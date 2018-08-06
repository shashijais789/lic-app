import { Component, OnInit } from '@angular/core';
import { SelectorContext } from '@angular/compiler';
import { Feedback } from '../feedback';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {URLSearchParams} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {

  constructor(private http: HttpClient) { }
  
  
  private apiRoot: string = "http://localhost:8090/api/fdi";  
  private feedback = new Feedback(0, "Shashi", "Jais", false, true, 0, 0, "");
  private feedbackList: any;

  onSubmit () {
    this.feedbackList =  this.http.get<Feedback[]>(this.apiRoot)
  }

  //submitted = false;

  /*
  onSubmit(){ 
    //console.log(JSON.stringify(this.feedback));
    console.log("GET all feedback called!");
    let url = `${this.apiRoot}`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let opts = new RequestOptions();
    opts.headers = headers;
    this.http.get(url, opts).subscribe(
      res => console.log(res.json()),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }

  onSubmit1(){
    console.log("Submit new Feedback!");
    let url = `${this.apiRoot}`;
    //let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    //let opts = new RequestOptions();
    //opts.headers = headers;
    this.http.post(url, this.feedback).subscribe(
      res => console.log(res.json()),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }

  //get diagnostic() { return JSON.stringify(this.feedback); }

  //constructor() { }

  ngOnInit() {
  }
  */
  //get currentFeedback() { return JSON.stringify(this.feedback); }

}
