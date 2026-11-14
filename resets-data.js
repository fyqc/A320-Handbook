python3 -c '
import re, json, html

raw = open("all_resets_raw.txt", encoding="utf-8", errors="ignore").read()
files = {}
for part in raw.split("=== FILE: airbus/")[1:]:
    fname, content = part.split(" ===\n", 1)
    files[fname.strip()] = content

def clean(t):
    t = re.sub(r"<br\s*/?>", "\n", t, flags=re.I)
    t = re.sub(r"<[^>]+>", "", t)
    return html.unescape(t).strip()

# Parse chapters from Achapter*.html
chapters = []
faults = []
chapter_titles = {
    "21": ("Chapter 21 - Air Conditioning & Pressurization", "Airconditioning & Pressurization"),
    "22": ("Chapter 22 - Auto Flight", "Auto Flight"),
    "23": ("Chapter 23 - Communications", "Communications"),
    "24": ("Chapter 24 - Electrical Power", "Electrical Power"),
    "25": ("Chapter 25 - Equipment & Furnishings", "Equipment & Furnishings"),
    "26": ("Chapter 26 - Fire Protection", "Fire Protection"),
    "27": ("Chapter 27 - Flight Controls", "Flight Controls"),
    "28": ("Chapter 28 - Fuel", "Fuel"),
    "29": ("Chapter 29 - Hydraulics", "Hydraulics"),
    "30": ("Chapter 30 - Ice & Rain", "Ice and Rain"),
    "31": ("Chapter 31 - Indications", "Indications"),
    "32": ("Chapter 32 - Landing Gear", "Landing Gear"),
    "33": ("Chapter 33 - Lights", "Lights"),
    "34": ("Chapter 34 - Navigation", "Navigation"),
    "35": ("Chapter 35 - Oxygen", "Oxygen"),
    "36": ("Chapter 36 - Pneumatic Systems", "Pneumatic"),
    "38": ("Chapter 38 - Water & Waste", "Water & Waste"),
    "46": ("Chapter 46 - Information System (ATSU)", "Information Systems"),
    "49": ("Chapter 49 - APU", "APU"),
    "52": ("Chapter 52 - Doors", "Doors"),
    "73": ("Chapter 73 - Engine", "Engines"),
    "78": ("Chapter 78 - Exhaust (Reversers)", "Exhaust"),
    "79": ("Chapter 79 - Engine Oil", "Oil")
}

for line in open("clean_resets.txt"):
    rel = line.strip()
    if not rel: continue
    ata = rel.split("/")[0]
    h = files.get(rel, "")
    is_html = "<html" in h.lower()
    title_m = re.search(r"<span class=\"graytitle\">(.*?)</span>", h, re.S | re.I)
    title = clean(title_m.group(1)) if title_m else rel

    if "allcircuitbreakers" in rel and is_html:
        rows = []
        for l in clean(h).splitlines():
            if "|" in l and "Designation" not in l:
                cols = [c.strip() for c in l.strip("|").split("|")]
                if len(cols) >= 3:
                    rows.append(cols[:3])
        faults.append({
            "ata": ata, "title": title, "archived": True,
            "config": "Reference Circuit Breaker Location Table",
            "cbHeaders": ["DESIGNATION", "LOCATION", "PANEL"],
            "cbs": rows,
            "steps": "Locate applicable circuit breaker from table above.",
            "duration": "N/A", "pass": "N/A", "fail": "N/A",
            "notes": "Extracted from original Chapter C/B Location list.",
            "signoff": "N/A", "mel": "N/A"
        })
    elif is_html:
        def sec(name):
            m = re.search(rf"{name}:</span>(.*?)(?=<span class=\"header\">|</li>)", h, re.S | re.I)
            return clean(m.group(1)) if m else ""
        pass_m = re.search(r"<strong>Pass</strong>:\s*(.*?)</p>", h, re.S | re.I)
        fail_m = re.search(r"<strong>Fail</strong>:\s*(.*?)</p>", h, re.S | re.I)
        cb_sec = re.search(r"Circuit breakers to reset:</span>(.*?)(?=<span class=\"header\">|</li>)", h, re.S | re.I)
        cb_raw = cb_sec.group(1) if cb_sec else ""
        gif_m = re.search(r"images/([^\"]+\.(?:gif|jpg|png))", cb_raw, re.I)
        cb_text = clean(cb_raw) or (f"Refer to Chapter {ata} C/B Table (Archive Graphic: {gif_m.group(1)})" if gif_m else "None")
        faults.append({
            "ata": ata, "title": title, "archived": True,
            "config": sec("Aircraft configuration prior to reset"),
            "cbText": cb_text,
            "steps": sec("Steps to clear warning") or sec("Normal PTU reset"),
            "duration": sec("Reset duration"),
            "pass": clean(pass_m.group(1)) if pass_m else "Fault clears.",
            "fail": clean(fail_m.group(1)) if fail_m else "Fault remains.",
            "notes": sec("Notes"),
            "signoff": sec("Sign off"),
            "mel": sec("Applicable deferrals")
        })
    else:
        faults.append({
            "ata": ata, "title": rel.split("/")[1].replace(".html", "").upper(), "archived": False,
            "config": "Page not archived on Wayback Machine (HTTP 404).",
            "cbText": "N/A",
            "steps": f"Original archive path ({rel}) returned 404. You can edit resets-data.js to add your own notes.",
            "duration": "N/A", "pass": "N/A", "fail": "N/A",
            "notes": "Unarchived subpage.", "signoff": "N/A", "mel": "N/A"
        })

for ata, (t, hd) in chapter_titles.items():
    cnt = len([f for f in faults if f["ata"] == ata])
    chapters.append({"ata": ata, "title": t, "header": hd, "count": cnt})

# Parse acronyms if acronyms.html exists in parent or current folder
acronyms = []
for candidate in ["acronyms.html", "../acronyms.html", "../Acronyms/acronyms.html"]:
    try:
        ac_html = open(candidate, encoding="utf-8", errors="ignore").read()
        for l in clean(ac_html).splitlines():
            if " - " in l and len(l) < 120:
                c, d = l.split(" - ", 1)
                acronyms.append({"code": c.strip(), "title": d.strip(), "tag": "Acronym"})
        break
    except FileNotFoundError:
        pass

data = {
    "MODULES": [
        {"id": "resets", "title": "Resets", "icon": "🔄"},
        {"id": "locations", "title": "Locations", "icon": "📍"},
        {"id": "lights", "title": "Light Bulb Part Numbers", "icon": "💡"},
        {"id": "acronyms", "title": "Airbus Acronyms", "icon": "🔤"},
        {"id": "fuel", "title": "321 Fuel Transfer Procedure", "icon": "⛽"},
        {"id": "mel", "title": "Airbus 320 MEL List", "icon": "⚠️"},
        {"id": "callups", "title": "Airbus Alpha Call Up Menu", "icon": "📢"}
    ],
    "RESET_CHAPTERS": chapters,
    "RESET_FAULTS": faults,
    "ACRONYMS": acronyms,
    "OTHER_ITEMS": [
        {"mod": "fuel", "code": "XFR-01", "title": "ACT(s) TO CENTER", "tag": "321 Fuel XFR", "detail": "airbus/fuel transfer/actcenter.html"},
        {"mod": "fuel", "code": "XFR-02", "title": "WINGS TO ACT(s)", "tag": "321 Fuel XFR", "detail": "airbus/fuel transfer/wingact.html"},
        {"mod": "fuel", "code": "XFR-03", "title": "CENTER TO WINGS", "tag": "321 Fuel XFR", "detail": "airbus/fuel transfer/centerwing.html"},
        {"mod": "fuel", "code": "XFR-04", "title": "WINGS TO CENTER", "tag": "321 Fuel XFR", "detail": "airbus/fuel transfer/wingscenter.html"},
        {"mod": "fuel", "code": "XFR-05", "title": "PRIME ACT PUMPS", "tag": "321 Fuel XFR", "detail": "airbus/fuel transfer/prime.html"},
        {"mod": "locations", "code": "LOC-CB", "title": "Circuit Breaker Locations", "tag": "Locations", "detail": "airbus/CBlocations.html"},
        {"mod": "locations", "code": "LOC-EE", "title": "E&E Locations", "tag": "Locations", "detail": "airbus/EElocations.html"},
        {"mod": "locations", "code": "LOC-80VU", "title": "Main E&E/80VU Box Layout", "tag": "Locations", "detail": "airbus/80VU.html"},
        {"mod": "locations", "code": "LOC-OVHD", "title": "Overhead Panel", "tag": "Panels", "detail": "airbus/panels/Overhead.html"},
        {"mod": "locations", "code": "LOC-PED", "title": "Pedestal Panel", "tag": "Panels", "detail": "airbus/panels/Pedestal.html"},
        {"mod": "lights", "code": "LT-EXT", "title": "Exterior Lights", "tag": "320 Lights", "detail": "airbus/Exterior lights/exterior.html"},
        {"mod": "lights", "code": "LT-CKPT", "title": "Cockpit Lights", "tag": "320 Lights", "detail": "airbus/Cockpit lights/cockpit.html"},
        {"mod": "lights", "code": "LT-INT", "title": "Interior Lights", "tag": "320 Lights", "detail": "airbus/Interior lights/interior.html"},
        {"mod": "lights", "code": "LT-CRG", "title": "Cargo/Service Lights", "tag": "320 Lights", "detail": "airbus/Cargo lights/cargo.html"},
        {"mod": "callups", "code": "ALPHA-SYS", "title": "CALL UPS BY SYSTEM", "tag": "AIDS Call Ups", "detail": "airbus/callups/allcallups.html"},
        {"mod": "callups", "code": "ALPHA-ALL", "title": "ALL CALL UPS", "tag": "AIDS Call Ups", "detail": "airbus/callups/allcallups.html"}
    ]
}

open("resets-data.js", "w", encoding="utf-8").write("window.TECH_DATA = " + json.dumps(data, indent=2, ensure_ascii=False) + ";\n")
print(f"Generated resets-data.js with {len(faults)} reset pages and {len(acronyms)} acronyms!")
'
