const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer'); // Import nodemailer

// Login endpoint
router.get('/fetch', (req, res) => {
    try {
        const products = [
            {
                Name: "Pool Cleaner",
                Description: "Automatic pool cleaner with advanced suction technology.",
                Price: "R1500",
                Category: "Cleaning Equipment",
                Stock: 25,
                SKU: "PC-001",
                Rating: 4.5
            },
            {
                Name: "Pool Cover",
                Description: "Durable pool cover to keep debris out and maintain water temperature.",
                Price: "R800",
                Category: "Covers",
                Stock: 40,
                SKU: "PC-002",
                Rating: 4.2
            },
            {
                Name: "Chlorine Tablets",
                Description: "Efficient chlorine tablets for maintaining pool hygiene.",
                Price: "R250",
                Category: "Chemicals",
                Stock: 100,
                SKU: "CT-001",
                Rating: 4.8
            },
            {
                Name: "Pool Ladder",
                Description: "Stainless steel pool ladder for easy access.",
                Price: "R1200",
                Category: "Accessories",
                Stock: 15,
                SKU: "PL-001",
                Rating: 4.6
            },
            {
                Name: "Inflatable Pool Float",
                Description: "Comfortable inflatable float for relaxing in the pool.",
                Price: "R300",
                Category: "Toys & Floats",
                Stock: 50,
                SKU: "PF-001",
                Rating: 4.3
            },
            {
                Name: "Pool Skimmer",
                Description: "Handheld skimmer for removing leaves and debris.",
                Price: "R150",
                Category: "Cleaning Equipment",
                Stock: 75,
                SKU: "PS-001",
                Rating: 4.7
            },
            {
                Name: "Pool Heater",
                Description: "Electric pool heater to extend swimming season.",
                Price: "R3500",
                Category: "Heating",
                Stock: 10,
                SKU: "PH-001",
                Rating: 4.4
            },
            {
                Name: "Water Test Kit",
                Description: "Comprehensive kit for testing pool water quality.",
                Price: "R200",
                Category: "Testing Kits",
                Stock: 60,
                SKU: "WTK-001",
                Rating: 4.9
            }
        ];
        res.status(200).json({message: products});
    }
    catch (error) {
        throw error;
    }
});

module.exports = router;