# web-01-TP

Question : 

1. `npm install` command also generated a package-lock.json file
along with package.json. What is the purpose of this file?
2. By convention, all NPM dependencies use a 3-digit format for
version numbers. How do you call this?
3. What is a devDependency exactly? What are the differences with a
dependency?
4. What is a closure/iife ? What was it used for ? What replaced it?
5. What is the difference between import * from './utils' and import
{ parseUrl } from './utils'? What can be the consequences of
using one instead of the other?
6. Can you think of at least 2 things that are possible with Java
classes, but cannot be done with ES6 classes?
7. What are the differences between var and let;
8. What is the .bind(this) stuff? What happens if you delete it? Is
it needed when using an arrow function ? why ?
9. What does the @ symbol mean in @babel/***?
10. What are the advantages of Promises?
11. What version of ECMAScript async / await was released in ?
12. Component-oriented programming for the web is considered more
maintainable. Why?
13. What is Functional programming?
14. Explain what the map() function does ?
15. Explain what the filter() function does ?
16. Explain what the reduce() function does ?
17. What is the difference between .then() and async/await when
handling asynchronous functions?
18. What does the _ prefix mean on a sass file?

Réponse : 

1) The purpose of the package-lock.json file is to provide a deterministic and reproducible build of the project's dependencies. It ensures that the same versions of dependencies are installed across different environments, making the project more consistent.

2) The 3-digit format for version numbers used by NPM dependencies is called Semantic Versioning.

3) A devDependency is a package that is only needed during the development process. These packages are not required for the production version. DevDependencies typically include tools, testing frameworks, build systems, or other utilities that assist in the development.

The main difference between dependencies and devDependencies is that dependencies are necessary for the runtime of your application, while devDependencies are only necessary for the development and build processes.

4) Closures and IIFEs were used to achieve encapsulation and avoid global namespace pollution in JavaScript. They have been largely replaced by block-scoped variables and modules, which provide more explicit and standardized ways to achieve the same goals.

5) The first import statement, import * from './utils', imports all the exported members from the './utils' module and makes them available under a single namespace.

The second import statement, import { parseUrl } from './utils', specifically imports the parseUrl function from the './utils' module. This allows you to directly use the parseUrl function without needing to reference it through a namespace.

The consequences of using one import statement over the other depend on the specific scenario and the structure of the module you are importing from.

Using import * from './utils' can be convenient when you want to import multiple members from a module. It can make your code more readable and avoid naming conflicts if the module exports many functions or variables.

On the other hand, using import { parseUrl } from './utils' can help reduce the size of your code bundle if you are only using a few members from the module. It also makes it clear which members you are using in your code, improving code readability.

In general, it is recommended to use the second approach (import { parseUrl } from './utils') when you only need to import specific members from a module. However, if you need to import many members from a module or want to group related functionality under a single namespace, the first approach (import * from './utils') is the best.

6) In Java classes, you can define multiple constructors with different parameter lists, allowing for constructor overloading. This is not available in ES6 classes, where you can only have one constructor.

Additionally, Java classes can use access modifiers (public, private, protected) to control the visibility and accessibility of class members. In ES6 all class members are public by default.

7) In JavaScript, var and let are both used to declare variables, but they have some important differences.

Variables declared with var have function scope, meaning they are accessible within the entire function in which they are declared. On the other hand, variables declared with let have block scope, meaning they are only accessible within the block in which they are declared.

Variables declared with var are hoisted to the top of their scope, which means you can access them before they are declared in the code. Their initial value will be undefined until they are assigned. Variables declared with let are also hoisted, but they are not initialized until their declaration statement is reached in the code.

8) The .bind(this) syntax is used in JavaScript to bind a specific value to the this keyword within a function. When you call the bind() method on a function and pass a value as an argument, it creates a new function with the same body as the original function, but with a fixed this value.

Deleting the .bind(this) would remove the binding of this within the function. As a result, the this keyword inside the function would no longer refer to the intended object or context.

When using an arrow function in JavaScript, the concept of this is different compared to regular functions. Arrow functions do not have their own this value. Instead, they inherit the this value from the surrounding scope. Since arrow functions do not have their own this value, the .bind(this) syntax is not needed when using arrow functions.

9) The "@" symbol is used as a prefix for package names or plugins in various tools and libraries. Specifically, in the case of @babel/***, it is used to indicate that the package or plugin belongs to the Babel ecosystem.

10) Promises provide several advantages over traditional callback-based approaches. Here are some key advantages of using Promises:

- Improved Readability
- Error Handling
- Avoiding Callback Hell
- Composition and Chaining
- Error Propagation

Overall, Promises provide a more elegant and structured way to handle asynchronous operations improving code readability, error handling, and overall developer experience.

11) The version of ECMAScript that introduced the async/await syntax was ECMAScript 2017.

12) Component-oriented programming for the web is considered more maintainable for several reasons:

- Modularity: Component-oriented programming encourages breaking down complex systems into smaller, reusable components.

- Reusability: Components are designed to be reusable across different parts of an application or even across multiple projects.

- Scalability: As applications grow in size and complexity, maintaining a clear and organized codebase is crucial.

- Collaboration: Component-oriented programming promotes collaboration among developers by providing a clear separation of concerns.

- Testing: Components are self-contained units that can be tested in isolation. This makes it easier to write unit tests for individual components. 

13) Functional programming is a programming paradigm that emphasizes the use of pure functions and immutable data. In functional programming, functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned as values from functions.

Functional programming offers several benefits, including:

- Readability
- Modularity
- Testability
- Concurrency

It's important to note that functional programming is not mutually exclusive with other programming paradigms. It can be combined with imperative or object-oriented programming to leverage the strengths of each paradigm in different parts of an application.

14) The map() function is used to transform each element of an array or iterable by applying a provided function to it, and returns a new array or iterable with the transformed elements.

15) The filter() function is used to create a new array or iterable that contains only the elements from the original array or iterable that satisfy a given condition.

16) The reduce() function is used to perform a cumulative operation on the elements of an array or iterable and return a single value.

17) The difference between .then() and async/await lies in the syntax and the way they handle asynchronous functions.

.then() is a method used to handle promises. It takes a callback function as an argument, which will be executed when the promise is resolved. This allows you to chain multiple asynchronous operations together.

On the other hand, async/await is a more modern syntax introduced in ES2017 (ES8) that provides a more concise and synchronous-looking way to write asynchronous code. It allows you to write asynchronous code that looks like synchronous code, making it easier to read and understand. 

Both .then() and async/await can be used to handle asynchronous functions, but async/await provides a more intuitive and readable way to write asynchronous code, especially when dealing with multiple asynchronous operations or complex error handling. However, async/await can only be used within an async function, while .then() can be used anywhere a promise is returned.

18) In Sass, the underscore prefix on a file name is a convention used to indicate that the file is a partial. A partial file in Sass is a file that contains reusable styles or code snippets that are meant to be imported into other Sass files.