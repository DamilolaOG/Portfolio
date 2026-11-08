# Portfolio Content Guide

This portfolio website is built with a clean separation between content and presentation. All your portfolio content is centralized in one file for easy updates.

## 📍 Where to Update Content

All portfolio content is located in: `/data/portfolioData.ts`

## 🔄 How to Replace Placeholder Content

### Step 1: Update Your Bio & Profile

In the `bio` object, replace:

```typescript
export const bio = {
  name: 'Your Full Name',
  tagline: 'Your professional tagline',
  portrait: 'URL to your professional photo',
  philosophy: 'Your design philosophy paragraph',
  fullBio: 'Extended bio text',
  skills: [
    { name: 'Skill Name', icon: '🔍' },
    // Add more skills
  ],
  tools: ['Tool 1', 'Tool 2', ...],
};
```

### Step 2: Update Projects

In the `projects` array, replace the placeholder projects with your actual work:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  slug: 'project-url-slug',
  oneLiner: 'Brief project description',
  thumbnail: 'project-thumbnail-url.jpg',
  role: 'Your Role',
  timeline: 'Duration (Year)',
  category: 'Industry • Platform',
  problem: 'Problem statement paragraph',
  goal: 'Project goal paragraph',
  process: {
    research: 'Research description',
    ideation: 'Ideation description',
    design: 'Design description',
  },
  results: [
    'Impact metric 1',
    'Impact metric 2',
    // Add more results
  ],
  images: [
    'mockup-image-1.jpg',
    'mockup-image-2.jpg',
  ],
  nextProject: 'next-project-slug',
  prevProject: 'previous-project-slug',
}
```

### Step 3: Update Resume

In the `resume` object, replace:

- **Experience**: Add your work history
- **Education**: Add your educational background
- **Achievements**: List awards and recognition
- **resumeUrl**: Link to your downloadable resume PDF

## 📸 Adding Images

### Option 1: Use Unsplash (Current Method)
- Images are currently using Unsplash URLs
- These are placeholder images for demonstration

### Option 2: Use Your Own Images
1. Host your images on a CDN or image hosting service (e.g., Cloudinary, ImgBB, or AWS S3)
2. Replace the image URLs in `portfolioData.ts` with your hosted image URLs

### Option 3: Local Images
1. Create an `assets` or `images` folder in your project
2. Import images in your data file:
   ```typescript
   import projectImage from '../assets/project-image.jpg';
   ```
3. Use the imported reference as the image URL

## 🎨 Design Customization

### Colors
The site uses neutral colors with subtle accents. To customize:
- Edit `/styles/globals.css`
- Modify the CSS custom properties in `:root`

### Typography
Current setup uses system fonts. To use custom fonts:
1. Add font imports to your HTML or CSS
2. Update font-family in `/styles/globals.css`

## 🔗 Navigation Links

Update email addresses and contact links in:
- `/components/Navigation.tsx` - "Let's Talk" button
- `/components/AboutPage.tsx` - Contact section
- `/components/ResumePage.tsx` - Contact CTA

Replace `hello@damilola.design` with your actual email.

## 📄 Resume Download

Update the resume download link:
1. Host your PDF resume online
2. Update `resumeUrl` in the `resume` object in `/data/portfolioData.ts`

## 🚀 Publishing Checklist

Before going live, make sure to:

- [ ] Replace all placeholder content with your actual portfolio content
- [ ] Upload and link all your project images
- [ ] Update all email addresses and contact information
- [ ] Test all internal navigation links
- [ ] Add your resume PDF and update the download link
- [ ] Test the site on different devices (mobile, tablet, desktop)
- [ ] Verify all project next/prev navigation works correctly

## 💡 Tips

1. **Project Slugs**: Keep them URL-friendly (lowercase, hyphens instead of spaces)
2. **Image Optimization**: Compress images for faster loading
3. **Consistent Sizing**: Use consistent aspect ratios for project thumbnails
4. **SEO**: Consider adding meta tags for better search engine visibility
5. **Analytics**: Consider adding Google Analytics or similar tracking

## 🆘 Need Help?

The portfolio structure is designed to be intuitive. If you need to make changes:
- Content changes: Edit `/data/portfolioData.ts`
- Layout/design changes: Edit components in `/components/`
- Global styles: Edit `/styles/globals.css`
