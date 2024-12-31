// your code goes here
const flipBook = (elBook) => {
    elBook.style.setProperty("--c", 0); // Set current page
    elBook.querySelectorAll(".page").forEach((page, idx) => {
      page.style.setProperty("--i", idx);
      page.addEventListener("click", (evt) => {
        if (evt.target.closest("a")) return;
        const curr = evt.target.closest(".back") ? idx : idx + 1;
        elBook.style.setProperty("--c", curr);

   // Play the background music on page click
   if (audio.paused) {
    audio.play();  // Start the music if it is not already playing

}
      });
    });
  };
  
  document.querySelectorAll(".book").forEach(flipBook);