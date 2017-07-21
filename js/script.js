var catData = [
  {
    name: "Kitty1",
    imgSrc: "img/img1.jpg",
    clicks: 0,
    nickNames: ["Cute1","Cute2","Cute3"]
  },
  {
    name: "Kitty2",
    imgSrc: "img/img2.jpg",
    clicks: 0,
    nickNames: ["Tabby","Cutie"]
  }
];

var Cat = function(data){
  this.clicks = ko.observable(data.clicks);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.levels = ko.observable()
  this.nickNames = ko.observable(data.nickNames)
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

  this.allCats = ko.observable([]);

  for(i=0; i<catData.length;i++){
    self.allCats().push(new Cat(catData[i]))
  }

  this.cat = ko.observable(self.allCats()[0]);

  this.addClick = function(){
    self.cat().clicks(self.cat().clicks() + 1)
  };

  this.displayClickedCat = function(data){
    self.cat(data)
  }
}

ko.applyBindings(new ViewModel());
