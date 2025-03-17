const express = require('express');
const router = express.Router();
const services = [
    {
        Id: 1,
        Name: "Pool Cleaner",
        Description: "We can install your new kreepy for automatic pool cleaning hassle free.",
        Price: "R150",
        Category: "Cleaning Equipment",
        Stock: 25,
        SKU: "PC-001",
        Rating: 4.5,
        Image: `http://localhost:3000/images/Kreepy.jpg`,
        Location: "JHB"
    },
    {
        Id: 2,
        Name: "Pool Cover",
        Description: "Durable pool cover to keep debris out and maintain water temperature.",
        Price: "R800",
        Category: "Covers",
        Stock: 40,
        SKU: "PC-002",
        Rating: 4.2,
        Image: `http://localhost:3000/images/PoolCover.jpg`,
        Location: "JHB"
    },
    {
        Id: 3,
        Name: "Chlorine Tablets",
        Description: "Efficient chlorine tablets for maintaining pool hygiene.",
        Price: "R250",
        Category: "Chemicals",
        Stock: 100,
        SKU: "CT-001",
        Rating: 4.8,
        Image: `http://localhost:3000/images/ChlorineTablets.jpg`,
        Location: "JHB"
    },
    {
        Id: 4,
        Name: "Pool Ladder",
        Description: "Stainless steel pool ladder for easy access.",
        Price: "R1200",
        Category: "Accessories",
        Stock: 15,
        SKU: "PL-001",
        Rating: 4.6,
        Image: `http://localhost:3000/images/PoolLadder.jpg`,
        Location: "JHB"
    },
    {
        Id: 6,
        Name: "Pool Skimmer",
        Description: "Handheld skimmer for removing leaves and debris.",
        Price: "R150",
        Category: "Cleaning Equipment",
        Stock: 75,
        SKU: "PS-001",
        Rating: 4.7,
        Image: `http://localhost:3000/images/PoolSkimmer.jpg`,
        Location: "JHB"
    },
    {
        Id: 7,
        Name: "Pool Heater",
        Description: "Electric pool heater to extend swimming season.",
        Price: "R3500",
        Category: "Heating",
        Stock: 10,
        SKU: "PH-001",
        Rating: 4.4,
        Image: `http://localhost:3000/images/PoolHeater.jpg`,
        Location: "JHB"
    },
    {
        Id: 8,
        Name: "Water Test Kit",
        Description: "Comprehensive kit for testing pool water quality.",
        Price: "R200",
        Category: "Testing Kits",
        Stock: 60,
        SKU: "WTK-001",
        Rating: 4.9,
        Image: `http://localhost:3000/images/Watertestkit.png`,
        Location: "JHB"
    }
];
// Login endpoint
router.get('/fetch', (req, res) => {
    try {
        res.status(200).json({ message: services });
    }
    catch (error) {
        throw error;
    }
});

module.exports = router;