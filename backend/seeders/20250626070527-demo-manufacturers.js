"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert(
      "Manufacturers",
      [
        {
          name: "AMD",
          address: "One AMD Place",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "NVIDIA",
          address: "2788 San Tomas Expressway",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "Corsair",
          address: "100 CORSAIR",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "Samsung",
          address: "85 Challenger Rd",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "EVGA",
          address: "839 Brickyard Rd",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "Microsoft",
          address: "One Microsoft Way",
          createdAt: now,
          updatedAt: now,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "Manufacturers",
      {
        name: ["AMD", "NVIDIA", "Corsair", "Samsung", "EVGA", "Microsoft"],
      },
      {}
    );
  },
};
