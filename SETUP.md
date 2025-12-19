# Myers Driving Academy - Setup Guide

## Initial Setup

After the application is running, you'll need to configure the CMS content through the admin panel.

### Environment Variables (local and Vercel)

```
MONGODB_URI=your_mongodb_connection_string
PAYLOAD_SECRET=your_secure_random_secret
NEXT_PUBLIC_SERVER_URL=https://your-app.vercel.app
REVALIDATE_TOKEN=strong-random-token-for-on-demand-revalidation
BLOB_READ_WRITE_TOKEN=vercel-generated-token
```

- `MONGODB_URI` (or `DATABASE_URI` fallback) points to your MongoDB/Atlas cluster
- `REVALIDATE_TOKEN` secures `/api/revalidate` which hooks call to refresh cached content
- `BLOB_READ_WRITE_TOKEN` is provided by Vercel Blob (used for media storage)

### Access the Admin Panel

1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:3000/admin`
3. Create your first admin user account

## Configuring the CMS Content

### 1. Header Navigation

1. Go to **Globals → Header** in the admin panel
2. Upload your logo (the Myers Driving Academy logo)
3. Add navigation links:
   - Home → `/`
   - Schedule → `/schedule`
   - How It Works → `/process`
   - Online Course → `/online-course`
   - Registration → `/registration`
   - Contact → `/contact`

### 2. Footer

1. Go to **Globals → Footer**
2. Fill in:
   - Company Name: Myers Driving Academy
   - Address: PO BOX 254 Plymouth, OH 44865
   - Phone: Your phone number
   - Email: Your email
   - Social Links: Add your social media profiles
   - Copyright Text: © 2025 Myers Driving Academy. All rights reserved.

### 3. Upload Forms

1. Go to **Collections → Media**
2. Upload your PDF forms:
   - Class Registration Form (PDF)
   - Behind The Wheel Training Form (PDF)

### 4. Registration Page

1. Go to **Globals → Registration**
2. Set page title: "Registration"
3. Configure **Class Registration Form**:
   - Title: "Class Registration Form"
   - Description: "This form is for students who will attend the 24 hours of classroom instruction and then complete the 8 hours of Behind The Wheel training. Please print the form. Fill it in completely and mail to Myers Driving Academy PO BOX 254 Plymouth, OH 44865 with at least a $200.00 deposit. We accept checks, money order, or debit/credit cards (in person only)"
   - Select the uploaded Class Registration PDF from Media
4. Configure **Behind The Wheel Form**:
   - Title: "Behind The Wheel Training Form"
   - Description: "This form is for students who will need 8 hour BEHIND THE WHEEL TRAINING. Please print the form. Fill it in completely and mail to Myers Driving Academy PO BOX 254 Plymouth, OH 44865 with at least a $200.00 deposit. We accept checks, money order, or debit/credit cards (in person only)"
   - Select the uploaded Behind The Wheel PDF from Media

### 5. Online Partnership Page

1. Go to **Globals → Online Partnership**
2. Set page title: "Online Course Partnership"
3. Partner Name: "Aceable Inc"
4. Partner Link: `http://go.aceable.com/aff_c?offer_id=10&aff_id=1022`
5. Description: Paste the following content:

   ```
   We have proudly partnered with Aceable Inc to provide our local teens an alternative to the classroom experience. This option is not for everyone, but if your teen has a busy schedule that requires a more flexible learning tool this may be the choice for you.

   This is a secondary provider, charging their own fees for services provided. They will issue two certificates to your student. The first is a certificate of enrollment. You will get this after completing your first two sections of online instruction. The second is your certificate of completion. This is the certificate we need to do the behind the wheel instruction, we do need the original paper, you can make a copy for your files if you would like.

   When the BTW instruction is finished we will issue a DT Certificate, this will be the certificate needed to take your exam with the state examiners. Click the link below to visit Aceable Inc Today.
   ```

6. CTA Button Text: "Visit Aceable Inc Today"

### 6. Process Page

1. Go to **Globals → Process**
2. Set hero title: "How It Works"
3. Hero description: "Simple steps to get your teen on the road"
4. Add process steps:
   - **Step 1**: Choose Your Class Type
     - Description: "Select either in-person classroom instruction or our flexible online course option"
   - **Step 2**: Register & Submit Forms
     - Description: "Complete coursework and driving instruction to earn your certificate"

### 7. Add Classes

1. Go to **Collections → Classes**
2. Click "Create New"
3. Fill in class details:
   - Title: e.g., "January 2025 Class - Plymouth Location"
   - Start Date: Select date and time
   - End Date: Select date and time
   - Schedule: e.g., "Monday - Thursday 5:30 PM - 9:30 PM"
   - Location: e.g., "Plymouth High School"
   - Address: Full address
   - Total Seats: e.g., 20
   - Available Seats: e.g., 15
   - Price: e.g., 450
   - Status: Open
   - Description: Optional class description
   - Notes: Any special requirements
4. Repeat for all upcoming classes

## Pages Overview

The site includes the following pages:

- **Home** (`/`) - Hero section with overview of services
- **Schedule** (`/schedule`) - List of upcoming in-person classes
- **How It Works** (`/process`) - Step-by-step process information
- **Online Course** (`/online-course`) - Information about Aceable partnership
- **Registration** (`/registration`) - Download links for registration forms
- **Contact** (`/contact`) - Contact form (submissions stored in CMS)

## Managing Content

### Adding New Classes

1. Navigate to **Collections → Classes**
2. Click "Create New"
3. Fill in all required information
4. Set status to "Open" for classes accepting registrations
5. Update "Available Seats" as students register

### Viewing Contact Form Submissions

1. Navigate to **Collections → Contact Submissions**
2. View all submissions with name, email, subject, and message
3. Update status (New → In Progress → Resolved) to track responses
4. Only authenticated admin users can view submissions

### Updating Page Content

Most page content is managed through **Globals**:

- Header navigation and logo
- Footer information
- Process/How It Works page content
- Registration form information
- Online partnership page content

## Styling

The site uses a purple and white color scheme matching the Myers Driving Academy brand:

- Primary Purple: `#5b4a9d`
- Light Purple: `#e8e4f3`
- White backgrounds
- Clean, modern design with rounded corners and shadows

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Generate TypeScript types
npm run generate:types

# Generate import map
npm run generate:importmap
```

## Environment Variables

Make sure to set up your `.env` file with:

```
DATABASE_URI=your_mongodb_connection_string
PAYLOAD_SECRET=your_secret_key
```

## Support

For technical support or questions about the CMS, refer to the [Payload CMS documentation](https://payloadcms.com/docs).
