const { base } = require("../constants")
const { combineStats } = require("../facilitators")
const gunCalcNames = {
	default: 0,
	bullet: 1,
	drone: 2,
	swarm: 3,
	fixedReload: 4,
	thruster: 5,
	sustained: 6,
	necro: 7,
	trap: 8,
};
let g = require('../gunvals')

// pelleter branchessss

/**
 * 
 * @param {Object} params
 * @param {import("../../../..").Tanks} params.Class
 */
module.exports = ({ Class }) => {
// Pelleter upgrades
Class.pelleter = {
  PARENT: ["genericTank"],
  LABEL: "Pelleter",
  GUNS: [
    {
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
  ],
};
Class.borer = {
  PARENT: ["genericTank"],
  LABEL: "Borer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
Class.nailPellet = {
  PARENT: ["genericTank"],
  LABEL: "Nail Pellet",
  GUNS: [
    {
      POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [20, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
  ],
};
Class.attacker = {
  PARENT: ["genericTank"],
  LABEL: "Attacker",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 3.5, 1, 0, 7.25, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [10, 3.5, 1, 0, -7.25, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [20, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [20, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [13, 11, 1, 0, 0, 0, 0],
    },
  ],
};
// Attacker upgrades
Class.gunship = {
  PARENT: ["genericTank"],
  LABEL: "Gunship",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 3.5, 1, 0, 7.25, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [10, 3.5, 1, 0, -7.25, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [20, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
  ],
};
Class.rimfire = {
  PARENT: ["genericTank"],
  LABEL: "Rimfire",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 3.5, 1, 0, 7.25, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [10, 3.5, 1, 0, -7.25, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
        TYPE: "bullet",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
Class.mantis = {
  PARENT: ["genericTank"],
  LABEL: "Mantis",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20, -4, 0, 0, 0, 0],
      TYPE: "genericEntity",
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: "bullet",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 3.5, 1, 0, 8, -7, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [10, 3.5, 1, 0, -8, 7, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [1, 3, 1, 3, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
          g.thruster,
          [0.1, 3, 1, 1, 1, 1, 1, 1, 1, 0.075, 1, 2, 1],
        ]),
        TYPE: "bullet",
      },
    },
  ],
};
Class.basic.UPGRADES_TIER_1.push("pelleter");
    Class.pelleter.UPGRADES_TIER_2 = ["borer", "nailPellet", "attacker"];
        Class.borer.UPGRADES_TIER_3 = ["nailgun", "rimfire"];
        Class.nailPellet.UPGRADES_TIER_3 = ["nailgun", "gunship"];
        Class.attacker.UPGRADES_TIER_3 = ["rimfire", "gunship", "mantis"];
  
}