"use strict";
// class
// fields, methods => encapsulation
// template, declare once, no data in
// object
// instance of a class, created many times, data in
// In JS
// syntatical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: Hi!`);
  }
}

const heeji = new Person("heeji", 1);
console.log(heeji.name);
console.log(heeji.age);
heeji.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "jobs", -1);
console.log(user1.age);

// 3. Fields (public, private)
// 추가된지 얼마 안되어서 아직 많이 안쓴다
class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
class Article {
  static publisher = "heeji";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publicField);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color}`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// 상속
class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    // 부모 것도 쓰고 시퍼
    super.draw();
    console.log("🤍");
  }

  // overriding
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const triangle = new Triangle(20, 20, "white");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking instaceOf
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
