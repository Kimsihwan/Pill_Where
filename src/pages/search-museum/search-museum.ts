import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { MuseumDetailPage } from "../museum-detail/museum-detail";
import { AllMuseumPage } from "../all-museum/all-museum";

@IonicPage()
@Component({
  selector: "page-searchMuseum",
  templateUrl: "search-museum.html"
})
export class SearhcMuseumPage {
  museumList = [];
  filteredMuseum = [];
  isfiltered: boolean;

  constructor(
    private http: Http,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.isfiltered = false;
    this.http
      .get("assets/data/museum.json")
      .map(res => res.json())
      .subscribe(
        data => {
          this.museumList = data.museums;
        },
        err => console.log("error is " + err), // error
        () => console.log("read museum data Complete " + this.museumList) // complete
      );
  }

  searchMaps(event) {
    var filteredJson = this.museumList.filter(function(row) {
      if (row.name.indexOf(event.target.value) != -1) {
        return true;
      } else {
        return false;
      }
    });
    this.isfiltered = true;
    this.filteredMuseum = filteredJson;
    console.log(this.filteredMuseum);
  }

  itemTapped(event, museum) {
    this.navCtrl.push(MuseumDetailPage, {
      museum: museum
    });
  }

  allMuseumMap() {
    this.navCtrl.push(AllMuseumPage, {
      museumList: this.museumList
    });
  }
}
