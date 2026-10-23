/**
 * Pakistan GK Challenge - Master Question Bank
 * Curated with historical accuracy, verified dates, and educational explanations.
 * Total Questions: 130 across 10 distinct categories.
 */

const CATEGORIES = [
  {
    id: "history",
    name: "Pakistan History",
    icon: "history",
    color: "#0f766e",
    accent: "#14b8a6",
    description: "Independence movement, Lahore Resolution, founding milestones, and key historical turning points.",
  },
  {
    id: "geography",
    name: "Geography of Pakistan",
    icon: "mountain",
    color: "#0369a1",
    accent: "#38bdf8",
    description: "Mighty Karakoram & Himalayan peaks, Indus basin, plateaus, coastal belts, and international borders.",
  },
  {
    id: "symbols",
    name: "National Symbols",
    icon: "flag",
    color: "#047857",
    accent: "#34d399",
    description: "National anthem, state emblem, anthem composer, national flora, fauna, and state identity emblems.",
  },
  {
    id: "provinces",
    name: "Provinces and Cities",
    icon: "map-pin",
    color: "#b45309",
    accent: "#fbbf24",
    description: "Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, Gilgit-Baltistan, AJK, and urban metropolises.",
  },
  {
    id: "culture",
    name: "Culture and Traditions",
    icon: "palette",
    color: "#be185d",
    accent: "#f472b6",
    description: "Folk music, Sufi shrines, regional languages, Ajrak, truck art, traditional festivals, and crafts.",
  },
  {
    id: "sports",
    name: "Sports and Cricket",
    icon: "trophy",
    color: "#c2410c",
    accent: "#fb923c",
    description: "1992 Cricket World Cup, Olympic hockey triumphs, squash supremacy, javelin gold, and sports icons.",
  },
  {
    id: "personalities",
    name: "Important Personalities",
    icon: "award",
    color: "#4338ca",
    accent: "#818cf8",
    description: "Founding fathers, humanitarians, Nobel laureates, poets, and trailblazers who shaped the nation.",
  },
  {
    id: "constitution",
    name: "Constitution and Civics",
    icon: "landmark",
    color: "#15803d",
    accent: "#4ade80",
    description: "The 1973 Constitution, parliamentary structure, fundamental rights, judiciary, and civic institutions.",
  },
  {
    id: "economy",
    name: "Economy and Agriculture",
    icon: "trending-up",
    color: "#4d7c0f",
    accent: "#a3e635",
    description: "Indus irrigation system, major export crops, Gwadar Port, CPEC, banking, and manufacturing sectors.",
  },
  {
    id: "science",
    name: "Science and Education",
    icon: "book-open",
    color: "#6d28d9",
    accent: "#c084fc",
    description: "Nobel achievements, SUPARCO space ventures, nuclear milestones, and premier research academies.",
  }
];

const QUESTIONS = [
  // ==========================================
  // 1. PAKISTAN HISTORY (13 Questions)
  // ==========================================
  {
    id: "his-01",
    category: "history",
    categoryName: "Pakistan History",
    difficulty: "easy",
    question: "On which date did Pakistan officially gain its sovereign independence?",
    options: ["14th August 1947", "15th August 1947", "23rd March 1940", "11th August 1947"],
    correctIndex: 0,
    explanation: "Pakistan gained independence on the 14th of August, 1947 (corresponding to 27th Ramadan 1366 AH), marking the end of the British Raj and partition of the subcontinent."
  },
  {
    id: "his-02",
    category: "history",
    categoryName: "Pakistan History",
    difficulty: "easy",
    question: "Where was the historic Pakistan Resolution passed on 23rd March 1940?",
    options: ["Minto Park, Lahore", "Shahi Qila, Lahore", "Liaquat Bagh, Rawalpindi", "Nishtar Park, Karachi"],
    correctIndex: 0,
    explanation: "The historic resolution, which formally demanded an independent sovereign Muslim homeland, was presented at Minto Park (now Iqbal Park), where Minar-e-Pakistan stands today."
  },
  {
    id: "his-03",
    category: "history",
    categoryName: "Pakistan History",
    difficulty: "medium",
    question: "Who moved the famous Lahore Resolution on 23rd March 1940?",
    options: ["A. K. Fazlul Huq", "Liaquat Ali Khan", "Choudhry Rahmat Ali", "Khawaja Nazimuddin"],
    correctIndex: 0,
    explanation: "Abul Kashem Fazlul Huq, popularly known as 'Sher-e-Bangla' (Tiger of Bengal), formally introduced the Lahore Resolution during the 27th annual session of the All-India Muslim League."
  },
  {
    id: "his-04",
    category: "history",
    categoryName: "Pakistan History",
    difficulty: "medium",
    question: "In which pamphlet did Choudhry Rahmat Ali first coin the name 'Pakstan' in 1933?",
    options: ["Now or Never", "The Voice of Islam", "A Nation Born", "Dawn of Freedom"],
    correctIndex: 0,
    explanation: "Choudhry Rahmat Ali coined the acronym in his 1933 pamphlet 'Now or Never; Are We to Live or Perish For Ever?', standing for Punjab, Afghania (KPK), Kashmir, Sindh, and Baluchistan."
  },
  {
    id: "his-05",
    category: "history",
    categoryName: "Pakistan History",
    difficulty: "medium",
    question: "When did Pakistan become the world's first Islamic Republic by adopting its first constitution?",
    options: ["23rd March 1956", "14th August 1947", "8th June 1962", "14th August 1973"],
    correctIndex: 0,
    explanation: "On 23rd March 1956, Pakistan promulgated its first constitution, transitioning from a British Dominion to the Islamic Republic of Pakistan, with Iskander Mirza as the first President."
  },
  {
    id: "his-06",
    category: "history",
    categoryName: "Pakistan History",
    difficulty: "hard",
    question: "Who was the first Prime Minister of Pakistan assassinated at Company Bagh, Rawalpindi?",
    options: ["Liaquat Ali Khan", "Khawaja Nazimuddin", "Huseyn Shaheed Suhrawardy", "I. I. Chundrigar"],
    correctIndex: 0,
    explanation: "Quaid-e-Millat Liaquat Ali Khan was martyred on 16th October 1951 while addressing a public gathering at Company Bagh, which was subsequently renamed Liaquat Bagh in his honor."
  },
  {
    id: "his-07",
    category: "history",
    categoryName: "Pakistan History",
    difficulty: "easy",
    question: "Which city served as the first federal capital of independent Pakistan from 1947 to 1959?",
    options: ["Karachi", "Lahore", "Rawalpindi", "Islamabad"],
    correctIndex: 0,
    explanation: "Karachi was chosen as Pakistan's original capital city due to its port infrastructure and commercial hub status, until Rawalpindi became an interim capital while Islamabad was constructed."
  },
  {
    id: "his-08",
    category: "history",
    categoryName: "Pakistan History",
    difficulty: "medium",
    question: "Which British lawyer chaired the Boundary Commission that partitioned Punjab and Bengal in 1947?",
    options: ["Sir Cyril Radcliffe", "Lord Louis Mountbatten", "Sir Stafford Cripps", "Lord Pethick-Lawrence"],
    correctIndex: 0,
    explanation: "Sir Cyril Radcliffe presided over both Boundary Commissions, creating the Radcliffe Line that partitioned the provinces of Punjab and Bengal between India and Pakistan."
  },
  {
    id: "his-09",
    category: "history",
    categoryName: "Pakistan History",
    difficulty: "hard",
    question: "In what year was the historic Objectives Resolution adopted by the Constituent Assembly?",
    options: ["1949", "1947", "1951", "1954"],
    correctIndex: 0,
    explanation: "The Objectives Resolution was moved by Prime Minister Liaquat Ali Khan and adopted on 12th March 1949, establishing foundational principles that sovereignty over the entire universe belongs to Almighty Allah."
  },
  {
    id: "his-10",
    category: "history",
    categoryName: "Pakistan History",
    difficulty: "hard",
    question: "In which year did the ancient Indus Valley site of Mohenjo-daro get rediscovered by archaeologists?",
    options: ["1922", "1905", "1935", "1947"],
    correctIndex: 0,
    explanation: "Rakhaldas Bandyopadhyay discovered the ruins of Mohenjo-daro in Sindh in 1922 under the leadership of Sir John Marshall, unveiling a 4,500-year-old Bronze Age urban civilization."
  },
  {
    id: "his-11",
    category: "history",
    categoryName: "Pakistan History",
    difficulty: "easy",
    question: "Who delivered the historic presidential address at Allahabad in 1930 conceptualizing a separate Muslim state?",
    options: ["Allama Muhammad Iqbal", "Sir Syed Ahmad Khan", "Liaquat Ali Khan", "Muhammad Ali Jauhar"],
    correctIndex: 0,
    explanation: "Dr. Allama Muhammad Iqbal presented his visionary Allahabad Address in December 1930, philosophically outlining the necessity for an autonomous consolidated Muslim homeland in northwestern India."
  },
  {
    id: "his-12",
    category: "history",
    categoryName: "Pakistan History",
    difficulty: "medium",
    question: "When was the Shimla Agreement signed between Pakistan and India?",
    options: ["July 1972", "September 1965", "January 1966", "December 1971"],
    correctIndex: 0,
    explanation: "The Shimla Agreement was signed on 2nd July 1972 by President Zulfikar Ali Bhutto of Pakistan and Prime Minister Indira Gandhi of India following the 1971 war."
  },
  {
    id: "his-13",
    category: "history",
    categoryName: "Pakistan History",
    difficulty: "hard",
    question: "Which historic educational institution was founded by Sir Syed Ahmad Khan in 1875 to modernize Muslim education?",
    options: ["Muhammadan Anglo-Oriental College", "Islamia College Peshawar", "Sindh Madrasatul Islam", "Nadwatul Ulama"],
    correctIndex: 0,
    explanation: "Sir Syed Ahmad Khan founded the MAO College at Aligarh in 1875 (which elevated to Aligarh Muslim University in 1920), which served as the intellectual vanguard for the Pakistan Movement."
  },

  // ==========================================
  // 2. GEOGRAPHY OF PAKISTAN (13 Questions)
  // ==========================================
  {
    id: "geo-01",
    category: "geography",
    categoryName: "Geography of Pakistan",
    difficulty: "easy",
    question: "What is the highest mountain peak in Pakistan, and the second highest in the world?",
    options: ["K2 (Mount Godwin-Austen)", "Nanga Parbat", "Broad Peak", "Gasherbrum I"],
    correctIndex: 0,
    explanation: "K2 stands at 8,611 meters (28,251 feet) in the Karakoram range of Gilgit-Baltistan and is the second highest mountain on Earth after Mount Everest."
  },
  {
    id: "geo-02",
    category: "geography",
    categoryName: "Geography of Pakistan",
    difficulty: "easy",
    question: "Which is the longest river flowing through Pakistan?",
    options: ["Indus River", "Jhelum River", "Chenab River", "Ravi River"],
    correctIndex: 0,
    explanation: "The mighty Indus River originates near Lake Manasarovar in Tibet, flows across Gilgit-Baltistan and Khyber Pakhtunkhwa, runs through Punjab and Sindh, and empties into the Arabian Sea over 3,180 km."
  },
  {
    id: "geo-03",
    category: "geography",
    categoryName: "Geography of Pakistan",
    difficulty: "medium",
    question: "Which high mountain pass connects Pakistan with China along the Karakoram Highway?",
    options: ["Khunjerab Pass", "Khyber Pass", "Bolan Pass", "Babusar Pass"],
    correctIndex: 0,
    explanation: "At an altitude of 4,693 meters (15,397 ft), Khunjerab Pass is the highest paved international border crossing in the world, connecting Gilgit-Baltistan with Xinjiang, China."
  },
  {
    id: "geo-04",
    category: "geography",
    categoryName: "Geography of Pakistan",
    difficulty: "medium",
    question: "Known as the 'Killer Mountain', which Himalayan peak in Gilgit-Baltistan rises 8,126 meters?",
    options: ["Nanga Parbat", "Rakaposhi", "Tirich Mir", "Masherbrum"],
    correctIndex: 0,
    explanation: "Nanga Parbat is the 9th highest peak in the world (8,126 m) and the western anchor of the Himalayas. Its notorious Rupal Face is the highest vertical mountain face in the world."
  },
  {
    id: "geo-05",
    category: "geography",
    categoryName: "Geography of Pakistan",
    difficulty: "medium",
    question: "Which expansive high-altitude alpine plateau in northern Pakistan is known as the 'Land of Giants'?",
    options: ["Deosai Plains", "Potohar Plateau", "Balochistan Plateau", "Kaghan Valley"],
    correctIndex: 0,
    explanation: "Deosai National Park lies at an average elevation of 4,114 meters in Gilgit-Baltistan, making it the second highest alpine plateau in the world, famous for its Himalayan brown bear habitat."
  },
  {
    id: "geo-06",
    category: "geography",
    categoryName: "Geography of Pakistan",
    difficulty: "easy",
    question: "Which sea borders Pakistan to the south along its 1,046-kilometer coastline?",
    options: ["Arabian Sea", "Red Sea", "Bay of Bengal", "Caspian Sea"],
    correctIndex: 0,
    explanation: "Pakistan's southern coastline stretches along the Arabian Sea, featuring major deep-sea maritime ports at Karachi, Port Qasim, and Gwadar."
  },
  {
    id: "geo-07",
    category: "geography",
    categoryName: "Geography of Pakistan",
    difficulty: "hard",
    question: "What is the highest mountain peak in the Hindu Kush range, located in Khyber Pakhtunkhwa's Chitral district?",
    options: ["Tirich Mir", "Noshaq", "Saraghrar", "Istor-o-Nal"],
    correctIndex: 0,
    explanation: "Tirich Mir rises to 7,708 meters (25,289 ft) in Chitral, standing as the highest peak of the Hindu Kush range and the highest peak outside the Himalayas and Karakoram ranges."
  },
  {
    id: "geo-08",
    category: "geography",
    categoryName: "Geography of Pakistan",
    difficulty: "medium",
    question: "Which is the largest desert in Pakistan, spanning eastern Punjab into southeastern Sindh?",
    options: ["Thar Desert", "Cholistan Desert", "Thal Desert", "Kharan Desert"],
    correctIndex: 0,
    explanation: "The Great Thar Desert spans southeast Pakistan and western India. In Punjab's Bahawalpur division, its contiguous section is famously known as the Cholistan Desert."
  },
  {
    id: "geo-09",
    category: "geography",
    categoryName: "Geography of Pakistan",
    difficulty: "hard",
    question: "What is the length of the disputed Siachen Glacier, often called the world's highest battlefield?",
    options: ["Approximately 76 kilometers", "Approximately 42 kilometers", "Approximately 115 kilometers", "Approximately 28 kilometers"],
    correctIndex: 0,
    explanation: "Siachen Glacier is roughly 76 km (47 miles) long, making it the second-longest non-polar glacier in the world, located in the eastern Karakoram range."
  },
  {
    id: "geo-10",
    category: "geography",
    categoryName: "Geography of Pakistan",
    difficulty: "medium",
    question: "Which iconic pass connects Peshawar in Khyber Pakhtunkhwa with Kabul in Afghanistan?",
    options: ["Khyber Pass", "Bolan Pass", "Gomal Pass", "Tochi Pass"],
    correctIndex: 0,
    explanation: "The Khyber Pass is an ancient 53 km mountain pass through the Spin Ghar mountains that served as a historical conduit for trade, armies, and cultural migrations across Central and South Asia."
  },
  {
    id: "geo-11",
    category: "geography",
    categoryName: "Geography of Pakistan",
    difficulty: "hard",
    question: "Which natural lake located near Skardu in Gilgit-Baltistan is renowned for its crystalline waters and Shangrila Resort?",
    options: ["Lower Kachura Lake", "Saif-ul-Malook", "Attabad Lake", "Rush Lake"],
    correctIndex: 0,
    explanation: "Lower Kachura Lake (also known as Shangrila Lake) is a breathtaking jewel situated at 2,500 meters altitude near Skardu, renowned for its distinctive pagoda-style resort."
  },
  {
    id: "geo-12",
    category: "geography",
    categoryName: "Geography of Pakistan",
    difficulty: "easy",
    question: "Which mountain range is located in the Balochistan province, famous for the Bolan Pass?",
    options: ["Toba Kakar and Central Brahui Ranges", "Salt Range", "Pir Panjal Range", "Sulaiman Range"],
    correctIndex: 0,
    explanation: "The Central Brahui and Toba Kakar ranges in Balochistan harbor historic corridors including the Bolan Pass, which links Sibi with Quetta."
  },
  {
    id: "geo-13",
    category: "geography",
    categoryName: "Geography of Pakistan",
    difficulty: "hard",
    question: "What is the official demarcation line establishing the border between Pakistan and Afghanistan called?",
    options: ["Durand Line", "Radcliffe Line", "McMahon Line", "Line of Control"],
    correctIndex: 0,
    explanation: "The 2,670-kilometer international boundary line was established in 1893 through an agreement between Sir Mortimer Durand of British India and Afghan Emir Abdur Rahman Khan."
  },

  // ==========================================
  // 3. NATIONAL SYMBOLS (13 Questions)
  // ==========================================
  {
    id: "sym-01",
    category: "symbols",
    categoryName: "National Symbols",
    difficulty: "easy",
    question: "What is the official National Animal of Pakistan?",
    options: ["Markhor", "Snow Leopard", "Bengal Tiger", "Indus River Dolphin"],
    correctIndex: 0,
    explanation: "The Markhor (Capra falconeri), known for its magnificent spiraled corkscrew horns, is Pakistan's national animal, inhabiting the rugged mountains of KPK, Balochistan, and Gilgit-Baltistan."
  },
  {
    id: "sym-02",
    category: "symbols",
    categoryName: "National Symbols",
    difficulty: "easy",
    question: "What is the National Flower of Pakistan?",
    options: ["Jasmine (Chambeli)", "Rose (Gulab)", "Lotus (Kamal)", "Marigold (Genda)"],
    correctIndex: 0,
    explanation: "Poet's Jasmine (Jasminum officinale), locally known as Chambeli, is cherished for its delicate white star petals and sweet fragrance, symbolizing purity and national heritage."
  },
  {
    id: "sym-03",
    category: "symbols",
    categoryName: "National Symbols",
    difficulty: "easy",
    question: "What is the official National Bird of Pakistan?",
    options: ["Chukar Partridge", "Shaheen Falcon", "Peacock", "Green Parrot"],
    correctIndex: 0,
    explanation: "The Chukar Partridge (Alectoris chukar) is recognized as Pakistan's national bird. The legendary Shaheen Falcon also holds distinction as the heritage bird of Pakistan."
  },
  {
    id: "sym-04",
    category: "symbols",
    categoryName: "National Symbols",
    difficulty: "medium",
    question: "Who penned the poetic verses of Pakistan's National Anthem (Qaumi Taranah)?",
    options: ["Hafeez Jalandhari", "Allama Muhammad Iqbal", "Faiz Ahmad Faiz", "Ahmad Faraz"],
    correctIndex: 0,
    explanation: "Abu Al-Asar Hafeez Jalandhari wrote the inspiring Persianized Urdu lyrics of the Qaumi Taranah in 1952, which was officially approved by the Government of Pakistan in 1954."
  },
  {
    id: "sym-05",
    category: "symbols",
    categoryName: "National Symbols",
    difficulty: "medium",
    question: "Who composed the musical score of Pakistan's National Anthem in 1949?",
    options: ["Ahmed Ghulamali Chagla", "Master Ghulam Haider", "Nisar Bazmi", "Khwaja Khurshid Anwar"],
    correctIndex: 0,
    explanation: "Renowned composer Ahmed Ghulamali Chagla composed the symphonic tune in 1949 using a blend of eastern and western instrumentation; the music was selected before the words were penned."
  },
  {
    id: "sym-06",
    category: "symbols",
    categoryName: "National Symbols",
    difficulty: "medium",
    question: "Who designed the national flag of Pakistan under the direction of Quaid-e-Azam?",
    options: ["Amiruddin Kidwai", "Abdur Rahman Chughtai", "Ziauddin Ahmad", "Liaquat Ali Khan"],
    correctIndex: 0,
    explanation: "Amiruddin Kidwai designed the national flag featuring a dark green field (representing the Muslim majority) with a white vertical bar (representing religious minorities) and the crescent and star."
  },
  {
    id: "sym-07",
    category: "symbols",
    categoryName: "National Symbols",
    difficulty: "hard",
    question: "Which four major agricultural crops are depicted in the shield of the State Emblem of Pakistan?",
    options: ["Cotton, Wheat, Tea, and Jute", "Cotton, Rice, Sugarcane, and Wheat", "Wheat, Maize, Barley, and Tobacco", "Rice, Jute, Mango, and Mustard"],
    correctIndex: 0,
    explanation: "Adopted in 1954, the central shield portrays Cotton, Wheat, Tea, and Jute, representing the key staple and cash crops of Pakistan (with tea and jute reflecting pre-1971 wings)."
  },
  {
    id: "sym-08",
    category: "symbols",
    categoryName: "National Symbols",
    difficulty: "easy",
    question: "What is the official National Motto of Pakistan inscribed on the State Emblem in Urdu calligraphy?",
    options: ["Iman, Ittihad, Nazm (Faith, Unity, Discipline)", "Ittehad, Aman, Taraqqi", "Sidq, Adl, Shujaat", "Al-Jihad, Al-Amal, Al-Falah"],
    correctIndex: 0,
    explanation: "The guiding motto given by Quaid-e-Azam Muhammad Ali Jinnah is 'Iman, Ittihad, Nazm' (Faith, Unity, and Discipline), inscribed on the scroll beneath the emblem."
  },
  {
    id: "sym-09",
    category: "symbols",
    categoryName: "National Symbols",
    difficulty: "medium",
    question: "What is the National Tree of Pakistan?",
    options: ["Deodar Cedar (Diyar)", "Neem Tree", "Banyan Tree", "Sheesham (Indian Rosewood)"],
    correctIndex: 0,
    explanation: "The magnificent Himalayan Cedar or Deodar (Cedrus deodara), native to northern Pakistan's alpine valleys, is designated as the National Tree of Pakistan."
  },
  {
    id: "sym-10",
    category: "symbols",
    categoryName: "National Symbols",
    difficulty: "easy",
    question: "Which delicious fruit is celebrated as the National Summer Fruit of Pakistan?",
    options: ["Mango", "Guava", "Pomegranate", "Apricot"],
    correctIndex: 0,
    explanation: "The Mango ('King of Fruits', especially famed varieties like Chaunsa, Sindhri, and Anwar Ratol) is Pakistan's National Summer Fruit, while Guava is recognized as the National Winter Fruit."
  },
  {
    id: "sym-11",
    category: "symbols",
    categoryName: "National Symbols",
    difficulty: "medium",
    question: "What is the National Sport of Pakistan?",
    options: ["Field Hockey", "Cricket", "Squash", "Polo"],
    correctIndex: 0,
    explanation: "Field Hockey is the official National Sport of Pakistan, in which the green shirts have won three Olympic Gold medals (1960, 1968, 1984) and four Hockey World Cups."
  },
  {
    id: "sym-12",
    category: "symbols",
    categoryName: "National Symbols",
    difficulty: "hard",
    question: "What is the official National Marine Mammal of Pakistan, indigenous to its freshwater river system?",
    options: ["Indus River Dolphin (Bhulan)", "Finless Porpoise", "Arabian Humpback Whale", "Dugong"],
    correctIndex: 0,
    explanation: "The endangered blind Indus River Dolphin (Platanista minor), locally known as the 'Bhulan', navigates using sophisticated echolocation in the muddy waters of the Indus River."
  },
  {
    id: "sym-13",
    category: "symbols",
    categoryName: "National Symbols",
    difficulty: "hard",
    question: "What is the National Monument of Pakistan located in the Shakarparian Hills of Islamabad shaped like?",
    options: ["A blooming flower with granite petals", "A minaret with balcony spirals", "A crescent dome with four arches", "An open Quran on a marble terrace"],
    correctIndex: 0,
    explanation: "The Pakistan Monument, designed by architect Arif Masoud and completed in 2007, features four large petals representing the four main provinces and three smaller petals for other territories."
  },

  // ==========================================
  // 4. PROVINCES AND CITIES (13 Questions)
  // ==========================================
  {
    id: "prv-01",
    category: "provinces",
    categoryName: "Provinces and Cities",
    difficulty: "easy",
    question: "Which is the most populous city and economic financial capital of Pakistan?",
    options: ["Karachi", "Lahore", "Faisalabad", "Rawalpindi"],
    correctIndex: 0,
    explanation: "Karachi, situated on the Arabian Sea in Sindh, is Pakistan's largest cosmopolitan city, primary seaport, and financial heartbeat, generating over a third of national tax revenues."
  },
  {
    id: "prv-02",
    category: "provinces",
    categoryName: "Provinces and Cities",
    difficulty: "easy",
    question: "Which province of Pakistan has the largest geographic land area?",
    options: ["Balochistan", "Punjab", "Sindh", "Khyber Pakhtunkhwa"],
    correctIndex: 0,
    explanation: "Balochistan covers approximately 347,190 square kilometers, accounting for nearly 44% of Pakistan's total land area, despite having the lowest population density."
  },
  {
    id: "prv-03",
    category: "provinces",
    categoryName: "Provinces and Cities",
    difficulty: "easy",
    question: "Which city is known as the 'Heart of Pakistan' and the cultural capital of the country?",
    options: ["Lahore", "Multan", "Peshawar", "Hyderabad"],
    correctIndex: 0,
    explanation: "Lahore is famed as Pakistan's cultural and intellectual soul, renowned for Mughal architecture (Badshahi Mosque, Shahi Qila, Shalimar Gardens) and vibrant literary and culinary traditions."
  },
  {
    id: "prv-04",
    category: "provinces",
    categoryName: "Provinces and Cities",
    difficulty: "medium",
    question: "Which city is celebrated worldwide for manufacturing top-tier FIFA World Cup footballs and surgical instruments?",
    options: ["Sialkot", "Gujranwala", "Faisalabad", "Sheikhupura"],
    correctIndex: 0,
    explanation: "Sialkot in Punjab is an export powerhouse producing up to 70% of the world's hand-stitched footballs (including FIFA official match balls like Telstar and Al Rihla) and precision surgical tools."
  },
  {
    id: "prv-05",
    category: "provinces",
    categoryName: "Provinces and Cities",
    difficulty: "medium",
    question: "Which ancient city in Khyber Pakhtunkhwa is renowned as the 'City of Flowers'?",
    options: ["Peshawar", "Mardan", "Abbottabad", "Swat"],
    correctIndex: 0,
    explanation: "Peshawar is one of the oldest continuously inhabited cities in South Asia (dating back over 2,500 years) and historically celebrated as the 'City of Flowers' (Gul-o-Bulbul)."
  },
  {
    id: "prv-06",
    category: "provinces",
    categoryName: "Provinces and Cities",
    difficulty: "medium",
    question: "Which historical city in southern Punjab is famously known as 'Madinat-ul-Auliya' (City of Saints)?",
    options: ["Multan", "Bahawalpur", "Dera Ghazi Khan", "Rahim Yar Khan"],
    correctIndex: 0,
    explanation: "Multan earned the title 'City of Saints' due to its constellation of magnificent blue-tiled mausoleums belonging to revered Sufi mystics like Bahauddin Zakariya and Shah Rukn-e-Alam."
  },
  {
    id: "prv-07",
    category: "provinces",
    categoryName: "Provinces and Cities",
    difficulty: "easy",
    question: "What is the capital city of Balochistan province?",
    options: ["Quetta", "Gwadar", "Turbat", "Khuzdar"],
    correctIndex: 0,
    explanation: "Quetta, nestled in a mountain valley ringed by Chiltan and Zarghun peaks at 1,680 meters altitude, serves as the provincial capital and administrative center of Balochistan."
  },
  {
    id: "prv-08",
    category: "provinces",
    categoryName: "Provinces and Cities",
    difficulty: "medium",
    question: "Which city in Punjab was formerly named Lyallpur and is famous as the 'Manchester of Pakistan'?",
    options: ["Faisalabad", "Sargodha", "Gujrat", "Kasur"],
    correctIndex: 0,
    explanation: "Faisalabad (renamed in 1979 in honor of King Faisal of Saudi Arabia) is Pakistan's textile capital, home to immense spinning, weaving, and textile export mills."
  },
  {
    id: "prv-09",
    category: "provinces",
    categoryName: "Provinces and Cities",
    difficulty: "hard",
    question: "Which UNESCO World Heritage archaeological site near Rawalpindi was a prime center of Gandhara Buddhist learning?",
    options: ["Taxila", "Harappa", "Takht-i-Bahi", "Kot Diji"],
    correctIndex: 0,
    explanation: "Taxila was a legendary crossroads of Gandharan civilization and early higher education dating back to the 6th century BCE, visited by Alexander the Great and home to Jaulian monastery."
  },
  {
    id: "prv-10",
    category: "provinces",
    categoryName: "Provinces and Cities",
    difficulty: "hard",
    question: "What is the capital city of Azad Jammu and Kashmir (AJK)?",
    options: ["Muzaffarabad", "Mirpur", "Rawalakot", "Kotli"],
    correctIndex: 0,
    explanation: "Muzaffarabad, perched picturesquely at the confluence of the Jhelum and Neelum rivers, serves as the capital and seat of government of Azad Jammu & Kashmir."
  },
  {
    id: "prv-11",
    category: "provinces",
    categoryName: "Provinces and Cities",
    difficulty: "hard",
    question: "Which port city in southwestern Balochistan has emerged as the strategic deep-sea crown jewel of CPEC?",
    options: ["Gwadar", "Pasni", "Ormara", "Jiwani"],
    correctIndex: 0,
    explanation: "Gwadar was purchased from the Sultanate of Oman by Pakistan in 1958 and has been developed into an ultra-modern warm-water deep seaport under the China-Pakistan Economic Corridor."
  },
  {
    id: "prv-12",
    category: "provinces",
    categoryName: "Provinces and Cities",
    difficulty: "medium",
    question: "Which scenic northern valley in Khyber Pakhtunkhwa is popularly heralded as the 'Switzerland of Pakistan'?",
    options: ["Swat Valley", "Hunza Valley", "Kaghan Valley", "Kumrat Valley"],
    correctIndex: 0,
    explanation: "Queen Elizabeth II famously dubbed Swat Valley the 'Switzerland of the East' during her visit in 1961, praising its alpine meadows, snow-capped peaks, and crystal streams."
  },
  {
    id: "prv-13",
    category: "provinces",
    categoryName: "Provinces and Cities",
    difficulty: "easy",
    question: "When did Islamabad officially replace Rawalpindi as the operational capital of Pakistan?",
    options: ["1967", "1947", "1958", "1973"],
    correctIndex: 0,
    explanation: "Master-planned by Greek architect Constantinos Doxiadis, construction of Islamabad began in the 1960s, and it officially became the functioning capital in 1967."
  },

  // ==========================================
  // 5. CULTURE AND TRADITIONS (13 Questions)
  // ==========================================
  {
    id: "cul-01",
    category: "culture",
    categoryName: "Culture and Traditions",
    difficulty: "easy",
    question: "What is the world-renowned traditional Sindhi block-printed shawl featuring geometric and floral patterns called?",
    options: ["Ajrak", "Pashmina", "Phulkari", "Ralli"],
    correctIndex: 0,
    explanation: "Ajrak is a distinctive crimson and indigo block-printed cotton shawl with geometric motifs that has symbolized Sindhi pride, hospitality, and civilizational identity since Mohenjo-daro times."
  },
  {
    id: "cul-02",
    category: "culture",
    categoryName: "Culture and Traditions",
    difficulty: "easy",
    question: "What is the national dress worn by both men and women across all provinces in Pakistan?",
    options: ["Shalwar Kameez", "Sherwani and Kurta", "Dhoti Kurta", "Angarkha"],
    correctIndex: 0,
    explanation: "The Shalwar Kameez is Pakistan's national attire, worn universally with diverse regional styling, sleeve designs, and fabric embellishments across all provinces."
  },
  {
    id: "cul-03",
    category: "culture",
    categoryName: "Culture and Traditions",
    difficulty: "medium",
    question: "Where is the famous annual Shandur Polo Festival celebrated on the highest polo ground in the world?",
    options: ["Shandur Pass (between Chitral and Gilgit)", "Babusar Top", "Khunjerab National Park", "Skardu Polo Arena"],
    correctIndex: 0,
    explanation: "The Shandur Polo Festival is held every July at Shandur Top at 3,700 meters elevation, featuring traditional freestyle 'mountain polo' contested between rival teams of Chitral and Gilgit."
  },
  {
    id: "cul-04",
    category: "culture",
    categoryName: "Culture and Traditions",
    difficulty: "medium",
    question: "Which devotional musical form was popularized internationally by Ustad Nusrat Fateh Ali Khan?",
    options: ["Qawwali", "Ghazal", "Kafi", "Thumri"],
    correctIndex: 0,
    explanation: "Qawwali is a 700-year-old Sufi devotional music tradition originally innovated by Amir Khusrau. Nusrat Fateh Ali Khan took the transcendent art form to grand global stages."
  },
  {
    id: "cul-05",
    category: "culture",
    categoryName: "Culture and Traditions",
    difficulty: "medium",
    question: "Which venerated 17th-century Sufi poet composed the masterpiece Punjabi folk epic 'Heer Ranjha'?",
    options: ["Waris Shah", "Bulleh Shah", "Sultan Bahoo", "Mian Muhammad Bakhsh"],
    correctIndex: 0,
    explanation: "Pir Syed Waris Shah penned 'Heer Waris Shah' in 1766, which is universally regarded as the greatest romantic and philosophical epic in classical Punjabi literature."
  },
  {
    id: "cul-06",
    category: "culture",
    categoryName: "Culture and Traditions",
    difficulty: "hard",
    question: "Which unique indigenous non-Muslim community residing in Chitral is celebrated for their ancient polytheistic culture and black dresses?",
    options: ["Kalash People", "Balti People", "Wakhi People", "Brokpa People"],
    correctIndex: 0,
    explanation: "The Kalash people live in the Bumburet, Rumbur, and Birir valleys of Chitral, practicing a unique ancient animist religion featuring lively seasonal festivals like Chilam Joshi and Uchau."
  },
  {
    id: "cul-07",
    category: "culture",
    categoryName: "Culture and Traditions",
    difficulty: "easy",
    question: "What distinct vibrant Pakistani folk art adorns commercial transport vehicles with kaleidoscopic motifs and poetry?",
    options: ["Pakistani Truck Art (Phool Patti)", "Blue Pottery", "Peshawari Chappal", "Brass Inlay"],
    correctIndex: 0,
    explanation: "Pakistani Truck Art (often called 'Jingle Trucks') is a celebrated artistic craft featuring hand-painted landscapes, floral arabesques, reflective tape murals, and humorous Urdu couplets."
  },
  {
    id: "cul-08",
    category: "culture",
    categoryName: "Culture and Traditions",
    difficulty: "medium",
    question: "Where is the famous 13th-century Sufi shrine of Hazrat Lal Shahbaz Qalandar located?",
    options: ["Sehwan Sharif, Sindh", "Bhit Shah, Sindh", "Uch Sharif, Punjab", "Pakpattan, Punjab"],
    correctIndex: 0,
    explanation: "The shrine of Hazrat Syed Muhammad Usman Marwandi, affectionately called Lal Shahbaz Qalandar, is in Sehwan Sharif, Sindh, renowned for the ecstatic evening Dhamaal spiritual dance."
  },
  {
    id: "cul-09",
    category: "culture",
    categoryName: "Culture and Traditions",
    difficulty: "hard",
    question: "What is the classical Pashto folk poetic form featuring a two-line meter called?",
    options: ["Landay (or Tappa)", "Charbeta", "Rubai", "Ghazal"],
    correctIndex: 0,
    explanation: "A Landay (meaning 'short' in Pashto) is a distinct 9-syllable and 13-syllable unrhymed two-line poem traditionally created and passed down orally by Pashtun women to voice grief, love, and heroism."
  },
  {
    id: "cul-10",
    category: "culture",
    categoryName: "Culture and Traditions",
    difficulty: "medium",
    question: "Which ceramic artisanal craft is the historic southern city of Hala and Multan internationally renowned for?",
    options: ["Blue Pottery (Kashi Kari)", "Marble Inlay", "Terracotta Weaving", "Silver Filigree"],
    correctIndex: 0,
    explanation: "Kashi Kari (blue pottery) is a Persian-influenced ceramic art practiced for centuries in Multan and Hala, recognizable by vibrant cobalt blue and turquoise hand-painted floral tiles and vases."
  },
  {
    id: "cul-11",
    category: "culture",
    categoryName: "Culture and Traditions",
    difficulty: "easy",
    question: "What traditional hand-crafted leather footwear with double soles originated in Khyber Pakhtunkhwa?",
    options: ["Peshawari Chappal", "Khussa", "Kolhapuri", "Mojari"],
    correctIndex: 0,
    explanation: "The Peshawari Chappal is an iconic semi-closed leather sandal with crossed straps and sturdy vulcanized rubber or leather soles, popular for both festive and daily attire."
  },
  {
    id: "cul-12",
    category: "culture",
    categoryName: "Culture and Traditions",
    difficulty: "hard",
    question: "Who was the renowned 18th-century Sindhi Sufi poet whose verses are collected in the monumental 'Shah Jo Risalo'?",
    options: ["Shah Abdul Latif Bhittai", "Sachal Sarmast", "Mian Mir", "Khwaja Ghulam Farid"],
    correctIndex: 0,
    explanation: "Shah Abdul Latif Bhittai (1689–1752) is the greatest poet of the Sindhi language. His magnum opus 'Shah Jo Risalo' utilizes folk heroines (Sur Marvi, Sohni, Sasui) as metaphors for mystical divine love."
  },
  {
    id: "cul-13",
    category: "culture",
    categoryName: "Culture and Traditions",
    difficulty: "medium",
    question: "What is the beloved traditional festive dessert drink made from milk, rose syrup, basil seeds, and vermicelli called?",
    options: ["Falooda", "Lassi", "Kashmiri Chai", "Sattu"],
    correctIndex: 0,
    explanation: "Falooda is a legendary layered dessert and beverage made with chilled rose syrup, sweet vermicelli, soaked basil seeds (tukhmaria), and topped with rich condensed milk or kulfi ice cream."
  },

  // ==========================================
  // 6. SPORTS AND CRICKET (13 Questions)
  // ==========================================
  {
    id: "spt-01",
    category: "sports",
    categoryName: "Sports and Cricket",
    difficulty: "easy",
    question: "In which year did the Pakistan Cricket Team win their historic ICC Men's Cricket World Cup under Imran Khan?",
    options: ["1992", "1999", "1987", "1996"],
    correctIndex: 0,
    explanation: "On 25th March 1992 at the Melbourne Cricket Ground (MCG), Pakistan defeated England by 22 runs in the final to lift the prestigious crystal Benson & Hedges World Cup trophy."
  },
  {
    id: "spt-02",
    category: "sports",
    categoryName: "Sports and Cricket",
    difficulty: "easy",
    question: "Who is the legendary Pakistani squash maestro who held an unbroken world-record streak of 555 consecutive match victories?",
    options: ["Jahangir Khan", "Jansher Khan", "Qamar Zaman", "Hashim Khan"],
    correctIndex: 0,
    explanation: "Jahangir Khan won 555 consecutive professional squash matches between 1981 and 1986, establishing the longest winning streak in the history of any professional sport, winning 10 British Opens."
  },
  {
    id: "spt-03",
    category: "sports",
    categoryName: "Sports and Cricket",
    difficulty: "easy",
    question: "Which Pakistani athlete won the historic Men's Javelin Throw Gold Medal at the 2024 Paris Olympics with an Olympic record of 92.97m?",
    options: ["Arshad Nadeem", "Neeraj Chopra", "Haider Ali", "Muhammad Inam"],
    correctIndex: 0,
    explanation: "Arshad Nadeem made history on 8th August 2024 by winning Pakistan's first individual Olympic gold medal in 40 years, setting a sensational Olympic Record throw of 92.97 meters."
  },
  {
    id: "spt-04",
    category: "sports",
    categoryName: "Sports and Cricket",
    difficulty: "medium",
    question: "How many times has Pakistan won the Men's FIH Hockey World Cup, holding the global record?",
    options: ["4 times (1971, 1978, 1982, 1994)", "3 times", "2 times", "5 times"],
    correctIndex: 0,
    explanation: "Pakistan holds the all-time world record with 4 Men's FIH Field Hockey World Cup titles, won in Barcelona (1971), Buenos Aires (1978), Mumbai (1982), and Sydney (1994)."
  },
  {
    id: "spt-05",
    category: "sports",
    categoryName: "Sports and Cricket",
    difficulty: "medium",
    question: "Against which rival did Pakistan triumph by 180 runs to lift the 2017 ICC Champions Trophy at The Oval, London?",
    options: ["India", "England", "Australia", "South Africa"],
    correctIndex: 0,
    explanation: "Led by Sarfaraz Ahmed, Pakistan scored 338/4 powered by Fakhar Zaman's memorable 114 and Mohammad Amir's lethal opening spell to bowl India out for 158 on 18th June 2017."
  },
  {
    id: "spt-06",
    category: "sports",
    categoryName: "Sports and Cricket",
    difficulty: "medium",
    question: "Who holds the record for the fastest delivery ever recorded in international cricket bowling history (161.3 km/h or 100.23 mph)?",
    options: ["Shoaib Akhtar", "Wasim Akram", "Waqar Younis", "Brett Lee"],
    correctIndex: 0,
    explanation: "Known as the 'Rawalpindi Express', Shoaib Akhtar clocked the official record delivery of 161.3 km/h against England's Nick Knight during the 2003 ICC Cricket World Cup in Cape Town."
  },
  {
    id: "spt-07",
    category: "sports",
    categoryName: "Sports and Cricket",
    difficulty: "hard",
    question: "In which year and country did Pakistan win their first ICC Men's T20 World Cup title under Younis Khan?",
    options: ["2009 in England", "2007 in South Africa", "2010 in West Indies", "2012 in Sri Lanka"],
    correctIndex: 0,
    explanation: "Pakistan captured the ICC World Twenty20 at Lord's, London, on 21st June 2009, defeating Sri Lanka by 8 wickets with Shahid Afridi hitting the winning runs."
  },
  {
    id: "spt-08",
    category: "sports",
    categoryName: "Sports and Cricket",
    difficulty: "hard",
    question: "Who was the legendary Pakistani batsman who scored 337 runs against the West Indies at Bridgetown in 1958, batting for over 16 hours?",
    options: ["Hanif Mohammad", "Javed Miandad", "Zaheer Abbas", "Mushtaq Mohammad"],
    correctIndex: 0,
    explanation: "Hanif Mohammad, the 'Little Master', batted for an astonishing 970 minutes (16 hours and 10 minutes) to score 337 runs, saving the test match in what remains the longest individual innings in test history."
  },
  {
    id: "spt-09",
    category: "sports",
    categoryName: "Sports and Cricket",
    difficulty: "easy",
    question: "Who is celebrated as the 'Sultan of Swing', having taken 502 ODI wickets and 414 Test wickets for Pakistan?",
    options: ["Wasim Akram", "Imran Khan", "Waqar Younis", "Abdul Qadir"],
    correctIndex: 0,
    explanation: "Wasim Akram is universally hailed as one of the greatest left-arm fast bowlers in cricket history, pioneering both traditional and reverse swing bowling alongside Waqar Younis."
  },
  {
    id: "spt-10",
    category: "sports",
    categoryName: "Sports and Cricket",
    difficulty: "hard",
    question: "How many World Open squash titles did Jansher Khan win during his illustrious international dominance?",
    options: ["8 World Open titles", "6 World Open titles", "5 World Open titles", "10 World Open titles"],
    correctIndex: 0,
    explanation: "Jansher Khan won a record eight World Open titles between 1987 and 1996, in addition to six British Open titles, ranking World No. 1 for over 10 consecutive years."
  },
  {
    id: "spt-11",
    category: "sports",
    categoryName: "Sports and Cricket",
    difficulty: "medium",
    question: "In which year did Pakistan win its first Olympic Gold Medal in Field Hockey at the Rome Games?",
    options: ["1960", "1956", "1968", "1972"],
    correctIndex: 0,
    explanation: "At the 1960 Rome Olympics, the Pakistan Hockey team led by Abdul Hamid Hamidi ended India's 32-year undefeated Olympic run with a 1-0 victory in the final to claim gold."
  },
  {
    id: "spt-12",
    category: "sports",
    categoryName: "Sports and Cricket",
    difficulty: "medium",
    question: "Who is the Pakistani mountaineer who summited all 14 of the world's 8,000-meter peaks at the youngest age?",
    options: ["Shehroze Kashif", "Ali Sadpara", "Sajid Sadpara", "Nazir Sabir"],
    correctIndex: 0,
    explanation: "Shehroze Kashif, known as 'The Broad Boy', became the youngest mountaineer in history to climb both K2 and Everest at age 19, and conquered all 14 eight-thousanders by 2024."
  },
  {
    id: "spt-13",
    category: "sports",
    categoryName: "Sports and Cricket",
    difficulty: "hard",
    question: "Which Pakistani female tennis sensation reached the Wimbledon Girls' Doubles final in 2002 and won multiple Asian Medals?",
    options: ["Ushna Suhail", "Aisam-ul-Haq Qureshi", "Meheq Khokhar", "Sarah Mahboob Khan"],
    correctIndex: 0,
    explanation: "Ushna Suhail is Pakistan's premier female tennis player who earned a WTA world ranking, while Aisam-ul-Haq Qureshi spearheaded Pakistan's men's tennis reaching the 2010 US Open Doubles final."
  },

  // ==========================================
  // 7. IMPORTANT PERSONALITIES (13 Questions)
  // ==========================================
  {
    id: "per-01",
    category: "personalities",
    categoryName: "Important Personalities",
    difficulty: "easy",
    question: "What honorary title was bestowed upon Pakistan's founder Muhammad Ali Jinnah?",
    options: ["Quaid-e-Azam (Great Leader)", "Quaid-e-Millat (Leader of the Nation)", "Mufakkir-e-Pakistan", "Shaheed-e-Millat"],
    correctIndex: 0,
    explanation: "Mian Feroz-ud-Din Ahmad proposed the title 'Quaid-e-Azam' (The Great Leader) for Muhammad Ali Jinnah in 1938, in admiration of his upright constitutional leadership."
  },
  {
    id: "per-02",
    category: "personalities",
    categoryName: "Important Personalities",
    difficulty: "easy",
    question: "Who is venerated as the national poet and 'Mufakkir-e-Pakistan' (Thinker of Pakistan)?",
    options: ["Dr. Allama Muhammad Iqbal", "Faiz Ahmad Faiz", "Mirza Ghalib", "Choudhry Rahmat Ali"],
    correctIndex: 0,
    explanation: "Dr. Allama Muhammad Iqbal (1877–1938), the great philosopher-poet, inspired the intellectual genesis of Pakistan with his Persian and Urdu poetry like Bang-e-Dra and Zarb-e-Kaleem."
  },
  {
    id: "per-03",
    category: "personalities",
    categoryName: "Important Personalities",
    difficulty: "easy",
    question: "What revered title was granted to Fatima Jinnah for her steadfast devotion during the independence movement?",
    options: ["Madar-e-Millat (Mother of the Nation)", "Khatoon-e-Pakistan", "Dukhtar-e-Mashriq", "Bulbul-e-Hind"],
    correctIndex: 0,
    explanation: "Fatima Jinnah, a dental surgeon and younger sister of the Quaid, was honored as 'Madar-e-Millat' (Mother of the Nation) for organizing Muslim women and championing civil liberties."
  },
  {
    id: "per-04",
    category: "personalities",
    categoryName: "Important Personalities",
    difficulty: "medium",
    question: "Who founded the world's largest volunteer ambulance network and was hailed as 'Angel of Mercy'?",
    options: ["Abdul Sattar Edhi", "Dr. Ruth Pfau", "Hakim Said", "Dr. Adeebul Hasan Rizvi"],
    correctIndex: 0,
    explanation: "Abdul Sattar Edhi (1928–2016) dedicated his life to unconditional humanitarian service, founding the Edhi Foundation which runs orphanages, morgues, rehab centers, and the world's largest ambulance fleet."
  },
  {
    id: "per-05",
    category: "personalities",
    categoryName: "Important Personalities",
    difficulty: "medium",
    question: "Which Pakistani theoretical physicist shared the 1979 Nobel Prize in Physics for electroweak unification?",
    options: ["Dr. Abdus Salam", "Dr. Abdul Qadeer Khan", "Dr. Atta-ur-Rahman", "Dr. Ishfaq Ahmad"],
    correctIndex: 0,
    explanation: "Dr. Abdus Salam (1926–1996) won the 1979 Nobel Prize in Physics alongside Sheldon Glashow and Steven Weinberg for unifying the weak nuclear force and electromagnetism."
  },
  {
    id: "per-06",
    category: "personalities",
    categoryName: "Important Personalities",
    difficulty: "medium",
    question: "Who was the German-Pakistani Catholic nun and physician revered for eradicating leprosy in Pakistan?",
    options: ["Dr. Ruth Pfau", "Sister Gertrude Lemmens", "Mother Teresa", "Bilquis Edhi"],
    correctIndex: 0,
    explanation: "Dr. Ruth Pfau (1929–2017) founded the Marie Adelaide Leprosy Centre in Karachi in 1960. Thanks to her 55-year selfless mission, the WHO declared leprosy controlled in Pakistan in 1996."
  },
  {
    id: "per-07",
    category: "personalities",
    categoryName: "Important Personalities",
    difficulty: "easy",
    question: "Who became the first democratically elected female Prime Minister of a Muslim-majority nation in 1988?",
    options: ["Benazir Bhutto", "Begum Ra'ana Liaquat Ali Khan", "Fatima Jinnah", "Hina Rabbani Khar"],
    correctIndex: 0,
    explanation: "Benazir Bhutto was sworn in as Prime Minister of Pakistan on 2nd December 1988 at the age of 35, becoming the first female head of government in the modern Muslim world."
  },
  {
    id: "per-08",
    category: "personalities",
    categoryName: "Important Personalities",
    difficulty: "medium",
    question: "Which renowned Pakistani poet won the International Lenin Peace Prize in 1962?",
    options: ["Faiz Ahmad Faiz", "Ahmad Faraz", "Habib Jalib", "Josh Malihabadi"],
    correctIndex: 0,
    explanation: "Faiz Ahmad Faiz was an internationally acclaimed progressive Urdu poet nominated multiple times for the Nobel Prize in Literature and awarded the Lenin Peace Prize in Moscow."
  },
  {
    id: "per-09",
    category: "personalities",
    categoryName: "Important Personalities",
    difficulty: "easy",
    question: "At age 17, who became the youngest recipient of the Nobel Peace Prize in 2014?",
    options: ["Malala Yousafzai", "Greta Thunberg", "Nadia Murad", "Tawakkol Karman"],
    correctIndex: 0,
    explanation: "Malala Yousafzai from Swat Valley was awarded the 2014 Nobel Peace Prize alongside Kailash Satyarthi for her courageous advocacy for universal girls' education."
  },
  {
    id: "per-10",
    category: "personalities",
    categoryName: "Important Personalities",
    difficulty: "hard",
    question: "Who is known as the 'National Artist of Pakistan' and pioneer of modern Islamic art and calligraphy?",
    options: ["Sadequain (Syed Sadequain Ahmed Naqvi)", "Abdur Rahman Chughtai", "Ismail Gulgee", "Jamil Naqsh"],
    correctIndex: 0,
    explanation: "Sadequain was a polymath artist, calligrapher, and poet renowned for magnificent monumental murals at Mangla Dam, Lahore Museum, and Frere Hall Karachi, modernizing Quranic calligraphy."
  },
  {
    id: "per-11",
    category: "personalities",
    categoryName: "Important Personalities",
    difficulty: "medium",
    question: "Who was the legendary metallurgist regarded as the father of Pakistan's uranium enrichment nuclear program?",
    options: ["Dr. Abdul Qadeer Khan", "Dr. Munir Ahmad Khan", "Dr. Samar Mubarakmand", "Dr. Riazuddin"],
    correctIndex: 0,
    explanation: "Dr. A. Q. Khan founded the Khan Research Laboratories (KRL) at Kahuta in 1976, pioneering centrifuge uranium enrichment technology that established Pakistan's nuclear deterrent."
  },
  {
    id: "per-12",
    category: "personalities",
    categoryName: "Important Personalities",
    difficulty: "hard",
    question: "Who founded the Sindh Institute of Urology and Transplantation (SIUT) providing free kidney care and transplants?",
    options: ["Dr. Adib-ul-Hasan Rizvi", "Dr. Sania Nishtar", "Dr. Atta-ur-Rahman", "Dr. Tariq Banuri"],
    correctIndex: 0,
    explanation: "Dr. Adibul Hasan Rizvi founded SIUT in Karachi with the guiding philosophy: 'No one should be allowed to die just because they cannot afford to live', performing millions of free treatments."
  },
  {
    id: "per-13",
    category: "personalities",
    categoryName: "Important Personalities",
    difficulty: "hard",
    question: "Who was the first woman governor of a province (Sindh) in Pakistan and ambassador to the Netherlands?",
    options: ["Begum Ra'ana Liaquat Ali Khan", "Shaista Suhrawardy Ikramullah", "Syeda Abida Hussain", "Fehmida Mirza"],
    correctIndex: 0,
    explanation: "Begum Ra'ana Liaquat Ali Khan, wife of Pakistan's first Prime Minister, was an educator and diplomat who served as Governor of Sindh from 1973 to 1976 and founded the All Pakistan Women's Association (APWA)."
  },

  // ==========================================
  // 8. CONSTITUTION AND CIVICS (13 Questions)
  // ==========================================
  {
    id: "con-01",
    category: "constitution",
    categoryName: "Constitution and Civics",
    difficulty: "easy",
    question: "Which constitution currently governs the Islamic Republic of Pakistan?",
    options: ["The 1973 Constitution", "The 1956 Constitution", "The 1962 Constitution", "The 1947 Government of India Act"],
    correctIndex: 0,
    explanation: "Pakistan's current constitution was unanimously passed by the National Assembly on 10th April 1973 and came into effect on 14th August 1973, establishing a federal parliamentary democracy."
  },
  {
    id: "con-02",
    category: "constitution",
    categoryName: "Constitution and Civics",
    difficulty: "easy",
    question: "What type of legislature does Pakistan have at the federal level?",
    options: ["Bicameral (Senate and National Assembly)", "Unicameral (National Assembly only)", "Tricameral", "Direct Directorate"],
    correctIndex: 0,
    explanation: "Under Article 50 of the 1973 Constitution, the Parliament of Pakistan (Majlis-e-Shoora) is bicameral, consisting of the President, the Senate (Upper House), and the National Assembly (Lower House)."
  },
  {
    id: "con-03",
    category: "constitution",
    categoryName: "Constitution and Civics",
    difficulty: "medium",
    question: "Which landmark constitutional amendment passed in 2010 devolved powers and autonomy to the provinces?",
    options: ["18th Constitutional Amendment", "13th Constitutional Amendment", "17th Constitutional Amendment", "21st Constitutional Amendment"],
    correctIndex: 0,
    explanation: "The 18th Amendment (passed in April 2010) abolished the Concurrent Legislative List, transferring substantial legislative, educational, and fiscal autonomy to provincial governments and removing presidential powers to dismiss parliament."
  },
  {
    id: "con-04",
    category: "constitution",
    categoryName: "Constitution and Civics",
    difficulty: "medium",
    question: "What is the constitutional term length for a member of the Senate of Pakistan?",
    options: ["6 years (with half retiring every 3 years)", "5 years", "4 years", "3 years"],
    correctIndex: 0,
    explanation: "Senators serve a six-year term, with approximately half of the Senate's seats contested every three years in staggered elections by provincial assemblies, ensuring legislative continuity."
  },
  {
    id: "con-05",
    category: "constitution",
    categoryName: "Constitution and Civics",
    difficulty: "easy",
    question: "What is the regular constitutional tenure of the National Assembly of Pakistan unless dissolved earlier?",
    options: ["5 years", "4 years", "6 years", "3 years"],
    correctIndex: 0,
    explanation: "Under Article 52 of the 1973 Constitution, the National Assembly, unless sooner dissolved, continues for a period of five years from the date of its first meeting."
  },
  {
    id: "con-06",
    category: "constitution",
    categoryName: "Constitution and Civics",
    difficulty: "medium",
    question: "Who is the constitutional Head of State of Pakistan?",
    options: ["The President", "The Prime Minister", "The Chief Justice", "The Speaker of the National Assembly"],
    correctIndex: 0,
    explanation: "Under Article 41, the President is the Head of State and represents the unity of the Republic, while the Prime Minister serves as the Chief Executive and Head of Government."
  },
  {
    id: "con-07",
    category: "constitution",
    categoryName: "Constitution and Civics",
    difficulty: "hard",
    question: "Which article of the 1973 Constitution guarantees the 'Right to Information' as a fundamental right?",
    options: ["Article 19A", "Article 10A", "Article 25A", "Article 9"],
    correctIndex: 0,
    explanation: "Article 19A was inserted by the 18th Amendment in 2010, declaring: 'Every citizen shall have the right to have access to information in all matters of public importance subject to regulation and reasonable restrictions imposed by law.'"
  },
  {
    id: "con-08",
    category: "constitution",
    categoryName: "Constitution and Civics",
    difficulty: "hard",
    question: "Which article guarantees free and compulsory education for all children aged 5 to 16 years?",
    options: ["Article 25A", "Article 18", "Article 37", "Article 20"],
    correctIndex: 0,
    explanation: "Article 25A establishes: 'The State shall provide free and compulsory education to all children of the age of five to sixteen years in such manner as may be determined by law.'"
  },
  {
    id: "con-09",
    category: "constitution",
    categoryName: "Constitution and Civics",
    difficulty: "medium",
    question: "Who administers the oath of office to the newly elected Prime Minister of Pakistan?",
    options: ["The President of Pakistan", "The Chief Justice of Pakistan", "The Speaker of the National Assembly", "The Chairman of the Senate"],
    correctIndex: 0,
    explanation: "According to the Third Schedule and Article 91 of the Constitution, the President of Pakistan administers the oath of office to the Prime Minister."
  },
  {
    id: "con-10",
    category: "constitution",
    categoryName: "Constitution and Civics",
    difficulty: "hard",
    question: "Which constitutional body is responsible for allocating revenues between the federation and the provinces in Pakistan?",
    options: ["National Finance Commission (NFC)", "Council of Common Interests (CCI)", "Federal Board of Revenue (FBR)", "Planning Commission"],
    correctIndex: 0,
    explanation: "The National Finance Commission (NFC), constituted under Article 160 of the Constitution, formulates the NFC Award distributing the divisible federal tax pool among the provinces."
  },
  {
    id: "con-11",
    category: "constitution",
    categoryName: "Constitution and Civics",
    difficulty: "medium",
    question: "What is the supreme judicial authority in the Islamic Republic of Pakistan?",
    options: ["The Supreme Court of Pakistan", "The Federal Shariat Court", "The High Court of Islamabad", "The Judicial Commission"],
    correctIndex: 0,
    explanation: "The Supreme Court of Pakistan, headquartered at Constitution Avenue in Islamabad, is the apex court in the judicial hierarchy, led by the Chief Justice of Pakistan."
  },
  {
    id: "con-12",
    category: "constitution",
    categoryName: "Constitution and Civics",
    difficulty: "hard",
    question: "Which amendment merged the Federally Administered Tribal Areas (FATA) into Khyber Pakhtunkhwa in 2018?",
    options: ["25th Constitutional Amendment", "21st Constitutional Amendment", "19th Constitutional Amendment", "23rd Constitutional Amendment"],
    correctIndex: 0,
    explanation: "The 25th Amendment enacted in May 2018 historic landmark legislation that integrated FATA into Khyber Pakhtunkhwa province, bringing constitutional rights and civil courts to tribal districts."
  },
  {
    id: "con-13",
    category: "constitution",
    categoryName: "Constitution and Civics",
    difficulty: "easy",
    question: "What is the official minimum voting age for citizens in general elections in Pakistan?",
    options: ["18 years", "21 years", "16 years", "20 years"],
    correctIndex: 0,
    explanation: "The minimum voting age in Pakistan is 18 years, as established by the Constitution and enforced by the Election Commission of Pakistan (ECP) with Computerized National Identity Cards (CNIC)."
  },

  // ==========================================
  // 9. ECONOMY AND AGRICULTURE (13 Questions)
  // ==========================================
  {
    id: "eco-01",
    category: "economy",
    categoryName: "Economy and Agriculture",
    difficulty: "easy",
    question: "What is the central bank and monetary regulator of Pakistan?",
    options: ["State Bank of Pakistan (SBP)", "National Bank of Pakistan (NBP)", "Federal Reserve of Pakistan", "Habib Bank Limited"],
    correctIndex: 0,
    explanation: "The State Bank of Pakistan was inaugurated on 1st July 1948 by Quaid-e-Azam Muhammad Ali Jinnah, regulating national currency issuance, monetary policy, and commercial banks."
  },
  {
    id: "eco-02",
    category: "economy",
    categoryName: "Economy and Agriculture",
    difficulty: "easy",
    question: "Which agricultural commodity is Pakistan's largest foreign exchange export earner?",
    options: ["Textiles and Cotton Products", "Basmati Rice", "Leather goods", "Sports Goods"],
    correctIndex: 0,
    explanation: "The textile industry constitutes approximately 55% to 60% of Pakistan's total annual export revenues, making Pakistan one of the top five cotton yarn and ready-made garment exporters in the world."
  },
  {
    id: "eco-03",
    category: "economy",
    categoryName: "Economy and Agriculture",
    difficulty: "medium",
    question: "Which major irrigation network in Pakistan is recognized as the largest contiguous canal system in the world?",
    options: ["Indus Basin Irrigation System (IBIS)", "Nile Basin Irrigation", "Ganges-Brahmaputra System", "Tigris-Euphrates Network"],
    correctIndex: 0,
    explanation: "The Indus Basin Irrigation System commands over 140,000 kilometers of canals and watercourses, irrigating over 45 million acres of fertile agricultural plains across Punjab and Sindh."
  },
  {
    id: "eco-04",
    category: "economy",
    categoryName: "Economy and Agriculture",
    difficulty: "easy",
    question: "What is the official currency of Pakistan?",
    options: ["Pakistani Rupee (PKR)", "Paisa", "Dinar", "Taka"],
    correctIndex: 0,
    explanation: "The Pakistani Rupee (PKR, symbol ₨) has been the official currency since 1948, initially subdivided into 100 paisas before decimalization in 1961."
  },
  {
    id: "eco-05",
    category: "economy",
    categoryName: "Economy and Agriculture",
    difficulty: "medium",
    question: "What premium aromatic rice variety grown in the fertile soils of Punjab holds a protected Geographical Indication (GI) tag for Pakistan?",
    options: ["Basmati Rice", "Jasmine Rice", "Sona Masoori", "IRRI-6 Rice"],
    correctIndex: 0,
    explanation: "Super Basmati rice, cultivated along the five rivers of Punjab, is famous worldwide for its exquisite aroma, long grain length upon cooking, and delicate flavor."
  },
  {
    id: "eco-06",
    category: "economy",
    categoryName: "Economy and Agriculture",
    difficulty: "medium",
    question: "What does the abbreviation 'CPEC' stand for in economic development between Pakistan and China?",
    options: ["China-Pakistan Economic Corridor", "Central Pakistan Energy Commission", "China-Pakistan Enterprise Council", "Commercial Port of Eurasian Connectivity"],
    correctIndex: 0,
    explanation: "CPEC is a multi-billion dollar flagship development project under China's Belt and Road Initiative, upgrading Pakistan's highways, energy grid, special economic zones, and Gwadar Port."
  },
  {
    id: "eco-07",
    category: "economy",
    categoryName: "Economy and Agriculture",
    difficulty: "hard",
    question: "Which water treaty signed in 1960 mediated by the World Bank governs the sharing of the Indus river system between Pakistan and India?",
    options: ["Indus Waters Treaty", "Tashkent Water Declaration", "Lahore Accord", "Panchnad Accord"],
    correctIndex: 0,
    explanation: "The Indus Waters Treaty was signed in Karachi on 19th September 1960 by President Ayub Khan and PM Jawaharlal Nehru, allocating the western rivers (Indus, Jhelum, Chenab) exclusively to Pakistan."
  },
  {
    id: "eco-08",
    category: "economy",
    categoryName: "Economy and Agriculture",
    difficulty: "medium",
    question: "Which massive earth-and-rock-filled dam on the Indus River in KP is the largest earth-filled dam in the world by structural volume?",
    options: ["Tarbela Dam", "Mangla Dam", "Warsak Dam", "Diamer-Bhasha Dam"],
    correctIndex: 0,
    explanation: "Tarbela Dam on the Indus River in Haripur district, completed in 1976, has an embankment volume of 106 million cubic meters, generating over 4,888 MW of clean hydroelectric power."
  },
  {
    id: "eco-09",
    category: "economy",
    categoryName: "Economy and Agriculture",
    difficulty: "hard",
    question: "Where is the famous Khewra Salt Mine, the world's second-largest salt mine and source of Himalayan Pink Salt, located?",
    options: ["Jhelum District, Punjab", "Chakwal District, Punjab", "Mianwali District, Punjab", "Kohat District, KP"],
    correctIndex: 0,
    explanation: "Located in the Salt Range in Khewra (Jhelum district), this ancient mine was discovered in 320 BCE by Alexander the Great's cavalry and yields centuries of world-famous pink rock salt."
  },
  {
    id: "eco-10",
    category: "economy",
    categoryName: "Economy and Agriculture",
    difficulty: "hard",
    question: "Which giant copper-gold deposit in Chagai district, Balochistan is one of the largest undeveloped copper reserves on Earth?",
    options: ["Reko Diq", "Saindak", "Duddar", "Sui"],
    correctIndex: 0,
    explanation: "Reko Diq contains an estimated 5.9 billion tons of ore grading 0.41% copper and 41.5 million ounces of gold, being developed into a multi-generational mining asset."
  },
  {
    id: "eco-11",
    category: "economy",
    categoryName: "Economy and Agriculture",
    difficulty: "medium",
    question: "In which year were the historic Karachi, Lahore, and Islamabad stock exchanges merged to form the single Pakistan Stock Exchange (PSX)?",
    options: ["2016", "2010", "2005", "2018"],
    correctIndex: 0,
    explanation: "On 11th January 2016, the three exchanges integrated into the unified Pakistan Stock Exchange (PSX), benchmarked by the renowned KSE-100 Index."
  },
  {
    id: "eco-12",
    category: "economy",
    categoryName: "Economy and Agriculture",
    difficulty: "easy",
    question: "Which town in Balochistan became historic in 1952 for the commercial discovery of vast natural gas reserves?",
    options: ["Sui", "Khuzdar", "Zhob", "Chaman"],
    correctIndex: 0,
    explanation: "The discovery of the giant Sui gas field in 1952 by Pakistan Petroleum Limited revolutionized domestic and industrial energy supplies across Pakistan, giving birth to Sui Gas companies."
  },
  {
    id: "eco-13",
    category: "economy",
    categoryName: "Economy and Agriculture",
    difficulty: "hard",
    question: "What agricultural season in Pakistan begins with autumn sowing (October-December) and spring harvesting (April-May), including wheat and barley?",
    options: ["Rabi Season", "Kharif Season", "Zaid Season", "Boro Season"],
    correctIndex: 0,
    explanation: "Pakistan has two main crop seasons: Rabi (winter crops harvested in spring, predominantly wheat and gram) and Kharif (monsoon crops harvested in autumn, like rice, cotton, and maize)."
  },

  // ==========================================
  // 10. SCIENCE AND EDUCATION (13 Questions)
  // ==========================================
  {
    id: "sci-01",
    category: "science",
    categoryName: "Science and Education",
    difficulty: "easy",
    question: "What is the national space agency of Pakistan founded in 1961 by Dr. Abdus Salam?",
    options: ["SUPARCO (Space and Upper Atmosphere Research Commission)", "NASA Pakistan", "ISRO Pakistan", "Pakistan Space Agency (PSA)"],
    correctIndex: 0,
    explanation: "SUPARCO was established on 16th September 1961, launching Pakistan's first sounding rocket Rehbar-I in June 1962, making Pakistan the 10th country in the world to launch a rocket."
  },
  {
    id: "sci-02",
    category: "science",
    categoryName: "Science and Education",
    difficulty: "easy",
    question: "On which date did Pakistan conduct its nuclear tests at the Ras Koh Hills in Chagai, Balochistan, celebrated as 'Youm-e-Takbeer'?",
    options: ["28th May 1998", "23rd March 1998", "14th August 1998", "6th September 1998"],
    correctIndex: 0,
    explanation: "On 28th May 1998, Pakistan successfully conducted five underground nuclear tests in the Chagai hills in response to Indian tests, becoming the 7th nuclear-armed power in the world."
  },
  {
    id: "sci-03",
    category: "science",
    categoryName: "Science and Education",
    difficulty: "medium",
    question: "What was the name of Pakistan's first indigenous low-Earth orbit satellite launched into orbit in July 1990?",
    options: ["Badr-1", "Paksat-1", "Rehbar-1", "Shaheen-1"],
    correctIndex: 0,
    explanation: "Badr-1 (meaning 'Full Moon') was designed and fabricated by SUPARCO engineers and launched on 16th July 1990 aboard a Long March 2E rocket from Xichang, China."
  },
  {
    id: "sci-04",
    category: "science",
    categoryName: "Science and Education",
    difficulty: "easy",
    question: "What is the oldest medical university in Pakistan, established in Lahore in 1860?",
    options: ["King Edward Medical University", "Dow University of Health Sciences", "Fatima Jinnah Medical University", "Nishtar Medical University"],
    correctIndex: 0,
    explanation: "King Edward Medical University (formerly Lahore Medical College) is the oldest medical school in Pakistan and the second oldest in South Asia, founded in 1860."
  },
  {
    id: "sci-05",
    category: "science",
    categoryName: "Science and Education",
    difficulty: "medium",
    question: "Which public university in Islamabad is ranked among Pakistan's top-tier universities for scientific research and natural sciences?",
    options: ["Quaid-i-Azam University (QAU)", "National University of Sciences & Technology (NUST)", "COMSATS University", "Allama Iqbal Open University (AIOU)"],
    correctIndex: 0,
    explanation: "Quaid-i-Azam University (established in 1967 as Islamabad University) is internationally recognized for its postgraduate research in physics, chemistry, biology, and social sciences."
  },
  {
    id: "sci-06",
    category: "science",
    categoryName: "Science and Education",
    difficulty: "medium",
    question: "Who was the renowned Pakistani organic chemist who headed the Higher Education Commission (HEC) and revolutionized Pakistani higher education and research funding?",
    options: ["Prof. Dr. Atta-ur-Rahman", "Dr. Salimuzzaman Siddiqui", "Dr. Ishfaq Ahmad", "Dr. Munir Ahmad Khan"],
    correctIndex: 0,
    explanation: "Prof. Dr. Atta-ur-Rahman FRS transformed tertiary education in Pakistan, establishing digital libraries, PhD scholarships, indigenous research grants, and building the ICCBS at Karachi University."
  },
  {
    id: "sci-07",
    category: "science",
    categoryName: "Science and Education",
    difficulty: "hard",
    question: "Which pioneering chemist in Pakistan discovered medicinal alkaloids in the Neem tree and Rauvolfia serpentina (Ajmaline)?",
    options: ["Dr. Salimuzzaman Siddiqui", "Dr. Riazuddin", "Dr. N. M. Butt", "Dr. I. H. Usmani"],
    correctIndex: 0,
    explanation: "Dr. Salimuzzaman Siddiqui (1897–1994) was a founding pioneer of natural products chemistry in Pakistan and the architect of the Pakistan Council of Scientific and Industrial Research (PCSIR)."
  },
  {
    id: "sci-08",
    category: "science",
    categoryName: "Science and Education",
    difficulty: "medium",
    question: "Where was Pakistan's first commercial nuclear power reactor, KANUPP, commissioned in 1972 with Canadian assistance?",
    options: ["Karachi coast, Sindh", "Chashma, Punjab", "Muzaffargarh, Punjab", "Hub, Balochistan"],
    correctIndex: 0,
    explanation: "The Karachi Nuclear Power Plant (KANUPP-1), a CANDU-type heavy water reactor, commenced commercial power generation in 1972, making Pakistan the first developing nation to adopt civilian nuclear power."
  },
  {
    id: "sci-09",
    category: "science",
    categoryName: "Science and Education",
    difficulty: "easy",
    question: "Which premier engineering university located in Islamabad was founded in 1991 and is recognized for cutting-edge science and technology?",
    options: ["NUST (National University of Sciences and Technology)", "UET Lahore", "GIKI (Ghulam Ishaq Khan Institute)", "NED University Karachi"],
    correctIndex: 0,
    explanation: "NUST is consistently ranked among the top engineering institutions in Pakistan and Asia, operating specialized institutes in computing, robotics, biotechnology, and materials science."
  },
  {
    id: "sci-10",
    category: "science",
    categoryName: "Science and Education",
    difficulty: "hard",
    question: "What is the name of Pakistan's historic lunar exploration rover mission launched aboard China's Chang'e 6 in May 2024?",
    options: ["ICUBE-Qamar", "Badr-Moon", "Rahbar-Lunar", "Shaheen-Orbit"],
    correctIndex: 0,
    explanation: "Developed by the Institute of Space Technology (IST) Islamabad in collaboration with SUPARCO and Shanghai Jiao Tong University, the miniature satellite ICUBE-Q captured historic lunar images."
  },
  {
    id: "sci-11",
    category: "science",
    categoryName: "Science and Education",
    difficulty: "hard",
    question: "Which Pakistani computer software prodigy became the world's youngest Microsoft Certified Professional (MCP) at age 9 in 2004?",
    options: ["Arfa Karim Randhawa", "Babar Iqbal", "Ayan Qureshi", "Muhammad Huzair Awan"],
    correctIndex: 0,
    explanation: "Arfa Karim (1995–2012) achieved world recognition when Bill Gates personally invited her to Microsoft headquarters in Redmond after she earned MCP certification at age nine."
  },
  {
    id: "sci-12",
    category: "science",
    categoryName: "Science and Education",
    difficulty: "medium",
    question: "Which historic university in Lahore, established in 1864, has educated two Nobel laureates (Dr. Abdus Salam and Har Gobind Khorana)?",
    options: ["Government College University (GCU) Lahore", "University of the Punjab", "Forman Christian College", "Islamia College Civil Lines"],
    correctIndex: 0,
    explanation: "Government College Lahore (now GCU) is one of South Asia's most storied educational institutions, renowned for its Gothic architecture and alumni including Allama Iqbal and Dr. Abdus Salam."
  },
  {
    id: "sci-13",
    category: "science",
    categoryName: "Science and Education",
    difficulty: "hard",
    question: "What is the name of the premier international research center founded by Dr. Abdus Salam in Trieste, Italy, to assist scientists from developing nations?",
    options: ["ICTP (International Centre for Theoretical Physics)", "CERN South", "TWAS (The World Academy of Sciences)", "PAEC Global"],
    correctIndex: 0,
    explanation: "Dr. Abdus Salam founded the International Centre for Theoretical Physics (ICTP) in 1964 under IAEA and UNESCO auspices to combat scientific brain drain from the Global South; it was renamed the Abdus Salam ICTP in his honor."
  }
];

// Helper functions for questions
const QuestionBank = {
  getAll: () => QUESTIONS,
  getCategories: () => CATEGORIES,
  getByCategory: (categoryId) => {
    if (!categoryId || categoryId === "all") return QUESTIONS;
    return QUESTIONS.filter((q) => q.category === categoryId);
  },
  getByDifficulty: (difficulty, pool = QUESTIONS) => {
    if (!difficulty || difficulty === "all") return pool;
    return pool.filter((q) => q.difficulty === difficulty);
  },
  getCategoryById: (id) => CATEGORIES.find((c) => c.id === id),
  getQuestionCountByCategory: (categoryId) => {
    if (!categoryId || categoryId === "all") return QUESTIONS.length;
    return QUESTIONS.filter((q) => q.category === categoryId).length;
  },
  // Deterministic daily challenge generator based on date string (e.g., '2026-10-23')
  getDailyChallengeQuestions: (dateString = new Date().toISOString().slice(0, 10)) => {
    // Simple pseudo-random hash generator using date string as seed
    let seed = 0;
    for (let i = 0; i < dateString.length; i++) {
      seed = (seed * 31 + dateString.charCodeAt(i)) >>> 0;
    }
    const pseudoRandom = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };

    // Pick 1 question from each of the 10 categories to ensure a diverse daily test
    const dailyQuestions = [];
    CATEGORIES.forEach((cat) => {
      const catQuestions = QUESTIONS.filter((q) => q.category === cat.id);
      if (catQuestions.length > 0) {
        const index = Math.floor(pseudoRandom() * catQuestions.length);
        dailyQuestions.push(catQuestions[index]);
      }
    });

    return dailyQuestions;
  }
};

// Export to window for vanilla browser execution
window.CATEGORIES = CATEGORIES;
window.QUESTIONS = QUESTIONS;
window.QuestionBank = QuestionBank;

