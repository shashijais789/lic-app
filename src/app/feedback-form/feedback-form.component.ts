import { Component, OnInit } from '@angular/core';
import { SelectorContext } from '@angular/compiler';
import { Feedback } from '../feedback';

@Component({
  selector: 'feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  hero = 'Windstorm';
  //Default Values
  feedback: Feedback = {
    policyId: 0, 
    firstName: "Shashi", 
    lastName: "Jais", 
    isOLRKnown: false, 
    isPortalUsed: true,
    serviceRating: 0,
    recomendationRating: 0,
    experienceDesc: ""
  };

  constructor() { }

  ngOnInit() {
  }

  get currentFeedback() { return JSON.stringify(this.feedback); }

}
