# 🧮 math-essential

**The JavaScript math library you've been waiting for.**

[![npm version](https://badge.fury.io/js/math-essential.svg)](https://badge.fury.io/js/math-essential)
[![Downloads](https://img.shields.io/npm/dm/math-essential.svg)](https://www.npmjs.com/package/math-essential)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Simple, fast, and powerful mathematical utilities for JavaScript developers. Zero dependencies, TypeScript ready.

## ✨ Why math-essential?

- 🚀 **Blazing Fast** - Optimized for performance
- 🪶 **Lightweight** - Zero dependencies, minimal bundle size
- 🎯 **TypeScript Ready** - Full type definitions included
- 🧪 **Well Tested** - 100% test coverage
- 📚 **Comprehensive** - Everything you need for math operations
- 🔧 **Tree Shakeable** - Import only what you need

## 🚀 Quick Start

```bash
npm install math-essential
```

```javascript
const { sum, mean, isPrime } = require('math-essential');

// Basic arithmetic
sum(1, 2, 3, 4, 5);        // 15

// Statistics
mean([1, 2, 3, 4, 5]);     // 3

// Number theory
isPrime(17);               // true
```

**That's it!** You're ready to crunch numbers like a pro.

## 🎯 Features

### 🧮 Basic Math
```javascript
const { sum, multiply, power, round } = require('math-essential');

sum(1, 2, 3, 4);              // 10
multiply(2, 3, 4);            // 24
power(2, 8);                  // 256
round(3.14159, 2);            // 3.14
```

### 📊 Statistics
```javascript
const { mean, median, mode, standardDeviation } = require('math-essential');

const data = [1, 2, 2, 3, 4, 4, 4, 5];

mean(data);                   // 3.125
median(data);                 // 3.5
mode(data);                   // [4]
standardDeviation(data);      // 1.356
```

### 📐 Geometry
```javascript
const { circleArea, distance, triangleArea } = require('math-essential');

circleArea(5);                // 78.54
distance(0, 0, 3, 4);         // 5
triangleArea(10, 8);          // 40
```

### 🔢 Number Theory
```javascript
const { isPrime, factorial, gcd, fibonacci } = require('math-essential');

isPrime(17);                  // true
factorial(5);                 // 120
gcd(48, 18);                  // 6
fibonacci(10);                // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### 🔄 Unit Conversion
```javascript
const { degreesToRadians, celsiusToFahrenheit } = require('math-essential');

degreesToRadians(90);         // 1.5708
celsiusToFahrenheit(25);      // 77
```

## 💡 Real-world Examples

### Calculate compound interest
```javascript
const { power, round } = require('math-essential');

function compoundInterest(principal, rate, time) {
  return round(principal * power(1 + rate/100, time), 2);
}

compoundInterest(1000, 5, 10); // 1628.89
```

### Analyze test scores
```javascript
const { mean, median, standardDeviation } = require('math-essential');

const scores = [85, 92, 78, 96, 88, 91, 87, 93];

console.log(`Average: ${mean(scores)}`);           // 88.75
console.log(`Median: ${median(scores)}`);          // 89.5
console.log(`Std Dev: ${standardDeviation(scores)}`); // 5.77
```

### Generate Fibonacci sequence for UI animations
```javascript
const { fibonacci } = require('math-essential');

const delays = fibonacci(8).map(n => n * 100);
// [0, 100, 100, 200, 300, 500, 800, 1300] ms delays
```

## 🎨 Tree Shaking Support

Import only what you need:

```javascript
// ESM
import { sum, mean } from 'math-essential';

// CommonJS
const { sum, mean } = require('math-essential');

// Webpack will automatically tree-shake unused functions
```

## 📚 Full API Reference

### Basic Math
- `sum(...numbers)` - Add multiple numbers
- `multiply(...numbers)` - Multiply multiple numbers
- `power(base, exponent)` - Calculate power
- `round(number, decimals)` - Round to decimal places
- `abs(number)` - Absolute value

### Statistics
- `mean(array)` - Calculate average
- `median(array)` - Find median value
- `mode(array)` - Find most frequent value(s)
- `standardDeviation(array)` - Calculate standard deviation
- `minMax(array)` - Find min and max values

### Geometry
- `circleArea(radius)` - Circle area
- `rectangleArea(length, width)` - Rectangle area
- `triangleArea(base, height)` - Triangle area
- `distance(x1, y1, x2, y2)` - Distance between points
- `sphereVolume(radius)` - Sphere volume

### Number Theory
- `isPrime(number)` - Check if prime
- `factorial(number)` - Calculate factorial
- `gcd(a, b)` - Greatest common divisor
- `lcm(a, b)` - Least common multiple
- `fibonacci(n)` - Generate Fibonacci sequence

### Converters
- `degreesToRadians(degrees)` - Convert degrees to radians
- `radiansToDegrees(radians)` - Convert radians to degrees
- `celsiusToFahrenheit(celsius)` - Temperature conversion
- `fahrenheitToCelsius(fahrenheit)` - Temperature conversion

## 🤝 Contributing

We love contributions! Please read our [Contributing Guide](CONTRIBUTING.md) to get started.

## 📄 License

MIT

## 🌟 Support

If you found this library helpful, please consider:
- ⭐ Starring the repo
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🔀 Contributing code

---

**Made with ❤️ for the JavaScript community**

*Stop reinventing the wheel. Start building amazing things.*