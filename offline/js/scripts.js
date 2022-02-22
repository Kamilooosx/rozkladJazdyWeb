(function() {

    const wrapper = document.querySelector("#quotes");
    const online = document.querySelector("#online");

    function renderQuotes(quotes) {

        const container = document.createDocumentFragment();

        quotes.forEach(quote => {
            const p = document.createElement("p");
            p.innerHTML = `${quote.quoteText}<br><strong>${quote.quoteAuthor}</strong>`;
            container.appendChild(p);
        });

        wrapper.appendChild(container);

    }

    fetch("/offline/api/quotes.json")
        .then(response => response.json())
        .then(data => renderQuotes(data));

    window.addEventListener("online", () => {
        online.style.display = "block";
    }, false);

})();