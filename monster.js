new Vue({
  el: "#app",
  data: {
    playerhealth : 50,
    monsterhealth : 50,
    runningGame : false,
    turns: []
  },
  methods: {
    startgame: function() {
      this.runningGame = true;
      this.playerhealth = 100;
      this.monsterhealth = 100;
    },
    giveUP: function() {
      var p = this.playerhealth;
      var m = this.monsterhealth;
      if (p>m) {
        alert("Hello! I am an alert box!!");
      }
      else if (m>p) {
        alert("pm");
      }
      else {
        alert("Hello");
      }

      this.runningGame = false;
    },
    attack: function(){
      var a = Math.ceil(Math.random()*10);
      this.monsterhealth = this.monsterhealth - a;

      var b = Math.ceil(Math.random()*10);
      if (b>4) {
        this.playerhealth = this.playerhealth - b;
      }
      else {
        this.monsterhealth = this.monsterhealth + b;
        if(this.monsterhealth>=100){
          this.monsterhealth = 100;
        }
      }

      if (this.playerhealth<=0){
        this.playerhealth = 00;
        alert("Ops! You Lost");
        this.runningGame = false;
      }
      else if (this.monsterhealth<=0){
        this.monsterhealth = 00;
        alert("Congrats! You Win");
        this.runningGame = false;
      }
    },
    heal: function() {
      var a = Math.ceil(Math.random()*10);
      this.playerhealth = this.playerhealth + a;
      if(this.playerhealth>=100){
        this.playerhealth = 100;
      }
      console.log(this.playerhealth);

      var b = Math.ceil(Math.random()*10);
      if (b>4) {
        this.playerhealth = this.playerhealth - b;

      }
      else {
        this.monsterhealth = this.monsterhealth + b;
      }
      if(this.monsterhealth>=100){
        this.monsterhealth = 100;
      }
      if (this.playerhealth<=0){
        this.playerhealth = 00;
        alert("Ops! You Lost");
        this.runningGame = false;
      }
      else if (this.monsterhealth<=0){
        this.monsterhealth = 00;
        alert("Congrats! You Win");
        this.runningGame = false;
      }
    },
    spAttack: function() {
      var a = Math.ceil(Math.random()*10);
      a = a*2;
      this.monsterhealth = this.monsterhealth - a;


      var b = Math.ceil(Math.random()*10);

      if (b>3) {
        this.playerhealth = this.playerhealth - b;

      }
      else {
        b =b*1.5;
        this.monsterhealth = this.monsterhealth + b;
      }
      if(this.monsterhealth>=100){
        this.monsterhealth = 100;
      }
      if (this.playerhealth<=0){
        this.playerhealth = 00;
        alert("Ops! You Lost");
        this.runningGame = false;
      }
      else if (this.monsterhealth<=0){
        this.monsterhealth = 00;
        alert("Congrats! You Win");
        this.runningGame = false;
      }
    },
  }
});
