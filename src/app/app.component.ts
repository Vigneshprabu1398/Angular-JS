import { Component, VERSION } from "@angular/core";
import { max } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Check the console area :"; //gives the version of Angular
  a: number;
  b: string = "ppComponent is a class";
  c: boolean;
  d: any;

  constructor() {
    this.a = 2;
    const num = 100; //using a const
    this.d = "Angular" + 6; //concatenating string and number
    var ans: string = "hello"; //declaring using var keyword
    //this.basicdatatypes(num, ans);
    //this.mathfunctions();
    //this.array();
    //this.tuplefunctions();
    //this.stringfunction1();
    //this.stringfunctions2();
    //this.stringfunctions3();
    //this.date1();
    //this.ForWhileDo();
    //this.Bitwiseop();
  }

  basicdatatypes(num, ans) {
    // let a: number = 7;
    //var num: any = 200;
    var c: boolean = false;
    console.log("Number:" + this.a);
    console.log("String from appComponent:" + this.b);
    console.log("Boolean:" + c);
    console.log("Any datatype:" + this.d);
    console.log("Constant Parameter:" + num);
    console.log("Parameter from constructor:" + ans);
    console.log("------------");
  }
  mathfunctions() {
    let number1: number = 100;
    console.log("Cosine:" + Math.cos(number1));
    console.log("Squareroot:" + Math.sqrt(number1));
    console.log("Power:" + Math.pow(number1, 3));
    console.log(Math.max(number1, 700));
    console.log(Math.log(number1));
    console.log(Math.min(number1, 700));
    console.log(Math.ceil(23.38));
    console.log(Math.floor(23.58));
    console.log(Math.random());
    console.log(Math.tan(100));
    console.log("------------");
  }
  array() {
    var arr1: number[] = [1, 2, 3, 4, 5, 6, 7];
    var arr2: number[] = [8, 9, 10, 2, 7];
    console.log("Adding 3 elements in array", arr1[0] + arr1[1] + arr1[2]);
    console.log(arr1.concat(arr2));
    console.log("join:" + arr1.join(""));
    console.log("Index:" + arr1.indexOf(4));
    console.log("pop:" + arr2.pop()); //outputs the popped element
    console.log("push:" + arr1.push(9)); //outputs the no of elements in arr1 after pushing
    console.log("Length of arrays:" + arr1.length, arr2.length);
    console.log(
      //adding all the elements in array
      "Reduce:" +
        arr1.reduce(function(a, b) {
          return a - b;
        })
    );
    console.log("Slice:" + arr1.slice(1, 4));
    console.log("Shifting:" + arr1.shift());
    console.log("Unshift:" + arr1.unshift(10));
    console.log("Reverse:" + arr1.reverse());
    console.log("Sort:" + arr2.sort());
    console.log("Tostring:" + arr1.toString());

    console.log("array2" + arr2);
    console.log("array1" + arr1);

    var num = [7, 8, 9];
    num.forEach(function(value) {
      console.log("Foreachvalue", +value);
    });

    console.log("------------");
  }

  tuplefunctions() {
    let myTuple: any[] = [
      1,
      "Hydrogen",
      2,
      "Helium",
      3,
      "Lithium",
      4,
      "beryllium",
      5,
      "boron"
    ];
    var a = [13, "hai"];
    var [b, c] = a;
    console.log(b);
    console.log(c);

    console.log(myTuple[6]);
    console.log(myTuple.length);
    myTuple.push(12);
    console.log(myTuple.length);
    console.log(myTuple.pop());
    myTuple[0] = 11;
    console.log("my tuple elements:" + typeof myTuple);
    console.log("------------");
  }

  stringfunction1() {
    //concatenating string
    let name: string = "vicky";
    let age: number = 22;
    console.log(name + " is " + age, " years old");
    // console.log(${name} + " is " + ${age} "years old");
    console.log("------------");

    let str: string = "Dependencies";
    console.log(str.charAt(6)); //"e"--returns the character at position 6
    console.log(str.indexOf("e", 2)); //"3"--returns the position of 'e' with the location where searching should start
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
    console.log("------------");

    let str1: string = "Mathematics";
    let str2: string = "Science";

    let str3: string = "box,pencil,pen";
    let str4: string;
    //concatenating strings
    str4 = str1.concat(str2);
    console.log(str4);
    console.log(str1.concat(" ", str2));

    //replacing a part of string
    console.log(str1.replace("matics", "science"));
    console.log(str1.replace(str1, str2));

    console.log(str1.substring(2, 9)); //does not take negative endpoint
    console.log(str1.substr(2, 9)); //starting point and number of characters
    console.log(str1.slice(2, -3)); //can have negative end
    //a seperator string and number of entries to be found
    console.log(str3.split("i", 1)); //"box,penc"
    console.log("------------");
  }

  date1() {
    let date: Date = new Date();
    date.setDate(13);
    date.setMonth(7);
    date.setFullYear(2020);
    date.setHours(13);
    date.setMinutes(13);
    date.setSeconds(13);
    console.log("Year = " + date.getFullYear());
    console.log("Date = " + date.getDate());
    console.log("Month = " + date.getMonth());
    console.log("Day = " + date.getDay());
    console.log("Hours = " + date.getHours());
    console.log("Minutes = " + date.getMinutes());
    console.log("Seconds = " + date.getSeconds());

    var d,
      v,
      e = 50;
    if (date.getMonth() % 2 == 0) {
      d = 30;
    } else {
      d = 31;
    }
    for (v = e; date.getDate() + e > d; ) {
      v = e - d;
    }

    console.log("add date by 2 =", date.getDate() + v);
    console.log("Sub Month by 2 =", date.getMonth() - 2);
  }

  ForWhileDo() {
    let a = 1,
      b = 5,
      i: number,
      c = 0;

    for (i = 1; i <= b; i++) {
      a = a * i;
    }
    console.log("The factorial of", +b, "is=", +a);
    for (i = 1; i <= b; i++) {
      c = c + i;
    }

    console.log("The fibonacci of", +b, "is=", +c);
    var n = 10,
      h = 1;
    while (h < n) {
      console.log("Entered while");
    }

    do {
      console.log("Entered do…while");
    } while (h < n);
  }
  Bitwiseop() {
    var a: number = 2;
    var b: number = 3;

    var result;

    result = a & b;
    console.log("AND Operator for " + a, " & " + b, "=", result);
    result = a | b;
    console.log("OR Operator for " + a, " | " + b, "=", result);
    result = a ^ b;
    console.log("XOR Operator for " + a, " ^ " + b, "=", result);
    result = ~a;
    console.log("NOT Operator for " + a, " ~ ", "=", result);
    result = a << b;
    console.log("LestShift Operator for " + a, " << " + b, "=", result);
    result = a >> 1;
    console.log("RightShift Operator for " + a, " >> 1 ", "=", result);
  }
}
