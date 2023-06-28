class Person{constructor(o,n){this.name=o,this.age=n}}const adam=new Person("Adam",15),eve=new Person("Eve",18);let a=0;function count(){a++,console.log("a",a)}function cs2(){let o=0;return()=>++o}count(),count(),count(),count(),count();let d=cs2();console.log("d-1",d()),console.log("d-2",d()),console.log("d-3",d());
//# sourceMappingURL=23-examples.8a29bb8b.js.map
