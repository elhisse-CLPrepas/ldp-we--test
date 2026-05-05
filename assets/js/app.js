const renderFeatures = (features) => {
  const container = document.querySelector("#features-list");
  if (!container) return;

  container.innerHTML = "";

  features.forEach((feature) => {
    const card = document.createElement("article");
    const icon = document.createElement("span");
    const title = document.createElement("h3");
    const description = document.createElement("p");

    card.className = "tool-card";
    icon.className = "tool-icon";
    icon.setAttribute("aria-hidden", "true");

    icon.textContent = feature.shortName;
    title.textContent = feature.name;
    description.textContent = feature.description;

    card.append(icon, title, description);
    container.append(card);
  });
};

const bindFaq = (container) => {
  container.querySelectorAll(".faq-button").forEach((button) => {
    button.addEventListener("click", () => {
      const answer = document.getElementById(button.getAttribute("aria-controls"));
      if (!answer) return;

      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      answer.hidden = isOpen;
    });
  });
};

const renderFaq = (items) => {
  const container = document.querySelector("#faq-list");
  if (!container) return;

  container.innerHTML = "";

  items.forEach((item, index) => {
    const article = document.createElement("article");
    const button = document.createElement("button");
    const answer = document.createElement("p");
    const answerId = `faq-answer-${index}`;

    article.className = "faq-item";
    button.className = "faq-button";
    button.type = "button";
    button.setAttribute("aria-expanded", String(index === 0));
    button.setAttribute("aria-controls", answerId);
    button.textContent = item.question;

    answer.className = "faq-answer";
    answer.id = answerId;
    answer.textContent = item.answer;
    answer.hidden = index !== 0;

    article.append(button, answer);
    container.append(article);
  });

  bindFaq(container);
};

const loadJson = async (path) => {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Impossible de charger ${path}`);
  }
  return response.json();
};

const boot = async () => {
  const faqContainer = document.querySelector("#faq-list");
  if (faqContainer) bindFaq(faqContainer);

  try {
    const [features, faq] = await Promise.all([
      loadJson("data/features.json"),
      loadJson("data/faq.json"),
    ]);

    renderFeatures(features);
    renderFaq(faq);
  } catch (error) {
    console.warn("Les données JSON n'ont pas pu être chargées. Le contenu statique reste affiché.", error);
  }
};

boot();
