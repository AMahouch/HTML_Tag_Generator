# HTML Tag Generator
Currying in Javascript to generate HTML tags

Powerful technique for generating HTML tags using higher-order functions and currying. The provided code demonstrates how to create specialized functions for different HTML tags and efficiently construct HTML elements such as tables with headers and data rows.

The ```makeTag``` function serves as the foundation of this approach. By passing in the desired opening and closing tags, it returns a new function that can be used to generate HTML tags. This higher-order function enables code reuse and abstraction.

Using the ```makeTag``` function, specific tag functions (```tableTag```, ```headerTag```, ```dataTag```, and ```rowTag```) are created. These functions encapsulate the logic for generating corresponding HTML tags with provided content.

The final result is the concatenation of the header and data rows enclosed with <table> tags. This demonstrates the power of higher-order functions and currying in generating HTML structures dynamically and with ease.


