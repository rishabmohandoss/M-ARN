# Setting Up Your GitHub Pages Site

## Quick Overview
Your GitHub Pages site has been created! Here's how to get it live.

## Option 1: Fastest Setup (Recommended)

### 1. Create a GitHub Repository
- Go to https://github.com/new
- Name your repo: `our-pixel-story` (or any name you prefer)
- Add description: "Interactive pixel art Chrome extension for us"
- Choose **Public** (required for GitHub Pages)
- Click **Create repository**

### 2. Upload Your Files
You should have these files ready:
- `index.html` (the website)
- `manifest.json` (extension config)
- `content.js` (extension logic)
- `content.css` (extension styling)
- `README.md` (documentation)

#### Upload via GitHub Website (Easiest):
1. In your new repo, click **Add file** → **Upload files**
2. Drag all 5 files into the upload area
3. Click **Commit changes**

#### Or Upload via Git (if you know git):
```bash
git clone https://github.com/YOUR_USERNAME/our-pixel-story.git
cd our-pixel-story
# Copy all files into this folder
git add .
git commit -m "Initial commit: Add pixel story extension and site"
git push
```

### 3. Enable GitHub Pages
1. Go to your repo's **Settings**
2. Click **Pages** in the left sidebar
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait 1-2 minutes for GitHub to build your site

### 4. Your Site is Live!
Your GitHub Pages URL will be:
```
https://YOUR_USERNAME.github.io/our-pixel-story
```

Or if you named your repo after your username:
```
https://YOUR_USERNAME.github.io
```

## Option 2: Use a Custom Domain

If you want to use a custom domain like `ourpixelstory.com`:

1. **Buy a domain** from GoDaddy, Namecheap, or similar
2. Go to your repo **Settings** → **Pages**
3. Under "Custom domain", enter your domain name
4. Click **Save**
5. GitHub will show DNS configuration steps
6. Update your domain's DNS settings at your registrar
7. Check the "Enforce HTTPS" box once DNS is configured

## File Structure

Your repository should look like this:

```
our-pixel-story/
├── index.html          (The beautiful setup guide)
├── manifest.json       (Extension config)
├── content.js          (Extension animations)
├── content.css         (Extension styling)
├── README.md           (Documentation)
└── .gitignore          (Optional, for git)
```

## What Each File Does

| File | Purpose |
|------|---------|
| `index.html` | Beautiful setup instructions shown on GitHub Pages |
| `manifest.json` | Tells Chrome how to run your extension |
| `content.js` | Animation and click interaction logic |
| `content.css` | Pixel art design and animations |
| `README.md` | Quick reference guide for the repo |

## How Users Will Install

1. Visit your GitHub Pages site: `https://YOUR_USERNAME.github.io/our-pixel-story`
2. See the beautiful setup guide
3. Click the download buttons to get `manifest.json`, `content.js`, `content.css`
4. Follow the 7-step installation guide
5. Done!

## Customizing Your Site

### Change the Title/Colors
Edit `index.html`:
```html
<h1>Our Pixel Story 💕</h1>  <!-- Change this -->
```

Change colors in the `<style>` section (look for `#ff6b6b` - that's the pink):
```css
background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);  /* Background */
color: #ff6b6b;  /* Accent color */
```

### Update the Extension Files
Edit `content.js` or `content.css` and push changes:
```bash
git add content.js content.css
git commit -m "Update animations"
git push
```

Users will download the latest versions from your site!

## Tips

✅ **Keep it simple** - Users just need to download 3 files and follow 7 steps

✅ **Test the download links** - Click each button to make sure files download correctly

✅ **Update your README** - Let people know what this extension does

✅ **Use HTTPS** - GitHub Pages is HTTPS by default (secure! 🔒)

✅ **Monitor issues** - Use the GitHub Issues tab to let people report bugs

## Troubleshooting

**Site not showing up?**
- Wait 2-3 minutes after enabling Pages
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check that repo is **Public**, not Private

**Download buttons not working?**
- Make sure all files are in the root of your repo (not in folders)
- Check that file names match exactly

**Want to change the domain later?**
- Go to **Settings** → **Pages** and update the custom domain

---

That's it! Your GitHub Pages site is ready to share. Anyone can visit your beautiful setup guide and install the extension in minutes.

Made with ❤️
