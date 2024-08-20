class Mathoperation {
    public static PI : number = Math.PI;

    public static add(num1: number, num2: number): number{
        return num1 + num2;
    }

    public static subs(num1: number, num2: number): number{
        return num1 - num2;
    }
}

console.log(Mathoperation.PI);
console.log(Mathoperation.add(5, 10));
console.log(Mathoperation.subs(10,5));