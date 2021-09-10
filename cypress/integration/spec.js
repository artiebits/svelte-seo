describe("SEO Meta", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Article SEO loads correctly", () => {
    cy.get("head title").should("contain", "Article Page Title | Svelte SEO");

    cy.get('head meta[name="description"]').should(
      "have.attr",
      "content",
      "Description of article page"
    );

    cy.get('head meta[name="keywords"]').should(
      "have.attr",
      "content",
      "Keywords of article page"
    );

    cy.get('head link[rel="canonical"]').should(
      "have.attr",
      "href",
      "https://www.example.com"
    );

    cy.get('head meta[property="og:title"]').should(
      "have.attr",
      "content",
      "Open Graph Article Title"
    );

    cy.get('head meta[property="og:description"]').should(
      "have.attr",
      "content",
      "Description of open graph article"
    );

    cy.get('head meta[property="og:type"]').should(
      "have.attr",
      "content",
      "article"
    );

    cy.get('head meta[property="og:url"]').should(
      "have.attr",
      "content",
      "https://www.example.com/articles/article-title"
    );

    cy.get('head meta[property="article:published_time"]').should(
      "have.attr",
      "content",
      "2020-08-03T17:31:37Z"
    );

    cy.get('head meta[property="article:modified_time"]').should(
      "have.attr",
      "content",
      "2020-08-20T09:31:37Z"
    );

    cy.get('head meta[property="article:expiration_time"]').should(
      "have.attr",
      "content",
      "2025-12-21T17:31:37Z"
    );

    cy.get('head meta[property="article:author"]')
      .should("have.length", 2)
      .then((tags) => {
        expect(tags[0].content).to.equal(
          "https://www.example.com/authors/@firstnameA-lastnameA"
        );
        expect(tags[1].content).to.equal(
          "https://www.example.com/authors/@firstnameB-lastnameB"
        );
      });

    cy.get('head meta[property="article:section"]').should(
      "have.attr",
      "content",
      "Section II"
    );

    cy.get('head meta[property="article:tag"]')
      .should("have.length", 3)
      .then((tags) => {
        expect(tags[0].content).to.equal("Tag A");
        expect(tags[1].content).to.equal("Tag B");
        expect(tags[2].content).to.equal("Tag C");
      });

    cy.get('head meta[property="og:image"]')
      .should("have.length", 2)
      .then((tags) => {
        expect(tags[0].content).to.equal(
          "https://www.example.com/images/og-image-article-title-01.jpg"
        );
        expect(tags[1].content).to.equal(
          "https://www.example.com/images/og-image-article-title-02.jpg"
        );
      });

    cy.get('head meta[property="og:image:alt"]')
      .should("have.length", 2)
      .then((tags) => {
        expect(tags[0].content).to.equal("Og Image Alt A");
        expect(tags[1].content).to.equal("Og Image Alt B");
      });

    cy.get('head meta[property="og:image:width"]')
      .should("have.length", 2)
      .then((tags) => {
        expect(tags[0].content).to.equal("850");
        expect(tags[1].content).to.equal("950");
      });

    cy.get('head meta[property="og:image:height"]')
      .should("have.length", 2)
      .then((tags) => {
        expect(tags[0].content).to.equal("650");
        expect(tags[1].content).to.equal("750");
      });

    cy.get('head script[type="application/ld+json"]')
      .should("have.length", 1)
      .then((tags) => {
        const jsonLD = JSON.parse(tags[0].innerHTML);
        expect(jsonLD).to.deep.equal({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: "ldJson Article Headline",
          image: [
            "https://www.example.com/images/ld-image-article-title-01.jpg",
            "https://www.example.com/images/ld-image-article-title-02.jpg",
            "https://www.example.com/images/ld-image-article-title-03.jpg",
          ],
          datePublished: "2020-08-03T17:31:37Z",
          dateModified: "2020-08-20T09:31:37Z",
        });
      });
  });

  it("renders Twitter Card tags", () => {
    cy.get('head meta[name="twitter:card"]').should(
      "have.attr",
      "content",
      "summary_large_image"
    );

    cy.get('head meta[name="twitter:site"]').should(
      "have.attr",
      "content",
      "@username"
    );

    cy.get('head meta[name="twitter:title"]').should(
      "have.attr",
      "content",
      "Twitter Card Title"
    );

    cy.get('head meta[name="twitter:description"]').should(
      "have.attr",
      "content",
      "Description of Twitter Card"
    );

    cy.get('head meta[name="twitter:image"]').should(
      "have.attr",
      "content",
      "https://www.example.com/images/cover.jpg"
    );

    cy.get('head meta[name="twitter:image:alt"]').should(
      "have.attr",
      "content",
      "Alt text for the card!"
    );
  });

  it("renders child elements of SvelteSEO", () => {
    cy.get('head link[rel="manifest"]').should(
      "have.attr",
      "href",
      "/manifest.json"
    );
  });
});
