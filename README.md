# NASA Hackathon Frontend

This is a [Next.js](https://nextjs.org) project for the NASA Hackathon, featuring image gallery and visualization tools using the NASA PDS-Imaging Atlas API.

## Getting Started

First, run the development server:

```bash
# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Image gallery with advanced visualization
- NASA PDS-Imaging API integration
- Interactive image viewer with zoom, pan, and fullscreen capabilities
- JSON metadata viewer

## API Usage Examples

### Basic Image Search

```javascript
// Search for images of Mars craters
const response = await fetch('/api/nasa?image_content=mars+crater&rows=20');
const data = await response.json();
```

### Advanced Search with Filters

```javascript
// Search for Jupiter images from the Voyager mission between specific dates
const params = new URLSearchParams({
  target: 'jupiter',
  mission_name: 'voyager',
  start_date: '1979-01-01T00:00:00Z',
  stop_date: '1979-12-31T23:59:59Z',
  rows: '30',
  sort: 'time_min asc'
});

const response = await fetch(`/api/nasa?${params}`);
const data = await response.json();
```

### Spatial Search

```javascript
// Find images within 100km of a specific location on Mars
const params = new URLSearchParams({
  target: 'mars',
  pt: '10.5,120.3', // Lat, Long
  d: '100', // 100km radius
  rows: '20'
});

const response = await fetch(`/api/nasa?${params}`);
const data = await response.json();
```

## Image Viewer Components

The app includes advanced image viewing capabilities using:

1. **yet-another-react-lightbox** - For enhanced image viewing with features:
   - Captions
   - Fullscreen mode
   - Slideshow
   - Thumbnails
   - Zoom controls

2. **Image metadata** - Display and exploration of comprehensive image metadata

## Documentation

For detailed API documentation, see:
- [NASA API Route Documentation](/src/app/api/nasa/README.md)
- [PDS-Imaging Atlas API Documentation](https://pds-imaging.jpl.nasa.gov/tools/atlas/api/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
