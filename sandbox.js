function generateShape(int){


  let width = ""

  for (let i = 0; i < int; i++) {
    for (let j = 0; j < int; j++) {
      width = width + "+"
    }
    if ((i +1)  < int) {
      console.log(i)
      width = width + "\n"
    }
  }
  console.log(width);
  return width
}

generateShape(2)
