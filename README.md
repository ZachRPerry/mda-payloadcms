# Myers Driving Academy Website

A modern, content-managed website for Myers Driving Academy built with [Payload CMS](https://payloadcms.com) and Next.js.

## Features

- 🎨 Purple and white branded design matching the Myers Driving Academy style
- 📅 Class schedule management with real-time availability tracking
- 📝 Downloadable registration forms
- 🤝 Online course partnership integration (Aceable Inc)
- 📧 Contact form with submission management
- 🔧 Fully configurable through the CMS admin panel
- 📱 Responsive design for mobile and desktop

## Pages

- **Home** - Hero section with service overview
- **Schedule** - Upcoming in-person driver education classes
- **How It Works** - Step-by-step process information
- **Online Course** - Aceable partnership information
- **Registration** - Downloadable registration forms
- **Contact** - Contact form

## Quick Start

### Prerequisites

- Node.js 18+ and npm (or pnpm)
- MongoDB database (local or cloud)

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB URI and Payload secret

# Generate TypeScript types
pnpm run generate:types

# Seed initial data (optional)
pnpm run seed

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to see the site and `http://localhost:3000/admin` to access the CMS admin panel.

## Initial Setup

See [SETUP.md](./SETUP.md) for detailed instructions on configuring the CMS content.

#### Docker (Optional)

If you prefer to use Docker for local development instead of a local MongoDB instance, the provided docker-compose.yml file can be used.

To do so, follow these steps:

- Modify the `MONGODB_URI` in your `.env` file to `mongodb://127.0.0.1/<dbname>`
- Modify the `docker-compose.yml` file's `MONGODB_URI` to match the above `<dbname>`
- Run `docker-compose up` to start the database, optionally pass `-d` to run in the background.

## How it works

The Payload config is tailored specifically to the needs of most websites. It is pre-configured in the following ways:

### Collections

See the [Collections](https://payloadcms.com/docs/configuration/collections) docs for details on how to extend this functionality.

- #### Users (Authentication)

  Users are auth-enabled collections that have access to the admin panel.

  For additional help, see the official [Auth Example](https://github.com/payloadcms/payload/tree/main/examples/auth) or the [Authentication](https://payloadcms.com/docs/authentication/overview#authentication-overview) docs.

- #### Media

  This is the uploads enabled collection. It features pre-configured sizes, focal point and manual resizing to help you manage your pictures.

### Docker

Alternatively, you can use [Docker](https://www.docker.com) to spin up this template locally. To do so, follow these steps:

1. Follow [steps 1 and 2 from above](#development), the docker-compose file will automatically use the `.env` file in your project root
1. Next run `docker-compose up`
1. Follow [steps 4 and 5 from above](#development) to login and create your first admin user

That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).
