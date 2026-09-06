# Sunita Surgicals Website

A professional, responsive medicine-information website designed to work directly with **GitHub Pages**.

## Included features

- Responsive professional design
- Home, About Us, Medicines, and Contact sections
- Sticky navigation bar
- Mobile menu
- Search medicines instantly
- Filter medicines by category
- Medicine detail modal
- Uses, precautions, side effects, and general notes
- Medical disclaimer
- Contact form using `mailto:`
- Scroll animations
- Back-to-top button
- No framework or build process needed
- Fully compatible with GitHub Pages

## Project structure

```text
sunita-surgicals/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        ├── medicines.js
        └── app.js
```

## Run on your computer

Just open `index.html` in your browser.

For best local testing, you can also use VS Code Live Server.

## Publish with GitHub Pages

1. Create a new GitHub repository, for example:
   `sunita-surgicals`
2. Upload all files and folders from this project.
3. Open the repository on GitHub.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select:
   - Branch: `main`
   - Folder: `/ (root)`
7. Click **Save**.
8. GitHub will provide your live website URL after deployment.

The URL will normally look like:

`https://YOUR-USERNAME.github.io/sunita-surgicals/`

## Update business details

In `index.html`, replace:

- `+977 98XXXXXXXX`
- `info@sunitasurgicals.com`
- `Nepal`

with your actual phone number, email, and address.

Also update the email address inside `assets/js/app.js` in the contact-form section.

## Add or edit medicines

Open:

`assets/js/medicines.js`

Each medicine uses this structure:

```js
{
  id: 10,
  name: "Medicine Name",
  generic: "Generic name",
  category: "Category",
  summary: "Short description",
  uses: ["Use one", "Use two"],
  precautions: ["Precaution one", "Precaution two"],
  sideEffects: ["Side effect one"],
  note: "General information"
}
```

Add a comma after the previous medicine and insert a new object.

## Important medical-content note

The sample medicine content in this project is intentionally general and educational. Before using this website for a real healthcare or surgical business, have all medical information reviewed by a qualified pharmacist or medical professional and keep it updated according to applicable local laws and professional standards.

## Optional upgrades

You can later add:

- Admin panel
- Firebase / Supabase database
- Online product catalogue
- Product images
- WhatsApp button
- Google Maps
- Real contact form through Formspree or EmailJS
- Login and admin authentication
- Medicine inventory and stock status
- Nepali/English language switch
