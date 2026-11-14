/**
 * Airbus A320/A321 Tech Reference - 结构化数据模块
 * 归纳自原 Mobile Airlinetechs 归档源码
 */
window.AIRBUS_HANDBOOK = {
    meta: {
        title: "A320 / A321 Mobile Tech Reference",
        sourceAuthor: "Tobin Miklas (Mobile Airlinetechs)",
        disclaimer: "For REFERENCE & TRAINING ONLY. Not approved maintenance data."
    },

    // 7 大核心模块定义
    modules: [
        { id: "acronyms", title: "Airbus Acronyms", icon: "🔤", desc: "A-Z 全量缩略语词典" },
        { id: "resets", title: "Resets (ATA List)", icon: "🔄", desc: "23 个系统计算机复位目录" },
        { id: "mel", title: "Airbus 320 MEL List", icon: "⚠️", desc: "29 个 MEL 放行章节目录" },
        { id: "fuel", title: "321 Fuel Transfer", icon: "⛽", desc: "5 项标准燃油交输程序" },
        { id: "locations", title: "Locations", icon: "📍", desc: "跳开关、80VU 与面板位置" },
        { id: "lights", title: "Light Bulb Part Numbers", icon: "💡", desc: "4 大区域灯光件号索引" },
        { id: "callups", title: "Alpha Call Up Menu", icon: "📢", desc: "AIDS 监控参数呼叫菜单" }
    ],

    // 1. Resets 章节归纳 (23 章)
    resets: [
        { ata: "21", title: "Air Conditioning & Pressurization", path: "airbus/21/Achapter21.html", notes: "" },
        { ata: "22", title: "Auto Flight", path: "airbus/22/Achapter22.html", notes: "" },
        { ata: "23", title: "Communications", path: "airbus/23/Achapter23.html", notes: "" },
        { ata: "24", title: "Electrical Power", path: "airbus/24/Achapter24.html", notes: "" },
        { ata: "25", title: "Equipment & Furnishings", path: "airbus/25/Achapter25.html", notes: "" },
        { ata: "26", title: "Fire Protection", path: "airbus/26/Achapter26.html", notes: "" },
        { ata: "27", title: "Flight Controls", path: "airbus/27/Achapter27.html", notes: "" },
        { ata: "28", title: "Fuel", path: "airbus/28/Achapter28.html", notes: "" },
        { ata: "29", title: "Hydraulics", path: "airbus/29/Achapter29.html", notes: "" },
        { ata: "30", title: "Ice & Rain", path: "airbus/30/Achapter30.html", notes: "" },
        { ata: "31", title: "Indications", path: "airbus/31/Achapter31.html", notes: "" },
        { ata: "32", title: "Landing Gear", path: "airbus/32/Achapter32.html", notes: "" },
        { ata: "33", title: "Lights", path: "airbus/33/Achapter33.html", notes: "" },
        { ata: "34", title: "Navigation", path: "airbus/34/Achapter34.html", notes: "" },
        { ata: "35", title: "Oxygen", path: "airbus/35/Achapter35.html", notes: "" },
        { ata: "36", title: "Pneumatic Systems", path: "airbus/36/Achapter36.html", notes: "" },
        { ata: "38", title: "Water & Waste", path: "airbus/38/Achapter38.html", notes: "" },
        { ata: "46", title: "Information System (ATSU)", path: "airbus/46/Achapter46.html", notes: "" },
        { ata: "49", title: "APU", path: "airbus/49/Achapter49.html", notes: "" },
        { ata: "52", title: "Doors", path: "airbus/52/Achapter52.html", notes: "" },
        { ata: "73", title: "Engine", path: "airbus/73/Achapter73.html", notes: "" },
        { ata: "78", title: "Exhaust (Reversers)", path: "airbus/78/Achapter78.html", notes: "" },
        { ata: "79", title: "Engine Oil", path: "airbus/79/Achapter79.html", notes: "" }
    ],

    // 2. MEL 章节归纳 (29 章)
    mel: [
        { ata: "21", title: "Air Conditioning & Pressurization", path: "airbus/MEL/21.html", notes: "" },
        { ata: "22", title: "Auto Flight", path: "airbus/MEL/22.html", notes: "" },
        { ata: "23", title: "Communications", path: "airbus/MEL/23.html", notes: "" },
        { ata: "24", title: "Electrical Power", path: "airbus/MEL/24.html", notes: "" },
        { ata: "25", title: "Equipment & Furnishings", path: "airbus/MEL/25.html", notes: "" },
        { ata: "26", title: "Fire Protection", path: "airbus/MEL/26.html", notes: "" },
        { ata: "27", title: "Flight Controls", path: "airbus/MEL/27.html", notes: "" },
        { ata: "28", title: "Fuel", path: "airbus/MEL/28.html", notes: "" },
        { ata: "29", title: "Hydraulics", path: "airbus/MEL/29.html", notes: "" },
        { ata: "30", title: "Ice & Rain", path: "airbus/MEL/30.html", notes: "" },
        { ata: "31", title: "Indications", path: "airbus/MEL/31.html", notes: "" },
        { ata: "32", title: "Landing Gear", path: "airbus/MEL/32.html", notes: "" },
        { ata: "33", title: "Lights", path: "airbus/MEL/33.html", notes: "" },
        { ata: "34", title: "Navigation", path: "airbus/MEL/34.html", notes: "" },
        { ata: "35", title: "Oxygen", path: "airbus/MEL/35.html", notes: "" },
        { ata: "36", title: "Pneumatic Systems", path: "airbus/MEL/36.html", notes: "" },
        { ata: "38", title: "Water & Waste", path: "airbus/38/Achapter38.html", notes: "" },
        { ata: "46", title: "Information System (ATSU)", path: "airbus/MEL/46.html", notes: "" },
        { ata: "47", title: "Fuel Inerting Systems", path: "airbus/MEL/47.html", notes: "" },
        { ata: "49", title: "APU", path: "airbus/MEL/49.html", notes: "" },
        { ata: "52", title: "Doors", path: "airbus/MEL/52.html", notes: "" },
        { ata: "56", title: "Windows", path: "airbus/MEL/56.html", notes: "" },
        { ata: "71", title: "Power Plant", path: "airbus/MEL/71.html", notes: "" },
        { ata: "73", title: "Engine Fuel & Control", path: "airbus/MEL/73.html", notes: "" },
        { ata: "74", title: "Engine Ignition", path: "airbus/MEL/74.html", notes: "" },
        { ata: "77", title: "Engine Indicating", path: "airbus/MEL/77.html", notes: "" },
        { ata: "78", title: "Exhaust (Reversers)", path: "airbus/MEL/78.html", notes: "" },
        { ata: "79", title: "Engine Oil", path: "airbus/MEL/79.html", notes: "" },
        { ata: "80", title: "Starting", path: "airbus/MEL/80.html", notes: "" }
    ],

    // 3. 321 Fuel Transfer 归纳 (5 项)
    fuelTransfer: [
        { code: "XFR-01", title: "ACT(s) TO CENTER", path: "airbus/fuel transfer/actcenter.html", steps: "" },
        { code: "XFR-02", title: "WINGS TO ACT(s)", path: "airbus/fuel transfer/wingact.html", steps: "" },
        { code: "XFR-03", title: "CENTER TO WINGS", path: "airbus/fuel transfer/centerwing.html", steps: "" },
        { code: "XFR-04", title: "WINGS TO CENTER", path: "airbus/fuel transfer/wingscenter.html", steps: "" },
        { code: "XFR-05", title: "PRIME ACT PUMPS", path: "airbus/fuel transfer/prime.html", steps: "" }
    ],

    // 4. Locations 归纳 (5 项)
    locations: [
        { code: "LOC-CB", title: "Circuit Breaker Locations", path: "airbus/CBlocations.html", notes: "" },
        { code: "LOC-EE", title: "E&E Locations", path: "airbus/EElocations.html", notes: "" },
        { code: "LOC-80VU", title: "Main E&E/80VU Box Layout", path: "airbus/80VU.html", notes: "" },
        { code: "LOC-OVHD", title: "Overhead Panel", path: "airbus/panels/Overhead.html", notes: "" },
        { code: "LOC-PED", title: "Pedestal Panel", path: "airbus/panels/Pedestal.html", notes: "" }
    ],

    // 5. Lights 归纳 (4 项)
    lights: [
        { code: "LT-EXT", title: "Exterior Lights", path: "airbus/Exterior lights/exterior.html", notes: "" },
        { code: "LT-CKPT", title: "Cockpit Lights", path: "airbus/Cockpit lights/cockpit.html", notes: "" },
        { code: "LT-INT", title: "Interior Lights", path: "airbus/Interior lights/interior.html", notes: "" },
        { code: "LT-CRG", title: "Cargo/Service Lights", path: "airbus/Cargo lights/cargo.html", notes: "" }
    ],

    // 6. Alpha Call Ups 归纳 (2 项)
    callups: [
        { code: "AIDS-SYS", title: "CALL UPS BY SYSTEM", path: "airbus/callups/allcallups.html", notes: "" },
        { code: "AIDS-ALL", title: "ALL CALL UPS", path: "airbus/callups/allcallups.html", notes: "" }
    ]
};
