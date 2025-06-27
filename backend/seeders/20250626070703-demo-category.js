"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "CPUs",
          icon: "mdi:cpu-64-bit",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "Graphic Cards",
          icon: "mdi:gpu",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "RAM",
          icon: "material-symbols:memory-alt-outline",
          createdAt: now,
          updatedAt: now,
        },
        { name: "Storage", icon: "mdi:hdd", createdAt: now, updatedAt: now },
        {
          name: "Power Supplies",
          icon: "mdi:car-battery",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "Gaming",
          icon: "mdi:gamepad-variant-outline",
          createdAt: now,
          updatedAt: now,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
