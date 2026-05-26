export const projects = [
   {
      id: "revofun",
      title: "RevoFun — Web Mini Games",
      image: "/assets/revofun.png",
      link: "https://github.com/Revou-FSSE-Jun25/milestone-2-Cel44.git",
      shortDescription: "A small collection of browser games including Memory Cards, Rock-Paper-Scissors, and Number Guessing.",
      overview: "RevoFun is a collection of small web games I developed during the milestone project, containing Memory Cards, Rock-Paper-Scissors, and Number Guessing. I engineered the core game logic using Vanilla JavaScript and the DOM API, implementing randomized events and real-time state updates. I also designed a fully responsive mobile-first interface using CSS transitions and Flexbox, ensuring a smooth user experience across devices without external frameworks.",
    
      method: [
         "Built using HTML, CSS, and Vanilla JavaScript without external frameworks to strengthen core frontend fundamentals",
         "Implemented DOM manipulation and event-driven programming to handle user input and game logic",
         "Applied UI feedback and state updates to make gameplay interactive and clear",
      ],
    
      features: {
         "Memory Cards": [
            "Card matching logic using JavaScript state tracking",
            "Randomized card positions for replayability",
         ],
    
         "Rock Paper Scissors": [
            "Player vs computer gameplay",
            "Randomized computer choices",
         ],
    
         "Number Guessing": [
            "Random number generation and user input handling",
            "Feedback for higher or lower guesses",
            "Limited attempts for added challenge",
         ],
    
         Additional: [
            "Responsive design for mobile and desktop",
            "Basic UI feedback such as win/loss messages and score tracking",
            "Instant gameplay feedback without page reloads",
         ],
      },
    
      contributions: [
         "Designed the game layout and UI structure",
         "Implemented JavaScript game logic",
         "Handled DOM interactions and user events",
         "Fixed bugs during development and testing",
         "Ensured responsive behavior across screen sizes",
      ],
    
      techStack: [
         "HTML",
         "CSS",
         "JavaScript",
      ],
    
      screenshots: [
        {
          src: "/assets/memory.png",
          alt: "Memory Cards",
        },
    
        {
          src: "/assets/RPS.png",
          alt: "Rock Paper Scissors",
        },
    
        {
          src: "/assets/guess.png",
          alt: "Number Guessing",
        },
      ],
   },

   {
      id: "catalog",
      title: "Catalog",
      image: "/assets/catalog.png",
      link: "https://github.com/Cel44/Catalog.git",
      shortDescription:"A simple product catalog application built with React. Uses dummy data.",
      overview: "This catalog website is made simply as an assignment to practice React. It uses dummy data and has no backend connection. The main purpose of this project is to demonstrate my ability to build a React application with reusable components, manage filtering, and create a responsive UI using Tailwind CSS. The catalog displays a list of products with names, prices, and categories allowing users to browse items easily.",
  
      method: [
        "Built using Next.js and styled with Tailwind CSS",
        "Implemented responsive design principles for cross-device compatibility",
        "Implemented filtering functionality to allow users to narrow down product selections",
      ],
  
      features: {
        filtering: [
          "Filter by categories",
          "Filter by sub-categories",
          "Filter by brands",
        ],
  
        additional: [
          "Instant search and filtering",
          "Uses URL params so refresh will not reset filters",
        ],
      },
  
      contributions: [
        "Designed the layout and UI structure",
        "Implemented filtering logic",
      ],
  
      techStack: [
        "Next.js",
        "Tailwind CSS",
      ],
  
      screenshots: [
        {
          src: "/assets/catalog.png",
          alt: "Homepage",
        },
  
        {
          src: "/assets/categories.png",
          alt: "Categories Filtering",
        },
  
        {
          src: "/assets/categories_2.png",
          alt: "After Filtering",
        },
      ],
   },

   {
      id: "revoushop",
      title: "RevouShop — E-commerce Platform",
      image: "/assets/revoushop.png",
      link: "https://github.com/Cel44/milestone-3-Cel44.git",
      shortDescription: "A marketplace website featuring product listings, cart functionality, and an admin dashboard.",
      overview: "RevouShop is a fully functional e-commerce platform built with a focus on user experience and performance. I developed the frontend architecture using React Context API for real-time cart state management and Tailwind CSS for a mobile-responsive interface. I also implemented an admin panel with CRUD capabilities and optimized the application using Server-Side Rendering (SSR). To improve reliability, I wrote automated unit tests with Jest covering login, cart logic, and admin interactions.",
      
      method: [
         "Developed with React and Next.js using reusable UI components",
         "Styled with Tailwind CSS for responsive and consistent layouts",
         "Implemented state management with React hooks for products and cart interactions",
         "Used Next.js routing to organize pages such as product listings and admin dashboard",
      ],
      
      features: {
         productBrowsing: [
            "Browse product listings with images, prices, and descriptions",
            "Refreshing the page loads a new set of products",
         ],
      
         shoppingCart: [
            "Users can add products to the cart",
            "Cart state updates in real time using React Context API",
            "Users can add and remove items before checkout",
         ],
      
         adminDashboard: [
            "Admin dashboard for managing product listings",
            "CRUD operations for creating, editing, and deleting products",
            "Real-time product catalog updates",
         ],
      
         additional: [
            "Responsive layout for mobile and desktop",
            "Accessible navigation and controls",
            "Optimized performance for faster loading",
         ],
      },
      
      contributions: [
         "Designed the UI layout and overall user experience",
         "Built React components for product cards and pages",
         "Implemented shopping cart interaction logic",
         "Created the admin dashboard and CRUD functionality",
         "Wrote unit tests with Jest",
         "Debugged and fixed issues during development",
      ],
      
      techStack: [
         "React",
         "Next.js",
         "Tailwind CSS",
         "Firebase",
         "Jest",
      ],
      
      screenshots: [
         {
            src: "/assets/prod list.png",
            alt: "User Home Page",
         },
      
         {
            src: "/assets/admin.png",
            alt: "Admin Panel",
         },
      ],
   },
]