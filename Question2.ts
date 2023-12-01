function calculate_Cube_Volume(length: number, width: number): number {
    const area = length * width;
    return area;
}

// Get user input for the length and width of the rectangle
var length: number = parseFloat(("2"));
var width: number = parseFloat(("2"));

// Calculate area using the function
var area: number = calculate_Cube_Volume(length, width);

// Display result
console.log(`The volume of the cube with length and width is: ${area}`);
