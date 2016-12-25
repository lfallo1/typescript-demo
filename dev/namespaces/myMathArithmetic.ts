//just a nested namespace example
namespace MyMath{
  export namespace Circle{
    const PI = 3.14;

    export function add(x: number, y: number): number{
      return x + y;
    }
  }
}

// var MyMath;
// (function(MyMath){
//
//   var PI = 3.14;
//
//   function add(x,y){
//     return x + y;
//   }
//   MyMath.add = add;
//
// })(MyMath || (MyMath = {}));
