import { Component, OnInit, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { Player } from '../../interfaces/player';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {
  courseData: any;
  teeBoxData: any;
  playerNameFC = new FormControl('', this.nameValidator());
  game: any;
  players: Player[] = [];
  playerId = 0;
  selectedCourse: any;
  selectedTeeBox: any;
  errorMsg = 'Please fill out all fields';

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get("https://golf-courses-api.herokuapp.com/courses")
    .subscribe(data => {
      Object.entries(data).map(entry => {
        this.courseData = entry[1];
      })
    });
  }

  getCourseInfo(selectedCourse: any): void {
    this.http.get(`https://golf-courses-api.herokuapp.com/courses/${selectedCourse}`)
    .subscribe(data => {
      Object.entries(data).map(entry => {
        this.teeBoxData = entry[1].holes[0].teeBoxes;
      })
    })
  }

  addPlayer(): void {
    if(this.playerNameFC.value && this.players.length < 4) {
      this.playerId++;
      this.players.push({
        id: this.playerId.toString(),
        name: this.playerNameFC.value,
        scores: [],
        totalScore: 0
      });
      this.playerNameFC.setValue('');
    }
  }

  nameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let error = null;
      if (this.players && this.players.length) {
          this.players.forEach(player => {
              if (player.name.toLowerCase() === control.value.toLowerCase()) {
                  error = {duplicate: true};
              }
          });
      }
      return error;
    };
  }

  startGame(): any {
    if(this.players.length !== 0 && this.selectedCourse !== undefined && this.selectedTeeBox !== undefined) {
      this.game = {
        courseId: this.selectedCourse,
        teeBox: this.selectedTeeBox,
        playerList: this.players
      };
      localStorage.setItem('game', JSON.stringify(this.game))
      this.router.navigate(['./scorecard']);
    }
  }

}
