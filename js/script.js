"use strict";
function clickCounterViewModel() {
  this.clicks = ko.observable(0);
  this.name = ko.observable("Kitty1");
  this.imgSrc = ko.observable("img/img1.jpg");
  this.addClick = function addClick(){
    this.clicks(this.clicks() + 1)
  };
}

ko.applyBindings(new clickCounterViewModel);
