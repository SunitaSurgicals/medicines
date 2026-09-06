
const medicines = [
  {
    id: 1,
    name: "Paracetamol",
    generic: "Acetaminophen",
    category: "Pain & Fever",
    summary: "Commonly used for temporary relief of mild to moderate pain and fever.",
    uses: ["Fever", "Headache", "Body ache", "Minor pain"],
    precautions: [
      "Do not exceed the amount stated on the label or prescribed by a healthcare professional.",
      "Check other cold/flu medicines because they may also contain paracetamol/acetaminophen.",
      "People with liver disease or heavy alcohol use should ask a healthcare professional before use."
    ],
    sideEffects: ["Nausea or rash may occur in some people.", "Serious allergic reactions are uncommon but require urgent care."],
    note: "Dose depends on age, product strength, and individual circumstances. Follow the package label or professional advice."
  },
  {
    id: 2,
    name: "Ibuprofen",
    generic: "Ibuprofen",
    category: "Pain & Inflammation",
    summary: "An NSAID used for pain, fever, and inflammation in appropriate patients.",
    uses: ["Pain", "Fever", "Muscle aches", "Inflammatory pain"],
    precautions: [
      "May not be suitable for people with certain stomach ulcers, kidney problems, or NSAID allergy.",
      "Ask a healthcare professional before use during pregnancy, especially later pregnancy.",
      "Do not combine with other NSAIDs unless a healthcare professional advises it."
    ],
    sideEffects: ["Stomach upset", "Heartburn", "Dizziness"],
    note: "Take only as directed. Stop and seek care for signs of serious bleeding, severe allergy, or other severe symptoms."
  },
  {
    id: 3,
    name: "Cetirizine",
    generic: "Cetirizine hydrochloride",
    category: "Allergy",
    summary: "An antihistamine commonly used for allergy symptoms such as sneezing and itching.",
    uses: ["Allergic rhinitis", "Sneezing", "Itching", "Hives"],
    precautions: [
      "Can cause drowsiness in some people.",
      "Use caution with driving or operating machinery until you know how it affects you.",
      "Ask a healthcare professional about use with sedating medicines or alcohol."
    ],
    sideEffects: ["Drowsiness", "Dry mouth", "Fatigue"],
    note: "Follow age-specific directions on the product or advice from a healthcare professional."
  },
  {
    id: 4,
    name: "Omeprazole",
    generic: "Omeprazole",
    category: "Digestive Health",
    summary: "A proton-pump inhibitor that reduces stomach acid.",
    uses: ["Heartburn", "Acid reflux", "Certain acid-related stomach conditions"],
    precautions: [
      "Persistent or recurrent symptoms should be evaluated by a healthcare professional.",
      "Long-term use may require medical monitoring.",
      "Tell your healthcare professional about all other medicines you take because interactions are possible."
    ],
    sideEffects: ["Headache", "Abdominal discomfort", "Nausea"],
    note: "Duration and timing depend on the reason for use. Follow professional or label instructions."
  },
  {
    id: 5,
    name: "ORS",
    generic: "Oral Rehydration Salts",
    category: "Hydration",
    summary: "A balanced glucose-electrolyte solution used to help replace fluids and salts lost during diarrhea.",
    uses: ["Dehydration from diarrhea", "Fluid and electrolyte replacement"],
    precautions: [
      "Mix exactly with the amount of clean water stated on the packet.",
      "Do not make the solution stronger or weaker than directed.",
      "Seek medical care for severe dehydration, persistent vomiting, blood in stool, lethargy, or worsening illness."
    ],
    sideEffects: ["Usually well tolerated when correctly prepared."],
    note: "Correct preparation is important for safety and effectiveness."
  },
  {
    id: 6,
    name: "Azithromycin",
    generic: "Azithromycin",
    category: "Antibiotic",
    summary: "A prescription antibiotic used for certain bacterial infections.",
    uses: ["Selected bacterial infections when prescribed"],
    precautions: [
      "Use only when prescribed for a bacterial infection.",
      "Do not use leftover antibiotics or share antibiotics with others.",
      "Tell your healthcare professional about heart rhythm problems, liver disease, allergies, and other medicines."
    ],
    sideEffects: ["Nausea", "Diarrhea", "Abdominal discomfort"],
    note: "Antibiotics do not treat viral illnesses such as the common cold. Complete the prescribed course unless your prescriber tells you otherwise."
  },
  {
    id: 7,
    name: "Metformin",
    generic: "Metformin hydrochloride",
    category: "Diabetes",
    summary: "A prescription medicine commonly used as part of type 2 diabetes management.",
    uses: ["Type 2 diabetes management when prescribed"],
    precautions: [
      "Use only as prescribed and attend recommended monitoring.",
      "Kidney function is important when deciding whether metformin is appropriate.",
      "Tell healthcare professionals that you take metformin before some procedures or contrast imaging tests."
    ],
    sideEffects: ["Nausea", "Diarrhea", "Abdominal discomfort"],
    note: "Treatment is individualized. Do not change the dose without speaking to your healthcare professional."
  },
  {
    id: 8,
    name: "Amlodipine",
    generic: "Amlodipine",
    category: "Blood Pressure",
    summary: "A prescription calcium-channel blocker commonly used to help manage high blood pressure.",
    uses: ["High blood pressure", "Certain heart-related conditions when prescribed"],
    precautions: [
      "Take consistently as prescribed.",
      "Do not stop suddenly without discussing it with your healthcare professional.",
      "Report troublesome swelling, dizziness, or other concerning symptoms."
    ],
    sideEffects: ["Ankle swelling", "Flushing", "Dizziness"],
    note: "Blood pressure treatment should be monitored by a qualified healthcare professional."
  },
  {
    id: 9,
    name: "Salbutamol Inhaler",
    generic: "Salbutamol / Albuterol",
    category: "Respiratory",
    summary: "A quick-relief bronchodilator used for breathing symptoms in conditions such as asthma when prescribed.",
    uses: ["Relief of bronchospasm", "Wheezing when prescribed"],
    precautions: [
      "Use the inhaler technique taught by a healthcare professional.",
      "Needing it more often than usual may mean your condition needs urgent review.",
      "Seek urgent care for severe or worsening breathing difficulty."
    ],
    sideEffects: ["Tremor", "Fast heartbeat", "Nervousness"],
    note: "This is generally a reliever medicine and may not replace long-term controller treatment."
  }
];
