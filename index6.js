let guess;
    do {
        guess = Number(prompt ("Guess NUmber"));
if (guess  === 4)  {

 
  document.write  ("Correct");

 
        } else {
            document.write ("Tr Again");
        }
    } while (guess !== 4);