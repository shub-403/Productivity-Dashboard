const quoteBox = document.querySelector(".display-quote");
const authorName = document.querySelector(".authorname");

const getData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    quoteBox.textContent = `"${data.quote}"`;
    authorName.textContent = `-${data.author}`;
  } catch (error) {
    console.log("Some error happens");
  }
};

getData();

export { getData };
