// seeders/20250626121000-demo-products.js
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert(
      "Products",
      [
        // CPUs (AMD)
        {
          name: "Ryzen 5 5600X",
          price: 12500.0,
          originalPrice: 13900.0,
          image: "images/products/ryzen5600x.jpg",
          rating: 4.7,
          reviews: 320,
          categoryId: 1,
          manufacturerId: 1,
          stock: 75,
          description: "6-core, 12-thread desktop processor.",
          isSale: true,
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "Ryzen 9 5900X",
          price: 18900.0,
          originalPrice: 21900.0,
          image: "images/products/ryzen5900x.jpg",
          rating: 4.8,
          reviews: 210,
          categoryId: 1,
          manufacturerId: 1,
          stock: 45,
          description:
            "12-core, 24-thread powerhouse for gaming and productivity.",
          isSale: false,
          createdAt: now,
          updatedAt: now,
        },

        // Graphic Cards (NVIDIA)
        {
          name: "GeForce RTX 3060",
          price: 18900.0,
          originalPrice: 21900.0,
          image: "images/products/rtx3060.jpg",
          rating: 4.6,
          reviews: 210,
          categoryId: 2,
          manufacturerId: 2,
          stock: 40,
          description: "12GB GDDR6, ray-tracing capable GPU.",
          isSale: false,
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "GeForce RTX 3070",
          price: 27900.0,
          originalPrice: 30900.0,
          image: "images/products/rtx3070.jpg",
          rating: 4.7,
          reviews: 315,
          categoryId: 2,
          manufacturerId: 2,
          stock: 30,
          description:
            "Balancing 8GB GDDR6 memory with excellent 1440p performance.",
          isSale: true,
          createdAt: now,
          updatedAt: now,
        },

        // RAM (Corsair)
        {
          name: "Vengeance LPX 16GB",
          price: 4200.0,
          originalPrice: 4500.0,
          image: "images/products/vengeance16gb.jpg",
          rating: 4.8,
          reviews: 145,
          categoryId: 3,
          manufacturerId: 3,
          stock: 120,
          description: "DDR4 3200MHz memory kit.",
          isSale: true,
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "Vengeance LPX 32GB",
          price: 8200.0,
          originalPrice: 9000.0,
          image: "images/products/vengeance32gb.jpg",
          rating: 4.9,
          reviews: 178,
          categoryId: 3,
          manufacturerId: 3,
          stock: 80,
          description:
            "DDR4 3200MHz dual-channel kit, ideal for heavy multitasking.",
          isSale: false,
          createdAt: now,
          updatedAt: now,
        },

        // Storage (Samsung)
        {
          name: "970 EVO Plus 1TB",
          price: 5500.0,
          originalPrice: 6500.0,
          image: "images/products/970evo1tb.jpg",
          rating: 4.9,
          reviews: 400,
          categoryId: 4,
          manufacturerId: 4,
          stock: 60,
          description: "NVMe M.2 SSD, up to 3500 MB/s read.",
          isSale: false,
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "980 Pro 500GB",
          price: 4200.0,
          originalPrice: 5000.0,
          image: "images/products/980pro500gb.jpg",
          rating: 4.8,
          reviews: 250,
          categoryId: 4,
          manufacturerId: 4,
          stock: 100,
          description:
            "High-performance NVMe SSD for next-gen PCs and consoles.",
          isSale: true,
          createdAt: now,
          updatedAt: now,
        },

        // Power Supplies (EVGA)
        {
          name: "SuperNOVA 650 G5",
          price: 3800.0,
          originalPrice: 4200.0,
          image: "images/products/evga650w.jpg",
          rating: 4.5,
          reviews: 89,
          categoryId: 5,
          manufacturerId: 5,
          stock: 55,
          description: "80+ Gold certified modular PSU.",
          isSale: true,
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "SuperNOVA 750 GQ",
          price: 4500.0,
          originalPrice: 5000.0,
          image: "images/products/evga750gq.jpg",
          rating: 4.6,
          reviews: 96,
          categoryId: 5,
          manufacturerId: 5,
          stock: 65,
          description: "80+ Gold semi-modular PSU with quiet operation.",
          isSale: false,
          createdAt: now,
          updatedAt: now,
        },

        // Gaming (Microsoft)
        {
          name: "Xbox Series X",
          price: 28900.0,
          originalPrice: 29900.0,
          image: "images/products/xboxseriesx.jpg",
          rating: 4.4,
          reviews: 230,
          categoryId: 6,
          manufacturerId: 6,
          stock: 25,
          description: "Next-gen console with 4K gaming.",
          isSale: false,
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "Xbox Series S",
          price: 15900.0,
          originalPrice: 17900.0,
          image: "images/products/xboxseriess.jpg",
          rating: 4.5,
          reviews: 190,
          categoryId: 6,
          manufacturerId: 6,
          stock: 40,
          description:
            "Digital-only next-gen console with 1440p gaming at 120FPS.",
          isSale: true,
          createdAt: now,
          updatedAt: now,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "Products",
      {
        name: [
          "Ryzen 5 5600X",
          "Ryzen 9 5900X",
          "GeForce RTX 3060",
          "GeForce RTX 3070",
          "Vengeance LPX 16GB",
          "Vengeance LPX 32GB",
          "970 EVO Plus 1TB",
          "980 Pro 500GB",
          "SuperNOVA 650 G5",
          "SuperNOVA 750 GQ",
          "Xbox Series X",
          "Xbox Series S",
        ],
      },
      {}
    );
  },
};
