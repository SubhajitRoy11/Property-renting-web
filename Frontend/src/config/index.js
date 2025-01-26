

export const registerFormControls=[
    {
        name: "userName",
        label: "User Name",
        placeholder: "Enter your user name",
        componentType: "input",
        type: "text",
      },
      {
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        componentType: "input",
        type: "email",
      },
      {
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        componentType: "input",
        type: "password",
      },
      
]


export const loginFormControls = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
  ];


  export const addRoomFormElements = [
    {
      label: "Title",
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: "Enter room title",
    },
    {
      label: "Description",
      name: "description",
      componentType: "textarea",
      placeholder: "Enter room's description",
    },
    {
      label: "Seasons",
      name: "seasons",
      componentType: "select",
      options: [
        { id: "summer", label: "Summer" },
        { id: "spring", label: "Spring" },
        { id: "autumn", label: "Autumn" },
        { id: "winter", label: "Winter" },
      ],
    },
    {
      label: "Countries",
      name: "countries",
      componentType: "select",
      options: [
        { id: "denmark", label: "Denmark" },
        { id: "norway", label: "Norway" },
        { id: "sweden", label: "Sweden" },
        { id: "finland", label: "Finland" },
        { id: "iceland", label: "Iceland" },
        { id: "greenland", label: "Greenland" },
      ],
    },
    {
      label: "Place",
      name: "place",
      componentType: "input",
      type: "text",
      placeholder: "Enter place's name",
    },
    {
      label: "Price",
      name: "price",
      componentType: "input",
      type: "number",
      placeholder: "Enter rent price",
    },
    {
      label: "Booking Price",
      name: "bookingPrice",
      componentType: "input",
      type: "number",
      placeholder: "Enter booking price (optional)",
    },
    {
      label: "Total Stock",
      name: "totalStock",
      componentType: "input",
      type: "number",
      placeholder: "Enter total stock",
    },
  ];


  export const userViewHeaderMenuItems = [
    {
      id: "home",
      label: "Home",
      path: "/user/home",
    },
    {
      id: "listings",
      label: "Listings",
      path: "/user/listing",
    },
    {
      id: "contract",
      label: "Contract",
      path: "/user/contract",
    },
    {
      id: "blog",
      label: "Blog",
      path: "/user/blog",
    },
    // {
    //   id: "spring",
    //   label: "Spring",
    //   path: "/user/listings",
    // },
    // {
    //   id: "autumn",
    //   label: "Autumn",
    //   path: "/user/listings",
    // },
  
    {
      id: "search",
      label: "Search",
      path: "/user/search",
    },
  ];
  
  export const filterOptions = {
    seasons: [
      { id: "summar", label: "Summar" },
      { id: "winter", label: "Winter" },
      { id: "spring", label: "Spring" },
      { id: "autumn", label: "Autumn" },
      
    ],
    countries: [
      { id: "denmark", label: "Denmark" },
      { id: "norway", label: "Norway" },
      { id: "sweden", label: "Sweden" },
      { id: "finland", label: "Finland" },
      { id: "iceland", label: "Iceland" },
      { id: "greenland", label: "Greenland" },
    ],
  };
  
  export const sortOptions = [
    { id: "price-lowtohigh", label: "Price: Low to High" },
    { id: "price-hightolow", label: "Price: High to Low" },
    { id: "title-atoz", label: "Title: A to Z" },
    { id: "title-ztoa", label: "Title: Z to A" },
  ];
  
  
  export const seasonsOptionsMap = {
    summar: "Summar",
    winter: "Winter",
    spring: "Spring",
    autumn: "Autumn",
  };
  
  
  export const countriesOptionsMap = {
    denmark: "Denmark",
    norway: "Norway",
    sweden: "Sweden",
    finland: "Finland",
    iceland: "Iceland",
    greenland: "Greenland",
  };
  



  export const bookingFormControls = [
    {
      name: "fullName",
      label: "Full Name",
      placeholder: "Enter your full name",
      componentType: "input",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email address",
      componentType: "input",
      type: "email",
    },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "Enter your phone number",
      componentType: "input",
      type: "tel",
    },
    {
      name: "checkInDate",
      label: "Check-In Date",
      placeholder: "Select your check-in date",
      componentType: "input",
      type: "date",
    },
    {
      name: "checkOutDate",
      label: "Check-Out Date",
      placeholder: "Select your check-out date",
      componentType: "input",
      type: "date",
    },
    {
      name: "roomType",
      label: "Room Type",
      placeholder: "Select your room type",
      componentType: "select",
      options: [
        { label: "Single Room", id: "single" },
        { label: "Double Room", id: "double" },
        { label: "Suite", id: "suite" },
        { label: "Cottage", id: "cottage" },
      ],
    },
    {
      name: "numberOfGuests",
      label: "Number of Guests",
      placeholder: "Enter the number of guests",
      componentType: "input",
      type: "number",
    },
    {
      name: "specialRequests",
      label: "Special Requests",
      placeholder: "Enter any special requests (optional)",
      componentType: "textarea",
      type: "text",
    },
    {
      name: "proofOfIdentity",
      label: "Proof of Identity",
      placeholder: "Select your identity proof",
      componentType: "select",
      options: [
        { label: "Passport", id: "passport" },
        { label: "Driver s License", id: "driversLicense" },
        { label: "National ID", id: "nationalId" },
      ],
    },
    {
      name: "identityDocumentNumber",
      label: "Identity Document Number",
      placeholder: "Enter your identity document number",
      componentType: "input",
      type: "text",
    },
    // {
    //   name: "uploadIdentityProof",
    //   label: "Upload Identity Proof",
    //   placeholder: "Upload a scanned copy of your ID",
    //   componentType: "file",
    //   type: "file",
    // },
    {
      name: "paymentMethod",
      label: "Payment Method",
      placeholder: "Select your payment method",
      componentType: "select",
      options: [
        { label: "Credit Card", id: "creditCard" },
        { label: "Debit Card", id: "debitCard" },
        { label: "PayPal", id: "paypal" },
        { label: "Bank Transfer", id: "bankTransfer" },
      ],
    },
    // {
    //   name: "acceptTerms",
    //   label: "I agree to the terms and conditions",
    //   componentType: "checkbox",
    //   type: "checkbox",
    // },
  ];
  
    
  