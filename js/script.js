var Cat = function(){
  this.clicks = ko.observable(0);
  this.name = ko.observable("Kitty1");
  this.imgSrc = ko.observable("img/img1.jpg");
  this.levels = ko.observable()
  this.nickNames = ko.observable(["Cute1","Cute2","Cute3"])
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
}

var ViewModel = function() {
  var self = this;
  this.cat = new Cat();
  this.addClick = function addClick(){
    self.cat.clicks(self.cat.clicks() + 1)

  };
}

ko.applyBindings(new ViewModel());
