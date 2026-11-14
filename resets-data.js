window.TECH_DATA = {
  "MODULES": [
    {
      "id": "resets",
      "title": "Resets",
      "icon": "🔄"
    },
    {
      "id": "locations",
      "title": "Locations",
      "icon": "📍"
    },
    {
      "id": "lights",
      "title": "Light Bulb Part Numbers",
      "icon": "💡"
    },
    {
      "id": "acronyms",
      "title": "Airbus Acronyms",
      "icon": "🔤"
    },
    {
      "id": "fuel",
      "title": "321 Fuel Transfer Procedure",
      "icon": "⛽"
    },
    {
      "id": "mel",
      "title": "Airbus 320 MEL List",
      "icon": "⚠️"
    },
    {
      "id": "callups",
      "title": "Airbus Alpha Call Up Menu",
      "icon": "📢"
    }
  ],
  "RESET_CHAPTERS": [
    {
      "ata": "21",
      "title": "Chapter 21 - Air Conditioning & Pressurization",
      "header": "Airconditioning & Pressurization",
      "count": 13
    },
    {
      "ata": "22",
      "title": "Chapter 22 - Auto Flight",
      "header": "Auto Flight",
      "count": 17
    },
    {
      "ata": "23",
      "title": "Chapter 23 - Communications",
      "header": "Communications",
      "count": 15
    },
    {
      "ata": "24",
      "title": "Chapter 24 - Electrical Power",
      "header": "Electrical Power",
      "count": 6
    },
    {
      "ata": "25",
      "title": "Chapter 25 - Equipment & Furnishings",
      "header": "Equipment & Furnishings",
      "count": 3
    },
    {
      "ata": "26",
      "title": "Chapter 26 - Fire Protection",
      "header": "Fire Protection",
      "count": 6
    },
    {
      "ata": "27",
      "title": "Chapter 27 - Flight Controls",
      "header": "Flight Controls",
      "count": 12
    },
    {
      "ata": "28",
      "title": "Chapter 28 - Fuel",
      "header": "Fuel",
      "count": 6
    },
    {
      "ata": "29",
      "title": "Chapter 29 - Hydraulics",
      "header": "Hydraulics",
      "count": 4
    },
    {
      "ata": "30",
      "title": "Chapter 30 - Ice & Rain",
      "header": "Ice and Rain",
      "count": 9
    },
    {
      "ata": "31",
      "title": "Chapter 31 - Indications",
      "header": "Indications",
      "count": 13
    },
    {
      "ata": "32",
      "title": "Chapter 32 - Landing Gear",
      "header": "Landing Gear",
      "count": 9
    },
    {
      "ata": "33",
      "title": "Chapter 33 - Lights",
      "header": "Lights",
      "count": 9
    },
    {
      "ata": "34",
      "title": "Chapter 34 - Navigation",
      "header": "Navigation",
      "count": 13
    },
    {
      "ata": "35",
      "title": "Chapter 35 - Oxygen",
      "header": "Oxygen",
      "count": 2
    },
    {
      "ata": "36",
      "title": "Chapter 36 - Pneumatic Systems",
      "header": "Pneumatic",
      "count": 6
    },
    {
      "ata": "38",
      "title": "Chapter 38 - Water & Waste",
      "header": "Water & Waste",
      "count": 3
    },
    {
      "ata": "46",
      "title": "Chapter 46 - Information System (ATSU)",
      "header": "Information Systems",
      "count": 3
    },
    {
      "ata": "49",
      "title": "Chapter 49 - APU",
      "header": "APU",
      "count": 6
    },
    {
      "ata": "52",
      "title": "Chapter 52 - Doors",
      "header": "Doors",
      "count": 3
    },
    {
      "ata": "73",
      "title": "Chapter 73 - Engine",
      "header": "Engines",
      "count": 9
    },
    {
      "ata": "78",
      "title": "Chapter 78 - Exhaust (Reversers)",
      "header": "Exhaust",
      "count": 4
    },
    {
      "ata": "79",
      "title": "Chapter 79 - Engine Oil",
      "header": "Oil",
      "count": 2
    }
  ],
  "RESET_FAULTS": [
    {
      "ata": "21",
      "title": "AIR-PACK 1(2) FAULT",
      "archived": true,
      "config": "Associated fault light illuminated on overhead pushbutton. Valve is amber on bleed page.",
      "cbText": "None",
      "steps": "Select associated PACK “OFF”, then“ON” using overhead pushbuttons.",
      "duration": "5 seconds.",
      "pass": "Valve will show in-line green on bleed page.",
      "fail": "Valve indication will be crossline amber.",
      "notes": "To easily determine if the valve is faulty, disconnect the flow control valve cannon plug with bleed air present. Valve should open as per design.",
      "signoff": "AMM21-61-00-710-001.",
      "mel": "MEL21-51-01=Flow Control Valve.\n        MEL21-52-01=Packs."
    },
    {
      "ata": "21",
      "title": "AIR-PACK 1(2) REGUL FAULT",
      "archived": true,
      "config": "Select affected pack OFF, confirm on the bleed page the flow control valves are closed.",
      "cbText": "Refer to Chapter 21 C/B Table (Archive Graphic: 21/airpackregul.gif)",
      "steps": "Open all four associated breakers for affected pack,\nwait 5 seconds, then close.",
      "duration": "30 seconds.",
      "pass": "Ecam fault disappears.",
      "fail": "Ecam fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM21-61-00-710-001.",
      "mel": "MEL21-61-01=Pack Temp Control Primary Channels."
    },
    {
      "ata": "21",
      "title": "CHAPTER 21-CIRCUIT BREAKERS",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [
        [
          "",
          "AIR COND/FLOW/CTL/IND1",
          "D07"
        ],
        [
          "AIR COND/FLOW/CTL AND IND/2",
          "V21",
          "122VU"
        ],
        [
          "AIR COND/FLOW/MIXER/FLAP",
          "V22",
          "122VU"
        ],
        [
          "AIR COND/RECIRC FAN/L/SPLY",
          "X18",
          "122VU"
        ],
        [
          "AIR COND/RECIRC FAN/L/CTL",
          "X20",
          "122VU"
        ],
        [
          "AIR COND/RECIRC FAN/R/SPLY",
          "W18",
          "122VU"
        ],
        [
          "AIR COND/RECIRC FAN/R/CTL",
          "W20",
          "122VU"
        ],
        [
          "AIR COND/PACK TEMP/CTL SYS1/1/115VAC",
          "X22",
          "122VU"
        ],
        [
          "AIR COND/PACK TEMP CTL SYS2/1/115VAC",
          "Y18",
          "122VU"
        ],
        [
          "AIR COND/PACK TEMP/CTL SYS1/1/28VDC",
          "X21",
          "122VU"
        ],
        [
          "AIR COND/PACK TEMP CTL SYS2/1/28VDC",
          "Y19",
          "122VU"
        ],
        [
          "AIR COND/PACK TEMP/CTL SYS1/2/115VAC",
          "W22",
          "122VU"
        ],
        [
          "AIR COND/PACK TEMP CTL SYS2/2/115VAC",
          "Y20",
          "122VU"
        ],
        [
          "AIR COND/PACK TEMP/CTL SYS1/2/28VDC",
          "W21",
          "122VU"
        ],
        [
          "AIR COND/PACK TEMP CTL SYS2/2/28VDC",
          "Y21",
          "122VU"
        ],
        [
          "AIR COND/ZONE TEMP CTL/115VAC/SYS1",
          "V17",
          "122VU"
        ],
        [
          "AIR COND/ZONE TEMP CTL/115VAC/SYS2",
          "V18",
          "122VU"
        ],
        [
          "AIR COND/ZONE TEMP CTL/28VDC/SYS1",
          "V19",
          "122VU"
        ],
        [
          "AIR COND/ZONE TEMP CTL/28VDC/SYS2",
          "V20",
          "122VU"
        ],
        [
          "AIR COND/CAB/PRESS/CTL1",
          "D09",
          "49VU"
        ],
        [
          "AIR COND/CAB PRESS/CTL/2",
          "Y22",
          "122VU"
        ],
        [
          "AIR COND/CAB PRESS/CTL/MAN",
          "Y23",
          "122VU"
        ],
        [
          "AIR COND/AVNCS/VENT/MONG",
          "Y17",
          "122VU"
        ],
        [
          "AIR COND/AVNCS VENT/CTL",
          "D05",
          "49VU"
        ],
        [
          "AIR COND/AVNCS VENT/CTL",
          "D06",
          "49VU"
        ],
        [
          "AIR COND/LAV/GALLEY VENT CTL/EXTRACT FAN/CTL",
          "U21",
          "122VU"
        ],
        [
          "AIR COND/LAV/GALLEY VENT CTL/EXTRACT FAN/SPLY",
          "U19",
          "122VU"
        ],
        [
          "AIR COND/RAM/AIR/INLET",
          "D10",
          "49VU"
        ]
      ],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "21",
      "title": "CAB PRESS SYS 1(2)FAULT",
      "archived": true,
      "config": "No specific.",
      "cbText": "Refer to Chapter 21 C/B Table (Archive Graphic: 21/cabpress.gif)",
      "steps": "Open associated breakers for 2 seconds, then reset.",
      "duration": "5 seconds.",
      "pass": "Ecam fault disappears.",
      "fail": "Ecam fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM21-31-00-710-002.",
      "mel": "MEL21-31-01=Auto System.\n        MEL21-31-02=Manual System."
    },
    {
      "ata": "21",
      "title": "COND-AFT CARGO HEAT FAULT",
      "archived": true,
      "config": "No specfic.",
      "cbText": "Refer to Chapter 21 C/B Table (Archive Graphic: 21/aftcargoheat.gif)",
      "steps": "Open associated breakers for 2 seconds then close. If no help perform a ground report in CFDS.",
      "duration": "28 seconds.",
      "pass": "Ecam fault disappears.",
      "fail": "Ecam fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM21-28-00-710-006.",
      "mel": "MEL21-43-02=Aft Cargo Heating System."
    },
    {
      "ata": "21",
      "title": "COND-RECIRC FAN FAULT",
      "archived": true,
      "config": "No specfic.",
      "cbText": "Refer to Chapter 21 C/B Table (Archive Graphic: 21/recircfan.gif)",
      "steps": "Open associated breakers for 2 seconds then close.",
      "duration": "28 seconds.",
      "pass": "Ecam fault disappears.",
      "fail": "Ecam fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM21-21-00-710-001.",
      "mel": "MEL21-21-01=Cabin Fans."
    },
    {
      "ata": "21",
      "title": "COND-TRIM AIR SYS FAULT",
      "archived": true,
      "config": "Select affacted Pack OFF, comfirm on bleed page the flow control valve is closed. The Pack controllers are powered and are operational",
      "cbText": "Refer to Chapter 21 C/B Table (Archive Graphic: 21/trimair.gif)",
      "steps": "Open associated breakers for 2 seconds. If no help perform a CAB TEMP CTL test (300sec) through CFDS.",
      "duration": "36 seconds.",
      "pass": "Ecam fault disappears.",
      "fail": "Ecam fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM21-63-00-710-004.",
      "mel": "MEL21-63-02=Cockpit/Cabin Trim Air Valves."
    },
    {
      "ata": "21",
      "title": "COND-ZONE REGUL FAULT",
      "archived": true,
      "config": "Select affacted Pack OFF, comfirm on bleed page the flow control valve is closed. The Pack controllers are powered and are operational",
      "cbText": "Refer to Chapter 21 C/B Table (Archive Graphic: 21/zonereg.gif)",
      "steps": "Open associated breakers for 2 seconds. If no help perform a CAB TEMP CTL test (300sec) through CFDS.",
      "duration": "36 seconds.",
      "pass": "Ecam fault disappears.",
      "fail": "Ecam fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM21-63-00-710-004.",
      "mel": "MEL21-63-01=Zone Controller System."
    },
    {
      "ata": "21",
      "title": "LAV/GALLEY EXTRACT FAN FAULT",
      "archived": true,
      "config": "No specfic.",
      "cbText": "Refer to Chapter 21 C/B Table (Archive Graphic: 21/lavgalleyextractfan.gif)",
      "steps": "Open associated breakers for 2 seconds then close.",
      "duration": "28 seconds.",
      "pass": "Ecam fault disappears.",
      "fail": "Ecam fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM21-61-00-710-001.",
      "mel": "MEL21-23-01=Lavatory And Galley Extract Fans."
    },
    {
      "ata": "21",
      "title": "VENT-AVNCS BLOWER FAULT",
      "archived": true,
      "config": "Blower/Exract fans in \"AUTO\", Ditching pushbutton \"OFF\".",
      "cbText": "Refer to Chapter 21 C/B Table (Archive Graphic: 21/ventblower.gif)",
      "steps": "Open Y17 C/B for 2 seconds, then close. If no help,\nopen all three breakers for 2 seconds, then close.",
      "duration": "90 seconds.",
      "pass": "Ecam fault disappears.",
      "fail": "Ecam fault remains. Perform CFDS AVEC test.",
      "notes": "There is a thermal reset button on the fan motor.",
      "signoff": "AMM21-26-00-710-001.",
      "mel": "MEL21-26-01=Blower Fan."
    },
    {
      "ata": "21",
      "title": "VENT-AVNCS EXTRACT FAULT",
      "archived": true,
      "config": "Blower/Exract fans in AUTO, Ditching pushbutton OFF.",
      "cbText": "Refer to Chapter 21 C/B Table (Archive Graphic: 21/extractfan.gif)",
      "steps": "Open Y17 C/B for 2 seconds, then close. If no help,\nopen all three breakers for 2 seconds, then close.",
      "duration": "90 seconds.",
      "pass": "Ecam fault disappears.",
      "fail": "Ecam fault remains. Perform CFDS AVEC test.",
      "notes": "There is a thermal reset button on the fan motor.",
      "signoff": "AMM21-26-00-710-001.",
      "mel": "MEL21-26-02=Extract Fan"
    },
    {
      "ata": "21",
      "title": "VENT-AVNCS SKIN VALVE FAULT",
      "archived": true,
      "config": "Blower/Exract fans in AUTO, Ditching pushbutton OFF.",
      "cbText": "Refer to Chapter 21 C/B Table (Archive Graphic: 21/skinvalve.gif)",
      "steps": "Open Y17 C/B for 2 seconds, then close. If no help,\nopen all three breakers for 2 seconds, then close.",
      "duration": "90 seconds.",
      "pass": "Ecam fault disappears.",
      "fail": "Ecam fault remains. Perform CFDS AVEC test.",
      "notes": "Make sure the deactivation switch on skin air valve is in the \"ON\" position.",
      "signoff": "AMM21-26-00-710-001.",
      "mel": "MEL21-26-03=Skin Air Inlet Bypass Valve.\n        \nMEL21-26-04=Skin Air Outlet Valve.\n        \nMEL21-26-05=Skin Air Inlet Valve."
    },
    {
      "ata": "21",
      "title": "VENT-AVNCS SYS FAULT",
      "archived": true,
      "config": "Blower/Exract fans in AUTO, Ditching pushbutton OFF.",
      "cbText": "Refer to Chapter 21 C/B Table (Archive Graphic: 21/avncssys.gif)",
      "steps": "First perform a AVEC test through CFDS. If no help, open Y17 C/B for 2 seconds, then close. If still no help, open all three breakers for 2 seconds, then close.",
      "duration": "90 seconds.",
      "pass": "Ecam fault disappears.",
      "fail": "Ecam fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM21-26-00-710-001.",
      "mel": "MEL21-26-10=Avionics Equipment Vent Computer."
    },
    {
      "ata": "22",
      "title": "CHAPTER 22-CIRCUIT BREAKER LOCATION",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [
        [
          "",
          "AUTO FLT/FCU/1",
          "B05"
        ],
        [
          "AUTO FLT/FCU/2",
          "M21",
          "121VU"
        ],
        [
          "AUTO FLT/FMGC/1",
          "B02",
          "49VU"
        ],
        [
          "AUTO FLT/FMGC/2",
          "M17",
          "121VU"
        ],
        [
          "AUTO FLT/MCDU/1",
          "B01",
          "49VU"
        ],
        [
          "AUTO FLT/MCDU/2",
          "N20",
          "121VU"
        ],
        [
          "AUTO FLT/STICK/LOCK",
          "N16",
          "121VU"
        ],
        [
          "AUTO FLT/RUDDER/ARTF/FEEL",
          "N17",
          "121VU"
        ],
        [
          "AUTO FLT/FAC1/28VDC",
          "B04",
          "49VU"
        ],
        [
          "AUTO FLT/FAC2/28VDC",
          "M19",
          "121VU"
        ],
        [
          "AUTO FLT/FAC1/26VAC",
          "B03",
          "49VU"
        ],
        [
          "AUTO FLT/FAC2/26VAC",
          "M18",
          "121VU"
        ],
        [
          "AUTO FLT/RUDDER/TRIM/IND",
          "M20",
          "121VU"
        ]
      ],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "22",
      "title": "AUTO FLT-A/P 1(2) DISPLAYED IN INOP STATUS",
      "archived": true,
      "config": "Turn off both flight directors. Both engines off.",
      "cbText": "Refer to Chapter 22 C/B Table (Archive Graphic: 22/offsiderangemode.gif)",
      "steps": "Open associated breaker for 10 seconds, then reset.\nDo not reset again for at least two minutes. If reset fails, power down aircraft.",
      "duration": "120 seconds, triple click.",
      "pass": "Message disappears.",
      "fail": "Message remains, perform CFDS AFS test.",
      "notes": "(Please Wait), will be displayed on MCDU, do not touch MCDU for 120 seconds.",
      "signoff": "AMM22-91-00-710-001. (AFS Ground Scan)\nAMM22-96-00-710-001-A. (AFS Test)",
      "mel": "MEL22-83-01=FMGC.\n        \nMEL22-10-01=Autopilot."
    },
    {
      "ata": "22",
      "title": "AUTO FLT-A/P OFF DISPLAYED ON GROUND",
      "archived": true,
      "config": "ECAM warning displayed and will not clear. Engines shut down.",
      "cbText": "None",
      "steps": "Select AP1 pushbutton on FCU, the pushbutton will,\nilluminate. Push the red autopilot disconnect button on one of the sidesticks.",
      "duration": "10 seconds.",
      "pass": "Message will clear and not recall.",
      "fail": "Red AP OFF message will display.",
      "notes": "A/P pushbuttons must not be selected before\nstarting engines. If selected, and engines are started, the message is latched and will not clear. If this occurs after engine start, shut engines down then complete steps above.",
      "signoff": "AMM22-91-00-710-001. (AFS Ground Scan)\nAMM22-96-00-710-001-A. (AFS Test)",
      "mel": "MEL22-10-01=Autopilot Systems."
    },
    {
      "ata": "22",
      "title": "AUTO FLT-A/THR OFF DISPLAYED ON GROUND",
      "archived": true,
      "config": "ECAM warning displayed and will not clear. Engines shut down.",
      "cbText": "None",
      "steps": "Select A/THR pushbutton on FCU, the pushbutton\nwill illuminate, then push the red instinctive disconnect button on one of the thrust levers. If message is still displayed, cycle the FADEC switches on the 50VU, if no help reset FCU’s then FMGC’s then try realigning ADIRU’s.",
      "duration": "10 seconds.",
      "pass": "Message will clear and not recall.",
      "fail": "A/THR OFF message will display.",
      "notes": "A/THR pushbutton must not be selected before \nstarting engines. The message is latched and will not clear using the CLR key on the ECAM control panel. If this occurs after engines start,the message will be reset(cleared) upon takeoff power selection. (Thanks Chute for the update)",
      "signoff": "AMM22-91-00-710-001. (AFS Ground Scan)\nAMM22-96-00-710-001-A. (AFS Test)",
      "mel": "MEL22-30-01=Autothrust Function."
    },
    {
      "ata": "22",
      "title": "AUTO FLT-FCU 1(2) FAULT",
      "archived": true,
      "config": "None specific.",
      "cbText": "Refer to Chapter 22 C/B Table (Archive Graphic: 22/fcu.gif)",
      "steps": "Open associated breaker for 7 minutes, then reset.",
      "duration": "10 seconds.",
      "pass": "Message disappears.",
      "fail": "Message remains.",
      "notes": "(Please Wait), will be displayed on MCDU, do not \ntouch MCDU for 120 seconds.",
      "signoff": "AMM22-91-00-710-001. (AFS Ground Scan)\nAMM22-96-00-710-001-A. (AFS Test)",
      "mel": "MEL22-81-01=FCU"
    },
    {
      "ata": "22",
      "title": "BARO REF FAULT DISPLAYED",
      "archived": true,
      "config": "Both flight directors off.",
      "cbText": "Refer to Chapter 22 C/B Table (Archive Graphic: 22/baro.gif)",
      "steps": "Open FAC #1 breaker for 10 seconds, then reset.",
      "duration": "10 seconds.",
      "pass": "Message disappears.",
      "fail": "Message remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM22-91-00-710-001. (AFS Ground Scan)\nAMM22-96-00-710-001-A. (AFS Test)",
      "mel": "MEL22-81-01=FCU."
    },
    {
      "ata": "22",
      "title": "MCDU 1 (2) SCREEN BLANK",
      "archived": true,
      "config": "No specific.",
      "cbText": "Refer to Chapter 22 C/B Table (Archive Graphic: 22/mcdublank.gif)",
      "steps": "Open associated breaker for 30 seconds, then reset.",
      "duration": "45 seconds.",
      "pass": "The page is displayed.",
      "fail": "Screen remains blank.",
      "notes": "No notes at this time.",
      "signoff": "AMM22-70-00-710-001",
      "mel": "MEL22-82-01=MCDU"
    },
    {
      "ata": "22",
      "title": "OFFSIDE RANGE MODE ON NAV DISPLAY",
      "archived": true,
      "config": "Turn off both flight directors. Both engines off.",
      "cbText": "Refer to Chapter 22 C/B Table (Archive Graphic: 22/offsiderangemode.gif)",
      "steps": "Open associated breaker for 10 seconds, then reset.\nDo not reset again for at least two minutes.",
      "duration": "120 seconds.",
      "pass": "Message disappears.",
      "fail": "Message remains, perform CFDS AFS test.",
      "notes": "(Please Wait), will be displayed on MCDU, do not \ntouch MCDU for 120 seconds.",
      "signoff": "AMM22-91-00-710-001. (AFS Ground Scan)\nAMM22-96-00-710-001-A. (AFS Test)",
      "mel": "MEL22-83-01=FMGC."
    },
    {
      "ata": "22",
      "title": "OPPOSITE  FM IN PROCESS DISPLAYED ON MCDU",
      "archived": true,
      "config": "Turn off both flight directors. Both engines off.",
      "cbText": "Refer to Chapter 22 C/B Table (Archive Graphic: 22/offsiderangemode.gif)",
      "steps": "Open associated breaker for 10 seconds, then reset.\nDo not reset again for at least two minutes.",
      "duration": "120 seconds.",
      "pass": "Message disappears.",
      "fail": "Message remains.",
      "notes": "(Please Wait), will be displayed on MCDU, do not \ntouch MCDU for 120 seconds.",
      "signoff": "AMM22-91-00-710-001. (AFS Ground Scan)\nAMM22-96-00-710-001-A. (AFS Test)",
      "mel": "MEL22-83-01=FMGC."
    },
    {
      "ata": "22",
      "title": "RUDDER ARTIFICIAL FEEL INOP",
      "archived": true,
      "config": "None specific.",
      "cbText": "Refer to Chapter 22 C/B Table (Archive Graphic: 22/artificialfeel.gif)",
      "steps": "Open rudder artificial feel breaker for 10 seconds,\n then reset.",
      "duration": "10 seconds.",
      "pass": "Message disappears.",
      "fail": "Message remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM22-61-00-710-001",
      "mel": "MEL27-23-01=Rudder Travel Limit"
    },
    {
      "ata": "22",
      "title": "AUTO FLT-RUDDER TRAVEL LIMIT 1(2) FAULT",
      "archived": true,
      "config": "Both engines stopped and hydraulics off.",
      "cbText": "Refer to Chapter 22 C/B Table (Archive Graphic: 22/ruddertravellimit.gif)",
      "steps": "First, reset associated FAC pushbutton. If no help,\nopen associated FAC breakers for 10 seconds, then close.",
      "duration": "90 seconds.",
      "pass": "Fault messages disappear.",
      "fail": "Message remains.",
      "notes": "After reset, energize hydraulics, varify no Yaw \ndamper message display.",
      "signoff": "AMM22-91-00-710-001. (AFS Ground Scan)\nAMM22-96-00-710-001-A. (AFS Test)",
      "mel": "MEL27-23-01=Rudder Travel Limiter System."
    },
    {
      "ata": "22",
      "title": "AUTO FLT-RUDDER TRAVEL LIMIT SYSTEM FAULT",
      "archived": true,
      "config": "Both engines stopped and hydraulics off.",
      "cbText": "Refer to Chapter 22 C/B Table (Archive Graphic: 22/ruddertravellimit.gif)",
      "steps": "First, reset associated FAC pushbutton. If no help,\nopen associated FAC breakers for 10 seconds, then close.",
      "duration": "90 seconds.",
      "pass": "Fault messages disappear.",
      "fail": "Message remains.",
      "notes": "After reset, energize hydraulics, varify no Yaw \ndamper message display.",
      "signoff": "AMM22-91-00-710-001. (AFS Ground Scan)\nAMM22-96-00-710-001-A. (AFS Test)",
      "mel": "MEL27-23-01=Rudder Travel Limiter System."
    },
    {
      "ata": "22",
      "title": "AUTO FLT-RUDDER TRIM 1(2) FAULT",
      "archived": true,
      "config": "Both engines stopped and hydraulics off.",
      "cbText": "Refer to Chapter 22 C/B Table (Archive Graphic: 22/ruddertrim.gif)",
      "steps": "First, reset associated FAC pushbutton. If no help,\nopen associated FAC breakers for 10 seconds, then close.",
      "duration": "90 seconds.",
      "pass": "Fault messages disappear.",
      "fail": "Message remains.",
      "notes": "After reset, energize hydraulics, varify no Yaw \ndamper message display.",
      "signoff": "AMM22-91-00-710-001. (AFS Ground Scan)\nAMM22-96-00-710-001-A. (AFS Test)",
      "mel": "MEL27-22-01=Rudder Trim Systems."
    },
    {
      "ata": "22",
      "title": "AUTO FLT-RUDDER TRIM SYSTEM FAULT",
      "archived": true,
      "config": "Both engines stopped and hydraulics off.",
      "cbText": "Refer to Chapter 22 C/B Table (Archive Graphic: 22/ruddertrim.gif)",
      "steps": "First, reset associated FAC pushbutton. If no help,\nopen associated FAC breakers for 10 seconds, then close.",
      "duration": "90 seconds.",
      "pass": "Fault messages disappear.",
      "fail": "Message remains.",
      "notes": "After reset, energize hydraulics, varify no Yaw \ndamper message display.",
      "signoff": "AMM22-91-00-710-001. (AFS Ground Scan)\nAMM22-96-00-710-001-A. (AFS Test)",
      "mel": "MEL27-22-01=Rudder Trim Systems."
    },
    {
      "ata": "22",
      "title": "SIDE STICK LOCK",
      "archived": true,
      "config": "None specific.",
      "cbText": "Refer to Chapter 22 C/B Table (Archive Graphic: 22/sidestick.gif)",
      "steps": "Open side stick lock breaker for 10 seconds,\n then reset.",
      "duration": "10 seconds.",
      "pass": "Message disappears.",
      "fail": "Message remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM27-96-00-710-003 (Priority Test).",
      "mel": "MEL=None."
    },
    {
      "ata": "22",
      "title": "WINDSHEAR FAULT",
      "archived": true,
      "config": "Aircraft stopped, flaps up.",
      "cbText": "Refer to Chapter 22 C/B Table (Archive Graphic: 22/windshear.gif)",
      "steps": "Select FAC #1 pushbutton off, pull FAC #1 breaker\nfor 30 seconds, then reset breaker and FAC #1 pushbutton.",
      "duration": "90 seconds.",
      "pass": "Message disappears.",
      "fail": "Message remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM22-60-00-710-004 (CFDS/AFS/WindShear)\nAMM34-41-00-740-002 (Bite Test Weather Radar)",
      "mel": "MEL22-66-03-Windshear Detection."
    },
    {
      "ata": "22",
      "title": "AUTO FLT-YAW DAMPER 1(2) FAULT",
      "archived": true,
      "config": "Both engines stopped and hydraulics off.",
      "cbText": "Refer to Chapter 22 C/B Table (Archive Graphic: 22/ruddertravellimit.gif)",
      "steps": "First, reset associated FAC pushbutton. If no help,\nopen associated FAC breakers for 10 seconds, then close. If yaw damper is a class 2, then cycle FAC’s with hydraulics on.",
      "duration": "90 seconds.",
      "pass": "Fault messages disappear.",
      "fail": "Message remains.",
      "notes": "After reset, energize hydraulics, varify no Yaw \ndamper message display.",
      "signoff": "AMM22-91-00-710-001. (AFS Ground Scan)\nAMM22-96-00-710-001-A. (AFS Test)",
      "mel": "MEL22-63-01=Yaw Dampers."
    },
    {
      "ata": "23",
      "title": "ACARS TRANSMISSION PROBLEMS",
      "archived": true,
      "config": "None specfic.",
      "cbText": "Refer to Chapter 23 C/B Table (Archive Graphic: 23/acars.gif)",
      "steps": "Open associated breaker for 5 seconds, then close.",
      "duration": "180 seconds.",
      "pass": "ACARS standby memo disappears and weather uplink is succesful.",
      "fail": "Still inop.",
      "notes": "If NO COMM is reported durning flight, yet ACARS \noperates ok on ground, suspect failure of VHF3 transmissions on some frequencies.",
      "signoff": "AMM23-24-00-710-001.\nAMM46-24-00-710-001.",
      "mel": "MEL23-24-01=ACARS."
    },
    {
      "ata": "23",
      "title": "ACP INOP",
      "archived": true,
      "config": "None specfic.",
      "cbText": "Refer to Chapter 23 C/B Table (Archive Graphic: 23/acp.gif)",
      "steps": "Turn “OFF” all RMP’s then turn “ON” to reset. If no help, reset associated ACP breakers.",
      "duration": "120 seconds.",
      "pass": "ACP functions normally.",
      "fail": "Still will not change.",
      "notes": "No notes at this time.",
      "signoff": "AMM23-51-00-740-002.",
      "mel": "MEL23-51-02=Audio Control Panel Systems (ACP)."
    },
    {
      "ata": "23",
      "title": "CHAPTER 23-CIRCUIT BREAKER LOCATION",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [
        [
          "COM/VHF/1",
          "G09",
          "49VU"
        ],
        [
          "COM/VHF/1",
          "G09",
          "49VU"
        ],
        [
          "COM NAV/VHF/2",
          "L04",
          "121VU"
        ],
        [
          "COM NAV/VHF/3",
          "L05",
          "121VU"
        ],
        [
          "COM/RMP/1",
          "G10",
          "49VU"
        ],
        [
          "COM NAV/RMP/2",
          "L02",
          "121VU"
        ],
        [
          "COM/CIDS/DIR 1 AND 2/ESS",
          "G02",
          "49VU"
        ],
        [
          "COM NAV/CIDS/DIR 1 AND 2/NORM",
          "M05",
          "121VU"
        ],
        [
          "COM/CIDS/DEU B/ESS",
          "G03",
          "49VU"
        ],
        [
          "COM/CIDS/DEU A ESS/LINE 1",
          "G04",
          "49VU"
        ],
        [
          "COM/CIDS/DEU A ESS/LINE 2",
          "G05",
          "49VU"
        ],
        [
          "COM NAV/CIDS/PROG AND TST PNL",
          "M06",
          "121VU"
        ],
        [
          "COM NAV/CIDS/DEU B/NORM",
          "M07",
          "121VU"
        ],
        [
          "COM NAV/CIDS/DEU A NORM/L FWD",
          "M08",
          "121VU"
        ],
        [
          "COM NAV/CIDS/DEU A NORM/R FWD",
          "M09",
          "121VU"
        ],
        [
          "COM NAV/CIDS/DEU A NORM/L MID",
          "M10",
          "121VU"
        ],
        [
          "COM NAV/CIDS/DEU A NORM/R MID",
          "M11",
          "121VU"
        ],
        [
          "COM NAV/CIDS/DEU A NORM/L AFT",
          "M12",
          "121VU"
        ],
        [
          "COM NAV/CIDS/DEU A NORM/R AFT",
          "M13",
          "121VU"
        ],
        [
          "COM NAV/CIDS/FWD ATTND/PNL",
          "M14",
          "121VU"
        ],
        [
          "170RH",
          "COM NAV/CIDS/FWD ATTND/PNL",
          "Q14"
        ],
        [
          "COM/CVR/SPLY",
          "E14",
          "49VU"
        ],
        [
          "COM/CVR/CTL",
          "E13",
          "49VU"
        ],
        [
          "COM/AUDIO/ACP/CAPT",
          "G06",
          "49VU"
        ],
        [
          "COM/AUDIO/ACP/F/O",
          "G07",
          "49VU"
        ],
        [
          "COM NAV/ACP/THIRD/OCCPNT",
          "M02",
          "121VU"
        ],
        [
          "COM NAV/ACP/AVNCS/COMPT",
          "M03",
          "121VU"
        ],
        [
          "COM NAV/SELCAL",
          "M04",
          "121VU"
        ],
        [
          "COM/AUDIO/FLT/INTPH",
          "G08",
          "49VU"
        ],
        [
          "CABIN COMMUNICATION SYSTEM-PRAM",
          "F07",
          "2000VU"
        ],
        [
          "EIS/HORN/SPLY",
          "P09",
          "121VU"
        ],
        [
          "AUDIO MIXING",
          "K03",
          "121VU"
        ]
      ],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "23",
      "title": "AMU (AUDIO MANAGEMENT UNIT) FAULT",
      "archived": true,
      "config": "None specfic.",
      "cbText": "Refer to Chapter 23 C/B Table (Archive Graphic: 23/amu.gif)",
      "steps": "Open associated breaker for 2 seconds, then close. If no help reset C/B's M-02, M-03, M-04.",
      "duration": "10 seconds.",
      "pass": "AMU functions normally.",
      "fail": "Still inop.",
      "notes": "No notes at this time.",
      "signoff": "AMM23-51-00-740-002.",
      "mel": "MEL23-51-01=Audio Management Unit (AMU)."
    },
    {
      "ata": "23",
      "title": "CIDS SYSTEM FAULTS",
      "archived": true,
      "config": "Aircraft on\nground, both engines stopped, all cabin doors closed.",
      "cbText": "Refer to Chapter 23 C/B Table (Archive Graphic: 23/cids.gif)",
      "steps": "First, try reset at PTP. If no help open all breakers\nfor 10 seconds, then close.",
      "duration": "120 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "Cabin lights will flash durning test. Test pass will be displayed on the PTP upon successful power up.",
      "signoff": "AMM23-73-00-740-005.",
      "mel": "MEL23-73-01=CIDS Director."
    },
    {
      "ata": "23",
      "title": "DEU-A FAULT ON CIDS",
      "archived": true,
      "config": "Aircraft on ground",
      "cbText": "Refer to Chapter 23 C/B Table (Archive Graphic: 23/deua.gif)",
      "steps": "First try reseting CIDS director at PTP. If no help,\nopen circuit breakers for 10 seconds, then reset.",
      "duration": "180 seconds.",
      "pass": "Fault clears from cids",
      "fail": "Fault remains.",
      "notes": "DEU-A controls lights, call signs and speakers.\nDEU-B controls interphone, P/A, call, and EVAC.",
      "signoff": "AMM23-73-00-740-005.",
      "mel": "MEL23-73-02=CIDS (Decoder Encoder Unit) DEU-A."
    },
    {
      "ata": "23",
      "title": "DEU-B FAULT ON CIDS",
      "archived": true,
      "config": "Aircraft on ground",
      "cbText": "Refer to Chapter 23 C/B Table (Archive Graphic: 23/deub.gif)",
      "steps": "First try reseting CIDS director at PTP. If no help,\nopen circuit breakers for 10 seconds, then reset.",
      "duration": "180 seconds.",
      "pass": "Fault clears from cids",
      "fail": "Fault remains.",
      "notes": "DEU-A controls lights, call signs and speakers.\nDEU-B controls interphone, P/A, call, and EVAC.",
      "signoff": "AMM23-73-00-740-005.",
      "mel": "MEL23-73-03A=CIDS (Decoder Encoder Unit) DEU-B."
    },
    {
      "ata": "23",
      "title": "COM-VHF 1(2)(3) EMITTING",
      "archived": true,
      "config": "None specfic.",
      "cbText": "Refer to Chapter 23 C/B Table (Archive Graphic: 23/emitting.gif)",
      "steps": "First, check the transmission key on audio panel,\nthen the side stick radio select button, and then the hand held mic for a stuck button. If no help, open associated breaker for 2 seconds, then close.",
      "duration": "10 seconds.",
      "pass": "Message disappears.",
      "fail": "Message remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM23-12-00-710-001.",
      "mel": "MEL23-12-01=VHF Communications Systems."
    },
    {
      "ata": "23",
      "title": "FORWARD ATTENDANT PANEL (FAP) LOCKED UP",
      "archived": true,
      "config": "No specific.",
      "cbText": "Refer to Chapter 23 C/B Table (Archive Graphic: 23/fap.gif)",
      "steps": "Open circuit breaker for 5 seconds, then close.",
      "duration": "5 seconds.",
      "pass": "Panel not lock up.",
      "fail": "Fault remains.",
      "notes": "Cabin lights will flash durning test. Test pass will be displayed on the PTP upon successful power up.",
      "signoff": "AMM23-73-00-740-005.",
      "mel": "MEL23-73-04=FAP(OLD).\nMEL23-73-08=FAP(NEW)."
    },
    {
      "ata": "23",
      "title": "FLIGHT INTERPHONE INOP",
      "archived": true,
      "config": "No specific.",
      "cbText": "Refer to Chapter 23 C/B Table (Archive Graphic: 23/flightinterphone.gif)",
      "steps": "Open circuit breaker for 2 seconds, then close. If\nno help reset breaker for DEU”B”-M7.",
      "duration": "10 seconds.",
      "pass": "Flight interphone works.",
      "fail": "Still inop.",
      "notes": "DEU-A controls lights, call signs and speakers.\nDEU-B controls interphone, P/A, call, and EVAC.",
      "signoff": "AMM23-73-00-740-005.",
      "mel": "MEL23-43-02=Crewmember Interphone System."
    },
    {
      "ata": "23",
      "title": "COM-HF 1 (2) INOP",
      "archived": true,
      "config": "None specfic.",
      "cbText": "Refer to Chapter 23 C/B Table (Archive Graphic: 23/hf.gif)",
      "steps": "Open associated breaker for 5 seconds, then close.",
      "duration": "10 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM23-11-00-740-001.",
      "mel": "MEL23-11-01=HF Communication System."
    },
    {
      "ata": "23",
      "title": "PASSENGER ADDRESS SYSTEM INOP",
      "archived": true,
      "config": "Aircraft on ground",
      "cbText": "Refer to Chapter 23 C/B Table (Archive Graphic: 23/pa.gif)",
      "steps": "First try reseting CIDS director at PTP. If no help,\nopen circuit breakers for 10 seconds, then reset.",
      "duration": "180 seconds.",
      "pass": "Passenger address system works.",
      "fail": "Passenger address system still inop.",
      "notes": "DEU-A controls lights, call signs and speakers.\nDEU-B controls interphone, P/A, call, and EVAC.",
      "signoff": "AMM23-73-00-740-005.",
      "mel": "MEL23-31-01=Passenger Adress Systems Inop."
    },
    {
      "ata": "23",
      "title": "FWD FLIGHT ATTENDANT PTP PANEL INOP",
      "archived": true,
      "config": "No specific.",
      "cbText": "Refer to Chapter 23 C/B Table (Archive Graphic: 23/ptp.gif)",
      "steps": "Open circuit breaker for 5 seconds, then close.",
      "duration": "5 seconds.",
      "pass": "Panel powers up.",
      "fail": "Panel inop.",
      "notes": "PTP = Programmed and Test Panel.",
      "signoff": "AMM23-73-00-740-005.",
      "mel": "MEL23-73-07=FTP."
    },
    {
      "ata": "23",
      "title": "RMP LOCKED UP OR WINDOW BLANK",
      "archived": true,
      "config": "None specfic.",
      "cbText": "Refer to Chapter 23 C/B Table (Archive Graphic: 23/rmp.gif)",
      "steps": "Turn off all RMP’s then on to reset. If no help, open all above circuit breakers for 2 seconds, then close.",
      "duration": "2 seconds.",
      "pass": "RMP functions normally.",
      "fail": "Still locked up.",
      "notes": "RMP lock up could be caused by another RMP that\notherwise functions normally. Thats why all three must be reset.",
      "signoff": "AMM23-13-00-710-001.",
      "mel": "MEL23-13-01=Radio Management Panel (RMP)."
    },
    {
      "ata": "23",
      "title": "COM-VHF TRANSMISSION PROBLEMS",
      "archived": true,
      "config": "None specfic.",
      "cbText": "Refer to Chapter 23 C/B Table (Archive Graphic: 23/emitting.gif)",
      "steps": "Open associated circuit breaker for 2 seconds, then\nclose.",
      "duration": "10 seconds.",
      "pass": "Message disappears.",
      "fail": "Message remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM23-12-00-710-001.",
      "mel": "MEL23-12-01=VHF Communications Systems."
    },
    {
      "ata": "24",
      "title": "CHAPTER 24-CIRCUIT BREAKER LOCATION",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [
        [
          "COM/VHF/1",
          "G09",
          "49VU"
        ],
        [
          "ELEC/GALLEY/CNTOR",
          "S28",
          "122VU"
        ],
        [
          "ELEC/HOT BUS/701PP SPLY",
          "D01",
          "105VU"
        ],
        [
          "ELEC/HOT BUS/702PP SPLY",
          "D02",
          "105VU"
        ],
        [
          "ELEC/BAT BUS/REF/BCL1",
          "G01",
          "105VU"
        ],
        [
          "ELEC/BAT BUS/REF/BCL2",
          "J02",
          "105VU"
        ],
        [
          "ELEC/BAT REF/BCL1",
          "F01",
          "105VU"
        ],
        [
          "ELEC/BAT REF/BCL2",
          "F02",
          "105VU"
        ],
        [
          "ELEC/HOT BUS/701PP SPLY",
          "E01",
          "105VU"
        ],
        [
          "ELEC/HOT BUS/702PP SPLY",
          "E02",
          "105VU"
        ],
        [
          "ELEC/CNTOR/ESS/DC BUS/TIE",
          "W26",
          "122VU"
        ],
        [
          "ELEC/TR1/FAULT/DC BUS TIE/CONFIG",
          "W29",
          "122VU"
        ],
        [
          "ELEC/TR2/FAULT/DC BUS TIE/CONFIG",
          "W30",
          "122VU"
        ],
        [
          "ELEC/CNTOR/DC/BUS/TIE1",
          "W25",
          "122VU"
        ],
        [
          "ELEC/CNTOR/DC BUS/TIE 1/FAULT",
          "U24",
          "122VU"
        ],
        [
          "AC ESS/BUS/EMER/CNTOR/SPLY",
          "C08",
          "106VU"
        ],
        [
          "ELEC/DC BUS/TIE2//APU/START",
          "W31",
          "122VU"
        ],
        [
          "ESS TR/SPLY",
          "C01",
          "106VU"
        ],
        [
          "ESS TR/CNTOR/CTL",
          "C02",
          "106VU"
        ],
        [
          "EMER/SHED/CNTOR/SPLY",
          "C07",
          "106VU"
        ],
        [
          "ELEC/DC/SVCE/BUS",
          "X24",
          "122VU"
        ],
        [
          "ELEC/DC SHED BUS/CNTR",
          "U26",
          "122VU"
        ],
        [
          "ELEC/REFLNG/ON/BAT",
          "U28",
          "122VU"
        ],
        [
          "ELEC/REFLNG/NORM",
          "S27",
          "122VU"
        ],
        [
          "ELEC/RFL/SPLY/LOGIC",
          "U29",
          "122VU"
        ],
        [
          "ELEC/TR1/MONG",
          "X25",
          "122VU"
        ],
        [
          "ELEC/TR2/MONG",
          "X26",
          "122VU"
        ],
        [
          "ELEC/DC SVCE/BUS/ON TR2",
          "U30",
          "122VU"
        ],
        [
          "ELEC/GALY & CAB/CTL",
          "S26",
          "122VU"
        ],
        [
          "ELEC/GALY & CAB/GND/FLT/LOGIC",
          "S24",
          "122VU"
        ],
        [
          "ELEC/GALY & CAB/FAULT/LT CTL",
          "S25",
          "122VU"
        ],
        [
          "ELEC/STAT INV/BUS 901XP/SPLY",
          "H02",
          "105VU"
        ],
        [
          "ELEC/STAT INV/CNTOR/CTL",
          "G02",
          "105VU"
        ],
        [
          "AC ESS/BUS NORM/CNTOR/CTL",
          "B03",
          "106VU"
        ],
        [
          "AC ESS BUS/STBY/CNTOR/CTL",
          "B08",
          "106VU"
        ],
        [
          "AC ESS BUS/EMER/CNTOR/CTL",
          "B07",
          "106VU"
        ],
        [
          "CSM/G /EV/MAN/SPLY",
          "B04",
          "106VU"
        ],
        [
          "ELEC/CSM/G /EV AUTO/SPLY",
          "C01",
          "105VU"
        ],
        [
          "ELEC/EMER GEN AUTO/2",
          "Z26",
          "122VU"
        ],
        [
          "AC ESS BUS/EMER/STBY/CNTOR/SPLY",
          "C06",
          "106VU"
        ],
        [
          "ELEC/EMER GEN AUTO/1",
          "Z25",
          "122VU"
        ],
        [
          "ELEC/EXT PWR/LT CLT/AVAIL",
          "X31",
          "122VU"
        ],
        [
          "ELEC/EXT PWR/LT CLT/NOT IN/USE",
          "X30",
          "122VU"
        ],
        [
          "ELEC/GPCU",
          "Y24",
          "122VU"
        ],
        [
          "ELEC/EXT PWR/CTL",
          "X29",
          "122VU"
        ],
        [
          "ELEC/EXT PWR/COCKPIT/AVAIL/LT",
          "X28",
          "122VU"
        ],
        [
          "ELEC/LT/CTL",
          "H10",
          "49VU"
        ],
        [
          "AC/SHED/ESS BUS/CNTOR/CTL",
          "C04",
          "106VU"
        ],
        [
          "AC ESS BUS/MONG/SPLY",
          "C05",
          "106VU"
        ],
        [
          "26VAC/ESS BUS/SPLY",
          "B06",
          "106VU"
        ],
        [
          "ELEC/AC BUS/8XP/MONG",
          "H11",
          "49VU"
        ],
        [
          "ELEC/AC/BUS1/CTL",
          "V25",
          "122"
        ]
      ],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "24",
      "title": "ELEC-BCL 1(2) FAULT",
      "archived": true,
      "config": "Aircraft on\nground.",
      "cbText": "Refer to Chapter 24 C/B Table (Archive Graphic: 24/bcl.gif)",
      "steps": "Reset using associated battery pushbutton in \noverhead. If no help, open associated breakers for 1 second, then close.",
      "duration": "10 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "All curcuit breakers are located on the 105VU in the E&E panel.",
      "signoff": "AMM24-38-00-710-001.",
      "mel": "No MEL"
    },
    {
      "ata": "24",
      "title": "ELEC-CIRCUIT BREAKER TRIPPED",
      "archived": true,
      "config": "No specific.",
      "cbText": "Tripped breaker.",
      "steps": "Reset tripped circuit breaker only once, If \nunsuccessful, do not make second attempt, troubleshoot and fix problem.",
      "duration": "N/A.",
      "pass": "Message clears, associated system operates.",
      "fail": "Fault remains.",
      "notes": "If no tripped breakers can be located, a green circuit breaker in the identified panel has failed. Remember, green breakers do exist in relay panels 105VU and 106VU located in the E&E bay.",
      "signoff": "US AMM CHAPTER20-24-20.",
      "mel": "MEL ?"
    },
    {
      "ata": "24",
      "title": "ENGINE GENERATORS PARAMETERS NOT SHOWN",
      "archived": true,
      "config": "Aircraft on ground, Engines shut down.",
      "cbText": "Refer to Chapter 24 C/B Table (Archive Graphic: 24/engineparameters.jpg)",
      "steps": "Open associated circuit breakers for 1 second, then \n        close.",
      "duration": "1 seconds.",
      "pass": "Engine parameters return to nomral.",
      "fail": "Fault remains.",
      "notes": "Associated GCU or EGIU is at fault, There is a \nreset button on each GCU (Nose E&E).",
      "signoff": "TSM24-22-00-810-805 (#1 engine parameter check).\nTSM24-22-00-810-807 (#2 engine parameter check).",
      "mel": "MEL24-20-01=Engine Driven Generator."
    },
    {
      "ata": "24",
      "title": "GROUND POWER WON’T CONNECT, NO AVAIL LIGHT IN PUSHBUTTON",
      "archived": true,
      "config": "Aircraft on ground, engines stopped, APU stopped, ground power connected.",
      "cbText": "Refer to Chapter 24 C/B Table (Archive Graphic: 24/groundpower.gif)",
      "steps": "Open breaker , then close.",
      "duration": "1 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM24-41-00-740-002.",
      "mel": "MEL24-41-01=External Power Control\nMEL24-41-02=”Not in use” or “AVIL” light inop\nMEL24-41-03=EXT PWR PB Switch"
    },
    {
      "ata": "24",
      "title": "TRANSFORMER RECTIFIER PROBLEMS",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "Refer to Chapter 24 C/B Table (Archive Graphic: 24/tr.gif)",
      "steps": "First, reset T/R’s through MCDU or all three using\nguarded button on 103VU panel in E&E bay. If unsuccessful, reset associated breaker.",
      "duration": "1 seconds.",
      "pass": "T/R operated correctly.",
      "fail": "Fault remains.",
      "notes": "If ESS TR3 is in operation with TR1 & TR2 sericable,\nrelease the AC ESS FEED pushbutton on the 35VU, than push the AC ESS FEED pushbutton. ESS TR3 will return to standby.",
      "signoff": "TSM24-30-00-810-801 (#1 TR test).\nTSM24-30-00-810-802 (#2 TR test).",
      "mel": "MEL24-30-01=Transformer/Rectifier Units (TR)."
    },
    {
      "ata": "25",
      "title": "CHAPTER 25-CIRCUIT BREAKER LOCATION",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [
        [
          "VACUUM CLEANER SOCKET CARGO Z0261",
          "F01",
          "2001VU"
        ],
        [
          "COCKPIT SEATS/SEAT CTL/CAPT",
          "U11",
          "122VU"
        ],
        [
          "COCKPIT SEATS/SEAT CTL/F/O",
          "U14",
          "122VU"
        ],
        [
          "PILOTS OUTLETS/STAT INV",
          "K25",
          "121VU"
        ],
        [
          "PILOTS OUTLETS/115V 60HZ",
          "K23",
          "121VU"
        ]
      ],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "25",
      "title": "CREW SEAT PROBLEMS",
      "archived": true,
      "config": "No specific.",
      "cbText": "Refer to Chapter 25 C/B Table (Archive Graphic: 25/crew seats.gif)",
      "steps": "Open associated circuit breakers for 1 second, then\nclose.",
      "duration": "1 second.",
      "pass": "Seat operates correctly.",
      "fail": "Fault remains.",
      "notes": "Additional circuit breaker is located under each seat on the control box.",
      "signoff": "AMM25-11-00-710-001.",
      "mel": "MEL25-11-01=Pilot Seat Adjustment."
    },
    {
      "ata": "25",
      "title": "OVEN OR TIMER",
      "archived": true,
      "config": "No specific.",
      "cbText": "Refer to Chapter 25 C/B Table (Archive Graphic: 25/oven.gif)",
      "steps": "Open associated circuit breakers for 1 second, then\nclose.",
      "duration": "1 seconds.",
      "pass": "Oven operates correctly.",
      "fail": "Fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM25-35-00-710-015.",
      "mel": "NEF."
    },
    {
      "ata": "26",
      "title": "COND/AIR-AFT CARGO HEAT/VENT FAULT",
      "archived": true,
      "config": "On ground.",
      "cbText": "Refer to Chapter 26 C/B Table (Archive Graphic: 26/cargoheat.gif)",
      "steps": "Open both circuit breakers for 1 second, then\nclose.",
      "duration": "28 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "During reset, cargo heat trim air valves cycles.",
      "signoff": "AMM21-28-00-710-006.",
      "mel": "MEL21-28-04=AFT Cargo Extraction Fan.\nMEL21-28-05=AFT Cargo Isolation Valves."
    },
    {
      "ata": "26",
      "title": "CHAPTER 26-CIRCUIT BREAKER LOCATION",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [
        [
          "ENGINE/1/FIRE DET/LOOP A",
          "A06",
          "49VU"
        ],
        [
          "ENGINE/ENG2/FIRE DET/LOOP A",
          "Q39",
          "121VU"
        ],
        [
          "ENGINE/ENG1/FIRE DET/LOOP B",
          "Q38",
          "121VU"
        ],
        [
          "ENGINE/2/FIRE DET/LOOP B",
          "A07",
          "49VU"
        ],
        [
          "ENGINE/ENG1 AND 2 FIRE EXTIG/BTL1/SQUIB/A",
          "Q43",
          "121VU"
        ],
        [
          "ENGINE/ENG1 AND 2 FIRE EXTIG/BTL2/SQUIB/A",
          "Q41",
          "121VU"
        ],
        [
          "ENGINE/ENG1 AND 2 FIRE EXTIG/BTL1/SQUIB/B",
          "Q44",
          "121VU"
        ],
        [
          "ENGINE/ENG1 AND 2 FIRE EXTIG/BTL2/SQUIB/B",
          "Q42",
          "121VU"
        ],
        [
          "APU/FIRE/EXTIG/SQUIB/A",
          "L38",
          "121VU"
        ],
        [
          "APU/FIRE/EXTIG/SQUIB/B",
          "L39",
          "121VU"
        ],
        [
          "APU/FIRE/LP VALVE/STBY",
          "M41",
          "121VU"
        ],
        [
          "APU/FIRE/LP VALVE/NORM",
          "M42",
          "121VU"
        ],
        [
          "APU/AUTO/EXTIG/GND/TEST",
          "L40",
          "121VU"
        ],
        [
          "APU/FIRE AND OVHT/DET/LOOP A",
          "L43",
          "121VU"
        ],
        [
          "APU/FIRE AND OVHT/DET/LOOP B",
          "L44",
          "121VU"
        ],
        [
          "AIR COND/SDCU/CHAN1",
          "C06",
          "49VU"
        ],
        [
          "AIR COND/SDCU/CHAN2",
          "T18",
          "122VU"
        ],
        [
          "AIR COND/CARGO/FIRE/EXTIG/BTL1",
          "C04",
          "49VU"
        ],
        [
          "AVIONIC SMOKE / AEVC",
          "Y17",
          "122VU"
        ],
        [
          "AVIONIC SMOKE / AEVC",
          "D6",
          "49VU"
        ],
        [
          "AVIONIC SMOKE / AEVC",
          "D7",
          "49VU"
        ]
      ],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "26",
      "title": "SMOKE - FWD/AFT CARGO SMOKE DET",
      "archived": true,
      "config": "On ground.",
      "cbText": "Refer to Chapter 26 C/B Table (Archive Graphic: 26/lavsmoke.gif)",
      "steps": "Open both circuit breakers for 60 second, then\nclose both at same time.",
      "duration": "80 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "Wait two minutes after reset before testing system.",
      "signoff": "AMM26-16-00-710-001.",
      "mel": "MEL26-16-03=FWD Cargo Smoke Det.\nMEL26-16-04=AFT/Bulk Cargo Smoke Det."
    },
    {
      "ata": "26",
      "title": "SMOKE - LAVATORY DET FAULT",
      "archived": true,
      "config": "On ground.",
      "cbText": "Refer to Chapter 26 C/B Table (Archive Graphic: 26/lavsmoke.gif)",
      "steps": "Open both circuit breakers for 60 second, then\nclose both at same time.",
      "duration": "80 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "Wait two minutes after reset before testing system.",
      "signoff": "AMM26-17-00-710-001.",
      "mel": "MEL26-17-01=Lavatory Smoke Detection System."
    },
    {
      "ata": "26",
      "title": "SMOKE - SDCU MAINT. MESSAGE (CLASS 2)",
      "archived": true,
      "config": "On ground.",
      "cbText": "Refer to Chapter 26 C/B Table (Archive Graphic: 26/lavsmoke.gif)",
      "steps": "Open both circuit breakers for 60 second, then\nclose both at same time.",
      "duration": "80 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "Wait two minutes after reset before testing system.",
      "signoff": "AMM26-16-00-710-001.",
      "mel": "MEL26-17-02=Smoke Detection Control Unit (SDCU)."
    },
    {
      "ata": "26",
      "title": "SDCU TROUBLE SHOOT DATA (TSD) INFO",
      "archived": true,
      "config": "On ground.",
      "cbText": "No breakers",
      "steps": "Do a read-out of the TROUBLE SHOOTING DATA from the CFDS. \n\nThe TSD shows the total number of smoke detectors installed on the smoke detection loop, e.g. xxxx xxxx xxxx xxxx aa/bb (aa=bb shows all installed smoke detectors). The cabin layout specifies the number of smoke detectors.\n\nIf the TSD gives the complementary information xxxx xxxx xxxx xxxx A/b\n(b - replace the SD (b) counted counterclockwise from the SDCU Channel 2.\n\n- If the fault continues: replace the SD(b+1) counted counterclockwise from SDCU Channel 2 until the TSD gives the information xxxx xxxx xxxx xxxx A/B (A=B)\n\nIf the TSD gives the complementary information xxxx xxxx xxxx xxxx a/B\n(a \n- replace the SD(a) counted clockwise from the SDCU Channel 1.\n\n- If the fault continues: replace the SD(a+1) counted clockwise from SDCU Channel 1 until the TSD gives the information xxxx xxxx xxxx xxxx A/B (A=B).",
      "duration": "",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "If system will not test, than you can not apply MEL.",
      "signoff": "",
      "mel": "MEL26-17-02=Smoke Detection Control Unit (SDCU)."
    },
    {
      "ata": "27",
      "title": "F/CTL-AILERON SERVO FAULT",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "Refer to Chapter 27 C/B Table (Archive Graphic: 27/elac.gif)",
      "steps": "First, reset applicable ELAC pushbutton. If no help, open\nassociated breaker for 5 seconds. Pushbutton to remain in “ON” position during breaker reset.",
      "duration": "20 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "If fault is isolated to a servo, change the servo \nvalve first prior to changing the complete servo control.",
      "signoff": "AMM27-93-00-710-001.",
      "mel": "MEL27-14-01=Aileron Servo Controls.\nMEL27-14-02=Aileron indications on ECAM inop."
    },
    {
      "ata": "27",
      "title": "CHAPTER 27-CIRCUIT BREAKER LOCATION",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [
        [
          "FLIGHT CONTROLS/ELAC1/NORM/SPLY",
          "B11",
          "49VU"
        ],
        [
          "FLIGHT CONTROLS/ELAC2/NORM/SPLY",
          "R20",
          "121VU"
        ],
        [
          "FLT CTL/ELAC1/STBY SPLY",
          "A01",
          "105VU"
        ],
        [
          "FLIGHT CONTROLS/ELAC2/STBY SPLY",
          "A02",
          "105VU"
        ],
        [
          "FLIGHT CONTROLS/THS ACTR/MOT1",
          "Q16",
          "121VU"
        ],
        [
          "FLIGHT CONTROLS/THS/ACTR/MOT2",
          "B09",
          "49VU"
        ],
        [
          "FLIGHT CONTROLS/THS ACTR/MOT3",
          "Q17",
          "121VU"
        ],
        [
          "FLIGHT CONTROLS/FCDC1/SPLY",
          "B10",
          "49VU"
        ],
        [
          "FLIGHT CONTROLS/FCDC2/SPLY",
          "Q20",
          "121VU"
        ],
        [
          "FLIGHT CONTROLS/SEC1/NORM/SPLY",
          "B08",
          "49VU"
        ],
        [
          "FLIGHT CONTROLS/SEC2/SPLY",
          "Q18",
          "121VU"
        ],
        [
          "FLIGHT CONTROLS/SEC3/SPLY",
          "Q19",
          "121VU"
        ],
        [
          "FLT CTL/SEC1/STBY SPLY",
          "B01",
          "105VU"
        ],
        [
          "FLIGHT CONTROLS/SLT FLP/POS/IND 1",
          "B12",
          "49VU"
        ],
        [
          "FLIGHT CONTROLS/SLT FLP/POS/IND2",
          "P16",
          "121VU"
        ],
        [
          "FLIGHT CONTROLS/SLT/CTL AND MONG/SYS1",
          "B06",
          "49VU"
        ],
        [
          "FLIGHT CONTROLS/FLP/CTL AND MONG/SYS1",
          "B07",
          "49VU"
        ],
        [
          "FLIGHT CONTROLS/SLT/CTL/SYS2",
          "R21",
          "121VU"
        ],
        [
          "FLIGHT CONTROLS/FLP/CTL AND/MONG/SYS2",
          "Q21",
          "121VU"
        ],
        [
          "FLIGHT CONTROLS/WTB/SLT/SYS1",
          "S06",
          "122VU"
        ],
        [
          "FLIGHT CONTROLS/WTB/FLP/SYS1",
          "S07",
          "122VU"
        ],
        [
          "FLIGHT CONTROLS/WTB/SLT/SYS2",
          "P19",
          "121VU"
        ],
        [
          "FLIGHT CONTROLS/WTB/FLP/SYS2",
          "P20",
          "121VU"
        ]
      ],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "27",
      "title": "F/CTL-ALTN LAW DISPLAY AT ENGINE START",
      "archived": true,
      "config": "On ground, with engines running, wheels chocked.",
      "cbText": "None",
      "steps": "With engines running, set parking brake, use overhead pushbuttons to switch “OFF” engine hydraulics, when hydraulics are depressurized, select “OFF” ELAC #1 and #2 using overhead swich. After 3 seconds, switch ELAC #1 and ELAC #2 “ON”. After approx 15 seconds, select hydraulics back “ON”.",
      "duration": "30 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "Follow reset steps closely.",
      "signoff": "AMM27-93-00-710-001.",
      "mel": "No MEL."
    },
    {
      "ata": "27",
      "title": "F/CTL-MAINENANCE STATUS (CLASS 2)",
      "archived": true,
      "config": "On ground, hydraulics depressurized, engines stopped, ADIRU’s aligned.",
      "cbText": "Refer to Chapter 27 C/B Table (Archive Graphic: 27/fcdc.gif)",
      "steps": "Open circuit breakers for 5 second, then close.",
      "duration": "20 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "If time, run a ground scan in CFDS/FCTL/EFCS #1 to\nidentify cause of message.",
      "signoff": "AMM27-96-00-710-001.",
      "mel": "MEL27-00=Class 2 Maintenance Message."
    },
    {
      "ata": "27",
      "title": "F/CTL-ELAC 1(2) FAULT",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "Refer to Chapter 27 C/B Table (Archive Graphic: 27/elac.gif)",
      "steps": "First, reset applicable ELAC pushbutton. If no help, open\nassociated breaker for 5 seconds. Pushbutton to remain in “ON” position during breaker reset.",
      "duration": "20 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "ELAC #1 controls left outboard (Blue) and right inboard (Green) aileron servos. ELAC #2 controls Left inboard (Green) and right outboard (Blue) ailerons servos. ELAC #1 is primary in roll, ELAC #2 is primary in pitch. ELAC #1 controls outboard (Blue) elevator servos. ELAC #2 controls inboard left (Green) & inboard right (Yellow) elevator servos.",
      "signoff": "AMM27-93-00-710-001.",
      "mel": "MEL27-93-01=ELEC."
    },
    {
      "ata": "27",
      "title": "F/CTL-FCDC 1(2) FAULT",
      "archived": true,
      "config": "On ground, hydraulics depressurized.",
      "cbText": "Refer to Chapter 27 C/B Table (Archive Graphic: 27/fcdc.gif)",
      "steps": "Open circuit breakers for 5 second, then close.",
      "duration": "20 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "FCDC=Flght Control Data Concentrators.",
      "signoff": "AMM27-96-00-710-001.",
      "mel": "MEL27-95-01=FCDC."
    },
    {
      "ata": "27",
      "title": "F/CTL-FLAP/SLAT INDICATION AMBER",
      "archived": true,
      "config": "On ground, hydraulics depressurized.",
      "cbText": "Refer to Chapter 27 C/B Table (Archive Graphic: 27/flapindication.gif)",
      "steps": "Open circuit breakers for 5 second, then close.",
      "duration": "20 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "If ECAM upper flap/slat indications are amber, reset\nsystem #1. If not reset system #2.",
      "signoff": "AMM 27-93-00-710-001",
      "mel": "MEL27-51-01=SFCS."
    },
    {
      "ata": "27",
      "title": "F/CTL-FLAPS(SLATS) LOCKED",
      "archived": true,
      "config": "On ground, hydraulics depressurized.",
      "cbText": "None",
      "steps": "Reset wing tip brakes though MCDU/CFDS/SFCC/TEST/RESET.",
      "duration": "30 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "After reset of wing tip brakes, fault message clears.",
      "signoff": "AMM27-51-00-710-002.",
      "mel": "MEL27-51-02=Flap Wing Tip Brake Solenoids."
    },
    {
      "ata": "27",
      "title": "F/CTL-FLAP/SLAT 1 (2) FAULTS OR SLOW OPERATION",
      "archived": true,
      "config": "On ground, hydraulics depressurized, engines stopped.",
      "cbText": "Refer to Chapter 27 C/B Table (Archive Graphic: 27/flaps.gif)",
      "steps": "Open associated breakers for 5 seconds, then\nclose.Only reset one breaker at time, reseting both system breakers could lock out WTB.",
      "duration": "60 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "Slats slow or flaps slow message will display only durning operation. Remember running slats/flaps without all hydraulics on can cause these faults to display. Slats use Blue & Green hydraulics. Flaps use Yellow & Green hydraulics.",
      "signoff": "AMM27-51-00-740-002.",
      "mel": "MEL27-51-01=Slat/Flap Control System (SFCS)."
    },
    {
      "ata": "27",
      "title": "27SEC",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (27/27sec.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "27",
      "title": "SIDE STICK PRIORTY MESSAGE",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "Refer to Chapter 27 C/B Table (Archive Graphic: 27/elac.gif)",
      "steps": "First, reset all FAC/SEC/ELAC overhead pushbuttons. If no help, reset ELAC circuit breakers followed by performing a side stick priorty test.",
      "duration": "20 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "Check PFR for associated messages. If you have any associated faults T/S IAW TSM.",
      "signoff": "AMM27-96-00-710-003 (Priority Test).",
      "mel": "MEL27-92-06=Side Stick Dual Input Warning System."
    },
    {
      "ata": "27",
      "title": "THS DIDN’T RETURN TO ZERO AFTER LANDING",
      "archived": true,
      "config": "On ground.",
      "cbText": "None",
      "steps": "Reset ELAC’s using overhead pushbutton switches.\nSelect both ELAC switches off, then on. THS will return to zero.",
      "duration": "8 seconds.",
      "pass": "THS zeros.",
      "fail": "THS stays.",
      "notes": "THS=Trimmable Horizontal Stabilizer.",
      "signoff": "AMM27-93-00-810-945.",
      "mel": "MEL27-44-01=Stabilizer Actuator Electric Motors."
    },
    {
      "ata": "28",
      "title": "CHAPTER 28-CIRCUIT BREAKER LOCATION",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [
        [
          "FUEL/L WING TK/PUMP1 SPLY",
          "N23",
          "121VU"
        ],
        [
          "FUEL/R WING TK/PUMP1 SPLY",
          "Q23",
          "121VU"
        ],
        [
          "FUEL/PUMPS/1/L CTL AND R IND",
          "R23",
          "121VU"
        ],
        [
          "FUEL/PUMPS/1/R CTL AND L IND",
          "R28",
          "121VU"
        ],
        [
          "FUEL/L WING TK/PUMP2 SPLY",
          "N26",
          "121VU"
        ],
        [
          "FUEL/R WING TK/PUMP2 SPLY",
          "Q26",
          "121VU"
        ],
        [
          "FUEL/PUMPS/2/L CTL AND R IND",
          "R24",
          "121VU"
        ],
        [
          "FUEL/PUMPS/2/R CTL AND L IND",
          "R29",
          "121VU"
        ],
        [
          "FUEL/CTR TK/PUMP1 SPLY",
          "P23",
          "121VU"
        ],
        [
          "FUEL/CTR TK/PUMP2 SPLY",
          "P26",
          "121VU"
        ],
        [
          "FUEL/CTR TK/PUMPS1 AND 2/CTL AND IND",
          "R25",
          "121VU"
        ],
        [
          "FUEL/CTR TK/PUMPS1 AND 2/CTL AND IND",
          "R26",
          "121VU"
        ],
        [
          "FUEL/CTR TK/AUTO/CTL",
          "R27",
          "121VU"
        ],
        [
          "FUEL/SMOKE/CONFIG/PUMP CTL",
          "A14",
          "49VU"
        ],
        [
          "APU/FUEL/BLOW OFF/CTL",
          "K39",
          "121VU"
        ],
        [
          "APU/FUEL/BLOW OFF/PUMP",
          "B14",
          "49VU"
        ],
        [
          "APU/FUEL/PUMP/CTL",
          "M38",
          "121VU"
        ],
        [
          "FUEL/X FEED/VALVE/MOT2",
          "M24",
          "121VU"
        ],
        [
          "FUEL/X FEED/VALVE/MOT1",
          "A12",
          "49VU"
        ],
        [
          "APU/FUEL/LP VALVE/CTL",
          "M40",
          "121VU"
        ],
        [
          "APU/FUEL/LP VALVE/SPLY",
          "M39",
          "121VU"
        ],
        [
          "FUEL/LP VALVE/MOT1/ENG1",
          "A08",
          "49VU"
        ],
        [
          "FUEL/LP VALVE/MOT1/ENG2",
          "A09",
          "49VU"
        ],
        [
          "FUEL/LP VALVE/MOT2/ENG1",
          "M25",
          "121VU"
        ],
        [
          "FUEL/LP VALVE/MOT2/ENG2",
          "M26",
          "121VU"
        ],
        [
          "FUEL/HI/LVL/SPLY",
          "L25",
          "121VU"
        ],
        [
          "FUEL/XFR VALVE1/WING/L",
          "A10",
          "49VU"
        ],
        [
          "FUEL/XFR VALVE1/WING/R",
          "A11",
          "49VU"
        ],
        [
          "FUEL/XFR VALVE2/WING/L",
          "M22",
          "121VU"
        ],
        [
          "FUEL/XFR VALVE2/WING/R",
          "M23",
          "121VU"
        ],
        [
          "FUEL/FQI/CHAN/1",
          "A13",
          "49VU"
        ],
        [
          "FUEL/FQI/CHAN/2",
          "M27",
          "121VU"
        ],
        [
          "FUEL/FQI/CHANNEL/1 AND 2",
          "L26",
          "121VU"
        ],
        [
          "FUEL/RFL/DFL/XFR/DEFUEL/VALVE",
          "L23",
          "121VU"
        ],
        [
          "FUEL/RFL/DFL/SPLY",
          "L24",
          "121VU"
        ]
      ],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "28",
      "title": "APU FUEL LP VALVE FAULT MESSAGE",
      "archived": true,
      "config": "Fuel APU LP\nvalve fault message triggered when the APU master switch is selected off durning autoshut down.",
      "cbText": "Refer to Chapter 28 C/B Table (Archive Graphic: 28/apufuel.gif)",
      "steps": "First, cycle the APU master switch \"ON\" then \"OFF\". If\nno help cycle the associated circuit breakers.",
      "duration": "10 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM28-29-00-710-001",
      "mel": "MEL49-70-01=APU INOP."
    },
    {
      "ata": "28",
      "title": "FUEL-AUTOFEED FAULT",
      "archived": true,
      "config": "Center tank greater then 550lbs with wing tanks below 11,000.",
      "cbText": "None",
      "steps": "The fault is indicated if either wing tank quantity \nbecomes less than 11,023lbs when center tank is above 550lbs. When fuel is reconfigured, fault will clear.",
      "duration": "N/A.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "Fuel burn sequence:\n\n\n\n1st) Center tanks (greater pump output pressure).\n\n\n\n\n2nd) Inner wing tanks\n\n\n\n\n3rd) At approx 1700lbs in either inner tank, all 4 transfer valves open and outer wing tank fuel flows to the inner tanks for consumption.",
      "signoff": "AMM28-42-00-710-001",
      "mel": "MEL28-20-01=Automatic Fuel Feed System."
    },
    {
      "ata": "28",
      "title": "CENTER TANK LOW PRESSURE WARNING",
      "archived": true,
      "config": "Less than 400 pounds of fuel in the center tank.",
      "cbText": "None",
      "steps": "With less then 400lbs in center tank, select the mode switch to Auto. The center pumps should not run with low center tank fuel.",
      "duration": "N/A.",
      "pass": "Center tank pumps shows “cross line green”",
      "fail": "Pumps run in AUTO and no fuel in center tank.",
      "notes": "This could be a spurious fault with less than 400LBS\nin center tank, check previous PFR for history.",
      "signoff": "AMM28-21-00-720-001",
      "mel": "MEL28-21-02=Center Tank System."
    },
    {
      "ata": "28",
      "title": "FUEL-FQI 1(2) FAULT",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "Refer to Chapter 28 C/B Table (Archive Graphic: 28/FQIS.gif)",
      "steps": "Open associated breakers for 3 seconds, then\nclose. During reset the intercell transfer valves cycle.",
      "duration": "80 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "Each reset causes fuel to move form the outer cells\nto the inner cells. Too many resets can cause fuel configuration problems.",
      "signoff": "AMM28-42-00-710-001.",
      "mel": "MEL28-40-02=Fuel Quantity Indicating Computer."
    },
    {
      "ata": "28",
      "title": "INTERCELL TRANSFER VALVES OPEN",
      "archived": true,
      "config": "On ground, refueling, with inner tanks greater than 1700lbs.",
      "cbText": "Refer to Chapter 28 C/B Table (Archive Graphic: 28/transfervalves.gif)",
      "steps": "The Intercell transfer valves normally close when the \nrefuel door opens. If valves fail to close properly, cycle associated circuit breakers.",
      "duration": "10 seconds.",
      "pass": "Valves close properly when refuel door opens.",
      "fail": "Valves remain open.",
      "notes": "Nuisance, caused by fuel movement in tanks due to\naircraft attitude changes.",
      "signoff": "AMM28-46-00-740-001.",
      "mel": "MEL28-15-01=Intercell Transfer Valves."
    },
    {
      "ata": "29",
      "title": "29ALLCIRCUITBREAKERS",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (29/29allcircuitbreakers.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "29",
      "title": "29LOWAIRPRESSURE",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (29/29lowairpressure.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "29",
      "title": "PTU FAULT",
      "archived": true,
      "config": "On ground with engines running.",
      "cbText": "N34",
      "steps": "",
      "duration": "",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "PTU fault can be caused by cargo door operation 30 seconds after 2nd engine start.",
      "signoff": "TSM29-23-00-810-801",
      "mel": "MEL29-23-01=Power Transfer Unit."
    },
    {
      "ata": "29",
      "title": "HYDRAULIC SYSTEM SCHEMATIC",
      "archived": true,
      "config": "",
      "cbText": "None",
      "steps": "",
      "duration": "",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "",
      "signoff": "",
      "mel": ""
    },
    {
      "ata": "30",
      "title": "CHAPTER 30-CIRCUIT BREAKER LOCATION",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [
        [
          "ANTI ICE/PROBES/1/TAT",
          "Z12",
          "122VU"
        ],
        [
          "ANTI ICE/PROBES/2/TAT",
          "Y15",
          "122VU"
        ],
        [
          "ANTI ICE/PROBES/PHC/1",
          "D03",
          "49VU"
        ],
        [
          "ANTI ICE/PROBES/2/PHC",
          "Y12",
          "122VU"
        ],
        [
          "ANTI ICE/PROBES/PHC/3",
          "Y16",
          "122VU"
        ],
        [
          "ANTI ICE/PROBES/PITOT/1",
          "D02",
          "49VU"
        ],
        [
          "ANTI ICE/PROBES/2/PITOT",
          "Y14",
          "122VU"
        ],
        [
          "ANTI ICE/PROBES/3/PITOT",
          "Z16",
          "122VU"
        ],
        [
          "ANTI ICE/PROBES/AOA/1",
          "D04",
          "49VU"
        ],
        [
          "ANTI ICE/PROBES/2/AOA",
          "Y13",
          "122VU"
        ],
        [
          "ANTI ICE/PROBES/3/AOA",
          "Z15",
          "122VU"
        ],
        [
          "ANTI ICE/PROBES/1/STATIC",
          "Z13",
          "122VU"
        ],
        [
          "ANTI ICE/PROBES/2/STATIC",
          "Y11",
          "122VU"
        ],
        [
          "ANTI ICE/PROBES/3/STATIC",
          "Z14",
          "122VU"
        ],
        [
          "ANTI ICE/PROBES/P2/T2/ENG1",
          "Z10",
          "122VU"
        ],
        [
          "ANTI ICE/PROBES/P2/T2/ENG2",
          "Y10",
          "122VU"
        ],
        [
          "ANTI ICE/RAIN/RPLNT/CAPT",
          "D01",
          "49VU"
        ],
        [
          "ANTI ICE/RAIN/RPLNT/F/O",
          "W11",
          "122VU"
        ],
        [
          "ANTI ICE/WIPER/CAPT",
          "X12",
          "122VU"
        ],
        [
          "ANTI ICE/F/O/WIPER",
          "W12",
          "122VU"
        ],
        [
          "ANTI ICE/WINDOWS/L",
          "X14",
          "122VU"
        ],
        [
          "ANTI ICE/WINDOWS/R",
          "W14",
          "122VU"
        ],
        [
          "ANTI ICE/WHC/1",
          "X13",
          "122VU"
        ],
        [
          "ANTI ICE/WHC/2",
          "W13",
          "122VU"
        ],
        [
          "ANTI ICE/WING/MONG",
          "C01",
          "49VU"
        ],
        [
          "ANTI ICE/WING/CTL",
          "C02",
          "49VU"
        ],
        [
          "ANTI ICE/ENG/1",
          "X10",
          "122VU"
        ],
        [
          "ANTI ICE/ENG/2",
          "W10",
          "122VU"
        ],
        [
          "WATER SYSTEM ICE PROT HTR",
          "D07",
          "2000VU"
        ],
        [
          "WATER SYSTEM ICE PROT CTL",
          "D08",
          "2000VU"
        ]
      ],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "30",
      "title": "ANTI ICE MESSAGE",
      "archived": true,
      "config": "On ground, probe heat not selected \"ON\".",
      "cbText": "Refer to Chapter 30 C/B Table (Archive Graphic: 30/probes.gif)",
      "steps": "Open associated circuit breakers for 1 second, then\nclose.",
      "duration": "3 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM30-31-00-710-001.",
      "mel": "MEL30-31-01=Probe Heat Computers."
    },
    {
      "ata": "30",
      "title": "DRAIN MAST HEATER FAULT (FWD/AFT)",
      "archived": true,
      "config": "On ground.",
      "cbText": "Refer to Chapter 30 C/B Table (Archive Graphic: 30/drainmast.gif)",
      "steps": "Open circuit breakers for 5 second, then close.",
      "duration": "18 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains, CIDS caution light on FAP.",
      "notes": "If time, perform a bite on associated controller in \ncargo pit.",
      "signoff": "AMM30-71-00-710-001",
      "mel": "MEL30-71-01=Waste Water Drain Mast Heating."
    },
    {
      "ata": "30",
      "title": "ENGINE ANTI ICE FAULT",
      "archived": true,
      "config": "On ground, engines stopped.",
      "cbText": "Refer to Chapter 30 C/B Table (Archive Graphic: 30/engine.gif)",
      "steps": "Open circuit breakers for 1 second, then close. If\nno help work valve several times, make sure valve is closed.",
      "duration": "3 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "Engine anti-ice valve should be spring loaded closed on the ground with engines off.",
      "signoff": "AMM30-21-00-710-002 (test with engines running).",
      "mel": "MEL30-21-01/02=Engine Anti Ice."
    },
    {
      "ata": "30",
      "title": "ANTI ICE - PROBE MESSAGE SYSTEM #1",
      "archived": true,
      "config": "On ground, probe heat not selected \"ON\".",
      "cbText": "Refer to Chapter 30 C/B Table (Archive Graphic: 30/probes1.gif)",
      "steps": "Open associated probe breaker for 1 second, then\nreset. If no help, open PHC #1 (49VU-D3) for 1 second, then reset.",
      "duration": "3 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "If probe reset did not clear, reset ADIRU C/B’s. \n#1=F6,C2 #2=N6,N4 #3=N5,N3",
      "signoff": "AMM30-31-00-710-001.",
      "mel": "MEL30-31-01/02/03/04/05=Probe Heat."
    },
    {
      "ata": "30",
      "title": "ANTI ICE - PROBE MESSAGE SYSTEM #2",
      "archived": true,
      "config": "On ground, probe heat not selected \"ON\".",
      "cbText": "Refer to Chapter 30 C/B Table (Archive Graphic: 30/probes2.gif)",
      "steps": "Open associated probe breaker for 1 second, then\nreset. If no help, open PHC #2 (122VU-Y12) for 1 second, then reset.",
      "duration": "3 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "If probe reset did not clear, reset ADIRU C/B’s. \n#1=F6,C2 #2=N6,N4 #3=N5,N3",
      "signoff": "AMM30-31-00-710-001.",
      "mel": "MEL30-31-01/02/03/04/05=Probe Heat."
    },
    {
      "ata": "30",
      "title": "ANTI ICE - PROBE MESSAGE SYSTEM #3",
      "archived": true,
      "config": "On ground, probe heat not selected \"ON\".",
      "cbText": "Refer to Chapter 30 C/B Table (Archive Graphic: 30/probes3.gif)",
      "steps": "Open associated probe breaker for 1 second, then\nreset. If no help, open PHC #3 (122VU-Y16) for 1 second, then reset.",
      "duration": "3 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "If probe reset did not clear, reset ADIRU C/B’s. \n#1=F6,C2 #2=N6,N4 #3=N5,N3",
      "signoff": "AMM30-31-00-710-001.",
      "mel": "MEL30-31-01/02/03/04/05=Probe Heat."
    },
    {
      "ata": "30",
      "title": "ANTI ICE - LEFT OR RIGHT WINDOW",
      "archived": true,
      "config": "On ground.",
      "cbText": "Refer to Chapter 30 C/B Table (Archive Graphic: 30/window.gif)",
      "steps": "If the warning occurs on the ground with OAT greater then 40°C and AC packs off, turn both packs on cool or place damp towel on inner pane over sensors for 5 minutes. Open circuit breakers for 5 seconds, then close.",
      "duration": "5 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "If possible, cover sensors from the exterior of the \naircraft.",
      "signoff": "AMM30-42-00-710-001.",
      "mel": "MEL30-42-02=Fixed Lateral & Sliding Window Heat."
    },
    {
      "ata": "30",
      "title": "ANTI ICE - LEFT OR RIGHT WINDSHIELD",
      "archived": true,
      "config": "On ground.",
      "cbText": "Refer to Chapter 30 C/B Table (Archive Graphic: 30/window.gif)",
      "steps": "If the warning occurs on the ground with OAT greater then 40°C and AC packs off, turn both packs on cool or place damp towel on inner pane over sensors for 5 minutes. Open circuit breakers for 5 seconds, then close.",
      "duration": "5 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "If possible, cover sensors from the exterior of the \naircraft.",
      "signoff": "AMM30-42-00-710-001.",
      "mel": "MEL30-42-03=Windshield Heating System."
    },
    {
      "ata": "31",
      "title": "DMC 1(2)(3) FAULT",
      "archived": true,
      "config": "On ground.",
      "cbText": "Refer to Chapter 31 C/B Table (Archive Graphic: 31/dmcfull.gif)",
      "steps": "Open associated breakers for 5 seconds, then reset.",
      "duration": "5 seconds.",
      "pass": "ECAM warning clears, display unit works.",
      "fail": "Fault remains.",
      "notes": "Use switching panel 8VU to display DMC #3 \nimages.",
      "signoff": "AMM31-60-00-710-001. (EIS start)",
      "mel": "MEL31-63-02=Display Management Computers."
    },
    {
      "ata": "31",
      "title": "SDAC 1(2) FAULT",
      "archived": true,
      "config": "On ground.",
      "cbText": "Refer to Chapter 31 C/B Table (Archive Graphic: 31/sdac.gif)",
      "steps": "Open associated breakers together for 3 seconds, then reset.",
      "duration": "5 seconds.",
      "pass": "SDAC ECAM message clears",
      "fail": "Fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM31-50-00-710-003",
      "mel": "MEL31-55-01=System Data Concentrator Units."
    },
    {
      "ata": "31",
      "title": "Class 2 ACMS message displayed",
      "archived": true,
      "config": "Aircraft on ground, engines stopped.",
      "cbText": "Refer to Chapter 31 C/B Table (Archive Graphic: 31/dmu.gif)",
      "steps": "Open associated breakers for 10 seconds, then reset.",
      "duration": "40 seconds.",
      "pass": "ACMS message clears.",
      "fail": "Fault remains.",
      "notes": "ACMS =  Aircraft Condition Monitor Systems.",
      "signoff": "AMM31-36-00-710-001",
      "mel": "MEL31-00 Class 2 Maintenance Message"
    },
    {
      "ata": "31",
      "title": "NO AIDS PROMPT ON MCDU",
      "archived": true,
      "config": "Aircraft on ground, engines stopped.",
      "cbText": "Refer to Chapter 31 C/B Table (Archive Graphic: 31/dmu.gif)",
      "steps": "Open associated breakers for 1 seconds, then reset.",
      "duration": "40 seconds.",
      "pass": "AIDS appears on MCDU menu page.",
      "fail": "Fault remains.",
      "notes": "There is a CFDS power up test bite.\n“CFDS-INSTRUMENT-DMU”.",
      "signoff": "AMM31-36-00-710-001",
      "mel": "MEL31-30-07 Data Management Unit (DMU)"
    },
    {
      "ata": "31",
      "title": "CHAPTER 31-CIRCUIT BREAKER LOCATION",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [
        [
          "CLOCK/NORM/SPLY",
          "F11",
          "49VU"
        ],
        [
          "NAV/DME/1",
          "G14",
          "49VU"
        ],
        [
          "COM NAV/DME/2",
          "K06",
          "121VU"
        ],
        [
          "DATA/LOADER/SPLY",
          "J16",
          "121VU"
        ],
        [
          "RCDR/DFDR",
          "K16",
          "121VU"
        ],
        [
          "CFDS/CFDIU/SPLY",
          "J18",
          "121VU"
        ],
        [
          "PTR/SPLY",
          "J21",
          "121VU"
        ],
        [
          "AIDS/DMU",
          "K15",
          "121VU"
        ],
        [
          "CFDS/CFDIU/BACK/UP",
          "J17",
          "121VU"
        ],
        [
          "CFDS/TEST PLUG/1",
          "J19",
          "121VU"
        ],
        [
          "CFDS/TEST PLUG/2",
          "J20",
          "121VU"
        ],
        [
          "EIS/DMC1/SPLY",
          "E11",
          "49VU"
        ],
        [
          "EIS/DMC2/SPLY",
          "Q08",
          "121VU"
        ],
        [
          "EIS/DMC3/SPLY",
          "Q09",
          "121VU"
        ],
        [
          "EIS/PFD CAPT/SPLY",
          "E03",
          "49VU"
        ],
        [
          "EIS/PFD/F/O",
          "R03",
          "121VU"
        ],
        [
          "EIS/ND CAPT/SPLY",
          "E01",
          "49VU"
        ],
        [
          "EIS/ND/F/O",
          "R04",
          "121VU"
        ],
        [
          "EIS/ECAM DU/UPPER/SPLY",
          "E05",
          "49VU"
        ],
        [
          "EIS/ECAM DU/LOWER/SPLY",
          "R11",
          "121VU"
        ],
        [
          "EIS/DMC3/STBY/SPLY",
          "E10",
          "49VU"
        ],
        [
          "EIS/ECAM/CTL/PNL",
          "E12",
          "49VU"
        ],
        [
          "EIS/RLY/BOX/CAPT",
          "E08",
          "49VU"
        ],
        [
          "EIS/RLY/BOX/F/O",
          "R07",
          "121VU"
        ],
        [
          "EIS/DMC1/SWTG",
          "E09",
          "49VU"
        ],
        [
          "EIS/DMC2/SWTG",
          "R08",
          "121VU"
        ],
        [
          "EIS/DMC3/SWTG",
          "E07",
          "49VU"
        ],
        [
          "EIS/PFD CAPT/SWTG",
          "E04",
          "49VU"
        ],
        [
          "EIS/PFD/F/O/SWTG",
          "R05",
          "121VU"
        ],
        [
          "EIS/ND CAPT/SWTG",
          "E02",
          "49VU"
        ],
        [
          "EIS/ND/F/O/SWTG",
          "R06",
          "121VU"
        ],
        [
          "EIS/ECAM DU/UPPER/SWTG",
          "E06",
          "49VU"
        ],
        [
          "EIS/ECAM DU/LOWER/SWTG",
          "R10",
          "121VU"
        ],
        [
          "EIS/SDAC/2/SPLY",
          "Q06",
          "121VU"
        ],
        [
          "SDAC/1/SPLY",
          "F04",
          "49VU"
        ],
        [
          "SDAC/1/26VAC SYNC/AC ESS BUS",
          "F02",
          "49VU"
        ],
        [
          "SDAC/2/26VAC SYNC/AC ESS BUS",
          "F03",
          "49VU"
        ],
        [
          "EIS/SDAC/1/BUS2/26VAC SYNC AC",
          "Q03",
          "121VU"
        ],
        [
          "EIS/SDAC/2/BUS2/26VAC SYNC AC",
          "Q02",
          "121VU"
        ],
        [
          "EIS/SDAC/1/BUS1/26VAC SYNC AC",
          "Q04",
          "121VU"
        ],
        [
          "EIS/SDAC/2/BUS1/26VAC SYNC AC",
          "Q05",
          "121VU"
        ],
        [
          "SDAC/1 AND 2/28VDC/ESS BUS",
          "F05",
          "49VU"
        ],
        [
          "EIS/SDAC1 AND 2/BUS1/28VDC",
          "P04",
          "121VU"
        ],
        [
          "EMER/GEN/REF",
          "B05",
          "106VU"
        ],
        [
          "EIS/SDAC1 AND 2/BUS2/28VDC",
          "P03",
          "121VU"
        ],
        [
          "EIS/SDAC1 AND 2/DOOR/DET/AVNCS",
          "P02",
          "121VU"
        ],
        [
          "EIS/SDAC1 AND 2/DOOR/DET/PAX",
          "P05",
          "121VU"
        ],
        [
          "DC BUS/1 AND 2/MONG",
          "C03",
          "106VU"
        ],
        [
          "EIS/FWC2/SPLY",
          "Q07",
          "121VU"
        ],
        [
          "FWS/FWC1/SPLY",
          "F01",
          "49VU"
        ],
        [
          "EIS/F/O/LOUD/SPKR",
          "P08",
          "121VU"
        ],
        [
          "CAPT/LOUD/SPKR",
          "F10",
          "49VU"
        ]
      ],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "31",
      "title": "FLIGHT CONTROL PAGE WON’T AUTO-DISPLAY",
      "archived": true,
      "config": "Aircraft on ground, doors shut, one engine started.",
      "cbText": "Refer to Chapter 31 C/B Table (Archive Graphic: 31/auto.gif)",
      "steps": "Make sure “ALL” pushbutton light on ECAM control\npanel is extinguished. Move sidestick, If flight control page doesn’t auto display, open FWC #1 breaker and try again. If successful, FWC is culprit.",
      "duration": "50 seconds.",
      "pass": "Fault message is no longer displayed, flight control page auto popup functions normally.",
      "fail": "Fault remains.",
      "notes": "If any page on the ECAM control panel is manually\nselected, the auto-function is not operative.",
      "signoff": "AMM31-50-00-710-002.",
      "mel": "MEL31-63-03=ECAM Memo Display."
    },
    {
      "ata": "31",
      "title": "DISPLAY UNIT IS BLANK OR HAS DIAGONAL LINE",
      "archived": true,
      "config": "On ground.",
      "cbText": "Refer to Chapter 31 C/B Table (Archive Graphic: 31/dmc.gif)",
      "steps": "First select DMC #3 to isolate fault to DU or DMC.\nIf DMC is at fault reset above associated circuit breaker for 5 seconds. If fault is with DU reset these (CAPT PFD/ND = G3/E1) (FO's PFD/ND = R3/R4) (Upper ECAM = E5) (Lower ECAM = R11).",
      "duration": "5 seconds.",
      "pass": "Display operates normally.",
      "fail": "Fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM31-60-00-710-001. (EIS start)",
      "mel": "MEL31-63-01=Display Units.\nMEL31-63-02=Display Management Computers."
    },
    {
      "ata": "31",
      "title": "CLOCK DOESN’T AGREE WITH LOWER ECAM",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "Refer to Chapter 31 C/B Table (Archive Graphic: 31/clock.gif)",
      "steps": "Open associated breaker for 5 seconds, then reset.",
      "duration": "60 seconds.",
      "pass": "A/C clock and lower ECAM clock will agree.",
      "fail": "Fault remains.",
      "notes": "Verify clock is correctly set prior to reset of CFDIU. Clock C/B’s are F11/N02/N03.",
      "signoff": "AMM31-21-00-710-002.",
      "mel": "MEL31-21-01=Clock System."
    },
    {
      "ata": "31",
      "title": "ECAM PAGE LOCKED",
      "archived": true,
      "config": "Aircraft on ground, engines stopped.",
      "cbText": "Refer to Chapter 31 C/B Table (Archive Graphic: 31/ECAMLOCKED.gif)",
      "steps": "Open associated breaker for 5 seconds, then reset.",
      "duration": "60 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "If both FWC’s are reset together, all warnings , will\nbe inoperative durning the reset.",
      "signoff": "AMM31-50-00-710-004",
      "mel": "MEL31-56-01=ECAM Control Panel."
    },
    {
      "ata": "31",
      "title": "CFDS FAULT MESSAGE PRINTS IN FLIGHT",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "None.",
      "steps": "Go to MCDU-CFDS, the next page. Select ACARS\nPRINT/PROGRAM. Then select REAL TIME FAIL and WARN print to OFF. Return to CFDS.",
      "duration": "N/A.",
      "pass": "fault message wont auto print.",
      "fail": "fault message still auto prints.",
      "notes": "",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "31",
      "title": "PFR PRINTS AUTOMATIC AFTER LANDING",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "None.",
      "steps": "Go to MCDU-CFDS, the next page. Select ACARS\nPRINT/PROGRAM. Then select post flight report PRINT to NO. Return to CFDS.",
      "duration": "N/A.",
      "pass": "PFR wont auto print.",
      "fail": "PFR still auto prints.",
      "notes": "",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "31",
      "title": "UNABLE TO SWITCH DISPLAY UNIT (DU)",
      "archived": true,
      "config": "On ground.",
      "cbText": "Refer to Chapter 31 C/B Table (Archive Graphic: 31/switching.gif)",
      "steps": "Open associated breakers for 5 seconds, then reset.",
      "duration": "5 seconds.",
      "pass": "Display unit image switches normally.",
      "fail": "Fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM31-60-00-710-001. (EIS start)",
      "mel": "MEL31-61-01=EIS Switching Systems."
    },
    {
      "ata": "31",
      "title": "DISPLAY UNITS SHOWS TELELOADING",
      "archived": true,
      "config": "On ground.",
      "cbText": "Refer to Chapter 31 C/B Table (Archive Graphic: 31/teleloading.gif)",
      "steps": "First, attempt to switch affected display unit to\nDMC #3 using switching panel. Next, open associated display unit circuit breaker for 10 seconds, then reset.",
      "duration": "5 seconds.",
      "pass": "Display unit image is recovered.",
      "fail": "Fault remains.",
      "notes": "Also try reset of associated DMC. (DMC #1 = E11) (DMC #2 = Q8) (DMC #3 = Q9). All DMC’s must be the same manufacturer part number.",
      "signoff": "AMM31-60-00-710-001. (EIS start)",
      "mel": "MEL31-63-01=Display Units."
    },
    {
      "ata": "32",
      "title": "BSCU CHANNEL 1(2) FAULT",
      "archived": true,
      "config": "Aircraft on ground, not moving.",
      "cbText": "Refer to Chapter 32 C/B Table (Archive Graphic: 32/BSCU.gif)",
      "steps": "First, select the anti-skid/NWS off, then on. Second\nopen associated circuit breaker for 5 seconds, then close.",
      "duration": "3 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM32-46-00-740-001.",
      "mel": "MEL32-42-03=BSCU."
    },
    {
      "ata": "32",
      "title": "32LGCIU",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (32/32LGCIU.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "32",
      "title": "L/G (LANDING GEAR) SYSTEM DISAGREE",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "None.",
      "steps": "Check post flight report for faulted gear or door \nsensor. Or perform a CFDS / LG / LGCIU bite check for current faults. Check rig and/or replace faulty sensor or target. If main gear uplock disagree is shown on ground, make sure the main gear uplocks (Hooks) have not been physically tripped.",
      "duration": "N/A.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "",
      "signoff": "AMM32-69-00-740-001",
      "mel": "No MEL"
    },
    {
      "ata": "32",
      "title": "NOSE WHEEL STEERING FAULTY",
      "archived": true,
      "config": "Aircraft on ground, “NOT MOVING”.",
      "cbText": "None.",
      "steps": "Reset A/SKID-NWS switch on landing gear control\npanel. No help, bleed associated brakes.",
      "duration": "N/A.",
      "pass": "Control of steering switch to other BSCU CH.",
      "fail": "Fault remains.",
      "notes": "Flight crews can perform this with engines running. Just make sure the aircraft is stopped.",
      "signoff": "AMM32-51-00-720-003.",
      "mel": "MEL32-60-04=N/WS Minor Fault Caution on ECAM."
    },
    {
      "ata": "32",
      "title": "CHAPTER 32-CIRCUIT BREAKER LOCATION",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [
        [
          "L/G/LGCIU/SYS1/NORM",
          "C09",
          "49VU"
        ],
        [
          "HYDRAULIC/LGCIU/SYS2",
          "Q35",
          "121VU"
        ],
        [
          "HYDRAULIC/LGCIU/SYS1/GRND SPLY",
          "Q34",
          "121VU"
        ],
        [
          "HYDRAULIC/BRAKING AND STEERING/SYS1/CTL",
          "M34",
          "121VU"
        ],
        [
          "HYD/BRAK AND STEERING/SYS1/IND AND/SPLY",
          "M33",
          "121VU"
        ],
        [
          "HYD/BRAKING AND STEERING/SYS2/CTL",
          "M35",
          "121VU"
        ],
        [
          "HYD/BRAKING AND STEERING/SYS2/SPLY",
          "M36",
          "121VU"
        ],
        [
          "L/G/Y BRK/PRESS/IND",
          "C10",
          "49VU"
        ],
        [
          "HYDRAULIC/PARK BRK/CTL/NORM",
          "N36",
          "121VU"
        ],
        [
          "HYDRAULIC/PARK BRK/CTL/STBY",
          "N37",
          "121VU"
        ],
        [
          "HYDRAULIC/BRK FAN/WHEELS/1 AND 2",
          "L32",
          "121VU"
        ],
        [
          "HYDRAULIC/BRK FAN/WHEELS/3 AND 4",
          "L35",
          "121VU"
        ],
        [
          "HYDRAULIC/BRK/FAN/CTL",
          "M32",
          "121VU"
        ],
        [
          "HYDRAULIC/BRK/TEMP/DET/UNIT",
          "M37",
          "121VU"
        ]
      ],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "32",
      "title": "BRAKES GRABBING DURNING TAXI",
      "archived": true,
      "config": "Aircraft on ground, “NOT MOVING”.",
      "cbText": "None.",
      "steps": "Reset A/SKID-NWS switch on landing gear control\npanel. No help, bleed associated brakes.",
      "duration": "N/A.",
      "pass": "Control of brakes switch to other BSCU channel.",
      "fail": "Fault remains.",
      "notes": "Flight crews can perform this with engines running. Just make sure the aircraft is stopped.",
      "signoff": "AMM32-46-00-740-001",
      "mel": "MEL32-42-03=BSCU."
    },
    {
      "ata": "32",
      "title": "BRAKE SYSTEM 1(2) FAULT",
      "archived": true,
      "config": "Aircraft on ground, not moving.",
      "cbText": "Refer to Chapter 32 C/B Table (Archive Graphic: 32/BSCU.gif)",
      "steps": "First, select the anti-skid/NWS off, then on. Second\nopen associated circuit breaker for 5 seconds, then close.",
      "duration": "3 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM32-46-00-740-001.",
      "mel": "MEL32-42-03=BSCU."
    },
    {
      "ata": "32",
      "title": "NO BRAKE TEMPS DISPLAYED ON ECAM",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "Refer to Chapter 32 C/B Table (Archive Graphic: 32/braketemps.gif)",
      "steps": "Cycle the A/SKID&N/W Steering switch, if no help Open associated breaker for 5 seconds, then reset.",
      "duration": "5 seconds.",
      "pass": "Brake temps show on ECAM.",
      "fail": "Fault remains.",
      "notes": "Take off warning configuration horn might sound when BTMU is on MEL. T/O not allowed with hot brakes. MEL requires removing cannon plug for affected wheel BTMU for Erroneos indications, extreme HI temps or amber XX.",
      "signoff": "AMM32-47-00-710-001.",
      "mel": "MEL32-47-01=Brake Temperature Monitoring Unit."
    },
    {
      "ata": "32",
      "title": "NWS FAULT DURNING FLIGHT CONTROL CK.",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "None.",
      "steps": "Determine which NWS disconnect button was \npushed durning rudder check. Replace that steering tiller.",
      "duration": "N/A.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "",
      "signoff": "AMM32-51-00-720-007.",
      "mel": "MEL32-51.02=Pedal DISC."
    },
    {
      "ata": "33",
      "title": "33EPSU",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (33/33EPSU.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "33",
      "title": "CHAPTER 33-CIRCUIT BREAKER LOCATION",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [
        [
          "LIGHTING/EXT LT/NAV1/AND LOGO/LT",
          "T03",
          "122VU"
        ],
        [
          "LIGHTING/EXT LT/NAV2/AND LOGO/LT",
          "T02",
          "122VU"
        ],
        [
          "LIGHTING/LANDING LT/L/SPLY",
          "T04",
          "122VU"
        ],
        [
          "LIGHTING/LANDING LT/R/SPLY",
          "T06",
          "122VU"
        ],
        [
          "LIGHTING/LANDING LT/L/CTL",
          "T05",
          "122VU"
        ],
        [
          "LIGHTING/LANDING LT/R/CTL",
          "T07",
          "122VU"
        ],
        [
          "LIGHTING/EXT LT/RWY TURN OFF/L",
          "W06",
          "122VU"
        ],
        [
          "LIGHTING/EXT LT/RWY TURN OFF/R",
          "W05",
          "122VU"
        ],
        [
          "LIGHTING/EMER LT/CKPT/DOME",
          "H08",
          "49VU"
        ],
        [
          "LIGHTING/FLOOD/CTR INST/PNL",
          "Z04",
          "122VU"
        ],
        [
          "LIGHTING/CKPT/DOME",
          "Y06",
          "122VU"
        ],
        [
          "LIGHTING/FLOOD/F/O/SIDE",
          "Z06",
          "122VU"
        ],
        [
          "LIGHTING/FLOOD/CAPT/SIDE",
          "Z05",
          "122VU"
        ],
        [
          "LIGHTING/ICE AND STBY/COMP/LIGHT",
          "H04",
          "49VU"
        ],
        [
          "LIGHTING/INSTL LT/OVHD/PNL",
          "Y03",
          "122VU"
        ],
        [
          "LIGHTING/INSTL LT/MAIN INST/PNL AND/PED",
          "Y04",
          "122VU"
        ],
        [
          "LIGHTING/INSTL LT/GLARE/SHLD",
          "Y05",
          "122VU"
        ],
        [
          "CABIN LIGHT POWER-WINDOW FWD",
          "H01",
          "2000VU"
        ],
        [
          "CABIN LIGHT POWER-WINDOW AFT",
          "H03",
          "2000VU"
        ],
        [
          "CABIN LIGHT POWER-WINDOW AFT",
          "H04",
          "2000VU"
        ],
        [
          "CABIN LIGHT POWER-WINDOW FWD",
          "H02",
          "2000VU"
        ],
        [
          "CABIN LIGHT POWER-CEILING AFT",
          "H07",
          "2000VU"
        ],
        [
          "CABIN LIGHT POWER-CEILING FWD",
          "H05",
          "2000VU"
        ],
        [
          "CABIN LIGHT POWER-CEILING FWD",
          "H06",
          "2000VU"
        ],
        [
          "CABIN LIGHT POWER-CEILING AFT",
          "H08",
          "2000VU"
        ],
        [
          "LIGHT-CABIN ENTRY",
          "J04",
          "2000VU"
        ],
        [
          "AIR CONDTN COMPT OUTLET",
          "B08",
          "2000VU"
        ],
        [
          "LIGHTING/WHL WELL/LTG/OUT",
          "X07",
          "122VU"
        ],
        [
          "LIGHTING/WHL WELL/LTG/DOME",
          "X08",
          "122VU"
        ],
        [
          "LIGHTING/ANN LT SPLY/XFMR/BUS 1",
          "X04",
          "122VU"
        ],
        [
          "LIGHTING/ANN LT SPLY/XFMR/BUS 2",
          "X05",
          "122VU"
        ],
        [
          "LIGHTING/ANN LT SPLY/XFMR/STAT INV",
          "X03",
          "122VU"
        ],
        [
          "LIGHTING/XFMR/115V.5V/ESS BUS",
          "H03",
          "49VU"
        ],
        [
          "LIGHTING/TST/BOARD/SPLY",
          "X06",
          "122VU"
        ],
        [
          "LIGHTING/EXT LT/TAXI AND TAKE OFF/TAXI",
          "W08",
          "122VU"
        ],
        [
          "LIGHTING/EXT LT/TAXI AND TAKE OFF/CTL",
          "W09",
          "122VU"
        ],
        [
          "LIGHTING/EXT LT/TAXI AND TAKE OFF/TO",
          "W07",
          "122VU"
        ],
        [
          "LIGHTING/AVNCS COMPT/DOME",
          "Z07",
          "122VU"
        ],
        [
          "LIGHTING/AVNCS COMPT/OUT/28VDC",
          "Z08",
          "122VU"
        ],
        [
          "LIGHTING/AVNCS COMPT/OUT/115VAC",
          "Z09",
          "122VU"
        ],
        [
          "CARGO COMPT LIGHT-FWD",
          "B04",
          "2000VU"
        ],
        [
          "CARGO COMPT LIGHT-AFT",
          "B05",
          "2000VU"
        ],
        [
          "CARGO COMPT LIGHT-LDG AERA",
          "B06",
          "2000VU"
        ],
        [
          "LIGHTING/EXT LT/BEACON/UPPER",
          "U06",
          "122VU"
        ],
        [
          "LIGHTING/EXT LT/BEACON/LOWER",
          "U03",
          "122VU"
        ]
      ],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "33",
      "title": "COCKPIT FLOOR/CONSOLE/BRIEFCASE LIGHTS INOP",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "Capt's side = Z05. F/O's side = Z06.",
      "steps": "Check the condition of underseat lights for damage\nsockets.",
      "duration": "N/A.",
      "pass": "Panel lights work normally.",
      "fail": "Panel lights remain inop.",
      "notes": "",
      "signoff": "AMM33-12-00-710-001.",
      "mel": "MEL33-10-01=Cockpit Lighting System."
    },
    {
      "ata": "33",
      "title": "33CABINBRITE",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (33/33cabinbrite.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "33",
      "title": "CABIN LIGHTS WON’T TURN ON",
      "archived": true,
      "config": "None specfic.",
      "cbText": "Refer to Chapter 33 C/B Table (Archive Graphic: 33/FAP.gif)",
      "steps": "Open associated breaker for 3 seconds, then reset.\nIf no help, reset CIDS thru PTP or MCDU.",
      "duration": "2 seconds.",
      "pass": "Lights turn on.",
      "fail": "Fault remains.",
      "notes": "If a couple successive rows of cabin lights won’t  turn on, associated DEU is failed.",
      "signoff": "AMM33-21-00-710-001 (lights test).\nAMM23-73-00-740-005 (CIDS bite).",
      "mel": "MEL23-73-02=DEU#A.\nMEL33-21-01=Cabin Light System."
    },
    {
      "ata": "33",
      "title": "INTEGRAL PANEL LIGHTING INOP",
      "archived": true,
      "config": "No specific",
      "cbText": "Check light controllers below for circuit breaker or fuse locations.",
      "steps": "If multiple panel lights are inop, a fuse is blown in \nthe associated light controller. Replace associated fuse, or controller.",
      "duration": "N/A.",
      "pass": "Panel lights work normally.",
      "fail": "Panel lights remain inop.",
      "notes": "",
      "signoff": "AMM33-13-00-710-001.",
      "mel": "MEL33-10-01=Instrument Panel Lighting System."
    },
    {
      "ata": "33",
      "title": "33READINGLIGHT",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (33/33readinglight.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "33",
      "title": "33STROBELIGHT",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (33/33strobelight.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "33",
      "title": "33WHEELWELL",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (33/33wheelwell.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "34",
      "title": "34GPWS",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (34/34GPWS.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "34",
      "title": "NAV ILS/MMR 1(2)",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "Refer to Chapter 34 C/B Table (Archive Graphic: 34/mmr.gif)",
      "steps": "Open associated breaker for 5 seconds, then reset.\nIf no help, check MMR in fwd E&E for fault light.",
      "duration": "10 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "MMR is normally the cause of this fault.",
      "signoff": "AMM34-36-00-740-003.",
      "mel": "MEL34-58-01=Gobal Positioning System.\nMEL34-36-01=ILS #2 System"
    },
    {
      "ata": "34",
      "title": "34PREDWINDSHEAR",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (34/34PREDwindshear.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "34",
      "title": "34RA",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (34/34RA.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "34",
      "title": "34TCAS",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (34/34TCAS.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "34",
      "title": "ADIRU-FLASHING ALIGN LIGHT AT ALIGNMENT",
      "archived": true,
      "config": "Aircraft on ground, not moving, (PPOS)-present position entered thru MCDU INIT page.",
      "cbText": "None.",
      "steps": "Affected ADIRU, turn the rotary knob on ADIRS control panel to ATT for 5 seconds, then to OFF for 20 seconds, then to NAV. If no help, affected ADIRU needs to cool down. If cool, replace ADIRU.",
      "duration": "600 seconds.",
      "pass": "Normal alignment.",
      "fail": "Fault remains.",
      "notes": "",
      "signoff": "AMM34-13-00-740-002.",
      "mel": "MEL34-10-01=ADIRS."
    },
    {
      "ata": "34",
      "title": "34ADIRUFLASHINGTAKEOFF",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (34/34adiruflashingtakeoff.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "34",
      "title": "34ALLCIRCUITBREAKERS",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (34/34allcircuitbreakers.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "34",
      "title": "34AUTOTUNE",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (34/34autotune.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "34",
      "title": "34FLIGHTRECORDER",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (34/34flightrecorder.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "34",
      "title": "34GPS",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (34/34gps.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "34",
      "title": "34GPSPRIMARY",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (34/34gpsprimary.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "34",
      "title": "34WINDSHEAR",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (34/34windshear.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "35",
      "title": "CHAPTER 35-CIRCUIT BREAKER LOCATION",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [
        [
          "CREW SPLY",
          "C1",
          "49VU"
        ],
        [
          "CTL & WARN",
          "C2",
          "49VU"
        ],
        [
          "CTL & WARN",
          "C3",
          "49VU"
        ],
        [
          "CTL & WARN",
          "C4",
          "49VU"
        ],
        [
          "ACTUATION",
          "C5",
          "49VU"
        ],
        [
          "ACTUATION",
          "C6",
          "49VU"
        ],
        [
          "ACTUATION",
          "C7",
          "49VU"
        ],
        [
          "ACTUATION",
          "C8",
          "49VU"
        ]
      ],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "35",
      "title": "CREW OXYGEN LOW PRESSURE MESSAGE",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "None.",
      "steps": "Verify crew oxygen pushbutton swich is selected \n“ON”. If no help, make sure the crew oxygen bottle valve is turned on. The bottle is in the FWD left equipment bay.",
      "duration": "N/A.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "",
      "signoff": "TSM35-10-00-810-820.",
      "mel": "MEL35-13-01=ECAM Page Indications."
    },
    {
      "ata": "36",
      "title": "CHAPTER 36-CIRCUIT BREAKER LOCATION",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [
        [
          "AIR BLEED/ENG 1/MONG",
          "D11",
          "49VU"
        ],
        [
          "AIR BLEED/ENG 2/MONG",
          "Z22",
          "122VU"
        ],
        [
          "AIR BLEED/ENG 1/CTL",
          "D12",
          "49VU"
        ],
        [
          "AIR BLEED/ENG 2/CTL",
          "Z23",
          "122VU"
        ],
        [
          "AIR BLEED/X FEED VALVE/NORM",
          "Z20",
          "122VU"
        ],
        [
          "AIR BLEED/X FEED/VALVE/BAT",
          "D13",
          "49VU"
        ]
      ],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "36",
      "title": "BMC PROBLEMS",
      "archived": true,
      "config": "Aircraft on ground, engines off.",
      "cbText": "Refer to Chapter 36 C/B Table (Archive Graphic: 36/BMC.gif)",
      "steps": "Open associated breaker for 1 second, then reset.",
      "duration": "25 seconds.",
      "pass": "Message disappears.",
      "fail": "Message remains. Check BMC for faults.",
      "notes": "No notes at this time.",
      "signoff": "AMM36-11-00-740-001 (BMC TEST).",
      "mel": "MEL36-11-01=Bleed Air Systems."
    },
    {
      "ata": "36",
      "title": "CLASS 2 AIR BLEED MESSAGE",
      "archived": true,
      "config": "Aircraft on ground, emergency electrical generator test recently performed.",
      "cbText": "Refer to Chapter 36 C/B Table (Archive Graphic: 31/FWC.gif)",
      "steps": "Open both FWC breaker for 5 seconds, then reset.\nIf no help reset both BMC’s (D11,D12,Z22,Z23) and FWC breakers again. If no help check BMC for faults.",
      "duration": "90 seconds, triple click.",
      "pass": "Message disappears.",
      "fail": "Message remains. Check BMC for faults.",
      "notes": "This fault is latched after Emergency Generator \ntest.",
      "signoff": "AMM36-11-00-740-001 (BMC TEST).",
      "mel": "MEL36-00=Class 2 Maintenance MSG on ECAM."
    },
    {
      "ata": "36",
      "title": "CROSS BLEED VALVE FAULTS",
      "archived": true,
      "config": "Aircraft on ground. Packs off.",
      "cbText": "Refer to Chapter 36 C/B Table (Archive Graphic: 36/crossbleed.gif)",
      "steps": "Open associated circuit breaker for 1 second, then\nreset.",
      "duration": "5 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM36-12-00-710-001 (Crossbleed Valve Ops Test).",
      "mel": "MEL36-12-04=Cross Bleed Valve"
    },
    {
      "ata": "36",
      "title": "AIR BLEED - LEFT WING LEAK/LOOP MESSAGE",
      "archived": true,
      "config": "Aircraft on ground, packs running, engines off.",
      "cbText": "Refer to Chapter 36 C/B Table (Archive Graphic: 36/BMC.gif)",
      "steps": "Reset affected bleed pushbutton first, no help\nopen associated breakers for 1 second, then reset.",
      "duration": "25 seconds.",
      "pass": "Message disappears.",
      "fail": "Message remains. Check BMC for faults.",
      "notes": "Fault means high temp(or bleed leak) sensed by one\nof two loops. Can be generated in hot station, then clear in cool station due to poor loop installation,(factory problem).",
      "signoff": "AMM36-11-00-740-001 (BMC TEST).",
      "mel": "MEL36-00=Class 2 Maintenance Messages only"
    },
    {
      "ata": "36",
      "title": "AIR BLEED - RIGHT WING LEAK/LOOP MESSAGE",
      "archived": true,
      "config": "Aircraft on ground, packs running, engines off.",
      "cbText": "Refer to Chapter 36 C/B Table (Archive Graphic: 36/BMC.gif)",
      "steps": "Reset affected bleed pushbutton first, no help\nopen associated breakers for 1 second, then reset.",
      "duration": "25 seconds.",
      "pass": "Message disappears.",
      "fail": "Message remains. Check BMC for faults.",
      "notes": "Fault means high temp(or bleed leak) sensed by one\nof two loops. Can be generated in hot station, then clear in cool station due to poor loop installation,(factory problem).",
      "signoff": "AMM36-11-00-740-001 (BMC TEST).",
      "mel": "MEL36-00=Class 2 Maintenance Messages only"
    },
    {
      "ata": "38",
      "title": "CHAPTER 38-CIRCUIT BREAKER LOCATION",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "38",
      "title": "TOILET’S WON’T FLUSH",
      "archived": true,
      "config": "Aircraft on ground, lav service panel door is closed and the waste tank is not full, depressurization valve light off-(if installed).",
      "cbText": "Refer to Chapter 38 C/B Table (Archive Graphic: 38/lav.gif)",
      "steps": "Open breaker for 1 seconds, then reset.",
      "duration": "5 seconds.",
      "pass": "Lav’s flush normally",
      "fail": "Lav’s won’t flush.",
      "notes": "CIDS fault light also displayed, troubleshoot thru\nCIDS. There is also a Toilets page in the CFDS(page #2) via the MCDU. If Vacuum Generator is inop, toilets will still flush in flight above FL180.",
      "signoff": "AMM38-31-00-710-002.",
      "mel": "MEL38-30-01=Lavatory Waste Systems."
    },
    {
      "ata": "38",
      "title": "NO WATER PRESSURE",
      "archived": true,
      "config": "Aircraft on ground. water service panel door closed, apu \nbleed on.",
      "cbText": "None.",
      "steps": "Check fwd flight attendant panel. Verify WTR SYSTEM DEPRESS pushbutton is not illuminated.",
      "duration": "30 seconds.",
      "pass": "Water pressure is normal.",
      "fail": "No water pressure.",
      "notes": "Verify the water servicing access door is closed and servicing valve is also closed. Not all aircraft have the “WTR SYST DEPRES” button installed on FWD FAP.",
      "signoff": "TSM38-41-00-810-801.",
      "mel": "MEL38-10-01=Potable Water Systems."
    },
    {
      "ata": "46",
      "title": "46ALLCIRCUITBREAKERS",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (46/46allcircuitbreakers.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "46",
      "title": "46ATSU",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (46/46atsu.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "46",
      "title": "46ATSULOCKED",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (46/46atsulocked.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "49",
      "title": "49ALLCIRCUITBREAKERS",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (49/49allcircuitbreakers.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "49",
      "title": "49APU",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (49/49apu.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "49",
      "title": "49APUBLEED",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (49/49apubleed.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "49",
      "title": "49APUGEN",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (49/49apugen.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "49",
      "title": "49APUSHUTDOWN",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (49/49apushutdown.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "49",
      "title": "Honeywell 131-9(A) APU T/S DATA",
      "archived": true,
      "config": "",
      "cbText": "None",
      "steps": "",
      "duration": "",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "",
      "signoff": "",
      "mel": ""
    },
    {
      "ata": "52",
      "title": "52ALLCIRCUITBREAKERS",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (52/52allcircuitbreakers.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "52",
      "title": "COCKPIT DOOR FAULT",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "Refer to Chapter 52 C/B Table (Archive Graphic: 52/cockpit.gif)",
      "steps": "Open associated circuit breakers for 5 seconds, then reset. If no help, check for faults on the overhead door controller.",
      "duration": "5 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "Overhead door controller.",
      "signoff": "AMM52-51-00-710-001.",
      "mel": "MEL52-50-01=Door Lock Solenoid.\nMEL52-50-02=Door Locking System."
    },
    {
      "ata": "52",
      "title": "CABIN DOOR PRESSURE LIGHT FLASHING",
      "archived": true,
      "config": "Aircraft on ground, engines shut down, door disarmed, no risidual cabin pressure on board.",
      "cbText": "Refer to Chapter 52 C/B Table (Archive Graphic: 52/flashing.gif)",
      "steps": "Try reseting above circuit breaker, if no help T/S by removing the connector from the 14WN pressure switch in FWD E&E. If light extingishes change switch.",
      "duration": "5 seconds.",
      "pass": "Fault clears.",
      "fail": "Fault remains.",
      "notes": "Light normally flashes when both engines are shut down, the associated slide is disarmed and cabin pressure is greater then .036 PSI.",
      "signoff": "TSM52-73-00-810-801.",
      "mel": "MEL52-70-02=Cabin Pressure Light On Door."
    },
    {
      "ata": "73",
      "title": "ENGINE 1(2) EGT OVERLIMIT",
      "archived": true,
      "config": "No specific",
      "cbText": "None.",
      "steps": "Read the specific data report from the MCDU=(CFDS/INST/EIS1/XLOAD(optional)/ENGINE).",
      "duration": "N/A.",
      "pass": "N/A.",
      "fail": "N/A.",
      "notes": "If the valve of one of these parameters is higher \nthan the max limit, the report also shows how long (in seconds) the associated parameter was at that limit. If no overlimit condition occured, there is no time indication.\n\nCheck history, if more than 5 hits within the first 25 cycles of the first hit, the exceedance condition must be idenified.\n\nYou can reset these values if necessary. Push the line key adjacent to the “RESET MAX VALUES” then “CONFIRM RESET” indications.",
      "signoff": "CFM=TSM73-00-00-810-849, AMM72-00-00-200-008.V2500=TSM73-22-00-810-861, AMM71-00-00-710-014.",
      "mel": "No MEL."
    },
    {
      "ata": "73",
      "title": "ENGINE 1(2) EIU FAULT",
      "archived": true,
      "config": "Aircraft on ground, engines stopped.",
      "cbText": "Refer to Chapter 73 C/B Table (Archive Graphic: 73/fadec.gif)",
      "steps": "Open associated breaker for 1 second, then reset.\nIf you have dual EIU faults, perform a FADEC (A/B) bite, then select start cycle rotary switch from norm to crank, wait 14 seconds and return to norm, wait 5 min, then pull ENG 1/2 oil pressure CB, reset after 5 seconds",
      "duration": "2 seconds.",
      "pass": "Fault Clears",
      "fail": "Fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM73-22-00-710-040.",
      "mel": "No MEL."
    },
    {
      "ata": "73",
      "title": "ENGINE 1(2) EIU MAINTENANCE STATUS",
      "archived": true,
      "config": "Aircraft on ground, engines stopped.",
      "cbText": "Refer to Chapter 73 C/B Table (Archive Graphic: 73/fadec.gif)",
      "steps": "Open associated breaker for 1 second, then reset.If\nno help, perform FADEC (A/B) bite test.",
      "duration": "2 seconds.",
      "pass": "Fault Clears",
      "fail": "Fault remains.",
      "notes": "If associated with fault message check 17(16)HB\ncircuitry or EIU 1(2), can be caused by failed flow control valve or relay 16HB(17HB), pack closure relay.",
      "signoff": "AMM73-22-00-710-040.",
      "mel": "MEL71-00=Class 2 Message."
    },
    {
      "ata": "73",
      "title": "CHAPTER 73-CIRCUIT BREAKER LOCATION",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [
        [
          "ENG1/REV/LOCK",
          "N44",
          "121VU"
        ],
        [
          "ENG2/REV/LOCK",
          "N45",
          "121VU"
        ],
        [
          "ENGINE/ENG1/OIL/QTY",
          "N39",
          "121VU"
        ],
        [
          "ENGINE/ENG2/OIL/QTY",
          "N41",
          "121VU"
        ],
        [
          "ENGINE/ENG1/OIL/PRESS/AND REV SNSR/CHAN A",
          "N40",
          "121VU"
        ],
        [
          "ENGINE/ENG2/OIL/PRESS/AND REV SNSR/CHAN A",
          "N42",
          "121VU"
        ],
        [
          "ENGINE/ENG1 AND 2/EVMU",
          "R44",
          "121VU"
        ],
        [
          "ENGINE/1 AND 2/IGN/SYS A",
          "A03",
          "49VU"
        ],
        [
          "ENGINE/IGN/ENG1/SYS A BAT",
          "P39",
          "121VU"
        ],
        [
          "ENGINE/IGN/ENG2/SYS A BAT",
          "P40",
          "121VU"
        ],
        [
          "ENGINE/IGN/ENG1/SYS B",
          "P41",
          "121VU"
        ],
        [
          "ENGINE/IGN/ENG2/SYS B",
          "P42",
          "121VU"
        ],
        [
          "ENGINE/1/HP FUEL SOV",
          "A01",
          "49VU"
        ],
        [
          "ENGINE/2/HP FUEL SOV",
          "A02",
          "49VU"
        ],
        [
          "ENGINE/1/FADEC A/AND EIU 1",
          "A04",
          "49VU"
        ],
        [
          "ENGINE/2/FADEC A/AND EIU 2",
          "A05",
          "49VU"
        ],
        [
          "ENGINE/ENG1/FADEC B/AND EIU 1",
          "R41",
          "121VU"
        ],
        [
          "ENGINE/ENG2/FADEC B",
          "Q40",
          "121VU"
        ]
      ],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "73",
      "title": "ENGINE 1(2) EPR MODE FAULT MESSAGE",
      "archived": true,
      "config": "No specific",
      "cbText": "None.",
      "steps": "Recovery of EPR on both engines may be attemped\nby switching off each engine’s N1 mode switch.",
      "duration": "N/A.",
      "pass": "N/A.",
      "fail": "N/A.",
      "notes": "If EPR was fluctuating, check PFR for associated failures.P2/T2 or P5 failures = check associated lines for leaks.",
      "signoff": "AMM73-22-00-710-040.",
      "mel": "No MEL."
    },
    {
      "ata": "73",
      "title": "ENGINE 1(2) FADEC A(B) CHANNEL FAULT",
      "archived": true,
      "config": "Aircraft on ground, engines stopped.",
      "cbText": "Refer to Chapter 73 C/B Table (Archive Graphic: 73/fadec.gif)",
      "steps": "If this alert triggers at engine start, apply the following procedures:\n1. Aircraft on ground.\n2. Set ENG MASTER SW (affected) to off.\n3. Confirm ENG (FADEC) GND PWR (affected) pb-sw to OFF. Wait appprox 1 minute in order to have N2 below 5%.\n4. Cycle/Reset above affected C/B's.\n5. After ECU power-up sequence, consider a engine dry crank (if applicable).\n6. Restart the engine.",
      "duration": "2 seconds.",
      "pass": "Fault Clears",
      "fail": "Fault remains.",
      "notes": "No notes at this time.",
      "signoff": "AMM73-22-00-710-040.",
      "mel": "No MEL."
    },
    {
      "ata": "73",
      "title": "ENGINE 1(2) FADEC FAULT",
      "archived": true,
      "config": "Aircraft on ground, engines stopped, ECU’s powered.",
      "cbText": "Refer to Chapter 73 C/B Table (Archive Graphic: 73/fadec.gif)",
      "steps": "If this alert triggers at engine start, apply the following procedures:\n1. Aircraft on ground.\n2. Set ENG MASTER SW (affected) to off.\n3. Confirm ENG (FADEC) GND PWR (affected) pb-sw to OFF. Wait appprox 1 minute in order to have N2 below 5%.\n4. Cycle/Reset above affected C/B's.\n5. After ECU power-up sequence, consider a engine dry crank (if applicable).\n6. Restart the engine.",
      "duration": "2 seconds.",
      "pass": "Fault Clears",
      "fail": "Fault remains.",
      "notes": "HPTCC VLV(POS), HMU or TCC faults not confirmed\non FADEC test are spurious.",
      "signoff": "AMM73-22-00-710-040.",
      "mel": "NO MEL."
    },
    {
      "ata": "73",
      "title": "ENGINE 1(2) OVERSPEED",
      "archived": true,
      "config": "No specific",
      "cbText": "None.",
      "steps": "Read the specific data report from the MCDU=(CFDS/INST/EIS1/XLOAD(optional)/ENGINE).",
      "duration": "N/A.",
      "pass": "N/A.",
      "fail": "N/A.",
      "notes": "If the valve of one of these parameters is higher \nthan the max limit, the report also shows how long (in seconds) the associated parameter was at that limit. If no overlimit condition occured, there is no time indication.\n\nCFM=N1 speed >104 and N2 speed >105 will require inspections. T/S per TSM\n\nV2500=N1/N2=100% 5465RPM/14,915RPM will require inspections.\n\nYou can reset these values if necessary. Push the line key adjacent to the “RESET MAX VALUES” then “CONFIRM RESET” indications.",
      "signoff": "CFM=TSM73-00-00-810-850.\nV2500=AMM71-00-00-860-010.",
      "mel": "No MEL."
    },
    {
      "ata": "73",
      "title": "ENGINE 1(2) OVERSPEED PROTECTION FAULT V2500",
      "archived": true,
      "config": "Overspeed Protection Fault identified by FMU/HC/EEC1/2 on PFR with fault code \"OSFFMU\".",
      "cbText": "None.",
      "steps": "Read the FADEC fault codes shown in the FLIGHT DATA and GROUND DATA sections. If you have fault code \"OSFFMU\" attempt to clear the overspeed protection fault as follow's. All other fault codes trouble shoot iaw TSM.\n        \n1. On the 50VU, push the ENG FADEC GRD PWR pushbutton switch and release it again. (Resets FADEC)\n        \n\n        \n2. Push INT mode key on the MCDU and enter a new flight number.\n        \n\n        \n3. Start the engine and run at idle for 4 minutes with engine generator on, then turnoff associated engine generator for 1 minute.\n        \n\n        \n4. Shutdown the engine, and if there are no ECAM/PFR faults, return to service.\n        \n\n        \n5. If fault code OSFFMU continues, repeat above steps, If fault still wont clear, check \"B\" and \"C\" contectors (Pins J/H) on FMU. Also check \"J5\" and \"J11\" contectors (Pins J/d) at EEC. Check TSM for torque motor resistance valves.",
      "duration": "N/A.",
      "pass": "Return to service.",
      "fail": "Repeat above steps until cleared.",
      "notes": "There is no limit to the number of times you may perform this procedure, and can be performed by the crew after pushback without delaying the flight as long as the ecam message clears.",
      "signoff": "Supplement to TSM73-22-00-810-851.",
      "mel": "No MEL."
    },
    {
      "ata": "78",
      "title": "CHAPTER 78-CIRCUIT BREAKER LOCATION",
      "archived": true,
      "config": "Reference Circuit Breaker Location Table",
      "cbHeaders": [
        "DESIGNATION",
        "LOCATION",
        "PANEL"
      ],
      "cbs": [
        [
          "ENG1/REV/LOCK",
          "N44",
          "121VU"
        ],
        [
          "ENG2/REV/LOCK",
          "N45",
          "121VU"
        ],
        [
          "ENGINE/ENG1/OIL/PRESS/AND REV SNSR/CHAN A",
          "N40",
          "121VU"
        ],
        [
          "ENGINE/ENG2/OIL/PRESS/AND REV SNSR/CHAN A",
          "N42",
          "121VU"
        ],
        [
          "ENGINE/1/FADEC A/AND EIU 1",
          "A04",
          "49VU"
        ],
        [
          "ENGINE/2/FADEC A/AND EIU 2",
          "A05",
          "49VU"
        ],
        [
          "ENGINE/ENG1/FADEC B/AND EIU 1",
          "R41",
          "121VU"
        ],
        [
          "ENGINE/ENG2/FADEC B",
          "Q40",
          "121VU"
        ]
      ],
      "steps": "Locate applicable circuit breaker from table above.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Extracted from original Chapter C/B Location list.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "78",
      "title": "THRUST REV FAULT AT ENGINE SHUTDOWN",
      "archived": true,
      "config": "No specific",
      "cbText": "None.",
      "steps": "Warning will clear on its own within 5 minutes.",
      "duration": "N/A.",
      "pass": "N/A.",
      "fail": "N/A.",
      "notes": "No troubleshooting required if warning is generated\nat engine shutdown.",
      "signoff": "CFM=AMM78-31-00-710-042.\nV2500=AMM78-31-00-710-042.",
      "mel": "MEL78-30-01=Thrust Reverser Systems."
    },
    {
      "ata": "78",
      "title": "THRUST REV FAULT AT ENGINE START",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "None.",
      "steps": "Shut down engine. Put engine mode select switch\nto IGN, wait 15 seconds, then back to norm. If no faults, start engines.",
      "duration": "N/A.",
      "pass": "N/A.",
      "fail": "N/A.",
      "notes": "To prevent fault, select FADEC’s on from the 50VU\nmaintenance panel prior to mode select switch to IGN.",
      "signoff": "CFM=AMM78-31-00-710-042.\nV2500=AMM78-31-00-710-042.",
      "mel": "MEL78-30-01=Thrust Reverser Systems."
    },
    {
      "ata": "78",
      "title": "THRUST REV TEST THRU MCDU WON’T PASS",
      "archived": true,
      "config": "Aircraft on ground.",
      "cbText": "None.",
      "steps": "Test thrust reversers with engines running.",
      "duration": "N/A.",
      "pass": "N/A.",
      "fail": "N/A.",
      "notes": "See TSM 78-00-00-810-802, Thurst reverser test\nwithout CFDS, Engines running.",
      "signoff": "AMM78-31-00-710-04301. (Test with engines running)",
      "mel": "MEL78-30-01=Thrust Reverser Systems."
    },
    {
      "ata": "79",
      "title": "79ALLCIRCUITBREAKERS",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (79/79allcircuitbreakers.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    },
    {
      "ata": "79",
      "title": "79CLOGGED",
      "archived": false,
      "config": "Page not archived on Wayback Machine (HTTP 404).",
      "cbText": "N/A",
      "steps": "Original archive path (79/79clogged.html) returned 404. You can edit resets-data.js to add your own notes.",
      "duration": "N/A",
      "pass": "N/A",
      "fail": "N/A",
      "notes": "Unarchived subpage.",
      "signoff": "N/A",
      "mel": "N/A"
    }
  ],
  "ACRONYMS": [],
  "OTHER_ITEMS": [
    {
      "mod": "fuel",
      "code": "XFR-01",
      "title": "ACT(s) TO CENTER",
      "tag": "321 Fuel XFR",
      "detail": "airbus/fuel transfer/actcenter.html"
    },
    {
      "mod": "fuel",
      "code": "XFR-02",
      "title": "WINGS TO ACT(s)",
      "tag": "321 Fuel XFR",
      "detail": "airbus/fuel transfer/wingact.html"
    },
    {
      "mod": "fuel",
      "code": "XFR-03",
      "title": "CENTER TO WINGS",
      "tag": "321 Fuel XFR",
      "detail": "airbus/fuel transfer/centerwing.html"
    },
    {
      "mod": "fuel",
      "code": "XFR-04",
      "title": "WINGS TO CENTER",
      "tag": "321 Fuel XFR",
      "detail": "airbus/fuel transfer/wingscenter.html"
    },
    {
      "mod": "fuel",
      "code": "XFR-05",
      "title": "PRIME ACT PUMPS",
      "tag": "321 Fuel XFR",
      "detail": "airbus/fuel transfer/prime.html"
    },
    {
      "mod": "locations",
      "code": "LOC-CB",
      "title": "Circuit Breaker Locations",
      "tag": "Locations",
      "detail": "airbus/CBlocations.html"
    },
    {
      "mod": "locations",
      "code": "LOC-EE",
      "title": "E&E Locations",
      "tag": "Locations",
      "detail": "airbus/EElocations.html"
    },
    {
      "mod": "locations",
      "code": "LOC-80VU",
      "title": "Main E&E/80VU Box Layout",
      "tag": "Locations",
      "detail": "airbus/80VU.html"
    },
    {
      "mod": "locations",
      "code": "LOC-OVHD",
      "title": "Overhead Panel",
      "tag": "Panels",
      "detail": "airbus/panels/Overhead.html"
    },
    {
      "mod": "locations",
      "code": "LOC-PED",
      "title": "Pedestal Panel",
      "tag": "Panels",
      "detail": "airbus/panels/Pedestal.html"
    },
    {
      "mod": "lights",
      "code": "LT-EXT",
      "title": "Exterior Lights",
      "tag": "320 Lights",
      "detail": "airbus/Exterior lights/exterior.html"
    },
    {
      "mod": "lights",
      "code": "LT-CKPT",
      "title": "Cockpit Lights",
      "tag": "320 Lights",
      "detail": "airbus/Cockpit lights/cockpit.html"
    },
    {
      "mod": "lights",
      "code": "LT-INT",
      "title": "Interior Lights",
      "tag": "320 Lights",
      "detail": "airbus/Interior lights/interior.html"
    },
    {
      "mod": "lights",
      "code": "LT-CRG",
      "title": "Cargo/Service Lights",
      "tag": "320 Lights",
      "detail": "airbus/Cargo lights/cargo.html"
    },
    {
      "mod": "callups",
      "code": "ALPHA-SYS",
      "title": "CALL UPS BY SYSTEM",
      "tag": "AIDS Call Ups",
      "detail": "airbus/callups/allcallups.html"
    },
    {
      "mod": "callups",
      "code": "ALPHA-ALL",
      "title": "ALL CALL UPS",
      "tag": "AIDS Call Ups",
      "detail": "airbus/callups/allcallups.html"
    }
  ]
};
