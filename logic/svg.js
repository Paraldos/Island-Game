class SVG {
  constructor() {
    this.prepSvg("assets/fisher.svg", "fisher");
    this.prepSvg("assets/house.svg", "house");
    this.prepSvg("assets/chevron-right.svg", "chevronRight");
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
}

export default new SVG();
