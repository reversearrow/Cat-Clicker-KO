"use strict";
function clickCounterViewModel() {
  this.clicks = ko.observable(0);
  this.name = ko.observable("Kitty1");
  this.imgSrc = ko.observable("img/img1.jpg");
  this.levels = ko.observable()
  this.computeLevels = ko.computed(function(){
    if(this.clicks() <= 10){
      this.levels("Infant");
    }else if(this.clicks()>10 && this.clicks()<=20){
      this.levels("Teen");
    }else if(this.clicks()>20 && this.clicks()<=30){
      this.levels("Adult");
    }else if(this.clicks()>30 && this.clicks()<=40){
      this.levels("Old");
    }else if(this.clicks()>40){
      this.levels("Dead")
    }
  }, this);
  this.addClick = function addClick(){
    this.clicks(this.clicks() + 1)

  };
}

ko.applyBindings(new clickCounterViewModel);
