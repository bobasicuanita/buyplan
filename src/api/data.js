const data = [
    {
        id: 1,
        name: 'Asus ROG Strix X570-E Gaming',
        type: 'Motherboard',
        price: 290,
        category: 'Hardware',
        url: '/assets/images/product-images/asus-rog-strix-motherboard.jpeg',
        imageWidth: 300,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Size', 'ATX']
            },
            {
                id: 2,
                spec: ['Socket', 'AM4']
            },
            {
                id: 3,
                spec: ['Chipset', 'AMD X570']
            },
            {
                id: 4,
                spec: ['Memory', 'DDR4']
            },
            {
                id: 5,
                spec: ['Memory Speed', '3200OC MHz']
            },
            {
                id: 6,
                spec: ['Channels', 'Dual-Channel']
            },
            {
                id: 7,
                spec: ['PCI Express x16 4.0', '2 Slot']
            },
            {
                id: 8,
                spec: ['SATA III 6Gb/s', '8 Port']
            },
            {
                id: 9,
                spec: ['Internal Connections', 'M.2']
            },
            {
                id: 10,
                spec: ['Extra', 'Bios Flashback, RGB Lightning']
            },
            {
                id: 11,
                spec: ['External Connections', 'Bluetooth, Display Port, HDMI, Optical, S/PDIF, WiFi']
            },
            {
                id: 12,
                spec: ['USB', 'USB-A, USB-C']
            }
        ]
    },
    {
        id: 2,
        name: 'AMD Ryzen 7 3800X Box',
        type: 'CPU',
        price: 345,
        category: 'Hardware',
        url: '/assets/images/product-images/amd-ryzen-3800x.jpeg',
        imageWidth: 200,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Family', 'Ryzen 7']
            },
            {
                id: 2,
                spec: ['Year', '2019']
            },
            {
                id: 3,
                spec: ['Architecture', 'Zen 2']
            },
            {
                id: 4,
                spec: ['Socket', 'AM4']
            },
            {
                id: 5,
                spec: ['64-bit', 'Yes']
            },
            {
                id: 6,
                spec: ['Cores', '8']
            },
            {
                id: 7,
                spec: ['Threads', '16']
            },
            {
                id: 8,
                spec: ['CPU Frequency', '3,9 GHz']
            },
            {
                id: 9,
                spec: ['Max CPU Frequency', '4,5 GHz']
            },
            {
                id: 10,
                spec: ['Cache', '32 MB']
            },
            {
                id: 11,
                spec: ['Unlocked', 'Yes']
            },
            {
                id: 12,
                spec: ['Thermal Design Power (TDP)', '105 W']
            }
        ]
    },
    {
        id: 3,
        name: 'G.Skill Trident Z RGB 32GB DDR4-3200Mhz',
        type: 'RAM',
        price: 140,
        category: 'Hardware',
        url: '/assets/images/product-images/gskill-trident-z-ram.jpeg',
        imageWidth: 300,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Capacity', '32 GB']
            },
            {
                id: 2,
                spec: ['Type', 'DDR4']
            },
            {
                id: 3,
                spec: ['Frequency', '3200 MHz']
            },
            {
                id: 4,
                spec: ['Type', 'Desktop']
            },
            {
                id: 5,
                spec: ['Modules', '2']
            },
            {
                id: 6,
                spec: ['CAS Latency', '16']
            }
        ]
    },
    {
        id: 4,
        name: 'Samsung 970 Evo Plus 1TB',
        type: 'NMVe M.2 SSD',
        price: 175,
        category: 'Hardware',
        url: '/assets/images/product-images/samsung-970-evo-1tb.jpeg',
        imageWidth: 400,
        imageHeight: 100,
        specs: [
            {
                id: 1,
                spec: ['Capacity', '1024 GB']
            },
            {
                id: 2,
                spec: ['Protocol', 'PCI Express']
            },
            {
                id: 3,
                spec: ['NVMe', 'Yes']
            },
            {
                id: 4,
                spec: ['Optane Memory', 'No']
            },
            {
                id: 5,
                spec: ['Read Speed', '3500 MB/s']
            },
            {
                id: 6,
                spec: ['Write Speed', '3300 MB/s']
            },
            {
                id: 7,
                spec: ['Maximum 4KB Random Write', '600000 IOPS']
            },
            {
                id: 8,
                spec: ['Form Factor', 'M.2 (Type 2280)']
            }
        ]
    },
    {
        id: 5,
        name: 'Samsung 970 Evo Plus 500GB',
        type: 'NMVe M.2 SSD',
        price: 95,
        category: 'Hardware',
        url: '/assets/images/product-images/samsung-970-evo-500mb.jpeg',
        imageWidth: 400,
        imageHeight: 100,
        specs: [
            {
                id: 1,
                spec: ['Capacity', '500 GB']
            },
            {
                id: 2,
                spec: ['Protocol', 'PCI Express']
            },
            {
                id: 3,
                spec: ['NVMe', 'Yes']
            },
            {
                id: 4,
                spec: ['Optane Memory', 'No']
            },
            {
                id: 5,
                spec: ['Read Speed', '3500 MB/s']
            },
            {
                id: 6,
                spec: ['Write Speed', '3300 MB/s']
            },
            {
                id: 7,
                spec: ['Maximum 4KB Random Write', '600000 IOPS']
            },
            {
                id: 8,
                spec: ['Form Factor', 'M.2 (Type 2280)']
            }
        ]
    },
    {
        id: 6,
        name: 'Asus GeForce RTX 3070 8GB Rog Strix OC',
        type: 'GPU',
        price: 830,
        category: 'Hardware',
        url: '/assets/images/product-images/asus-rog-strix-gpu.jpeg',
        imageWidth: 400,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Chipset Model', 'GeForce RTX 3070']
            },
            {
                id: 2,
                spec: ['Interface', 'PCI Express x16 4.0']
            },
            {
                id: 3,
                spec: ['Maximum Resolution', '7680x4320 pixels']
            },
            {
                id: 4,
                spec: ['Memory', '8 GB']
            },
            {
                id: 5,
                spec: ['Memory Type', 'GDDR6']
            },
            {
                id: 6,
                spec: ['Memory bus', '256 bit']
            },
            {
                id: 7,
                spec: ['HDMI', '2']
            },
            {
                id: 8,
                spec: ['DisplayPort', '3']
            },
            {
                id: 9,
                spec: ['Minimum PSU', '750 W']
            },
            {
                id: 10,
                spec: ['Power Connectors', '2x 8-pin']
            },
            {
                id: 11,
                spec: ['Height', '57,8 mm']
            },
            {
                id: 12,
                spec: ['width', '318,5 mm']
            }
        ]
    },
    {
        id: 7,
        name: 'Deepcool Castle 360RGB V2',
        type: 'CPU Watercooling',
        price: 134,
        category: 'Hardware',
        url: '/assets/images/product-images/deepcool-castle-360rgb-watercooling.jpeg',
        imageWidth: 300,
        imageHeight: 100,
        specs: [
            {
                id: 1,
                spec: ['Socket', '1150/1151/1155/115620112011-32066AM2/AM2+AM3/AM3+AM4FM1/FM2/FM2+TR4']
            },
            {
                id: 2,
                spec: ['Size', 'Triple-fan']
            },
            {
                id: 3,
                spec: ['Dimension', '120 mm']
            },
            {
                id: 4,
                spec: ['RPM', '2550 rpm']
            },
            {
                id: 5,
                spec: ['Sound Levels', '17,8 dB']
            },
            {
                id: 6,
                spec: ['Air Flow', '69,34 cfm']
            }
        ]
    },
    {
        id: 8,
        name: 'Corsair H150i Pro RGB',
        type: 'CPU Watercooling',
        price: 183,
        category: 'Hardware',
        url: '/assets/images/product-images/corsair-150i-pro-watercooling.jpeg',
        imageWidth: 400,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Socket', '1150/1151/1155/115620112011-32066AM2/AM2+AM3/AM3+AM4FM1/FM2/FM2+']
            },
            {
                id: 2,
                spec: ['Size', 'Triple-fan']
            },
            {
                id: 3,
                spec: ['Dimension', '120 mm']
            },
            {
                id: 4,
                spec: ['RPM', '1600 rpm']
            },
            {
                id: 5,
                spec: ['Sound Levels', '25 dB']
            },
            {
                id: 6,
                spec: ['Air Flow', '47,3 cfm']
            }
        ]
    },
    {
        id: 9,
        name: 'Western Digital Black 2TB (64MB Cache)',
        type: 'HDD',
        price: 115,
        category: 'Hardware',
        url: '/assets/images/product-images/wd-black-2tb.jpeg',
        imageWidth: 150,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Capacity', '2000 GB']
            },
            {
                id: 2,
                spec: ['Protocol', 'SATA III']
            },
            {
                id: 3,
                spec: ['Hybrid', 'No']
            },
            {
                id: 4,
                spec: ['Speed', '7200 rpm']
            },
            {
                id: 5,
                spec: ['Cache', '64 MB']
            },
            {
                id: 6,
                spec: ['Form Factor', '3.5 "']
            }
        ]
    },
    {
        id: 10,
        name: 'Lian Li Bora Grey',
        type: 'Case Fans',
        price: 60,
        category: 'Mod',
        url: '/assets/images/product-images/lian-li-bora-grey-fans.jpeg',
        imageWidth: 200,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Dimensions', '120 mm']
            },
            {
                id: 2,
                spec: ['RPM', '2050 rpm']
            },
            {
                id: 3,
                spec: ['Sound Levels', '29 dB']
            },
            {
                id: 4,
                spec: ['Air Flow', '57,2 cfm']
            },
            {
                id: 5,
                spec: ['Connection', '4-Pin PWM']
            },
            {
                id: 6,
                spec: ['Color', 'Multicolor RGB']
            }
        ]
    },
    {
        id: 11,
        name: 'Lian Li Dynamic Razer Edition',
        type: 'PC Case',
        price: 180,
        category: 'Peripheral',
        url: '/assets/images/product-images/lian-li-dynamic-razer-edition-case.jpeg',
        imageWidth: 160,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Size', 'Midi Tower']
            },
            {
                id: 2,
                spec: ['Motherboards', 'ATX, Extended ATX, uATX / Micro ATX']
            },
            {
                id: 3,
                spec: ['Max GPU Size', '420 mm']
            },
            {
                id: 4,
                spec: ['Internal Ports 3.5"', '3']
            },
            {
                id: 5,
                spec: ['Internal Ports 2.5"', '6']
            },
            {
                id: 6,
                spec: ['Front Connections', '3']
            },
            {
                id: 7,
                spec: ['Side Connections', '3']
            },
            {
                id: 8,
                spec: ['Cooler Position', 'Up, Down, Side']
            },
            {
                id: 9,
                spec: ['Connectivity', 'Audio, Microphone, USB 3.0, USB 3.1, USB-C']
            },
            {
                id: 10,
                spec: ['Extras', 'RGB Lighting, Side Glass']
            },
            {
                id: 11,
                spec: ['Gaming', 'Yes']
            },
            {
                id: 12,
                spec: ['Color', 'Black']
            }
        ]
    },
    {
        id: 12,
        name: 'Be Quiet Dark Base 700 RGB Led',
        type: 'PC Case',
        price: 172,
        category: 'Peripheral',
        url: '/assets/images/product-images/be-quiet-dark-base-case.jpeg',
        imageWidth: 160,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Size', 'Midi Tower']
            },
            {
                id: 2,
                spec: ['Motherboards', 'ATX, Extended ATX, Mini ITX, uATX / Micro ATX']
            },
            {
                id: 3,
                spec: ['Max GPU Size', '430 mm']
            },
            {
                id: 4,
                spec: ['Internal Ports 3.5"', '7']
            },
            {
                id: 5,
                spec: ['Internal Ports 2.5"', '-']
            },
            {
                id: 6,
                spec: ['Front Connections', '2']
            },
            {
                id: 7,
                spec: ['Up Connections', '3']
            },
            {
                id: 8,
                spec: ['Cooler Position', 'Up, Front, Back']
            },
            {
                id: 9,
                spec: ['Connectivity', 'Audio, USB 3.0, USB 3.1']
            },
            {
                id: 10,
                spec: ['Extras', 'Fan Controller, RGB Lighting, Side Glass']
            },
            {
                id: 11,
                spec: ['Gaming', 'Yes']
            },
            {
                id: 12,
                spec: ['Color', 'Black']
            }
        ]
    },
    {
        id: 13,
        name: 'TP-LINK Archer TX3000E V1',
        type: 'PCIe Wifi Adapter',
        price: 56,
        category: 'Peripheral',
        url: '/assets/images/product-images/tp-link-archer-adapter.jpeg',
        imageWidth: 160,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Connectivity Protocols', 'IEEE 802.11a, IEEE 802.11ac, IEEE 802.11ax, IEEE 802.11b, IEEE 802.11g, IEEE 802.11n']
            },
            {
                id: 2,
                spec: ['Data Speed', '2402 Mbps']
            },
            {
                id: 3,
                spec: ['Connectivity', 'Wireless']
            },
            {
                id: 4,
                spec: ['Interface', 'PCI-e']
            },
        ]
    },
    {
        id: 14,
        name: 'Lian Li Strimer 24pin RGB',
        type: 'RGB Pin Connector',
        price: 55,
        category: 'Mod',
        url: '/assets/images/product-images/lian-li-strimer-rgb-cable-mod.jpeg',
        imageWidth: 350,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Type', 'Lian Li Strimer 24pin RGB']
            },
            {
                id: 2,
                spec: ['Manufacturer', 'Lian Li']
            },
        ]
    },
    {
        id: 15,
        name: 'EVGA SuperNova 650 G3 Y2 650W Full Modular 80 Plus Gold',
        type: 'PSU',
        price: 130,
        category: 'Hardware',
        url: '/assets/images/product-images/evga-supernova-650w-psu.jpeg',
        imageWidth: 200,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Power', '650 W']
            },
            {
                id: 2,
                spec: ['Type', 'ATX']
            },
            {
                id: 3,
                spec: ['Modular', 'Full Modular']
            },
            {
                id: 4,
                spec: ['Certification', '80 Plus Gold']
            },
            {
                id: 5,
                spec: ['Fan Dimensions', '130 mm']
            },
            {
                id: 6,
                spec: ['PFR Type', 'Active']
            }
        ]
    },
    {
        id: 16,
        name: 'Samsung Odyssey G7 32"',
        type: 'Monitor',
        price: 650,
        category: 'Peripheral',
        url: '/assets/images/product-images/samsung-odyssey-g7-monitor.jpeg',
        imageWidth: 300,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Panel', 'VA']
            },
            {
                id: 2,
                spec: ['HDR', 'HDR600']
            },
            {
                id: 3,
                spec: ['Curved', 'Yes']
            },
            {
                id: 4,
                spec: ['Screen Size', '32 "']
            },
            {
                id: 5,
                spec: ['Resolution', '2560x1440']
            },
            {
                id: 6,
                spec: ['GTG', '1 ms']
            },
            {
                id: 7,
                spec: ['Refresh Rate', '240 Hz']
            },
            {
                id: 8,
                spec: ['Aspect ratio', '16:9']
            },
            {
                id: 9,
                spec: ['Connection Type', 'DisplayPort, HDMI']
            },
            {
                id: 10,
                spec: ['Monitor Type', 'Gaming']
            },
            {
                id: 11,
                spec: ['Contrast', '2500:1']
            },
            {
                id: 12,
                spec: ['Extras', 'FreeSync, G-Sync, USB Hub']
            },
        ]
    },
    {
        id: 17,
        name: 'Dell S2721DGFA 27"',
        type: 'Monitor',
        price: 440,
        category: 'Peripheral',
        url: '/assets/images/product-images/dell-monitor.jpeg',
        imageWidth: 250,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Panel', 'IPS']
            },
            {
                id: 2,
                spec: ['HDR', 'Yes']
            },
            {
                id: 3,
                spec: ['Curved', 'No']
            },
            {
                id: 4,
                spec: ['Screen Size', '27 "']
            },
            {
                id: 5,
                spec: ['Resolution', '2560x1440']
            },
            {
                id: 6,
                spec: ['GTG', '1 ms']
            },
            {
                id: 7,
                spec: ['Refresh Rate', '165 Hz']
            },
            {
                id: 8,
                spec: ['Aspect ratio', '16:9']
            },
            {
                id: 9,
                spec: ['Connection Type', 'DisplayPort, HDMI']
            },
            {
                id: 10,
                spec: ['Monitor Type', 'Gaming']
            },
            {
                id: 11,
                spec: ['Contrast', '1000:1']
            },
            {
                id: 12,
                spec: ['Extras', 'G-Sync, USB Hub, FreeSync Premium Pro']
            },
        ]
    },
    {
        id: 18,
        name: 'LG 34WL500-B 34"',
        type: 'Monitor',
        price: 300,
        category: 'Peripheral',
        url: '/assets/images/product-images/lg-ultrawide-monitor.jpeg',
        imageWidth: 400,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Panel', 'IPS']
            },
            {
                id: 2,
                spec: ['HDR', 'Yes']
            },
            {
                id: 3,
                spec: ['Ultrawide', 'Yes']
            },
            {
                id: 4,
                spec: ['Screen Size', '34 "']
            },
            {
                id: 5,
                spec: ['Resolution', '2560x1440']
            },
            {
                id: 6,
                spec: ['GTG', '5 ms']
            },
            {
                id: 7,
                spec: ['Refresh Rate', '75 Hz']
            },
            {
                id: 8,
                spec: ['Aspect ratio', '21:9']
            },
            {
                id: 9,
                spec: ['Connection Type', 'HDMI']
            },
            {
                id: 10,
                spec: ['Monitor Type', 'Productivity']
            },
            {
                id: 11,
                spec: ['Contrast', '1000:1']
            },
            {
                id: 12,
                spec: ['Extras', 'FreeSync, Flat']
            },
        ]
    },
    {
        id: 19,
        name: 'Arctic Z1 Pro (Gen 3)',
        type: 'Monitor Arm',
        price: 65,
        category: 'Peripheral',
        url: '/assets/images/product-images/arctic-z1-arm.jpeg',
        imageWidth: 160,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Type', 'Monitor']
            },
            {
                id: 2,
                spec: ['Placement', 'Desk']
            },
            {
                id: 3,
                spec: ['Type', 'Monitor Arm']
            },
            {
                id: 4,
                spec: ['Monitor Number', '1']
            },
            {
                id: 5,
                spec: ['Max Screen Size', '49 "']
            },
            {
                id: 6,
                spec: ['Max Weight', '15 kg']
            }
        ]
    },
    {
        id: 20,
        name: 'Arctic Z1 Pro (Gen 3)',
        type: 'Monitor Arm',
        price: 65,
        category: 'Peripheral',
        url: '/assets/images/product-images/arctic-z1-arm.jpeg',
        imageWidth: 160,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Type', 'Monitor']
            },
            {
                id: 2,
                spec: ['Placement', 'Desk']
            },
            {
                id: 3,
                spec: ['Type', 'Monitor Arm']
            },
            {
                id: 4,
                spec: ['Monitor Number', '1']
            },
            {
                id: 5,
                spec: ['Max Screen Size', '49 "']
            },
            {
                id: 6,
                spec: ['Max Weight', '15 kg']
            }
        ]
    },
    {
        id: 21,
        name: 'Razer Goliathus Chroma Extended Black',
        type: 'Mousepad',
        price: 55,
        category: 'Peripheral',
        url: '/assets/images/product-images/razer-goliathus-mouse-pad.jpeg',
        imageWidth: 400,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Type', 'Gaming']
            },
            {
                id: 2,
                spec: ['Size', 'XLarge']
            },
            {
                id: 3,
                spec: ['Wrist support', 'No']
            },
            {
                id: 4,
                spec: ['Width', '920 mm']
            },
            {
                id: 5,
                spec: ['Color', 'Black']
            },
            {
                id: 6,
                spec: ['LED', 'Yes']
            }
        ]
    },
    {
        id: 22,
        name: 'Satechi Aluminium Laptop Stand Space Gray',
        type: 'Laptop Stand',
        price: 35,
        category: 'Peripheral',
        url: '/assets/images/product-images/satechi-aluminium-laptop-stand.jpeg',
        imageWidth: 400,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Type', 'Gaming']
            },
            {
                id: 2,
                spec: ['Size', 'XLarge']
            },
            {
                id: 3,
                spec: ['Wrist support', 'No']
            },
            {
                id: 4,
                spec: ['Width', '920 mm']
            },
            {
                id: 5,
                spec: ['Color', 'Black']
            },
            {
                id: 6,
                spec: ['LED', 'Yes']
            }
        ]
    },
    {
        id: 23,
        name: 'Edifier R1700BT Black',
        type: 'Speakers',
        price: 115,
        category: 'Sound',
        url: '/assets/images/product-images/edifier-speakers.jpeg',
        imageWidth: 200,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Type', 'Base']
            },
            {
                id: 2,
                spec: ['Compatibility', 'Laptop']
            },
            {
                id: 3,
                spec: ['Max size', '17 "']
            },
            {
                id: 4,
                spec: ['Fans', 'None']
            }
        ]
    },
    {
        id: 24,
        name: 'Apple Magic Keyboard with Numeric Keypad Black',
        type: 'Keyboard',
        price: 160,
        category: 'Peripheral',
        url: '/assets/images/product-images/apple-magic-keyboard.jpeg',
        imageWidth: 400,
        imageHeight: 100,
        specs: [
            {
                id: 1,
                spec: ['Type', 'Office']
            },
            {
                id: 2,
                spec: ['Set', 'Keyboard Only']
            },
            {
                id: 3,
                spec: ['Wireless', 'Yes']
            },
            {
                id: 4,
                spec: ['Connection', 'Bluetooth']
            }
        ]
    },
    {
        id: 25,
        name: 'Rain Design MTower Spacy Grey',
        type: 'Laptop Stand',
        price: 35,
        category: 'Peripheral',
        url: '/assets/images/product-images/rain-design-laptop-stand.jpeg',
        imageWidth: 100,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Type', 'Base']
            },
            {
                id: 2,
                spec: ['Compatibility', 'Laptop']
            },
            {
                id: 3,
                spec: ['Max size', '15,6 "']
            },
            {
                id: 4,
                spec: ['Fans', 'None']
            }
        ]
    },
    {
        id: 26,
        name: 'Logitech MX Master 2S Black',
        type: 'Mouse',
        price: '75',
        category: 'Peripheral',
        url: '/assets/images/product-images/logitech-mx-master-2s-mouse.jpeg',
        imageWidth: 150,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Buttons', '7']
            },
            {
                id: 2,
                spec: ['Type', 'Laser']
            },
            {
                id: 3,
                spec: ['Size', 'Standard']
            },
            {
                id: 4,
                spec: ['Color', 'Black']
            },
            {
                id: 5,
                spec: ['Wireless', 'Yes']
            },
            {
                id: 6,
                spec: ['Connectivity', 'USB, Bluetooth']
            }
        ]
    },
    {
        id: 27,
        name: 'Logitech MX KEYS for Mac',
        type: 'Keyboard',
        price: '117',
        category: 'Peripheral',
        url: '/assets/images/product-images/logitech-mx-master-keyboard.jpeg',
        imageWidth: 400,
        imageHeight: 100,
        specs: [
            {
                id: 1,
                spec: ['Type', 'Office']
            },
            {
                id: 2,
                spec: ['Set', 'Keyboard Only']
            },
            {
                id: 3,
                spec: ['Wireless', 'Yes']
            },
            {
                id: 4,
                spec: ['Connection', 'Bluetooth, USB']
            }
        ]
    },
    {
        id: 28,
        name: 'Logitech G533',
        type: 'Headphones',
        price: 117,
        category: 'Sound',
        url: '/assets/images/product-images/logitech-g533-headphones.jpeg',
        imageWidth: 200,
        imageHeight: 200,
        specs: [
            {
                id: 1,
                spec: ['Type', 'Over Ear, Headband']
            },
            {
                id: 2,
                spec: ['Functions', 'Noise Canceling MIC, Surround, Wireless']
            },
            {
                id: 3,
                spec: ['Connectivity', 'USB']
            },
            {
                id: 4,
                spec: ['Color', 'Black']
            },
            {
                id: 5,
                spec: ['Frequency', '20 - 20000 Hz']
            },
            {
                id: 6,
                spec: ['Sensitivity', '107 dB']
            }
        ]
    }
];

export default data;