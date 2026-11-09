/**
 * PRODUCT CONFIGURATION & CONSTANTS
 * GYM PROGRESS OS — Ultimate Edition by PROGRESS LAB
 */

// Official Razorpay Payment URL - Single Reusable Constant
export const RAZORPAY_PAYMENT_URL = "https://rzp.io/rzp/gymos";

export const PRODUCT = {
  name: "GYM PROGRESS OS",
  edition: "Ultimate Edition",
  brand: "PROGRESS LAB",
  tagline: "Train Hard. Track Everything. See Your Progress.",
  subheadline: "Your workouts deserve more than random notes. Take control of your training with GYM PROGRESS OS — a powerful Excel-based system built to organize workouts, monitor progress, and track every milestone.",
  price: 199,
  referencePrice: 499,
  currency: "INR",
  currencySymbol: "₹",
  format: "Downloadable Excel Workbook (.xlsx)",
  deliveryNote: "Digital product. Instant download access delivered securely after payment.",
  paymentUrl: RAZORPAY_PAYMENT_URL,
  version: "2.0",
  lastUpdated: "September 2026",
};

/**
 * Standard checkout redirect function
 * Opens the verified Razorpay payment page safely.
 * If Meta Pixel / GA is configured, fires an InitiateCheckout tracking event before navigation.
 */
export const handleCheckoutRedirect = (eventSource: string = "direct_cta") => {
  if (typeof window !== "undefined") {
    // Analytics hook: track checkout intent without falsely reporting a purchase
    try {
      if ((window as any).fbq) {
        (window as any).fbq("track", "InitiateCheckout", {
          content_name: `${PRODUCT.name} — ${PRODUCT.edition}`,
          content_category: "Digital Fitness Tool",
          currency: PRODUCT.currency,
          value: PRODUCT.price,
          source: eventSource,
        });
      }
      if ((window as any).gtag) {
        (window as any).gtag("event", "begin_checkout", {
          currency: PRODUCT.currency,
          value: PRODUCT.price,
          items: [
            {
              item_name: PRODUCT.name,
              item_category: PRODUCT.edition,
              price: PRODUCT.price,
              quantity: 1,
            },
          ],
        });
      }
    } catch (err) {
      console.warn("Analytics event error:", err);
    }

    // Direct redirection to the official Razorpay payment page
    window.location.href = RAZORPAY_PAYMENT_URL;
  }
};

export const CORE_BENEFITS = [
  {
    title: "Track Every Workout",
    desc: "Clean set-by-set logging for weight, reps, and RIR with auto-calculated total volume.",
  },
  {
    title: "Monitor Progressive Overload",
    desc: "Automated strength progression charts and suggested next loads for every exercise.",
  },
  {
    title: "Record Personal Bests",
    desc: "Live all-time PR scoreboard and estimated 1-Rep Max (e1RM) formulas built-in.",
  },
];

export const PROBLEM_CARDS = [
  {
    id: "random-workouts",
    number: "01",
    title: "Random Workouts",
    description: "You forget what weights you lifted last week, leaving you guessing instead of making deliberate progress.",
    icon: "HelpCircle",
    highlight: "Lost Momentum",
  },
  {
    id: "no-progressive-overload",
    number: "02",
    title: "No Progressive Overload Tracking",
    description: "You struggle to understand whether your training is actually improving or if you are stuck spinning your wheels.",
    icon: "TrendingDown",
    highlight: "Stalled Gains",
  },
  {
    id: "lost-records",
    number: "03",
    title: "Lost Workout Records",
    description: "Your workout notes are scattered across Apple Notes, WhatsApp messages, paper scraps, and clunky subscription apps.",
    icon: "FileQuestion",
    highlight: "Zero Organization",
  },
  {
    id: "no-clear-overview",
    number: "04",
    title: "No Clear Progress Overview",
    description: "You train consistently week after week, but have no organized visual record or quantifiable metrics to show for it.",
    icon: "BarChart3",
    highlight: "Blind Training",
  },
];

export const WORKBOOK_MODULES = [
  {
    number: "01",
    name: "Central Workout Log",
    category: "Daily Logging",
    description: "Log exercises, sets, reps, load, and RIR (Reps in Reserve). Calculates volume and e1RM automatically for every set without manual math.",
    badge: "Core Engine",
    screenshot: "/assets/images/gym-pd-2.webp",
  },
  {
    number: "02",
    name: "Progressive Overload Tracker",
    category: "Strength Progression",
    description: "Auto-aggregates session history per exercise. Compares your first logged session vs. latest session e1RM and calculates your next target working load.",
    badge: "Automated",
    screenshot: "/assets/images/gym-pd-4.webp",
  },
  {
    number: "03",
    name: "Personal Records (PR) Board",
    category: "Milestones",
    description: "Dedicated all-time leaderboard detecting your heaviest lifts, max reps, and peak estimated 1RMs with exact achievement dates.",
    badge: "All-Time Best",
    screenshot: "/assets/images/gym-pd-1.webp",
  },
  {
    number: "04",
    name: "Executive Analytics Dashboard",
    category: "Visual Overview",
    description: "High-level command center displaying total workouts, volume load, weekly set distribution, 8-lift strength snapshots, and bodyweight trends.",
    badge: "Real-Time",
    screenshot: "/assets/images/gym-cover.webp",
  },
  {
    number: "05",
    name: "Workout Split & Mesocycle Planner",
    category: "Programming",
    description: "Customizable weekly planner to architect your Push/Pull/Legs, Upper/Lower, or Full Body splits and set target RIR ranges across a 4-week cycle.",
    badge: "Flexible",
    screenshot: "/assets/images/gym-pd-5.webp",
  },
  {
    number: "06",
    name: "Plate & Warm-Up Calculator",
    category: "Gym Utility",
    description: "Enter your target working weight and immediately get an exact per-side plate loading breakdown (20, 15, 10, 5, 2.5, 1.25kg) and a 5-set warm-up ramp.",
    badge: "Smart Tool",
    screenshot: "/assets/images/gym-pd-3.webp",
  },
  {
    number: "07",
    name: "Body Measurements & BMI Tracker",
    category: "Physique Monitoring",
    description: "Log weekly weigh-ins and circumference measurements (waist, chest, arms, thighs, hips) with automatic BMI and body fat trend calculations.",
    badge: "Body Composition",
    screenshot: "/assets/images/gym-pd-1.webp",
  },
  {
    number: "08",
    name: "Nutrition, Macros & Readiness Tracker",
    category: "Recovery & Fuel",
    description: "Dynamic protein target generator based on bodyweight and goal. Daily readiness check-in scoring sleep quality, muscle soreness, and energy (0–100).",
    badge: "Holistic Health",
    screenshot: "/assets/images/gym-pd-2.webp",
  },
];

export const GALLERY_ITEMS = [
  {
    id: "dashboard",
    title: "Executive Training Dashboard",
    category: "Analytics & Overview",
    image: "/assets/images/gym-cover.webp",
    caption: "The central hub of GYM PROGRESS OS — aggregates workouts logged, total volume, PR milestones, and key lift trends at a single glance.",
    tags: ["Volume Analytics", "Strength Snapshot", "Goal Radar"],
  },
  {
    id: "workout-log",
    title: "Set-by-Set Workout Log",
    category: "Daily Logging",
    image: "/assets/images/gym-pd-2.webp",
    caption: "Clean, frictionless logging grid. Enter exercises, weights, reps, and RIR — formulas automatically calculate total volume load and estimated 1RM.",
    tags: ["RIR Tracking", "Volume Math", "Instant Lookup"],
  },
  {
    id: "progressive-overload",
    title: "Progressive Overload Engine",
    category: "Strength Progression",
    image: "/assets/images/gym-pd-4.webp",
    caption: "Automatic performance comparison. Inspects your baseline session against your latest training session to ensure continuous progressive overload.",
    tags: ["Auto-Trends", "Load Guidance", "Session Comparison"],
  },
  {
    id: "pr-board",
    title: "Personal Records & Milestones",
    category: "PR Board",
    image: "/assets/images/gym-pd-1.webp",
    caption: "Auto-updating all-time PR board. Never lose track of your best bench press, squat, deadlift, or overhead press again.",
    tags: ["All-Time PRs", "Estimated 1RM", "Date Stamp"],
  },
  {
    id: "complete-system",
    title: "All-in-One Fitness Architecture",
    category: "Complete System",
    image: "/assets/images/gym-pd-5.webp",
    caption: "From weekly split planning and plate math to nutrition target scaling and recovery monitoring, everything stays unified in one clean workbook.",
    tags: ["15 Worksheets", "Zero Bloat", "No Subscriptions"],
  },
  {
    id: "mobile-desktop",
    title: "Excel & Cloud Compatible",
    category: "Multi-Platform",
    image: "/assets/images/gym-banner.webp",
    caption: "Open in Microsoft Excel (Windows/Mac/Web/Mobile), or import into Google Sheets. Your data remains 100% yours forever.",
    tags: ["Universal .xlsx", "Offline Access", "100% Private"],
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Get Your Workbook",
    description: "Click any purchase button to complete the secure ₹199 one-time payment on Razorpay. No subscriptions, no hidden fees.",
    action: "Instant Checkout via Razorpay",
  },
  {
    step: "02",
    title: "Open in Excel",
    description: "Receive your clean .xlsx workbook file. Open it in Microsoft Excel (desktop, web, or mobile app), or import it seamlessly into Google Sheets.",
    action: "Universal .xlsx Compatibility",
  },
  {
    step: "03",
    title: "Start Tracking Your Progress",
    description: "Input your starting metrics and begin recording your sessions. Watch formulas calculate your volume, PRs, and strength overload automatically.",
    action: "Built for Measurable Results",
  },
];

export const TARGET_AUDIENCE = [
  {
    title: "Gym Beginners",
    persona: "Starting Your Fitness Journey",
    description: "Eliminate the confusion of what to do next. Learn to record weights, monitor consistency, and build an organized foundation from day one.",
    points: [
      "Simple, structured layout with zero complex formulas to learn",
      "Pre-loaded exercise library categorized by muscle group",
      "Clear guidance on tracking reps and progressive overload",
    ],
  },
  {
    title: "Intermediate Lifters",
    persona: "Breaking Through Plateaus",
    description: "Move past guesswork. Track Reps In Reserve (RIR), calculate weekly volume per muscle group, and systematically apply progressive overload.",
    points: [
      "Automated e1RM calculations per exercise",
      "Weekly volume load breakdown by muscle group",
      "Next session target load suggestions to keep pushing progress",
    ],
  },
  {
    title: "Strength & Hypertrophy Lifters",
    persona: "Data-Driven Athletes",
    description: "For trainees who appreciate precision. Track your compound lifts, calculate barbell plate breakdowns, and monitor all-time PR leaderboards.",
    points: [
      "Built-in Plate & Warm-Up Ramp calculator",
      "Dedicated PR tracker for primary strength movements",
      "Readiness score blending sleep, soreness, and stress",
    ],
  },
  {
    title: "Spreadsheet & Privacy Lovers",
    persona: "Tired of Monthly App Subscriptions",
    description: "Own your data forever. No bloated mobile apps demanding $15/month, no intrusive ads, and no locked feature paywalls.",
    points: [
      "One-time ₹199 investment with lifetime ownership",
      "Completely private — your workout data stays on your device",
      "Full offline support with universal .xlsx format",
    ],
  },
];

export const COMPARISON_DATA = [
  {
    feature: "Workout Information",
    randomNotes: "Scattered across phone notes, scrap paper & memory",
    gymProgressOs: "Unified, organized records inside one clean workbook",
  },
  {
    feature: "Progressive Overload",
    randomNotes: "Guessing last week's weights and repetitions",
    gymProgressOs: "Auto-calculated strength trends & suggested next loads",
  },
  {
    feature: "Personal Records",
    randomNotes: "Hard to recall exact dates or peak 1RM numbers",
    gymProgressOs: "Dedicated all-time PR board with auto-updating e1RM",
  },
  {
    feature: "Training Analytics",
    randomNotes: "No visual charts or volume breakdown",
    gymProgressOs: "Executive dashboard with volume distribution by muscle",
  },
  {
    feature: "Cost & Privacy",
    randomNotes: "Either disorganized or ₹800+/month app subscriptions",
    gymProgressOs: "One-time ₹199 purchase, 100% private & offline-ready",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Is this a physical product or a digital download?",
    answer: "GYM PROGRESS OS is 100% a digital product. It is a professionally engineered Excel workbook (.xlsx file). No physical item will be shipped to your address. You can download and start using it immediately.",
  },
  {
    question: "How do I purchase GYM PROGRESS OS?",
    answer: "Simply click any 'GET GYM PROGRESS OS' button on this page. You will be redirected directly to our official, secure Razorpay checkout page (https://rzp.io/rzp/gymos), where you can pay using UPI (Google Pay, PhonePe, Paytm), credit/debit cards, or net banking.",
  },
  {
    question: "Is this a recurring subscription or a one-time payment?",
    answer: "It is strictly a ONE-TIME payment of ₹199. There are zero subscriptions, zero hidden charges, and no recurring monthly fees whatsoever. Once you purchase it, the workbook is yours to keep and use forever.",
  },
  {
    question: "Do I need advanced Excel skills to use it?",
    answer: "Not at all! GYM PROGRESS OS is specifically designed for ease of use. All formulas, lookups, and visual summaries are pre-built and automated. You only need to type in your exercise, weight, and reps — the sheet handles all calculations for you.",
  },
  {
    question: "Can beginners use this tracker?",
    answer: "Yes, absolutely. Whether you are in your first month of lifting or have been training for five years, having an organized log is the fastest way to understand your routine and avoid plateauing.",
  },
  {
    question: "Can I use it on my smartphone?",
    answer: "Yes. You can open and edit the workbook on your phone using the free Microsoft Excel app (iOS and Android) or the Google Sheets app. For the best initial setup and chart viewing experience, desktop or tablet is recommended.",
  },
  {
    question: "How do I receive the workbook after payment?",
    answer: "Immediately after completing your transaction on the Razorpay checkout page, you will be directed to your download link and receive confirmation details so you can save the .xlsx file directly to your device or cloud drive.",
  },
  {
    question: "Does using this workbook automatically build muscle?",
    answer: "No. GYM PROGRESS OS is a precise tracking and organization tool. It makes progressive overload visible and measurable, but your results depend entirely on your training consistency, effort, nutrition, and recovery.",
  },
  {
    question: "Can I customize the exercises or add my own splits?",
    answer: "Yes. The workbook includes an open Exercise Library and Workout Planner tab where you can add custom exercises, modify muscle categories, and tailor the workout splits to your exact routine.",
  },
];
