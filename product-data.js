/* TECH ALI PRODUCT DATA
 * Product names/categories matched to the uploaded product photos.
 * Prices refreshed using Pakistan-market listings checked in Sep 2026.
 * Generic/OEM products are named conservatively; brand/original claims are not added unless visible/verified.
 */
const products = [
  {
    id: "TA-001",
    name: "45W PD Adapter + USB-C to USB-C Cable",
    title: "45W PD Adapter + USB-C to USB-C Cable",
    price: 1499,
    oldPrice: null,
    category: "Chargers",
    rating: null,
    reviews: 0,
    badge: "",
    image: "45w-usb-c-fast-charger-1.jpg",
    images: [
      "45w-usb-c-fast-charger-1.jpg",
      "45w-usb-c-fast-charger-2.jpg"
    ],
    stock: 100,
    specs: { "Power": "45W", "Output": "USB-C PD", "Cable": "USB-C to USB-C" },
    description: "45W USB-C Power Delivery adapter supplied with a USB-C to USB-C cable."
  },
  {
    id: "TA-002",
    name: "TK 300 Ultra 7-in-1 Strap Smart Watch",
    title: "TK 300 Ultra 7-in-1 Strap Smart Watch",
    price: 3099,
    oldPrice: null,
    category: "Smartwatches",
    rating: null,
    reviews: 0,
    badge: "",
    image: "7-in-1-precision-screwdriver-tool-kit-3.jpg",
    images: [
      "7-in-1-precision-screwdriver-tool-kit-3.jpg",
      "7-in-1-precision-screwdriver-tool-kit-1.jpg",
      "7-in-1-precision-screwdriver-tool-kit-2.jpg"
    ],
    stock: 100,
    specs: { "Model": "TK 300 Ultra", "Set": "7 straps", "Type": "Smart Watch" },
    description: "Ultra smart watch bundle with 7 interchangeable straps."
  },
  {
    id: "TA-003",
    name: "USB-A to USB-C Fast Charging Cable",
    title: "USB-A to USB-C Fast Charging Cable",
    price: 499,
    oldPrice: null,
    category: "Cables",
    rating: null,
    reviews: 0,
    badge: "",
    image: "usb-a-to-usb-c-fast-charging-cable-3.jpg",
    images: [
      "usb-a-to-usb-c-fast-charging-cable-3.jpg",
      "usb-a-to-usb-c-fast-charging-cable-1.jpg",
      "usb-a-to-usb-c-fast-charging-cable-2.jpg",
      "usb-a-to-usb-c-fast-charging-cable-4.jpg"
    ],
    stock: 100,
    specs: { "Connector": "USB-A to USB-C", "Type": "Charging + Data" },
    description: "USB-A to USB-C charging and data cable for compatible mobile devices."
  },
  {
    id: "TA-004",
    name: "Air 31 TWS Transparent Earbuds",
    title: "Air 31 TWS Transparent Earbuds",
    price: 849,
    oldPrice: null,
    category: "TWS Earbuds",
    rating: null,
    reviews: 0,
    badge: "",
    image: "air-31-wireless-earbuds-2.jpg",
    images: [
      "air-31-wireless-earbuds-2.jpg",
      "air-31-wireless-earbuds-3.jpg",
      "air-31-wireless-earbuds-4.jpg",
      "air-31-wireless-earbuds-5.jpg",
      "air-31-wireless-earbuds-6.jpg"
    ],
    stock: 100,
    specs: { "Type": "TWS Earbuds", "Bluetooth": "V5.3", "Charging": "USB-C" },
    description: "Air 31 transparent-shell TWS wireless earbuds."
  },
  {
    id: "TA-005",
    name: "USB-C to Lightning Charging Cable",
    title: "USB-C to Lightning Charging Cable",
    price: 399,
    oldPrice: null,
    category: "Cables",
    rating: null,
    reviews: 0,
    badge: "",
    image: "usb-c-to-lightning-charging-cable-3.png",
    images: [
      "usb-c-to-lightning-charging-cable-3.png",
      "usb-c-to-lightning-charging-cable-1.jpg",
      "usb-c-to-lightning-charging-cable-2.jpg"
    ],
    stock: 100,
    specs: { "Connector": "USB-C to Lightning", "Type": "Charging + Data" },
    description: "USB-C to Lightning cable for compatible iPhone and Lightning devices."
  },
  {
    id: "TA-006",
    name: "E1 TWS Wireless Earbuds",
    title: "E1 TWS Wireless Earbuds",
    price: 999,
    oldPrice: null,
    category: "TWS Earbuds",
    rating: null,
    reviews: 0,
    badge: "",
    image: "e1-tws-wireless-earbuds-1.jpg",
    images: [
      "e1-tws-wireless-earbuds-1.jpg",
      "e1-tws-wireless-earbuds-2.jpg",
      "e1-tws-wireless-earbuds-3.png"
    ],
    stock: 100,
    specs: { "Model": "E1", "Type": "TWS Earbuds", "Charging Case": "Digital Display" },
    description: "E1 true wireless earbuds with digital battery display charging case."
  },
  {
    id: "TA-007",
    name: "P47 Wireless Bluetooth Stereo Headphones",
    title: "P47 Wireless Bluetooth Stereo Headphones",
    price: 1049,
    oldPrice: null,
    category: "Headphones",
    rating: null,
    reviews: 0,
    badge: "",
    image: "hd1-bluetooth-headphones-1.jpg",
    images: [
      "hd1-bluetooth-headphones-1.jpg",
      "hd1-bluetooth-headphones-2.jpg",
      "hd1-bluetooth-headphones-3.jpg"
    ],
    stock: 100,
    specs: { "Model": "P47", "Type": "Bluetooth Headphones", "Bluetooth": "4.1" },
    description: "P47 foldable wireless Bluetooth stereo headphones."
  },
  {
    id: "TA-008",
    name: "P9 Wireless On-Ear Stereo Headphones",
    title: "P9 Wireless On-Ear Stereo Headphones",
    price: 1149,
    oldPrice: null,
    category: "Headphones",
    rating: null,
    reviews: 0,
    badge: "",
    image: "hd2-wireless-headphones-1.jpg",
    images: [
      "hd2-wireless-headphones-1.jpg",
      "hd2-wireless-headphones-2.jpg",
      "hd2-wireless-headphones-3.jpg",
      "hd2-wireless-headphones-4.jpg"
    ],
    stock: 100,
    specs: { "Model": "P9", "Type": "Wireless On-Ear", "Colors": "Multiple" },
    description: "P9 wireless on-ear stereo headphones available in multiple colours."
  },
  {
    id: "TA-009",
    name: "Lightning / iPhone Handfree",
    title: "Lightning / iPhone Handfree",
    price: 499,
    oldPrice: null,
    category: "Wired Earphones",
    rating: null,
    reviews: 0,
    badge: "",
    image: "wired-iphone-earphones-1.jpg",
    images: [
      "wired-iphone-earphones-1.jpg",
      "wired-iphone-earphones-2.jpg"
    ],
    stock: 100,
    specs: { "Connector": "Lightning", "Type": "Wired Earphones" },
    description: "Lightning connector wired handfree for compatible iPhone devices."
  },
  {
    id: "TA-010",
    name: "M10 TWS Wireless Bluetooth Earbuds",
    title: "M10 TWS Wireless Bluetooth Earbuds",
    price: 999,
    oldPrice: null,
    category: "TWS Earbuds",
    rating: null,
    reviews: 0,
    badge: "",
    image: "m10-tws-wireless-earbuds-1.jpg",
    images: [
      "m10-tws-wireless-earbuds-1.jpg",
      "m10-tws-wireless-earbuds-2.jpg",
      "m10-tws-wireless-earbuds-3.jpg"
    ],
    stock: 100,
    specs: { "Model": "M10", "Type": "TWS Earbuds", "Connection": "Bluetooth" },
    description: "M10 TWS wireless Bluetooth earbuds with charging case."
  },
  {
    id: "TA-011",
    name: "M41 Wireless Earbuds Stereo Sound",
    title: "M41 Wireless Earbuds Stereo Sound",
    price: 1599,
    oldPrice: null,
    category: "TWS Earbuds",
    rating: null,
    reviews: 0,
    badge: "",
    image: "m41-tws-wireless-earbuds-1.png",
    images: [
      "m41-tws-wireless-earbuds-1.png",
      "m41-tws-wireless-earbuds-2.png",
      "m41-tws-wireless-earbuds-3.jpg"
    ],
    stock: 100,
    specs: { "Model": "M41", "Type": "Wireless Earbuds", "Bluetooth": "5.3" },
    description: "M41 wireless earbuds with stereo sound and large charging case."
  },
  {
    id: "TA-012",
    name: "MC Series Phone Case",
    title: "MC Series Phone Case",
    price: 550,
    oldPrice: null,
    category: "Phone Cases",
    rating: null,
    reviews: 0,
    badge: "",
    image: "mc-series-phone-case-1.jpg",
    images: [
      "mc-series-phone-case-1.jpg",
      "mc-series-phone-case-2.jpg",
      "mc-series-phone-case-3.jpg"
    ],
    stock: 100,
    specs: { "Type": "Phone Case", "Series": "MC", "Finish": "Protective" },
    description: "MC Series protective phone case. Select the compatible phone model before ordering."
  },
  {
    id: "TA-013",
    name: "KHM-A15 Bluetooth Neckband",
    title: "KHM-A15 Bluetooth Neckband",
    price: 1570,
    oldPrice: null,
    category: "Neckbands",
    rating: null,
    reviews: 0,
    badge: "",
    image: "bluetooth-neckband-1.png",
    images: [
      "bluetooth-neckband-1.png",
      "bluetooth-neckband-2.jpg"
    ],
    stock: 100,
    specs: { "Model": "KHM-A15", "Type": "Bluetooth Neckband", "Color": "Black" },
    description: "KHM-A15 Bluetooth neckband headset."
  },
  {
    id: "TA-014",
    name: "OnePlus 65W Warp Charge Power Adapter + Type-C Cable",
    title: "OnePlus 65W Warp Charge Power Adapter + Type-C Cable",
    price: 3499,
    oldPrice: null,
    category: "Chargers",
    rating: null,
    reviews: 0,
    badge: "",
    image: "oneplus-fast-charger-1.png",
    images: [
      "oneplus-fast-charger-1.png",
      "oneplus-fast-charging-cable-1.png"
    ],
    stock: 100,
    specs: { "Brand": "OnePlus", "Power": "65W", "Cable": "Type-C" },
    description: "OnePlus 65W Warp Charge power adapter with compatible Type-C cable."
  },
  {
    id: "TA-015",
    name: "Pro Gen 2 Black Edition Wireless Earbuds",
    title: "Pro Gen 2 Black Edition Wireless Earbuds",
    price: 2489,
    oldPrice: null,
    category: "TWS Earbuds",
    rating: null,
    reviews: 0,
    badge: "",
    image: "pro-2-tws-wireless-earbuds-4.jpg",
    images: [
      "pro-2-tws-wireless-earbuds-4.jpg",
      "pro-2-tws-wireless-earbuds-3.jpg",
      "pro-2-tws-wireless-earbuds-5.jpg"
    ],
    stock: 100,
    specs: { "Model": "Pro Gen 2", "Color": "Black", "Type": "Wireless Earbuds" },
    description: "Pro Gen 2 black edition wireless earbuds with compact charging case."
  },
  {
    id: "TA-016",
    name: "45W PD Adapter + USB-C to USB-C Cable",
    title: "45W PD Adapter + USB-C to USB-C Cable",
    price: 2499,
    oldPrice: null,
    category: "Chargers",
    rating: null,
    reviews: 0,
    badge: "",
    image: "45w-pd-fast-charger-1.png",
    images: [
      "45w-pd-fast-charger-1.png",
      "45w-pd-fast-charger-2.jpg",
      "45w-pd-fast-charger-4.jpg"
    ],
    stock: 100,
    specs: { "Power": "45W", "Output": "USB-C PD", "Cable": "USB-C to USB-C" },
    description: "45W PD wall adapter package with USB-C to USB-C fast-charging cable."
  },
  {
    id: "TA-017",
    name: "AirPods Pro 2 Display ANC Wireless Earbuds",
    title: "AirPods Pro 2 Display ANC Wireless Earbuds",
    price: 3499,
    oldPrice: null,
    category: "TWS Earbuds",
    rating: null,
    reviews: 0,
    badge: "",
    image: "pro-2-tws-wireless-earbuds-7.jpg",
    images: [
      "pro-2-tws-wireless-earbuds-7.jpg",
      "pro-2-tws-wireless-earbuds-1.jpg",
      "pro-2-tws-wireless-earbuds-6.jpg"
    ],
    stock: 100,
    specs: { "Type": "Display TWS Earbuds", "Features": "ANC / ENC", "Charging": "USB-C" },
    description: "AirPods Pro 2-style TWS earbuds with display charging case and ANC/ENC features."
  },
  {
    id: "TA-018",
    name: "Samsung 45W Power Adapter + USB-C Cable (5A/1.8m)",
    title: "Samsung 45W Power Adapter + USB-C Cable (5A/1.8m)",
    price: 3499,
    oldPrice: null,
    category: "Chargers",
    rating: null,
    reviews: 0,
    badge: "",
    image: "samsung-45w-fast-charger-1.jpg",
    images: [
      "samsung-45w-fast-charger-1.jpg",
      "samsung-45w-fast-charger-2.jpg",
      "samsung-45w-fast-charger-3.png"
    ],
    stock: 100,
    specs: { "Brand": "Samsung", "Power": "45W", "Cable": "USB-C to USB-C, 5A / 1.8m" },
    description: "Samsung 45W power adapter package shown with USB-C to USB-C cable. Verify authenticity and warranty before purchase."
  },
  {
    id: "TA-019",
    name: "Vivo 33W Flash Charger + Cable",
    title: "Vivo 33W Flash Charger + Cable",
    price: 2799,
    oldPrice: null,
    category: "Chargers",
    rating: null,
    reviews: 0,
    badge: "",
    image: "vivo-fast-charger-and-cable-1.jpg",
    images: [
      "vivo-fast-charger-and-cable-1.jpg",
      "vivo-fast-charger-and-cable-2.jpg"
    ],
    stock: 100,
    specs: { "Brand": "Vivo", "Power": "33W", "Package": "Charger + Cable" },
    description: "Vivo 33W FlashCharge charger package with charging cable."
  }
];

const PRODUCTS = products;
const WHATSAPP_NUMBER = "923237585103"; // support links only; checkout uses Supabase.
