import { config as dotenvConfig } from 'dotenv'
import { getPayload } from 'payload'

// Load the appropriate .env file based on NODE_ENV
dotenvConfig({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
})

async function seed() {
  const config = (await import('./payload.config')).default
  const payload = await getPayload({ config })

  console.log('Seeding database...')

  try {
    // Seed Header
    console.log('Creating header...')
    await payload.updateGlobal({
      slug: 'header',
      data: {
        navigation: [
          { label: 'Home', link: '/' },
          { label: 'Schedule', link: '/schedule' },
          { label: 'How It Works', link: '/process' },
          { label: 'Online Course', link: '/online-course' },
          { label: 'Registration', link: '/registration' },
          { label: 'Contact', link: '/contact' },
        ],
      },
    })

    // Seed Footer
    console.log('Creating footer...')
    await payload.updateGlobal({
      slug: 'footer',
      data: {
        companyName: 'Myers Driving Academy',
        address: 'PO BOX 254\nPlymouth, OH 44865',
        phone: '(419) XXX-XXXX',
        email: 'info@myersdrivingacademy.net',
        copyrightText: '© 2025 Myers Driving Academy. All rights reserved.',
      },
    })

    // Seed Process
    console.log('Creating process page...')
    await payload.updateGlobal({
      slug: 'process',
      data: {
        heroTitle: 'How It Works',
        heroDescription: 'Two ways to learn—choose your path and follow the steps.',
        inPersonSteps: [
          {
            stepNumber: 1,
            title: 'Get Your Permit',
            description:
              'You can take classes at 15 years and 5 months. Important: The 6-month state contract starts the first day you attend class. We guarantee completion within that timeframe—no exceptions.',
          },
          {
            stepNumber: 2,
            title: 'Sign Up for Class',
            description:
              'Check upcoming class dates above. Fill out the in-class registration form completely and return it to the office with a $200 deposit to hold your spot. Total cost is $475; balance due before driving instruction begins.',
          },
          {
            stepNumber: 3,
            title: 'Attend 8 Classes',
            description:
              'Complete all 8 classroom sessions over the two-week period. Due to new laws, you cannot be added to the drive log until all class sessions are completed.',
          },
          {
            stepNumber: 4,
            title: 'Schedule Drive Times',
            description:
              "After class completion, you'll be added to our drive log. We'll call to schedule sessions, typically grouped by class and birth date. Ensure your voicemail is active. Keep your phone available.",
          },
          {
            stepNumber: 5,
            title: 'Complete Driving Instruction (6 hrs)',
            description:
              "The first drive session will be scheduled. Based on your ability and timeline, remaining hours will be scheduled. Our instructors may text if they can't reach you by phone.",
          },
          {
            stepNumber: 6,
            title: 'Receive DT Certificate',
            description:
              "After driving is completed and payment is satisfied, we'll issue your DT Certificate—required for your state exam. Certificates are mailed within 48 hours of your last drive. DO NOT schedule your exam until you have this in hand!",
          },
          {
            stepNumber: 7,
            title: 'Schedule & Take Your Exam',
            description:
              "Go to bmvonline.dps.ohio.gov to schedule your driver's exam. Bring your permit and DT Certificate to the exam station.",
          },
          {
            stepNumber: 8,
            title: 'Optional: Refresher Instruction',
            description:
              'If you need a vehicle for the exam or want refresher instruction before your test, call our office. We offer this service at a discounted rate for our students.',
          },
        ],
        onlineSteps: [
          {
            stepNumber: 1,
            title: 'Choose Online Course',
            description:
              'Visit our partner Aceable for a flexible, self-paced course alternative to classroom instruction.',
          },
          {
            stepNumber: 2,
            title: 'Start Course & Get Enrollment Certificate',
            description:
              'After completing the first two sections online, Aceable issues a certificate of enrollment.',
          },
          {
            stepNumber: 3,
            title: 'Finish Online & Get Completion Certificate',
            description:
              'Aceable issues a certificate of completion. Provide the original paper certificate for BTW instruction.',
          },
          {
            stepNumber: 4,
            title: 'Behind The Wheel (8 hrs)',
            description:
              'Schedule BTW instruction with us. Bring the original completion certificate to start driving.',
          },
          {
            stepNumber: 5,
            title: 'Receive DT Certificate',
            description:
              'We issue a DT Certificate upon completing BTW, used to take the state exam.',
          },
        ],
      },
    })

    // Seed Registration
    console.log('Creating registration page...')
    await payload.updateGlobal({
      slug: 'registration',
      data: {
        pageTitle: 'Registration',
        pageDescription: 'Download the appropriate form below to begin your registration process.',
        classRegistrationForm: {
          title: 'Class Registration Form',
          description:
            'This form is for students who will attend the 24 hours of classroom instruction and then complete the 8 hours of Behind The Wheel training. Please print the form. Fill it in completely and mail to Myers Driving Academy PO BOX 254 Plymouth, OH 44865 with at least a $200.00 deposit. We accept checks, money order, or debit/credit cards (in person only)',
        },
        behindTheWheelForm: {
          title: 'Behind The Wheel Training Form',
          description:
            'This form is for students who will need 8 hour BEHIND THE WHEEL TRAINING. Please print the form. Fill it in completely and mail to Myers Driving Academy PO BOX 254 Plymouth, OH 44865 with at least a $200.00 deposit. We accept checks, money order, or debit/credit cards (in person only)',
        },
      },
    })

    // Seed Online Partnership
    console.log('Creating online partnership page...')
    await payload.updateGlobal({
      slug: 'online-partnership',
      data: {
        pageTitle: 'Online Course Partnership',
        partnerName: 'Aceable Inc',
        partnerLink: 'http://go.aceable.com/aff_c?offer_id=10&aff_id=1022',
        ctaButtonText: 'Visit Aceable Inc Today',
      },
    })

    // Seed Example Classes
    console.log('Creating example classes...')
    const now = new Date()
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 15)
    const nextMonthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 18)

    await payload.create({
      collection: 'classes',
      data: {
        title: 'February 2025 Class - Plymouth Location',
        startDate: nextMonth.toISOString(),
        endDate: nextMonthEnd.toISOString(),
        schedule: 'Monday - Thursday 5:30 PM - 9:30 PM',
        totalSeats: 20,
        price: 450,
        status: 'open',
        description:
          'Comprehensive driver education course including classroom instruction and behind-the-wheel training.',
        notes: 'Students must be at least 15 years and 6 months old to enroll.',
      },
    })

    const twoMonths = new Date(now.getFullYear(), now.getMonth() + 2, 10)
    const twoMonthsEnd = new Date(now.getFullYear(), now.getMonth() + 2, 13)

    await payload.create({
      collection: 'classes',
      data: {
        title: 'March 2025 Class - Plymouth Location',
        startDate: twoMonths.toISOString(),
        endDate: twoMonthsEnd.toISOString(),
        schedule: 'Monday - Thursday 5:30 PM - 9:30 PM',
        totalSeats: 20,
        price: 450,
        status: 'full',
        description:
          'Comprehensive driver education course including classroom instruction and behind-the-wheel training.',
        notes: 'Students must be at least 15 years and 6 months old to enroll.',
      },
    })

    console.log('✅ Seed completed successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seed()
