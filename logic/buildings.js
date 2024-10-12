import Building from "./building.js";

const buildings = {
  farm: new Building("Farm", "farm", { wood: 10, stone: 10 }, "land"),
  mine: new Building("Mine", "mine", { wood: 10, stone: 10 }, "land"),
  fisher: new Building("Fisher", "fisher", { wood: 10, stone: 10 }, "coast"),
  house: new Building("House", "house", { wood: 0, stone: 0 }, "land"),
};

export default buildings;
