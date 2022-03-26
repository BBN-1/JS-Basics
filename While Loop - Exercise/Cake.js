function solve(input) {


    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);
    let cakeSize = cakeWidth * cakeLength;
    let pieces = 0;
    let i = 3;
    let data = input[2];




    while (data !== `STOP`) {
        pieces += Number(data);

        if (pieces > cakeSize) {
            break;
        }

        data = input[i++]
    }

  if ( pieces > cakeSize ){
      console.log(`No more cake left! You need ${pieces - cakeSize} pieces more.`)
  } else {
      console.log(`${cakeSize - pieces} pieces are left.`)
  }

    
}
