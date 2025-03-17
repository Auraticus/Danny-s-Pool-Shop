const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer'); // Import nodemailer
const products = [
    {
        Id: 1,
        Name: "Pool Cleaner",
        Description: "Automatic pool cleaner with advanced suction technology.",
        Price: "R1500",
        Category: "Cleaning Equipment",
        Stock: 25,
        SKU: "PC-001",
        Rating: 4.5,
        Image: `http://localhost:3000/images/Kreepy.jpg`
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
        Image: `http://localhost:3000/images/PoolCover.jpg`
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
        Image: `http://localhost:3000/images/ChlorineTablets.jpg`
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
        Image: `http://localhost:3000/images/PoolLadder.jpg`
    },
    {
        Id: 5,
        Name: "Inflatable Pool Float",
        Description: "Comfortable inflatable float for relaxing in the pool.",
        Price: "R300",
        Category: "Toys & Floats",
        Stock: 50,
        SKU: "PF-001",
        Rating: 4.3,
        Image: `http://localhost:3000/images/InflatablePoolFlaot.jpg`
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
        Image: `http://localhost:3000/images/PoolSkimmer.jpg`
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
        Image: `http://localhost:3000/images/PoolHeater.jpg`
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
        Image: `http://localhost:3000/images/Watertestkit.png`
    }
];
// Login endpoint
router.get('/fetch', (req, res) => {
    try {
        res.status(200).json({message: products});
    }
    catch (error) {
        throw error;
    }
});

router.get("/search/:payload", async (req, res, next) => {
    try {
        const { payload } = req.params;

        const filteredItems = products.filter(x => 
            x.Name.toLowerCase().includes(payload.toLowerCase())
        );

        res.status(200).json({ message: payload, items: filteredItems });
    } catch (err) {
        res.status(500).json({ message: "An error occurred" });
    }
});

router.get("/fetch/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const filteredItems = products.find(x => parseInt(x.Id) === parseInt(id));

        res.status(200).json({ message: id, items: filteredItems });
    } catch (err) {
        throw err;
        res.status(500).json({ message: err });
    }
});

module.exports = router;