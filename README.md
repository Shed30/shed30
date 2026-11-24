# Shed30 website

The Shed30 homepage, built with Next.js, React and Tailwind CSS. Hosted on Netlify at shed30.com.

## Run it on your computer

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Where things live

- `app/page.tsx`: all the homepage sections and their text
- `components/ToolShed.tsx`: the toolshed wall and the pop-up text for each tool
- `components/ContactForm.tsx`: the contact form (uses Netlify Forms)
- `public/images/`: logo, photos, project images and icons
- `public/__forms.html`: tells Netlify about the contact form. Don't delete it.

## Publishing changes

Push to GitHub and Netlify rebuilds the site automatically:

```bash
git add .
git commit -m "Describe your change"
git push
```
