const canvas = document.querySelector('canvas'); //select the 'canvas' element on the html file
const c = canvas.getContext('2d'); //select the canvas mode 

canvas.width = 1024; // set the width
canvas.height = 576; // set the height

c.fillRect(0, 0, canvas.width, canvas.height)