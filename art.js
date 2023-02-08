var input;
var slider;
var paragraph;
var slider2;

function setup() {
    createCanvas(400, 400);
    slider = createSlider(10, 64, 16) // min, max, start
    textbox = createInput('change the paragraph text')
    slider2 = createSlider(400, 1200, 800) // min, max, start
 


    colorPickerDraw = createColorPicker('#ed225d');
    colorPickerBackground = createColorPicker('Black');

    background(colorPickerBackground.color())

    paragraph = createP('This message encourages you')
    
    textbox.input(updateText)
    slider.input(updateSize)
    slider2.input(updateCanvas)
  }
  
// updating content of text
  function updateText() {
    paragraph.html(textbox.value())
  }

// updating size of text
  function updateSize() {
    paragraph.style("font-size", slider.value() + 'px');
  }

// updating canvas size and background color
  function updateCanvas() {
    resizeCanvas(slider2.value(), slider2.value())
    background(colorPickerBackground.color())
  }


// on mouse press
  function mousePressed() {
    noStroke();
    fill(colorPickerDraw.color())
    circle(mouseX, mouseY, 24)
    
  }

// on mouse press + drag
  function mouseDragged() {
    noStroke();
    fill(colorPickerDraw.color())
    circle(mouseX, mouseY, 24)
    
  }
