class Person{constructor(n,e){this.name=n,this.age=e}}const adam=new Person("Adam",15),eve=new Person("Eve",18),str="hello";function solution(n){return 0===n.length?"":n[n.length-1]+solution(n.slice(0,n.length-1))}console.log(solution(str));
//# sourceMappingURL=23-examples.6cf168a9.js.map
