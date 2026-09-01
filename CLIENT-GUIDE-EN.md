# The Merc — Website Client Guide

**Your website:** themercsd.com
**Your admin panel:** the-merc.sanity.studio
**Support contact:** eduskhd@gmail.com

---

## What Is This Document?

This is your complete guide to understanding and managing The Merc website. It covers:

- What each page of the site contains
- How to log into your admin panel
- How to add, edit, and delete events
- How to manage your menu
- How to upload and manage gallery photos
- What changes automatically
- What requires the developer

No technical knowledge required.

---

## Your Website at a Glance

The Merc website has **6 public pages:**

| Page | URL | What's on it |
|---|---|---|
| **Home** | themercsd.com | Hero photo, hours, events preview, food cards, social links |
| **Menu** | themercsd.com/menu | Full menu with tabs: Pizza, Burgers, Good Eats, Coffee, Drinks |
| **Events** | themercsd.com/events | Upcoming events and live music schedule |
| **Gallery** | themercsd.com/gallery | Photo grid of the venue |
| **About** | themercsd.com/about | Story of The Merc, pillars, Flandreau section |
| **Visit** | themercsd.com/visit | Hours, address, phone, directions |

### What updates automatically (no action needed)

| Feature | How it works |
|---|---|
| **Open / Closed badge** | Calculates in real time based on your hours |
| **Today's hours highlight** | The current day is highlighted on the Visit page |
| **Past events** | Events with a past date disappear automatically |
| **Tonight's banner** | If there's an event today, a banner appears on the home page |

---

## Your Admin Panel — Sanity Studio

Your admin panel is a private website where you can edit content without touching any code.

**URL:** `https://the-merc.sanity.studio`
**Login:** Your Sanity account (email + password)

### What the admin panel looks like

```
┌─────────────────────────────────────────────────────┐
│  The Merc — Admin                        [Publish]  │
├──────────────────┬──────────────────────────────────┤
│                  │                                  │
│   📅  Events     │   ← Click a section to manage it │
│                  │                                  │
│   🍕  Menu Items │                                  │
│                  │                                  │
│   🖼️  Gallery    │                                  │
│                  │                                  │
└──────────────────┴──────────────────────────────────┘
```

### Three sections you can manage

| Section | What you can do | How fast it appears on the site |
|---|---|---|
| **📅 Events** | Add, edit, delete events and live music | ~1 minute |
| **🍕 Menu Items** | Add, edit, hide, delete menu items | ~1 minute |
| **🖼️ Gallery** | Upload, reorder, remove photos | ~1 hour |

---

## Section 1 — Managing Events

### How to add a new event

**Step 1.** Go to `the-merc.sanity.studio` and log in.

**Step 2.** Click **📅 Events** in the left sidebar.

**Step 3.** Click the **pencil / new document** button (top right, looks like ✏️ or "+ New").

**Step 4.** Fill in the fields:

```
Artist / Event Name  →  [Steel Wheels Band            ]
Event Type           →  ● Live Music  ○ Trivia  ○ Special  ○ Community
Date                 →  [Oct 15, 2026                 ]
Start Time           →  [20:00   ]   ← 24h format (20:00 = 8 PM)
End Time             →  [23:00   ]   ← Optional
Description          →  [Country rock band from Nashville. Free to attend.]
Event Photo          →  [ Drag & drop photo here, or click to upload ]
Ticket URL           →  [                             ]   ← Leave empty if free
Featured Event       →  □  ← Check to show this event highlighted on the home page
```

**Step 5.** Click the green **Publish** button (top right).

**Done!** The event appears on the Events page within 60 seconds.

---

### Start Time format guide

The admin uses **24-hour format** for times:

| Clock time | Enter as |
|---|---|
| 7:00 AM | `07:00` |
| 12:00 PM (noon) | `12:00` |
| 5:00 PM | `17:00` |
| 7:00 PM | `19:00` |
| 8:00 PM | `20:00` |
| 9:00 PM | `21:00` |
| 10:00 PM | `22:00` |
| 11:00 PM | `23:00` |

---

### How to edit an existing event

**Step 1.** Click **📅 Events** in the sidebar.

**Step 2.** Click the event you want to edit from the list.

**Step 3.** Make your changes in the fields.

**Step 4.** Click **Publish**.

Changes appear on the site within 60 seconds.

---

### How to delete an event

**Step 1.** Click **📅 Events** → open the event.

**Step 2.** Click the **three dots menu** (⋯) in the top right corner.

**Step 3.** Select **Delete**.

**Step 4.** Confirm the deletion.

> **Tip:** You don't need to delete past events — they disappear from the site automatically when their date passes. Only delete if you made a mistake or cancelled the event.

---

### Tips for event photos

- Recommended size: at least **800×600 pixels**
- Formats: JPG, PNG, or WebP
- Use artist press photos, event posters, or your own photos of past events
- If you don't have a photo, leave the field empty — the site uses a default venue photo automatically

---

### How to mark an event as "Featured"

Check the **Featured Event** checkbox when creating or editing an event. Featured events appear with a gold "Featured" badge and may be highlighted more prominently on the home page.

---

## Section 2 — Managing Your Menu

### How to add a new menu item

**Step 1.** Click **🍕 Menu Items** in the sidebar.

**Step 2.** Click **+ New** (or the pencil icon).

**Step 3.** Fill in the fields:

```
Name              →  [Cowboy Layer Cake Burger              ]
Menu Section      →  ○ Pizza  ● Burgers  ○ Good Eats  ○ Coffee  ○ Drinks
Description       →  [Double smash patty, fried egg, bacon, cheddar.]
Price             →  [$16.00  ]
Tags              →  □ Gluten Free  □ Vegetarian  □ Vegan  ■ Popular  □ Spicy  □ New
Photo             →  [ Drag & drop photo here ]
Note              →  [Ask about daily availability]   ← Optional
Available on Menu →  ■  ← Keep checked to show on website
```

**Step 4.** Click **Publish**.

---

### How to temporarily hide a menu item

If a dish is temporarily unavailable (out of season, ingredient shortage, etc.):

**Step 1.** Open the menu item.

**Step 2.** **Uncheck** the **Available on Menu** checkbox.

**Step 3.** Click **Publish**.

The item disappears from the website but stays saved in the admin. Re-check the box to bring it back.

> This is better than deleting — you keep all the information and can restore it instantly.

---

### How to update a price

**Step 1.** Open the menu item.

**Step 2.** Click the **Price** field and change the number.

**Step 3.** Click **Publish**.

Price format examples:
- `$12` — single price
- `$10 / $14` — small / large
- `$3 each` — per unit
- Leave blank if the price changes daily

---

### Menu sections explained

| Section | Appears on tab |
|---|---|
| Pizza | 🍕 Pizza |
| Burgers | 🍔 Burgers |
| Good Eats | 🍟 Good Eats |
| Coffee | ☕ Coffee |
| Drinks | 🍺 Drinks |

Each item goes into exactly one section. If you add a new beer, choose **Drinks**. If you add a new sandwich, choose **Good Eats**.

---

## Section 3 — Managing Gallery Photos

### How to upload a new photo

**Step 1.** Click **🖼️ Gallery** in the sidebar.

**Step 2.** Click **+ New** to add a photo.

**Step 3.** Fill in the fields:

```
Photo             →  [ Drag & drop your photo here, or click to browse ]
Description       →  [Friday night live music crowd at The Merc]
Category          →  ○ Food  ○ Drinks  ● Live Music  ○ Venue  ○ People
Display Order     →  [5]   ← Lower number = shows first in the gallery
```

**Step 4.** Click **Publish**.

The photo appears in the gallery within about 1 hour.

---

### How to control the order of photos

Each photo has a **Display Order** number. Lower numbers appear first.

Example ordering:
```
Order 1  →  Outdoor concert (hero photo — show this first)
Order 2  →  Bar interior
Order 3  →  Cocktail
Order 4  →  Pizza
Order 5  →  Burger
...
```

To reorder, just change the numbers and publish each item.

---

### How to remove a photo from the gallery

**Step 1.** Open the photo in the admin panel.

**Step 2.** Click the **three dots menu** (⋯) → **Delete**.

**Step 3.** Confirm.

The photo is removed from the gallery within about 1 hour.

---

### Photo tips

- **Best photo size:** At least 800×600 pixels (larger is better)
- **Best formats:** JPG or PNG
- **Landscape photos** (wider than tall) look best in the gallery grid
- **Good lighting** makes a big difference — avoid blurry or dark photos
- The gallery works best with **12–20 photos**

---

## What Requires the Developer

The following changes cannot be made from the admin panel — contact the developer for these:

| What you need to change | Why it needs the developer |
|---|---|
| Business hours (Mon–Sun times) | Stored in a code file, not the admin panel |
| Phone number or address | Stored in a code file |
| Social media links | Stored in a code file |
| Menu section names (Pizza, Burgers…) | Part of the site design |
| Colors, fonts, layout | Requires code changes |
| Adding or removing pages | Requires code changes |
| Activating online ordering (Square) | Requires configuration |
| Changing the home page hero photo | Requires uploading to the server |
| Changing the About or Visit page text | Requires code changes |

**Developer contact:** eduskhd@gmail.com

---

## Activating Online Ordering — Square

When you're ready to accept online orders through Square:

1. Share your **Square Online ordering page URL** with the developer.
   It looks like: `https://order.squareup.com/preview/YOUR_LOCATION`

2. The developer adds it to the site configuration.

3. All "Order Online" buttons across the site will immediately link to your Square page.

Currently the buttons show "Coming Soon" — this is intentional until the URL is configured.

---

## Quick Reference Card

### Admin panel login
- URL: `https://the-merc.sanity.studio`
- Login: your email + password

### To add an event
Admin → 📅 Events → + New → Fill fields → Publish → live in ~1 min

### To add a menu item
Admin → 🍕 Menu Items → + New → Fill fields → Publish → live in ~1 min

### To hide a menu item
Admin → 🍕 Menu Items → Open item → Uncheck "Available" → Publish

### To upload a gallery photo
Admin → 🖼️ Gallery → + New → Upload photo → Fill description → Publish → live in ~1 hour

### Time format
Use 24-hour: 8 PM = `20:00`, 9 PM = `21:00`, 10 PM = `22:00`

### After clicking Publish
- Events and menu: appear on site in ~**60 seconds**
- Gallery photos: appear on site in ~**1 hour**

---

## Frequently Asked Questions

**Q: I published an event but it's not showing on the site yet.**
A: Wait 60 seconds and refresh the page. If it still doesn't appear after 2 minutes, check that the date is today or in the future (past events are hidden automatically).

**Q: Can I schedule events months in advance?**
A: Yes. Add the event with any future date and it will appear on the site immediately, sorted by date.

**Q: What happens to old events?**
A: They disappear from the website automatically when their date passes. You don't need to delete them — they stay in the admin panel for your records.

**Q: I deleted a photo but it's still showing on the gallery.**
A: The gallery updates every hour. Wait up to 60 minutes and it will be gone.

**Q: Can I add a special "daily specials" or "weekend deals" section?**
A: Yes — add them as menu items with the tag "New" and a note explaining the dates. Contact the developer if you need a dedicated specials section.

**Q: Someone else needs access to the admin panel.**
A: Contact the developer — we can invite additional users with their own login.

**Q: The site looks different on my phone vs. computer.**
A: The site is designed to adapt to all screen sizes — this is expected and intentional. On mobile, there's also a quick-access bar at the bottom of the screen with Menu, Order, Events, and Directions buttons.

---

## Need Help?

- **Admin panel questions:** eduskhd@gmail.com
- **Emergency (site is down):** eduskhd@gmail.com
- **Sanity support:** sanity.io/docs

---

*The Merc Website — Client Guide*
*Last updated: September 2026*
