/**
 * math-util - JavaScript Mathematics Library
 * Author: nguenbaohua
 * Description: A lightweight JavaScript library providing basic mathematical operations, statistics, geometry, number theory, matrix operations, and unit conversions.
 * License: MIT
 * Version: 0.0.1
 */

// ========== BASIC MATHEMATICS ==========
const BasicMath = {
  /**
   * Add multiple numbers
   * @param {...number} numbers - Numbers to add
   * @returns {number} Sum
   */
  sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  },

  /**
   * Subtract multiple numbers
   * @param {...number} numbers - Numbers to subtract
   * @returns {number} Difference
   */
  subtract(...numbers) {
    return numbers.reduce((acc, num) => acc - num);
  },

  /**
   * Multiply multiple numbers
   * @param {...number} numbers - Numbers to multiply
   * @returns {number} Product
   */
  multiply(...numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
  },

  /**
   * Divide multiple numbers
   * @param {...number} numbers - Numbers to divide
   * @returns {number} Quotient
   */
  divide(...numbers) {
    return numbers.reduce((acc, num) => {
      if (num === 0) throw new Error('Cannot divide by zero');
      return acc / num;
    });
  },

  /**
   * Power/Exponentiation
   * @param {number} base - Base number
   * @param {number} exponent - Exponent
   * @returns {number} Result
   */
  power(base, exponent) {
    return Math.pow(base, exponent);
  },

  /**
   * Nth root
   * @param {number} number - Number to find root of
   * @param {number} root - Root degree (default is 2)
   * @returns {number} Result
   */
  nthRoot(number, root = 2) {
    if (root === 0) throw new Error('Root degree cannot be zero');
    return Math.pow(number, 1 / root);
  },

  /**
   * Absolute value
   * @param {number} number - Input number
   * @returns {number} Absolute value
   */
  abs(number) {
    return Math.abs(number);
  },

  /**
   * Round to n decimal places
   * @param {number} number - Number to round
   * @param {number} decimals - Number of decimal places
   * @returns {number} Rounded number
   */
  round(number, decimals = 0) {
    const factor = Math.pow(10, decimals);
    return Math.round(number * factor) / factor;
  }
};

// ========== STATISTICS ==========
const Statistics = {
  /**
   * Calculate arithmetic mean
   * @param {number[]} numbers - Array of numbers
   * @returns {number} Mean
   */
  mean(numbers) {
    if (numbers.length === 0) return 0;
    return BasicMath.sum(...numbers) / numbers.length;
  },

  /**
   * Find median
   * @param {number[]} numbers - Array of numbers
   * @returns {number} Median
   */
  median(numbers) {
    if (numbers.length === 0) return 0;
    const sorted = [...numbers].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    
    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
  },

  /**
   * Find mode (most frequent number)
   * @param {number[]} numbers - Array of numbers
   * @returns {number[]} Array of modes
   */
  mode(numbers) {
    if (numbers.length === 0) return [];
    
    const frequency = {};
    numbers.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
    });
    
    const maxFreq = Math.max(...Object.values(frequency));
    return Object.keys(frequency)
      .filter(key => frequency[key] === maxFreq)
      .map(Number);
  },

  /**
   * Calculate standard deviation
   * @param {number[]} numbers - Array of numbers
   * @returns {number} Standard deviation
   */
  standardDeviation(numbers) {
    if (numbers.length === 0) return 0;
    const mean = this.mean(numbers);
    const variance = numbers.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) / numbers.length;
    return Math.sqrt(variance);
  },

  /**
   * Find minimum and maximum values
   * @param {number[]} numbers - Array of numbers
   * @returns {object} {min, max}
   */
  minMax(numbers) {
    if (numbers.length === 0) return { min: null, max: null };
    return {
      min: Math.min(...numbers),
      max: Math.max(...numbers)
    };
  },

  /**
   * Calculate sum of squares
   * @param {number[]} numbers - Array of numbers
   * @returns {number} Sum of squares
   */
  sumOfSquares(numbers) {
    return numbers.reduce((acc, num) => acc + Math.pow(num, 2), 0);
  }
};

// ========== GEOMETRY ==========
const Geometry = {
  /**
   * Calculate rectangle area
   * @param {number} length - Length
   * @param {number} width - Width
   * @returns {number} Area
   */
  rectangleArea(length, width) {
    return length * width;
  },

  /**
   * Calculate circle area
   * @param {number} radius - Radius
   * @returns {number} Area
   */
  circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
  },

  /**
   * Calculate circle perimeter
   * @param {number} radius - Radius
   * @returns {number} Perimeter
   */
  circlePerimeter(radius) {
    return 2 * Math.PI * radius;
  },

  /**
   * Calculate triangle area
   * @param {number} base - Base
   * @param {number} height - Height
   * @returns {number} Area
   */
  triangleArea(base, height) {
    return 0.5 * base * height;
  },

  /**
   * Calculate triangle area using Heron's formula
   * @param {number} a - Side a
   * @param {number} b - Side b
   * @param {number} c - Side c
   * @returns {number} Area
   */
  triangleAreaHeron(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  },

  /**
   * Calculate distance between two points
   * @param {number} x1 - X coordinate of point 1
   * @param {number} y1 - Y coordinate of point 1
   * @param {number} x2 - X coordinate of point 2
   * @param {number} y2 - Y coordinate of point 2
   * @returns {number} Distance
   */
  distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  },

  /**
   * Calculate sphere volume
   * @param {number} radius - Radius
   * @returns {number} Volume
   */
  sphereVolume(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
  },

  /**
   * Calculate rectangular box volume
   * @param {number} length - Length
   * @param {number} width - Width
   * @param {number} height - Height
   * @returns {number} Volume
   */
  boxVolume(length, width, height) {
    return length * width * height;
  }
};

// ========== NUMBER THEORY ==========
const NumberTheory = {
  /**
   * Check if number is prime
   * @param {number} n - Number to check
   * @returns {boolean} True if prime
   */
  isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  },

  /**
   * Calculate factorial
   * @param {number} n - Number to calculate factorial of
   * @returns {number} Factorial
   */
  factorial(n) {
    if (n < 0) throw new Error('Factorial is undefined for negative numbers');
    if (n === 0 || n === 1) return 1;
    return n * this.factorial(n - 1);
  },

  /**
   * Find greatest common divisor
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} GCD
   */
  gcd(a, b) {
    return b === 0 ? a : this.gcd(b, a % b);
  },

  /**
   * Find least common multiple
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} LCM
   */
  lcm(a, b) {
    return Math.abs(a * b) / this.gcd(a, b);
  },

  /**
   * Generate Fibonacci sequence
   * @param {number} n - Number of elements
   * @returns {number[]} Fibonacci sequence
   */
  fibonacciSequence(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
  },

  /**
   * Check if number is perfect
   * @param {number} n - Number to check
   * @returns {boolean} True if perfect number
   */
  isPerfect(n) {
    if (n <= 1) return false;
    let sum = 1;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        sum += i;
        if (i * i !== n) sum += n / i;
      }
    }
    return sum === n;
  }
};

// ========== MATRIX ==========
const Matrix = {
  /**
   * Create zero matrix
   * @param {number} rows - Number of rows
   * @param {number} cols - Number of columns
   * @returns {number[][]} Zero matrix
   */
  zeros(rows, cols) {
    return Array(rows).fill().map(() => Array(cols).fill(0));
  },

  /**
   * Create identity matrix
   * @param {number} size - Matrix size
   * @returns {number[][]} Identity matrix
   */
  identity(size) {
    const matrix = this.zeros(size, size);
    for (let i = 0; i < size; i++) {
      matrix[i][i] = 1;
    }
    return matrix;
  },

  /**
   * Add two matrices
   * @param {number[][]} a - First matrix
   * @param {number[][]} b - Second matrix
   * @returns {number[][]} Sum of matrices
   */
  add(a, b) {
    if (a.length !== b.length || a[0].length !== b[0].length) {
      throw new Error('Both matrices must have the same dimensions');
    }
    
    return a.map((row, i) => row.map((val, j) => val + b[i][j]));
  },

  /**
   * Multiply two matrices
   * @param {number[][]} a - First matrix
   * @param {number[][]} b - Second matrix
   * @returns {number[][]} Product of matrices
   */
  multiply(a, b) {
    if (a[0].length !== b.length) {
      throw new Error('Number of columns in matrix A must equal number of rows in matrix B');
    }
    
    const result = this.zeros(a.length, b[0].length);
    
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b[0].length; j++) {
        for (let k = 0; k < b.length; k++) {
          result[i][j] += a[i][k] * b[k][j];
        }
      }
    }
    
    return result;
  },

  /**
   * Transpose matrix
   * @param {number[][]} matrix - Input matrix
   * @returns {number[][]} Transposed matrix
   */
  transpose(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  },

  /**
   * Calculate determinant of 2x2 matrix
   * @param {number[][]} matrix - 2x2 matrix
   * @returns {number} Determinant
   */
  determinant2x2(matrix) {
    if (matrix.length !== 2 || matrix[0].length !== 2) {
      throw new Error('Matrix must be 2x2');
    }
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }
};

// ========== CONVERTER ==========
const Converter = {
  /**
   * Convert degrees to radians
   * @param {number} degrees - Angle in degrees
   * @returns {number} Angle in radians
   */
  degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  },

  /**
   * Convert radians to degrees
   * @param {number} radians - Angle in radians
   * @returns {number} Angle in degrees
   */
  radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
  },

  /**
   * Convert Celsius to Fahrenheit
   * @param {number} celsius - Temperature in Celsius
   * @returns {number} Temperature in Fahrenheit
   */
  celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  },

  /**
   * Convert Fahrenheit to Celsius
   * @param {number} fahrenheit - Temperature in Fahrenheit
   * @returns {number} Temperature in Celsius
   */
  fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  },

  /**
   * Convert kilometers to miles
   * @param {number} km - Distance in kilometers
   * @returns {number} Distance in miles
   */
  kmToMiles(km) {
    return km * 0.621371;
  },

  /**
   * Convert miles to kilometers
   * @param {number} miles - Distance in miles
   * @returns {number} Distance in kilometers
   */
  milesToKm(miles) {
    return miles * 1.60934;
  }
};

// ========== EXPORT ==========
module.exports = {
  BasicMath,
  Statistics,
  Geometry,
  NumberTheory,
  Matrix,
  Converter,
  
  // Shortcuts for commonly used functions
  sum: BasicMath.sum,
  multiply: BasicMath.multiply,
  mean: Statistics.mean,
  median: Statistics.median,
  isPrime: NumberTheory.isPrime,
  factorial: NumberTheory.factorial,
  gcd: NumberTheory.gcd,
  lcm: NumberTheory.lcm
};

// ES6 Export (uncomment if using ES6 modules)
// export { BasicMath, Statistics, Geometry, NumberTheory, Matrix, Converter };