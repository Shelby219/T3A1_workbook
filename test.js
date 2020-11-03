
class Car { //Creating a JavaScript Class called Car which is like Template
    constructor(brand) { //Setting the class constructor method which is used for intialisation
      this.carname = brand; //One intial property is set which is Car name.  
    }
    present() { //This is a object method called present 
      return 'I have a ' + this.carname; //It returns a String that has the class Car Name interpolated
    }
  }
  
  class Model extends Car { //Creating a Class which is a Template, this is a Model Class that inherits methods from the Car Class
    constructor(brand, mod) { //Setting the constructor which intialises the properties
      super(brand); //super refers to parent class, using super means the Car constructor gets called and gets access to the Car properties and methods. 
      this.model = mod; //A inital property is set which is the Model
    }
    show() { //This is an object method called Show
      return this.present() + ', it was made in ' + this.model; //It returns Car Object Method which is Present, connecting another string with interpolation the Model.
    }
  }
  
  let makes = ["Ford", "Holden", "Toyota"] //Setting a new array called makes with 3 properties
  let models = Array.from(new Array(40), (x,i) => i + 1980) //Setting an new array using the static method that shallow copies an array from a new Array which is set with 40 elements, then a map function is called on each element adding 1980 so that there is 40 years in the array from 1980-2019
  
  function randomIntFromInterval(min,max) { // min and max included
      return Math.floor(Math.random()*(max-min+1)+min); //Function with two arguments that returns a random number
  }
  // gives us a random number between 0 and 1 .0 but never quite return a 1
  //We dont want decimal we want random number
  //To do this we multiple Math.random by the range, which is set with the min and max arguments
  //To make the random number start at the min value we need to add min to whatever number we got.
  //Math.floor takes off the decimal

  for (model of models) {  //for loop that loops over all the models in the models array and executes the below
  
    make = makes[randomIntFromInterval(0,makes.length-1)] //sets each make to be accessing the makes array with an index chosen randomly with the random number function with the min being 0 and max being the array length take 1
    model = models[randomIntFromInterval(0,makes.length-1)]  //sets each model to be accessing the models array with an index chosen randomly with the random number function with the min being 0 and max being the makes array(this is an error I think, it should be models, so a random element selected is only ever 1980-1982) length take 1
  
    mycar = new Model(make, model); //setting mycar to be a new Model object with the parameters of make and model set into the object using above make and model set
    console.log(mycar.show()) //printing in the console is the show method on the mycar object which prints the statement returned in the show method
  }
  //the for loop, loops over the 40 models in the models array and that is what is printed in the console. The main error being the getting random models is called on the makes array length. Therefore the years 1983 and above do not get randomly chosen.
