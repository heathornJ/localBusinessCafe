const questionFactory = (question, answer) => {
  return {
    question,
    answer
  };
};

function faq(faq) {
  //Creates the 'spacer' div
  const divSpacer = document.createElement("div");
  divSpacer.classList.add("spacer");

  //Sets the content of the li element
  divSpacer.innerHTML = `
  <div class="question-container">
    <label class="question-label">
      <h3>${faq.question}</h3>
    </label>
    <div class="answer-container">
      <p>
        ${faq.answer}
      </p>
    </div>
  </div>
`;
  document.querySelector("#faq").appendChild(divSpacer);
}

const questionArray = [
  questionFactory(
    "Where can I find you?",
    "We're located at 123 Coffee Street, Coffee Town, C0 F33. You can find our gps locations at the bottom of this page."
  ),
  questionFactory(
    "What if I have specific dietary requirements?",
    "We have a variety of options available that are suitable for omnivores, vegetarians, vegans, lactose intolerant, and gluten free diets. If you're unsure, please do notify our staff and we'll try our best to accomodate for you. While we try our best to avoid it, some of our products may contain nuts."
  ),
  questionFactory(
    "Do you offer free Wi-Fi?",
    "Yes, we provide free Wi-Fi for all our customers. Simply ask for the password at the counter when you get yourself something to eat or drink. We also offer a premium Wi-Fi key for £2 per hour if you need access to faster download/upload speeds."
  ),
  questionFactory(
    "Can I place an order online for pickup or delivery?",
    "We don't currently offer pickup or delivery services. If you'd like to pop-by for a quick drink we will happily provide you with a takeaway cup."
  ),
  questionFactory(
    "Do you have a rewards program or discounts?",
    "Yes! Speak to our team at the counter for a rewards card to earn yourself free drinks and snacks as a thank you. We also run a variety of discounts and specials from time-to-time."
  ),
  questionFactory(
    "Is there parking available?",
    "We have a small parking lot behind the cafe, and there is also ample paid street parking nearby."
  ),
  questionFactory(
    "Are pets allowed in the cafe?",
    "While pets are not allowed inside the cafe, we have a designated pet-friendly outdoor seating area where you can enjoy your coffee with your furry friends."
  )
];


questionArray.forEach(faq);