/* =========================================
   MENZAH BELLOTA — Bilingual EN / AR
   ========================================= */
(function () {
  'use strict';

  var KEY = 'mb-lang';

  /* ─────────────────────────────────────────
     TRANSLATION MAP  (English → Arabic)
  ───────────────────────────────────────── */
  var AR = {

    /* ── Navbar ── */
    'About'   : 'من نحن',
    'Food'    : 'طعامنا',
    'Stay'    : 'الإقامة',
    'Gallery' : 'معرض الصور',
    'Reviews' : 'التقييمات',
    'Book Now': 'احجز الآن',
    'Home'    : 'الرئيسية',

    /* ── Hero (index) ── */
    'Eco-Tourism · Chefchaouen · Morocco': 'سياحة بيئية · شفشاون · المغرب',
    'Discover Menzah Bellota': 'اكتشف منزه بيوتة',
    'The Soul of Eco-Tourism in Morocco': 'روح السياحة البيئية في المغرب',
    'Welcome to Menzah Bellota, a sustainable eco-lodge nestled in the heart of Morocco\'s countryside. Immerse yourself in the peaceful rhythm of rural life, surrounded by olive groves, aromatic gardens, and warm Moroccan hospitality.':
      'مرحباً بكم في منزه بيوتة، نُزُل بيئي مستدام في قلب الريف المغربي. انغمسوا في إيقاع الحياة الريفية الهادئة وسط بساتين الزيتون والحدائق العطرية والضيافة المغربية الدافئة.',
    'Book Your Stay': 'احجز إقامتك',
    'Explore More' : 'استكشف أكثر',
    'Scroll'       : 'انزل',

    /* ── Highlights bar ── */
    '100% Organic Food'  : 'طعام عضوي 100٪',
    'Rooms & Camping'    : 'غرف وتخييم',
    'Solidarity Tourism' : 'سياحة تضامنية',
    'Mountain Wilderness': 'طبيعة الجبال البكر',

    /* ── About section (index + about page) ── */
    'Our Story': 'قصتنا',
    'Born from a Love of Land, People, and Simplicity': 'وُلد من حب الأرض والناس والبساطة',
    'Nestled in the Rif Mountains, Menzah Bellota is more than a destination — it is a way of living slowly, intentionally, and in harmony with the earth.':
      'في قلب جبال الريف، منزه بيوتة أكثر من مجرد وجهة — إنه أسلوب عيش هادئ ومتناسق مع الطبيعة.',
    'We started this eco-center with a simple dream: to create a place where nature is preserved, local communities thrive, and every guest leaves feeling truly restored. Our land is tended with care, our meals are grown with love, and every detail is shaped by respect for this extraordinary landscape.':
      'أسسنا هذا المركز البيئي بحلم بسيط: خلق مكان تُصان فيه الطبيعة وتزدهر المجتمعات المحلية ويغادر كل ضيف شاعراً بتجدد حقيقي. أرضنا مُعتنى بها بحب ووجباتنا تُزرع بعناية.',
    'Eco-Friendly'  : 'صديق للبيئة',
    'Low-impact practices in every corner of our center.': 'ممارسات منخفضة التأثير في كل زاوية من مركزنا.',
    'Community-First': 'المجتمع أولاً',
    'Every visit supports local families and artisans.': 'كل زيارة تدعم الأسر المحلية والحرفيين.',
    'Authentic Morocco': 'المغرب الأصيل',
    'No filters. Just real culture, real food, real connection.': 'بلا تجميل. ثقافة حقيقية، طعام حقيقي، تواصل حقيقي.',

    /* ── Food section ── */
    'From Our Garden to Your Table': 'من حديقتنا إلى مائدتك',
    'Organic, Seasonal & Deeply Moroccan': 'عضوي، موسمي وعميق الجذور المغربية',
    'Every meal at Menzah Bellota is a celebration of the land. We grow, harvest, and cook with the seasons — using only what the earth gives us, prepared with generations of know-how.':
      'كل وجبة في منزه بيوتة احتفال بالأرض. نزرع ونحصد ونطبخ بحسب المواسم — بخبرة متوارثة عبر الأجيال.',
    'Signature Dish' : 'طبق مميز',
    'Daily Ritual'   : 'طقس يومي',
    'Morning Staple' : 'وجبة صباحية أساسية',
    'Garden Fresh'   : 'طازج من الحديقة',
    'Friday Special' : 'خاص الجمعة',
    'Crispy Favourite': 'المفضل المقرمش',
    'Soul Warmer'    : 'دفء الروح',
    'Royal Dish'     : 'طبق ملكي',
    'Tradition'      : 'تراث',

    'Slow-Cooked Tagine': 'طاجين مطهو ببطء',
    'Tender mountain vegetables, aromatic spices, and preserved lemons from our own trees — simmered over charcoal until perfect.':
      'خضروات جبلية طرية، بهارات عطرية، وليمون مخلل من أشجارنا — يُطهى على الفحم حتى الكمال.',
    'Wild Mint Tea': 'شاي النعناع البري',
    'Freshly picked from the hillside, steeped with care, poured from height — a ceremonial welcome that warms the soul.':
      'يُقطف طازجاً من المنحدرات، يُنقع بعناية، يُسكب من ارتفاع — ترحيب طقسي يدفئ الأرواح.',
    'Msemen & Raw Honey': 'مسمن وعسل طبيعي',
    'Our morning spread: hand-folded flatbread, fresh argan oil, wild mountain honey, and goat cheese from the valley below.':
      'مائدة صباحنا: مسمن مطوي يدوياً، زيت أركان طازج، عسل جبلي بري، وجبن الماعز من الوادي.',
    'Garden Salads': 'سلطات الحديقة',
    'Crisp greens, heirloom tomatoes, and herbs harvested steps from the kitchen — dressed with cold-press argan oil and lemon.':
      'خضروات طازجة وطماطم أصيلة وأعشاب تُقطف قرب المطبخ — مع زيت أركان بارد وليمون.',
    'Friday Couscous': 'كسكس الجمعة',
    'Our beloved weekly tradition: hand-rolled couscous steamed three times, topped with seven seasonal vegetables and slow-cooked lamb.':
      'تقليدنا الأسبوعي المحبوب: كسكس يُدحرج يدوياً ويُبخر ثلاث مرات، مع سبع خضروات موسمية ولحم مطهو ببطء.',
    'Fried Chicken': 'دجاج مقلي',
    'Golden-fried chicken marinated in Moroccan spices — crispy on the outside, tender and juicy within.':
      'دجاج مذهب مطيب ببهارات مغربية — مقرمش من الخارج، طري وعصير من الداخل.',
    'Moroccan Harira': 'حريرة مغربية',
    'A rich, warming soup of tomatoes, lentils, chickpeas, and fresh herbs — a Moroccan classic served with dates and lemon.':
      'حساء غني ودافئ من الطماطم والعدس والحمص والأعشاب — كلاسيكية مغربية تُقدم مع التمر والليمون.',
    'Pastilla': 'بسطيلة',
    'Flaky warqa pastry filled with spiced pigeon or chicken, almonds, and a touch of powdered sugar — an iconic Moroccan delicacy.':
      'ورقة هشة محشوة بالحمام أو الدجاج المبهر واللوز ورشة سكر ناعم — تحفة مغربية أيقونية.',
    'Rfissa': 'رفيسة',
    'Slow-cooked chicken with fenugreek, lentils, and msemen bread — a deeply nourishing dish rooted in Moroccan heritage.':
      'دجاج مطهو ببطء مع الحلبة والعدس وخبز المسمن — طبق مغذٍ عميق الجذور في التراث المغربي.',

    'Discover More'       : 'اكتشف المزيد',
    'No pesticides. Ever.': 'لا مبيدات. أبداً.',
    'Seasonal menus only' : 'قوائم موسمية فقط',
    'Cooked by local hands': 'يطبخه أهل المنطقة',
    'Spring water, always': 'ماء نبع، دائماً',

    /* ── Food page hero tags ── */
    'Our Food'      : 'طعامنا',
    'From Our Garden': 'من حديقتنا',
    'to Your Table' : 'إلى مائدتك',
    'Every meal at Menzah Bellota is a celebration of the land. We grow, harvest, and cook with the seasons — using only what the earth gives us.':
      'كل وجبة في منزه بيوتة احتفال بالأرض. نزرع ونحصد ونطبخ بحسب المواسم — نستخدم فقط ما تمنحنا إياه الطبيعة.',
    '🥦 100% Organic'  : '🥦 عضوي 100٪',
    '🌾 Seasonal Menus': '🌾 قوائم موسمية',
    '🧑‍🍳 Local Cooks'  : '🧑‍🍳 طهاة محليون',
    '💧 Spring Water'  : '💧 ماء نبع',
    'Come Hungry': 'تعال جائعاً',
    'Ready to Taste the Rif Mountains?': 'هل أنت مستعد لتذوق جبال الريف؟',
    'Book your stay and experience real Moroccan flavors grown with love, just steps from where you sleep.':
      'احجز إقامتك واستمتع بنكهات مغربية حقيقية، على بعد خطوات من غرفتك.',
    'Book Your Visit': 'احجز زيارتك',

    /* ── Accommodation (index + stay page) ── */
    'Where You Sleep': 'أين تنام',
    'Rest Like Nature Intended': 'استرح كما أرادت الطبيعة',
    'From cozy rooms that catch the morning light to open-air camping under a sky full of stars — choose the experience that calls to you.':
      'من غرف دافئة تستقبل ضوء الصباح إلى تخييم في الهواء الطلق تحت سماء مرصعة بالنجوم — اختر التجربة التي تناديك.',
    'Families'   : 'عائلات',
    'Guest House': 'بيت الضيوف',
    'From 300 MAD': 'من 300 درهم',
    'Mud-Brick Guest Houses': 'بيوت ضيافة من الطوب',
    'Traditional architecture meets modern comfort. Spacious rooms perfect for families, built with local stone and earth.':
      'معمار تقليدي يلتقي بالراحة العصرية. غرف فسيحة مثالية للعائلات، مبنية من الحجر والتراب المحلي.',
    'View All Rooms': 'عرض جميع الغرف',
    'Best Seller'  : 'الأكثر مبيعاً',
    'Glamping'     : 'غلامبينغ',
    'From 50 MAD'  : 'من 50 درهم',
    'Bellota Luxury Tents': 'خيام بيوتة الفاخرة',
    'Immersive glamping experience under ancient oak trees with stunning forest views and mountain breeze.':
      'تجربة غلامبينغ مميزة تحت أشجار البلوط العريقة مع إطلالات غابوية رائعة ونسيم الجبال.',
    'Book This Tent': 'احجز هذه الخيمة',
    'Road Trip'    : 'رحلة برية',
    'Camping'      : 'تخييم',
    'From 80 MAD'  : 'من 80 درهم',
    'Van & Camper Pitches': 'مواقع الفانات والمخيمات',
    'Secure spots with electricity and water hookups for overland travelers exploring the Rif Mountains.':
      'أماكن آمنة مع توصيلات كهرباء وماء للمسافرين البريين المستكشفين لجبال الريف.',
    'Reserve Pitch': 'احجز موقعاً',

    /* ── Stay page specific ── */
    'Stay With Us': 'أقم معنا',
    'Rest Like'   : 'استرح',
    'Nature Intended': 'كما أرادت الطبيعة',
    'From cozy rooms that catch the morning light to open-air camping under a sky full of stars — choose the experience that calls to you.':
      'من غرف دافئة تستقبل ضوء الصباح إلى تخييم في الهواء الطلق تحت سماء مرصعة بالنجوم — اختر التجربة التي تناديك.',
    '🏡 Guest Houses' : '🏡 بيوت الضيوف',
    '⛺ Glamping Tents': '⛺ خيام غلامبينغ',
    '🚐 Van Pitches'  : '🚐 مواقع الفانات',
    '🌄 Mountain Views': '🌄 إطلالات جبلية',
    'Choose Your Experience': 'اختر تجربتك',
    'Three ways to sleep at Menzah Bellota — each one a different relationship with the mountains and the stars above.':
      'ثلاث طرق للنوم في منزه بيوتة — كل منها علاقة مختلفة مع الجبال والنجوم.',
    'Traditional architecture meets modern comfort. Spacious rooms perfect for families, built with local stone and earth. Each room tells a story of Moroccan craftsmanship.':
      'معمار تقليدي يلتقي بالراحة العصرية. غرف فسيحة مثالية للعائلات، مبنية من الحجر والتراب المحلي. كل غرفة تحكي قصة حرفية مغربية.',
    'Immersive glamping experience under ancient oak trees with stunning forest views and mountain breeze. Fall asleep to the sounds of nature.':
      'تجربة غلامبينغ مميزة تحت أشجار البلوط العريقة مع إطلالات غابوية رائعة ونسيم الجبال. نم على أصوات الطبيعة.',
    'Secure spots with electricity and water hookups for overland travelers exploring the Rif Mountains. Adventure starts here.':
      'أماكن آمنة مع توصيلات كهرباء وماء للمسافرين البريين. المغامرة تبدأ من هنا.',
    'Every Stay Includes': 'كل إقامة تشمل',
    'What We Offer'      : 'ما نقدمه',
    'Breakfast included' : 'الفطور مشمول',
    'Organic garden access': 'دخول الحديقة العضوية',
    'Hiking trail maps'  : 'خرائط مسارات المشي',
    'Free WiFi'          : 'واي-فاي مجاني',
    'Free parking'       : 'موقف سيارات مجاني',
    'Welcome mint tea'   : 'شاي نعناع ترحيبي',
    'Reserve Your Spot'  : 'احجز مكانك',
    'Ready to Plan Your Stay?': 'هل أنت مستعد لتخطيط إقامتك؟',
    'Contact us to check availability and secure your preferred dates at Menzah Bellota.':
      'تواصل معنا للتحقق من التوفر وتأمين تواريخك المفضلة في منزه بيوتة.',
    'Get in Touch': 'تواصل معنا',

    /* ── Experience strip ── */
    'from Chefchaouen center': 'من وسط شفشاون',
    'off-grid at night'      : 'منفصل عن الشبكة ليلاً',
    'hiking trails nearby'   : 'مسارات مشي قريبة',
    'open & welcoming'       : 'مفتوح ودافئ',
    'All year'               : 'طوال العام',
    'from Ouezzane'          : 'من أوزان',
    'from Chefchaouen'       : 'من شفشاون',
    'Biosphere Reserve'      : 'محمية المحيط الحيوي',

    /* ── Gallery ── */
    'A Glimpse'             : 'لمحة',
    'Life at Menzah Bellota': 'الحياة في منزه بيوتة',
    'Chefchaouen'           : 'شفشاون',
    'The Forest'            : 'الغابة',
    'Mountain Views'        : 'إطلالات جبلية',
    'Mint Tea Moments'      : 'لحظات شاي النعناع',
    'Organic Meals'         : 'وجبات عضوية',
    'Morning Feast'         : 'وليمة الصباح',
    'Our Nature'            : 'طبيعتنا',
    'Our Stays'             : 'إقاماتنا',

    /* ── Testimonials ── */
    'Guest Words'         : 'كلمات الضيوف',
    'Stories from Our Guests': 'قصص من ضيوفنا',
    'France'  : 'فرنسا',
    'Germany' : 'ألمانيا',
    'Spain'   : 'إسبانيا',

    /* ── FAQ ── */
    'Got Questions?': 'هل لديك أسئلة؟',
    'Frequently Asked Questions': 'الأسئلة الشائعة',
    'How far is Menzah Bellota from Ouezzane and Chefchaouen?':
      'ما المسافة بين منزه بيوتة وأوزان وشفشاون؟',
    'Do you offer food at the lodge?'   : 'هل تقدمون طعاماً في المنتجع؟',
    'Is the lodge family-friendly?'     : 'هل المنتجع مناسب للعائلات؟',
    'Can I bring my own camper van?'    : 'هل يمكنني إحضار فانتي المتنقل؟',
    '15 minutes by car from Ouezzane'   : '15 دقيقة بالسيارة من أوزان',
    '45 minutes by car from Chefchaouen': '45 دقيقة بالسيارة من شفشاون',
    'breakfast, lunch, and dinner'      : 'الفطور والغداء والعشاء',
    'family-sized guest houses'         : 'بيوت ضيافة مناسبة للعائلات',
    'dedicated camper pitches'          : 'مواقع مخصصة للمخيمات',

    /* ── Contact / Booking form ── */
    'Get in Touch'   : 'تواصل معنا',
    'Plan Your Visit': 'خطط لزيارتك',
    'Ready to escape? Fill out the form below and we\'ll get back to you within 24 hours. Or reach us instantly on WhatsApp.':
      'هل أنت مستعد للهروب؟ املأ النموذج أدناه وسنرد عليك خلال 24 ساعة. أو تواصل معنا فوراً عبر واتساب.',
    'Your Name'      : 'اسمك',
    'Email Address'  : 'البريد الإلكتروني',
    'Preferred Dates': 'التواريخ المفضلة',
    'Type of Stay'   : 'نوع الإقامة',
    'Select an option': 'اختر خياراً',
    'Eco Room'       : 'غرفة بيئية',
    'Day Visit'      : 'زيارة يومية',
    'Group / Event'  : 'مجموعة / فعالية',
    'Your Message'   : 'رسالتك',
    'Send Message'   : 'إرسال رسالة',
    'We reply within 24 hours · Your info is never shared.': 'نرد خلال 24 ساعة · معلوماتك لن تُشارك أبداً.',
    'Message Sent!'  : 'تم الإرسال!',
    'Thank you for reaching out. We\'ll be in touch very soon.': 'شكراً للتواصل. سنتصل بك قريباً جداً.',
    'Contact Details': 'تفاصيل التواصل',
    'Location'       : 'الموقع',
    'Near Ain Tissimane, Chefchaouen': 'قرب عين تيسيمان، شفشاون',
    'Rif Mountains, Morocco'         : 'جبال الريف، المغرب',
    'Phone / WhatsApp': 'هاتف / واتساب',
    'Email'           : 'البريد الإلكتروني',
    'Open Year-Round' : 'مفتوح طوال العام',
    'Check-in: 14:00 · Check-out: 11:00': 'الدخول: 14:00 · الخروج: 11:00',
    'Chat on WhatsApp': 'تحدث عبر واتساب',
    'Book Now'        : 'احجز الآن',

    /* ── Footer ── */
    'An eco-center born from a love of mountains, community, and the simple beauty of Moroccan life.':
      'مركز بيئي وُلد من حب الجبال والمجتمع وجمال الحياة المغربية البسيطة.',
    'Explore'       : 'استكشف',
    'Organic Food'  : 'طعام عضوي',
    'Accommodation' : 'الإقامة',
    'Guest Reviews' : 'تقييمات الضيوف',
    'Visit'         : 'زيارة',
    'Book a Stay'   : 'احجز إقامة',
    'Day Visits'    : 'زيارات يومية',
    'Group Events'  : 'فعاليات جماعية',
    'Contact Us'    : 'اتصل بنا',
    'Find Us'       : 'جدنا',
    '© 2025 Menzah Bellota Tours · Built with love for the mountains.':
      '© 2025 منزه بيوتة تورز · صُنع بمحبة للجبال.',

    /* ── About page ── */
    'About Us'  : 'من نحن',
    'About Menzah Bellota': 'حول منزه بيوتة',
    'Eco-Lodge in the Heart of Northern Morocco': 'نُزُل بيئي في قلب شمال المغرب',
    'Your retreat nestled between mountains, forests, and authentic rural landscapes — where nature and community are at the heart of everything we do.':
      'محطة راحتك بين الجبال والغابات والمشاهد الريفية الأصيلة — حيث الطبيعة والمجتمع في صميم كل ما نفعله.',
    '🌿 Eco-Lodge'        : '🌿 نُزُل بيئي',
    '🏔️ Rif Mountains'   : '🏔️ جبال الريف',
    '🤝 Community-Driven': '🤝 مجتمعي',
    '♻️ Sustainable Tourism': '♻️ سياحة مستدامة',
    '🌍 MIBR Biosphere'  : '🌍 محمية MIBR',
    'Who We Are': 'من نحن',
    'A Peaceful Retreat Between Mountains & Forests': 'محطة هادئة بين الجبال والغابات',
    'Menzah Bellota is an eco-lodge nestled in the heart of northern Morocco, just 15 minutes from Ouezzane and 45 minutes from Chefchaouen.':
      'منزه بيوتة نُزُل بيئي في قلب شمال المغرب، على بُعد 15 دقيقة من أوزان و45 دقيقة من شفشاون.',
    'Surrounded by cork oak, myrtle, lavender, rosemary, and ancestral farmland, our location invites guests to reconnect with untouched nature in the Rif region. We offer a peaceful retreat between mountains, forests, and authentic rural landscapes that have shaped life in this corner of Morocco for generations.':
      'تحيط بنا أشجار الفلين والمورد والخزامى والإكليل وأراضٍ زراعية عريقة تدعو الضيوف للتواصل مع طبيعة بكر في منطقة الريف.',
    'Brikcha Ecological Reserve': 'محمية بريكشة البيئية',
    'Mediterranean Intercontinental Biosphere Reserve (MIBR)': 'محمية المحيط الحيوي المتوسطية القارية (MIBR)',
    'Our Purpose'   : 'غرضنا',
    'Mission & Vision': 'المهمة والرؤية',
    'Our Mission'   : 'مهمتنا',
    'To promote sustainable tourism in northern Morocco by protecting local ecosystems, empowering rural communities, and preserving ancestral traditions. We create responsible travel experiences that generate positive impact while supporting families living in the Rif Mountains.':
      'تعزيز السياحة المستدامة في شمال المغرب من خلال حماية النظم البيئية المحلية وتمكين المجتمعات الريفية وصون التقاليد الأصيلة.',
    'Our Vision'    : 'رؤيتنا',
    'We envision Menzah Bellota as a leading eco-lodge in northern Morocco, where travelers discover authentic rural heritage through immersive experiences, ecological awareness, and meaningful connections with local culture and nature.':
      'نتطلع إلى أن يصبح منزه بيوتة نُزُلاً بيئياً رائداً في شمال المغرب، حيث يكتشف المسافرون الموروث الريفي الأصيل.',
    'What Guides Us': 'ما يوجهنا',
    'Our Core Values': 'قيمنا الأساسية',
    'Environmental Stewardship': 'الحفاظ على البيئة',
    'We protect the forests, biodiversity, and natural resources of Brikcha by promoting low-impact tourism, conservation awareness, and sustainable farming practices.':
      'نحمي غابات ومقومات بريكشة الطبيعية من خلال السياحة منخفضة التأثير والتوعية بالحفاظ على البيئة.',
    'Community Empowerment': 'تمكين المجتمع',
    'By collaborating with local families, artisans, and cooperatives, we help strengthen the rural economy and preserve northern Morocco\'s cultural identity.':
      'بالتعاون مع الأسر المحلية والحرفيين والتعاونيات نسهم في تعزيز الاقتصاد الريفي وصون الهوية الثقافية.',
    'Authentic Experiences': 'تجارب أصيلة',
    'Travelers at Menzah Bellota enjoy genuine cultural, culinary, and natural experiences rooted in the traditions of Chefchaouen\'s countryside.':
      'يستمتع الزوار في منزه بيوتة بتجارب ثقافية وطبيعية وطهوية أصيلة متجذرة في تقاليد ريف شفشاون.',
    '🌿 Protected Ecosystem': '🌿 نظام بيئي محمي',
    'A Treasure of the Rif' : 'كنز الريف',
    '🦅 Diverse Wildlife'   : '🦅 حياة برية متنوعة',
    '🌿 Medicinal Plants'   : '🌿 نباتات طبية',
    '🌲 Cork Oak Forests'   : '🌲 غابات الفلين',
    '🏛️ UNESCO MIBR'        : '🏛️ يونسكو MIBR',
    'Official Ecological Recognition': 'اعتراف بيئي رسمي',
    'Mediterranean Biosphere Reserve': 'محمية المحيط الحيوي المتوسطية',
    'Protected Natural Area': 'منطقة طبيعية محمية',
    'Hiking Trails Nearby'  : 'مسارات مشي قريبة',
    'The People Behind Menzah Bellota': 'الأشخاص خلف منزه بيوتة',
    'Meet Our Team'         : 'تعرف على فريقنا',
    'Founder & Director'    : 'المؤسس والمدير',
    'A passionate advocate for ecological tourism and rural development in Chefchaouen and Brikcha, Abdelghani created Menzah Bellota to connect travelers with Morocco\'s natural and cultural heritage.':
      'مدافع شغوف عن السياحة البيئية والتنمية الريفية، أسس عبد الغني منزه بيوتة لربط المسافرين بالموروث الطبيعي والثقافي المغربي.',
    'Co-Founder & Guest Experience Manager': 'المؤسسة المشاركة ومديرة تجربة الضيوف',
    'Siham ensures warm hospitality and designs immersive guest experiences rooted in community engagement and sustainable living.':
      'تضمن سهام ضيافة دافئة وتصمم تجارب غامرة للضيوف متجذرة في المشاركة المجتمعية والعيش المستدام.',
    'How We Got Here': 'كيف وصلنا إلى هنا',
    'Our Journey'    : 'مسيرتنا',
    'From a dream in the mountains to a recognized model of sustainable tourism in northern Morocco.':
      'من حلم في الجبال إلى نموذج معترف به للسياحة المستدامة في شمال المغرب.',
    'Chapter 01': 'الفصل 01',
    'Foundation of Menzah Bellota': 'تأسيس منزه بيوتة',
    'Abdelghani and Siham establish Menzah Bellota as a peaceful eco-lodge where travelers can reconnect with nature and explore northern Morocco\'s authentic culture.':
      'أسس عبد الغني وسهام منزه بيوتة كنُزُل بيئي هادئ لربط المسافرين بالطبيعة والثقافة المغربية الأصيلة.',
    'Chapter 02': 'الفصل 02',
    'Expansion into Eco-Tourism': 'التوسع في السياحة البيئية',
    'Menzah Bellota introduces guided hikes, forest walks, organic farming experiences, and partnerships with local artisans to promote sustainable rural tourism.':
      'قدّم منزه بيوتة رحلات مشي مرشدة وجولات غابوية وتجارب زراعة عضوية وشراكات مع الحرفيين المحليين.',
    'Chapter 03': 'الفصل 03',
    'Creation of MENZAH IZAREN Cooperative': 'تأسيس تعاونية منزه إيزارن',
    'The cooperative brings together local youth to develop cultural tourism, preserve heritage, and create responsible economic opportunities for the community.':
      'تجمع التعاونية شباباً محليين لتطوير السياحة الثقافية وصون الموروث وخلق فرص اقتصادية مسؤولة.',
    'Chapter 04': 'الفصل 04',
    'International Recognition': 'الاعتراف الدولي',
    'Menzah Bellota becomes recognized as a model for sustainable tourism in northern Morocco, attracting eco-conscious travelers from around the world.':
      'أصبح منزه بيوتة نموذجاً معترفاً به للسياحة المستدامة يجذب مسافرين واعين بيئياً من شتى أنحاء العالم.',
    'Come Experience It': 'تعال وعشها',
    'Ready to Be Part of This Story?': 'هل أنت مستعد لتكون جزءاً من هذه القصة؟',
    'Book your stay and discover a place where nature, culture, and community come together in one of Morocco\'s most unspoiled corners.':
      'احجز إقامتك واكتشف مكاناً تلتقي فيه الطبيعة والثقافة والمجتمع في أحد أنقى أركان المغرب.',
    'Read Guest Reviews': 'اقرأ تقييمات الضيوف',

    /* ── Reviews page ── */
    'Guest Reviews'  : 'تقييمات الضيوف',
    'Stories from'   : 'قصص من',
    'Our Guests'     : 'ضيوفنا',
    'Real experiences, honest words. See what travelers from around the world say about their time at Menzah Bellota.':
      'تجارب حقيقية، كلمات صادقة. اطلع على ما يقوله المسافرون من شتى أنحاء العالم عن وقتهم في منزه بيوتة.',
    '5.0 · Loved by guests worldwide': '5.0 · محبوب من الضيوف حول العالم',
    'Average Rating' : 'متوسط التقييم',
    'Would Recommend': 'يوصون به',
    'On Google & Booking': 'على Google وBooking',
    'Verified Guests': 'ضيوف موثقون',
    'Featured Review': 'تقييم مميز',
    'A Guest Favourite': 'مفضل الضيوف',
    'All Guest Stories': 'كل قصص الضيوف',
    'What Our Guests Say': 'ما يقوله ضيوفنا',
    'Germany · Eco Room'      : 'ألمانيا · غرفة بيئية',
    'Spain · Glamping Tent'   : 'إسبانيا · خيمة غلامبينغ',
    'United Kingdom · Van Pitch': 'المملكة المتحدة · موقع فان',
    'Netherlands · Guest House': 'هولندا · بيت الضيوف',
    'France · Family Stay'    : 'فرنسا · إقامة عائلية',
    'Belgium · Eco Room'      : 'بلجيكا · غرفة بيئية',
    'Portugal · Glamping Tent': 'البرتغال · خيمة غلامبينغ',
    'Italy · Guest House'     : 'إيطاليا · بيت الضيوف',
    'Canada · Family Stay'    : 'كندا · إقامة عائلية',
    'France · Stayed 7 nights': 'فرنسا · أقامت 7 ليالي',
    '✓ Verified Guest'        : '✓ ضيف موثق',
    'Share Your Experience'   : 'شارك تجربتك',
    'Did You Stay With Us?'   : 'هل أقمت معنا؟',
    'We\'d love to hear your story. Send us your review directly on WhatsApp and we\'ll add it to our page.':
      'يسعدنا سماع قصتك. أرسل لنا تقييمك مباشرة على واتساب وسنضيفه لصفحتنا.',
    'Send Your Review on WhatsApp': 'أرسل تقييمك على واتساب',
    'Click the button'   : 'اضغط الزر',
    'Write your review'  : 'اكتب تقييمك',
    'Hit send — done!'   : 'أرسل — تم!',
    'Your Story Awaits'  : 'قصتك في الانتظار',
    'Ready to Create Your Own Memories?': 'هل أنت مستعد لخلق ذكرياتك الخاصة؟',
    'Join the community of travelers who have discovered the magic of northern Morocco through Menzah Bellota.':
      'انضم إلى مجتمع المسافرين الذين اكتشفوا سحر شمال المغرب من خلال منزه بيوتة.',
    'Book Your Stay': 'احجز إقامتك',

    /* ── Contact page ── */
    'to Menzah Bellota': 'إلى منزه بيوتة',
    'Book Now' : 'احجز الآن',

    /* ── Breadcrumbs ── */
    'About Us'     : 'من نحن',
    'Our Food'     : 'طعامنا',
    'Stay With Us' : 'أقم معنا',
    'Guest Reviews': 'تقييمات الضيوف',
    'Book Now'     : 'احجز الآن',

    /* ── Placeholders ── */
    'e.g. Ahmed Mansouri'          : 'مثال: أحمد المنصوري',
    'you@example.com'              : 'you@example.com',
    'e.g. June 10–15, 2025'       : 'مثال: 10-15 يونيو 2025',
    'Tell us about your group, any questions, or special needs…':
      'أخبرنا عن مجموعتك، أسئلتك، أو أي احتياجات خاصة…',
  };

  /* ─────────────────────────────────────────
     DOM TRANSLATION  (TreeWalker)
  ───────────────────────────────────────── */
  function translateDOM() {
    /* Text nodes */
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    var node;
    while ((node = walker.nextNode())) {
      var t = node.nodeValue.trim();
      if (t && Object.prototype.hasOwnProperty.call(AR, t)) {
        node.nodeValue = node.nodeValue.replace(t, AR[t]);
      }
    }
    /* Placeholders */
    document.querySelectorAll('[placeholder]').forEach(function (el) {
      var p = el.getAttribute('placeholder');
      if (AR[p]) el.setAttribute('placeholder', AR[p]);
    });
    /* Select options */
    document.querySelectorAll('option').forEach(function (opt) {
      var t = opt.textContent.trim();
      if (AR[t]) opt.textContent = AR[t];
    });
  }

  /* ─────────────────────────────────────────
     APPLY ARABIC
  ───────────────────────────────────────── */
  function applyArabic() {
    var html = document.documentElement;
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    document.body.classList.add('lang-ar');

    /* Load Cairo font */
    if (!document.getElementById('cairo-font')) {
      var lnk = document.createElement('link');
      lnk.id   = 'cairo-font';
      lnk.rel  = 'stylesheet';
      lnk.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap';
      document.head.appendChild(lnk);
    }
    translateDOM();
  }

  /* ─────────────────────────────────────────
     TOGGLE BUTTON
  ───────────────────────────────────────── */
  function addToggle() {
    var navEnd = document.querySelector('.nav-end');
    if (!navEnd) return;

    var lang = localStorage.getItem(KEY) || 'en';
    var btn  = document.createElement('button');
    btn.className    = 'lang-toggle-btn';
    btn.textContent  = lang === 'ar' ? 'EN' : 'AR';
    btn.setAttribute('aria-label', 'Switch language');

    btn.addEventListener('click', function () {
      localStorage.setItem(KEY, lang === 'ar' ? 'en' : 'ar');
      location.reload();
    });

    /* Insert before hamburger */
    navEnd.insertBefore(btn, navEnd.firstChild);
  }

  /* ─────────────────────────────────────────
     INIT
  ───────────────────────────────────────── */
  addToggle();
  if (localStorage.getItem(KEY) === 'ar') applyArabic();

}());
