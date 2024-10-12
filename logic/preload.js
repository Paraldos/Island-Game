class Preload {
  constructor() {
    this.init();
  }

  async init() {
    await Promise.all([
      this.prepSvg("./assets/svgs/fisher.svg", "fisher"),
      this.prepSvg("./assets/svgs/house.svg", "house"),
      this.prepSvg("./assets/svgs/farm.svg", "farm"),
      this.prepSvg("./assets/svgs/mine.svg", "mine"),
      this.prepSvg("./assets/svgs/chevron-right.svg", "chevronRight"),
    ]);
    // await this.wait(5000);
    document.body.dispatchEvent(new Event("svgsLoaded"));
  }

  async prepSvg(path, key) {
    const svgResponse = await fetch(path);
    const svgText = await svgResponse.text();
    const parser = new DOMParser();
    const svgDocument = parser.parseFromString(svgText, "image/svg+xml");
    const svgElement = svgDocument.documentElement;
    this[key] = svgElement;
  }

  getSVG(key) {
    return this[key].cloneNode(true);
  }

  wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default new Preload();
