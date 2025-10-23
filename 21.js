 // Explicit conversion
/*
/*
| Original Value     | Converted to Number | Converted to String     | Converted to Boolean |
|--------------------|--------------------|--------------------------|----------------------|
| false              | 0                  | "false"                  | false                |
| true               | 1                  | "true"                   | true                 |
| 0                  | 0                  | "0"                      | false                |
| 1                  | 1                  | "1"                      | true                 |
| "0"                | 0                  | "0"                      | true                 |
| "1"                | 1                  | "1"                      | true                 |
| NaN                | NaN                | "NaN"                    | false                |
| Infinity           | Infinity           | "Infinity"               | true                 |
| -Infinity          | -Infinity          | "-Infinity"              | true                 |
| ""                 | 0                  | ""                       | false                |
| "20"               | 20                 | "20"                     | true                 |
| "twenty"           | NaN                | "twenty"                 | true                 |
| []                 | 0                  | ""                       | true                 |
| [20]               | 20                 | "20"                     | true                 |
| [10,20]            | NaN                | "10,20"                  | true                 |
| ["twenty"]         | NaN                | "twenty"                 | true                 |
| ["ten","twenty"]   | NaN                | "ten,twenty"             | true                 |
| function(){}       | NaN                | "function(){}"           | true                 |
| {}                 | NaN                | "[object Object]"        | true                 |
| null               | 0                  | "null"                   | false                |
| undefined          | NaN                | "undefined"              | false                |
*/


 // 1. Using Number () method
    
    let a = Number("123")
    console.log(a);
    a = Number(true);
    console.log(a);
    a = Number(null);
    console.log(a);
    a = Number("hello");
    console.log(a); // 0

    // String Method
    let b;
    b = String(234);
    console.log(b);
    b = String(true);
    console.log(b);
    b = String(undefined);
    console.log(b);
    b = String(null);
    console.log(b);

    //
    let c;
    c = Boolean(1);
    console.log(c);
    c = Boolean("kaif");
    console.log(c);
    c = Boolean(undefined);
    console.log(c);
    c = Boolean(null);
    console.log(c);

