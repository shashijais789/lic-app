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

  constructor(private http: Http) { }
  apiRoot: string = "http://localhost:8090/api/fdi";  
  feedback = new Feedback(0, "Shashi", "Jais", false, true, 0, 0, "");
  feedbackList: any;
  submitted = false;
  feedbackSubmitMsg: string = "";
  feedbackSubmittedSinceServerStart = 0;

  
/*
  onSubmit1() { 
    console.log('submit called !!!!!');
    console.log(this.feedback);
    this.submitted = true; 
    //this.feedbackList =  this.http.get<Feedback[]>(this.apiRoot)
    console.log("Submit new Feedback!");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let opts = new RequestOptions();
    opts.headers = headers;
    this.http.get(this.apiRoot).subscribe(
      res => { 
        this.feedbackList = res.json(); 
        console.log('Total Feedback registered: ' + this.feedbackList.length)},
      msg => console.error('Error: ${msg.status} ${msg.statusText}')
    );
  }
*/
  onSubmit(){
    console.log("Submit new Feedback!");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let opts = new RequestOptions();
    opts.headers = headers;
    this.http.post(this.apiRoot, this.feedback).subscribe(
      res => {
        this.feedbackSubmittedSinceServerStart = this.feedbackSubmittedSinceServerStart + 1;
        console.log(res.json());
      },
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }
  
  ngOnInit(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let opts = new RequestOptions();
    opts.headers = headers;
    this.http.get(this.apiRoot).subscribe(
      res => { 
        this.feedbackList = res.json(); 
        this.feedbackSubmittedSinceServerStart = this.feedbackList.length;
        console.log('Total Feedback registered: ' + this.feedbackSubmittedSinceServerStart)},
      msg => console.error('Error: ${msg.status} ${msg.statusText}')
    );
  }
  get currentFeedback() { return JSON.stringify(this.feedback); }
  get totalFeedback() { 
    if(this.feedbackList)
      this.feedbackSubmitMsg = 'Total feedback registered till date: ' + this.feedbackSubmittedSinceServerStart; 
    return this.feedbackSubmitMsg;
  }

}
