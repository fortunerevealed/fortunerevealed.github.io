document.getElementById("fortuneBtn").addEventListener("click", tellFortune);

function tellFortune() {
  var name = document.getElementById("name").value.trim().toLowerCase(); // Trim any whitespace from the input and convert to lowercase
  if (name === "") {
    // Display an error message if the name field is empty
    document.getElementById("fortune").innerText = "Please enter your name before asking for your fortune!";
    return; // Exit the function early if the name is empty
  }

  var fortunes = [
    "You will have a great day!",
    "Expect a pleasant surprise!",
    "Be cautious, challenges may arise.",
    "A new opportunity will present itself soon.",
    "Today is a good day to take risks.",
    "You will receive good news shortly.", // Added missing comma here
    "Your hard work will pay off.",
    "Someone from your past will return.",
    "Travel is in your future.",
    "A new romantic interest will come into your life.",
    "You will receive unexpected money.",
    "It's time to let go of the past.",
    "Your creativity will flourish.",
    "A big change is coming.",
    "Listen to your intuition.",
    "Forgive others, not because they deserve forgiveness, but because you deserve peace.",
    "Your health will improve.",
    "An old friend will reconnect with you.",
    "New opportunities for advancement will arise.",
    "You will find inner peace.",
    "Success is on the horizon.",
    "Be open to new experiences.",
    "Your kindness will be rewarded.",
    "Your energy levels will soar.",
    "A long-held dream will finally come true.",
    "You will make a new friend.",
    "Let go of fear; embrace courage.",
    "Trust your instincts; they will not lead you astray.",
    "A career breakthrough is imminent.",
    "Take time for self-care.",
    "A financial windfall is coming your way.",
    "You will find love when you least expect it.",
    "A problem that has been bothering you will soon be resolved.",
    "Your inner strength will see you through tough times.",
    "Opportunities for growth are on the horizon.",
    "A period of great joy and fulfillment is coming.",
    "You will overcome obstacles with ease.",
    "Good fortune will find you wherever you go.",
    "Stay focused on your goals; success is within reach.",
    "Your confidence will attract new opportunities.",
    "Let go of negative thoughts; positivity awaits.",
    "Your perseverance will lead to success.",
    "Embrace change; it will lead to growth.",
    "An unexpected gift will brighten your day.",
    "Your determination will yield impressive results.",
    "Believe in yourself; you are capable of greatness.",
    "Your future is full of promise and possibility.",
    "The universe is conspiring in your favor.",
    "Take a leap of faith; you will land on solid ground."
    "Expect ups and downs today; challenges bring growth."
    "Stay alert for a surprise from an unexpected source."
    "Navigate cautiously; resilience is key."
    "A new opportunity could come knocking soon."
    "Feel daring? Trust your instincts; risks can pay off."
    "Good news may arrive sooner than expected."
    "Hard work pays off; stay focused."
    "An old friend may resurface today."
    "Feeling restless? Plan your next adventure."
    "Love might be around the corner; stay open."
    "Unexpected gains could come your way."
    "Time to make peace with the past."
    "Let creativity flow; express yourself."
    "Change is inevitable; embrace it."
    "Trust your instincts; they won't lead you wrong."
    "Forgive for your peace of mind."
    "Your health journey is on track."
    "An old friend may reach out."
    "Look out for career opportunities."
    "Find inner peace today."
    "Success requires patience and persistence."
    "Embrace new experiences for joy."
    "Kindness makes a big impact."
    "Channel your energy into something meaningful."
    "Your dream might be closer than you think."
    "New friendship could blossom."
    "Be courageous; take that leap."
    "Trust your instincts in uncertain times."
    "A career breakthrough is possible."
    "Prioritize self-care today."
    "Financial relief could be on its way."
    "Love finds us unexpectedly."
    "Solution to your problem might be near."
    "Your inner strength will see you through."
    "Joy awaits after the storm."
    "You can overcome obstacles."
    "Success follows boldness."
    "Confidence is your key today."
    "Stay positive; negativity holds you back."
    "Persistence leads to success."
    "Embrace change for growth."
    "Unexpected gifts bring joy."
    "Determination leads to results."
    "Believe in your potential."
    "Embrace the endless possibilities."
    "The universe supports your dreams."
    "Take a leap of faith today."
    "Setbacks pave the way for success."
    "Trust in the journey; every step counts."
  ];

  var lastTime = localStorage.getItem(name);
  var today = new Date().toLocaleDateString();

  // Display loading sign
  document.getElementById("fortune").innerText = "Loading...";

  if (!lastTime || today !== lastTime) {
    var formData = new FormData();
    formData.append("name", name);

    fetch('https://script.google.com/macros/s/AKfycbyxt7krYFLPOlxS3F_QNH69aB41Xkvz5HehkmBZxSNgZscsn6ngd750pG4BkBH2nxbl/exec', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.text())
    .then(data => {
      var randomIndex = Math.floor(Math.random() * fortunes.length);
      document.getElementById("fortune").innerText = fortunes[randomIndex];
      localStorage.setItem(name, today);
    })
    .catch(error => {
      console.error('Error submitting data:', error);
      document.getElementById("fortune").innerText = "An error occurred while fetching your fortune. Please try again later.";
    });
  } else {
    document.getElementById("fortune").innerText = "Sorry, you can only receive one fortune per day!";
  }
}
