# GitHub Pages Deployment Guide

This guide will walk you through deploying your portfolio to GitHub Pages step by step.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your portfolio files ready

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Name your repository: `priyanka-ingale.github.io`
   - **Important**: For a user/organization site, the repository must be named exactly as `<username>.github.io`
   - Replace `priyanka-ingale` with your GitHub username if different
5. Set the repository to **Public**
6. **Do NOT** initialize with README, .gitignore, or license (you already have these files)
7. Click **Create repository**

## Step 2: Initialize Local Repository

Open your terminal/command prompt and navigate to your portfolio folder:

```bash
# Navigate to your portfolio directory
cd /path/to/your/portfolio

# Initialize git repository
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial portfolio commit"

# Rename branch to main (if needed)
git branch -M main
```

## Step 3: Connect to GitHub Repository

```bash
# Add the remote repository
git remote add origin https://github.com/priyanka-ingale/priyanka-ingale.github.io.git

# Push your code
git push -u origin main
```

If you're prompted for credentials:
- **Username**: Your GitHub username
- **Password**: Use a [Personal Access Token](https://github.com/settings/tokens) instead of your password

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/priyanka-ingale/priyanka-ingale.github.io`
2. Click on **Settings** (gear icon)
3. Scroll down to the **Pages** section in the left sidebar
4. Under **Source**:
   - Branch: Select **main**
   - Folder: Select **/ (root)**
5. Click **Save**

## Step 5: Wait for Deployment

- GitHub Pages will automatically build and deploy your site
- This usually takes 1-2 minutes
- You'll see a message: "Your site is published at https://priyanka-ingale.github.io"

## Step 6: Verify Your Site

Visit `https://priyanka-ingale.github.io` in your browser to see your live portfolio!

## Making Updates

After the initial deployment, updating your portfolio is easy:

```bash
# Make your changes to files

# Stage your changes
git add .

# Commit your changes
git commit -m "Description of your changes"

# Push to GitHub
git push origin main
```

GitHub Pages will automatically rebuild and redeploy your site within 1-2 minutes.

## Troubleshooting

### Site Not Loading

1. **Check repository name**: Must be exactly `username.github.io`
2. **Verify GitHub Pages is enabled**: Go to Settings → Pages
3. **Wait a few minutes**: Initial deployment can take up to 10 minutes
4. **Check for errors**: Look at the Actions tab in your repository

### 404 Error

1. Ensure `index.html` is in the root directory
2. File names are case-sensitive - make sure it's `index.html` not `Index.html`
3. Clear your browser cache

### Changes Not Appearing

1. Wait 1-2 minutes for GitHub to rebuild
2. Hard refresh your browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
3. Clear browser cache

### CSS/JS Not Loading

1. Check file paths in `index.html` - use relative paths
2. Ensure `styles.css` and `script.js` are in the same directory as `index.html`
3. File names are case-sensitive

## Custom Domain (Optional)

To use a custom domain like `www.yourname.com`:

1. Purchase a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In your repository, create a file named `CNAME` with your domain:
   ```
   www.yourname.com
   ```
3. In your domain registrar's DNS settings, add:
   - **A Records** pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **CNAME Record**: `www` → `priyanka-ingale.github.io`
4. In GitHub Settings → Pages, enter your custom domain
5. Enable **Enforce HTTPS**

DNS changes can take 24-48 hours to propagate.

## Security Best Practices

1. **Never commit sensitive data**: API keys, passwords, personal information
2. **Use environment variables**: For any configuration
3. **Enable HTTPS**: Always use HTTPS (GitHub Pages provides this free)
4. **Keep dependencies updated**: If you add any later

## Next Steps

After deployment:

1. ✅ Share your portfolio URL on LinkedIn
2. ✅ Add the link to your resume
3. ✅ Include it in your email signature
4. ✅ Update your GitHub profile README
5. ✅ Share on social media

## Useful Commands

```bash
# Check git status
git status

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# View remote URL
git remote -v

# Pull latest changes
git pull origin main
```

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Documentation](https://git-scm.com/doc)
- [Creating a Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## Support

If you encounter issues:

1. Check [GitHub Status](https://www.githubstatus.com/)
2. Review [GitHub Pages Documentation](https://docs.github.com/en/pages)
3. Search [GitHub Community](https://github.community/)
4. Contact GitHub Support

---

**Congratulations!** 🎉 Your portfolio is now live on the internet!

Remember to update it regularly with new projects, skills, and achievements.
