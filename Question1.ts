function calculate_Rectangle_Area(length: number, width: number): number {
    const area: number = length * width;
    return area;
}

// Get the lenght and width from the user
var length: number = parseFloat(("33"));
var width: number = parseFloat(("20"));

// Calculate area using the function
var area: number = calculate_Rectangle_Area(length, width);

// Display result
console.log(`The area of the rectangle with length ${length} and width ${width} is: ${area}`);
