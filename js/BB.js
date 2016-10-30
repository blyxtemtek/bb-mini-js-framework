//example of JS mini framework

(function (global){

    var BB = function(name, season) {
        //return newly created BB instance each time invoked
        return new BB.init(name, season);
    }
    // var theSeasons = ["fall", "spring", "winter", "summer"];

    var weatherEvnts = {
        fall: "because I like the falling leaves!",
        spring: "because of the blooming flowers!",
        winter: "because I love throwing snow balls!",
        summer:"because I love the beach!"
    };

    //shared method(s) among instances of BB
    BB.prototype = {
        respond: function() {
            // return "My name is "+ this.name + "and my favorite season is " + this.season + " " + weatherEvnts[this.season];
            console.log("My name is "+ this.name + " and my favorite season is " + this.season + " " + weatherEvnts[this.season]);
        }

        //more methods later?
    };

    //init function to generate new instance to match values with properties
    BB.init = function(name, season) {
        var me = this;
        //set default values when no input is given
        me.name = name || "";
        me.season = season || "";
        
    }

    //passes reference for prototype chain between objects 
    BB.init.prototype = BB.prototype;

    //set different alias of "bb_" for BB
    global.BB = global.bb_ = BB;

}(window));


