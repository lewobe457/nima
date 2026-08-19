/**
 * Chnoor Shop - Main Interactive Logic
 * Vanilla JavaScript (Zero-dependency, GitHub Pages ready)
 */

// --- Products Database ---
const PRODUCTS = [
  {
    id: "persian-garden",
    title: "تابلو ویترای باغ ایرانی",
    category: "panels",
    categoryName: "تابلو ویترای",
    price: 9999000,
    priceFormatted: "۹,۹۹۹,۰۰۰",
    tag: "کار دست (Handmade)",
    tagType: "handmade",
    inStock: true,
    dimensions: "۴۰x۶۰ سانتی‌متر",
    prepTime: "۷ روز کاری",
    technique: "ویترای (نقاشی روی شیشه)",
    frame: "چوب گردو طبیعی دست‌ساز",
    colors: "پایه تینر ضد آب و مقاوم به اشعه UV",
    description: "باغ ایرانی، تجلی‌گاه نور و رنگ است. این تابلو با الهام از نقوش اصیل و هندسه مقدس باغ‌های باستانی طراحی شده. هر قطعه شیشه با دقت و عشق رنگ‌آمیزی شده تا وقتی نور از آن عبور می‌کند، حسی از آرامش و کشف را در فضای شما جاری سازد.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuwFM1bl4tRqC4U90Fl6qsRcq6YXjRfwCRPUL5K--pBexk_DiKN_JFL6DRc2ZqTHj-kexZaOLBZy2elVJWW5du1rx7cTck0m9cDl7VcqxgEW0duCbqLLKnkVRhVkgJ9e-bT4tasR0ufWh67w0pe5O--1DDJTFDImXzordfYgSDyStFhcCECt3nBhaC-PQcCRugXTjNgdAzQ_m86PbDqpVN_il7bms1YlEaRNI2eiIJ4j6aofam91eD",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuwFM1bl4tRqC4U90Fl6qsRcq6YXjRfwCRPUL5K--pBexk_DiKN_JFL6DRc2ZqTHj-kexZaOLBZy2elVJWW5du1rx7cTck0m9cDl7VcqxgEW0duCbqLLKnkVRhVkgJ9e-bT4tasR0ufWh67w0pe5O--1DDJTFDImXzordfYgSDyStFhcCECt3nBhaC-PQcCRugXTjNgdAzQ_m86PbDqpVN_il7bms1YlEaRNI2eiIJ4j6aofam91eD",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrkMFzmCpPueplt69ipIzowcSJwm4b8isf_4lNTEE2ndZBuYHIH2ABrrZYkoKDnyb0nKCr5XVN6QXcXVA67bzcCW2GuwqIzeJSmsCqwNNmcLvnwY9V_rHdSg1S0hieHT2yTcyLm6W5Ho_0uEWT_Du5AbpqGCHtBeKX8IPc_5PxyX6Ou8o71Ap7qV8QAS9VqGAtPd0fEdAaCpecLC1NtVBdH1k8M_GG-WegUq70zxRJD_C81MRjoG3c",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDv9OODfMJwooap8t7w0g2CybP4ZJQgPLTtVSBPrsW5V2m_omiCEmTm8_K3oGmL_fHecIImn-TIZJlF_-YO7Q3HFWxQRKCJ5buaWdNI2mpfi7d2wnDVLxDerROxP7y8sXTvLSP_xjy9shqKiG6vujYFQEsI6yz9hjbZSKoxQhuOASc8VRoKTErYb_qGZKrD30-A-jndH9NyLkt_X6hh16o2MUm6PUqRDRbhzG57BQFvlSFUkNf8eRx7",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9UiHLPD21HlYaR7l4cQBkNJnbVYIzUTFHcSYicOndpYTSHgOuLXzWrKnx-_KaGI7iCkpVOtDCNCvaYMxDvibgm2l6oU-wHneabeHJi1Jn4g60QaLkJfUVJZmMr-nvbgXyw3yhiPkUMQsIxR4bhfIg_agxB2spnAnDahT7DKp_65yqXNYKOfgYkLYZM-tr5TdVPdWiuZAxSs1Dyw3mEnt2OxgvnwiqmnFQv2ZtXBmjQR3U17vLeweG"
    ]
  },
  {
    id: "spring-blossoms",
    title: "تابلو ویترای شکوفه‌های بهاری",
    category: "panels",
    categoryName: "تابلو ویترای",
    price: 4999000,
    priceFormatted: "۴,۹۹۹,۰۰۰",
    tag: "دست‌ساز",
    tagType: "handmade",
    inStock: true,
    dimensions: "۳۰x۳۰ سانتی‌متر",
    prepTime: "۵ روز کاری",
    technique: "ویترای شفاف روی شیشه دوجداره",
    description: "شکوفه‌های صورتی بهاری با خطوط دورگیر سربی طلایی، مناسب فضاهای پرنور و پنجره‌های آفتاب‌گیر.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOrIeFEiu7w65LPH1uFu4jGeDV8eyNvtW3izwz6m32qvih4UN77Zy5I3Vtv15rnuI34kkp2a4bIk-6kuXh47DCOtNSOTFzRG9QVRV1n6G3AQKWWC60iRIPWoZtQ3cq8sGYD9EnTfTnt850CZd4FAxRGIabW8WoEIlZ-J0M5qlItuGJqHxtRM2bxrwtf3V7vjqVATnkOQsHHOGff7tGdnnNyM8xWK6G-zXTHeqYHVlZZi8m7Uy5H6nF"
  },
  {
    id: "arabesque-dish",
    title: "بشقاب تزیینی طرح اسلیمی",
    category: "dishes",
    categoryName: "ظروف تزیینی",
    price: 3999000,
    priceFormatted: "۳,۹۹۹,۰۰۰",
    tag: "دست‌ساز",
    tagType: "handmade",
    inStock: true,
    dimensions: "قطر ۲۵ سانتی‌متر",
    prepTime: "۴ روز کاری",
    technique: "ویترای و ورق طلا روی بلور نشکن",
    description: "بشقاب دست‌ساز با نقوش هندسی اسلیمی و رنگ‌های سنتی فیروزه‌ای، لاجوردی و یاقوتی با جلای آینه‌ای.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV7ocfY2WFTtAAn1LD9quCuiivrrw3j2k_q39Wyv04qzoqnD0ur7AFw4o1opOdAyVbtyuwA5MTesN6UsoFgGNW203cqZhNITZbeuZTHqtUw20ycGJUCvVJsEk-zCa9D_wNhapsRt0RAQOqlpjGek52NPZphCkAF_UhwLyEzpfAItCi1na7dJzRFbgZ57yBnOI_nzx7B1VBdgFz71KW5QgHeo4jrARST0CZCR_UH2DBAm-AIB0ELMeJ"
  },
  {
    id: "night-lamp",
    title: "چراغ خواب شیشه‌ای طرح شب",
    category: "lighting",
    categoryName: "چراغ و روشنایی",
    price: 3999000,
    priceFormatted: "۳,۹۹۹,۰۰۰",
    tag: "موجود در انبار",
    tagType: "instock",
    inStock: true,
    dimensions: "ارتفاع ۳۵ سانتی‌متر",
    prepTime: "آماده ارسال فوری",
    technique: "تیفانی و ویترای برجسته",
    description: "آباژور شیشه‌ای دست‌ساز که نور گرم و رویایی را از شیشه‌های رنگین عبور داده و الگوهای جذاب روی دیوار می‌افکند.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXlLyInbeGEwgkZmTUR2yR3rao_cU68ytG2vk1LDT8zvHQ-DlRutPzqlI7c1f1SyrjdrP4InJFCbHWRENYLhp5Tj6ocRwhUi_npZh-yDbCSM5jRAKAJwbykPyjx_SURDp9sQe9BRaA4vXQjllO0tkQhs5jKsNHkX0Cx5qY2p6Rh0Q3fCzOFpSYoE6a3FmDu7KWBNo1_Xkk8k30GwSu8ExoUlwirWcEmRgiGqCuJUFtxn4R4jotptaP"
  },
  {
    id: "orchid-panel",
    title: "تابلو ویترای ارکیده و نیلوفر",
    category: "panels",
    categoryName: "تابلو ویترای",
    price: 5999000,
    priceFormatted: "۵,۹۹۹,۰۰۰",
    tag: "دست‌ساز",
    tagType: "handmade",
    inStock: true,
    dimensions: "۴۵x۶۰ سانتی‌متر",
    prepTime: "۷ روز کاری",
    technique: "ویترای با پودر شیشه و ترانسپارانسی بالا",
    description: "ترکیب خیره‌کننده گل‌های ارکیده و زنبق‌های لاجوردی در قابی مدرن و چشم‌نواز.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEYnuYD5f2AIuj1WCvh-5owi1YfLTtMoF9VNZIDaAK7hUN4kBcP0K193YGM6wk7Q-oYo-e7JiE4EdhVs3OOut28SWQUG_TFKiCg-RfRBQkOtJak60zTi-paB0KHGsAXsTnshgGPJwHv-vQDZWm0aaTWIqpkR0jofWnAKh7P_yjnuLqp6UUKwUEXiM9TK5Q8dbMWXU2hDSMZzKWdg0RFwbsw-VqRuw8l8Qm9UoV9S8eVfjfQ3ytoARl"
  },
  {
    id: "mandala-suncatcher",
    title: "آویز نوری ماندالا",
    category: "ornaments",
    categoryName: "آویز و زیورآلات",
    price: 5999000,
    priceFormatted: "۵,۹۹۹,۰۰۰",
    tag: "دست‌ساز",
    tagType: "handmade",
    inStock: true,
    dimensions: "قطر ۲۰ سانتی‌متر",
    prepTime: "۳ روز کاری",
    technique: "استندگلس و زنجیر برنجی",
    description: "آویز نوری مخصوص پنجره که با برخورد پرتوهای آفتاب، رنگین‌کمانی از نور را در فضای اتاق بازتاب می‌دهد.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlXxqEvcrPMYlnMV6ADPQx7tOMXXN_-r1xb0Q6lGrTHzFwfV_ukjtkppngA54T-HWvyvXLkCP6p952FCKVHnwz9Dn7pcz17VIxwgJxGUhOsT0408YZr7n857sqYkNb4NhYGgIoI951hplagiaN6ay1sXpMY2plgHTHrDI6kdj43FwIiQcos_k_OEGwrmIHT-jp2o6IYtobkJgOcVaDfhiYAqoCBBkzvtohdyaP6xhhFyY1V_sNjXNu"
  },
  {
    id: "leaf-coasters",
    title: "ست زیرلیوانی برگ پاییزی (۴ عددی)",
    category: "dishes",
    categoryName: "ظروف تزیینی",
    price: 2999000,
    priceFormatted: "۲,۹۹۹,۰۰۰",
    tag: "موجود",
    tagType: "instock",
    inStock: true,
    dimensions: "قطر ۱۰ سانتی‌متر",
    prepTime: "آماده ارسال",
    technique: "ویترای حرارت‌دیده ضدخش و ضدآب",
    description: "مجموعه ۴ عددی زیرلیوانی بلوری با طرح برگ‌های زیتونی و رگبرگ‌های طلایی براق.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmmguf6YXZQWr7aKXuO3dGqnHI3CjBcwmrDpl_-cLZw9n-yIvn8_pn6l7ALr5exMxQ6ka3gAxhKr0e3BFtrCouhBbw7UQF0so5rLFp9mxUnhZ6ZjVyzSuSnmUwQWHvisQehl2YzA559gBPn0yAGb9aANU0Zj12BBJwVWcLyLIs0AMLYafaY-m77HwNevuCR1RiIvN60-NNrcP5wvBlpvjeKNMQAXx1svdoVHVTG_VHNLgEAf_oBJmU"
  },
  {
    id: "candle-holder",
    title: "جاشمعی هفت‌رنگ شاه‌عباسی",
    category: "lighting",
    categoryName: "چراغ و روشنایی",
    price: 3999000,
    priceFormatted: "۳,۹۹۹,۰۰۰",
    tag: "دست‌ساز",
    tagType: "handmade",
    inStock: true,
    dimensions: "ارتفاع ۱۲ سانتی‌متر",
    prepTime: "۲ روز کاری",
    technique: "نقاشی سنتی ویترای روی شیشه مات",
    description: "جاشمعی وارمر با انعکاس گرم و سنتی نور شمع بر روی دیوارها و میز آرایش.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbhEsjwjGS9zjSOmSm7QRvQOMCl6NPGA0In37SXJV-VebGd8r32ZL2dmOKSqXZiC2L_KBzn6_mYIRfJMjGkdaZYJXkbQybJ8tux0X2NEZieApWGXIp0Oz4ctEYvVCdrfo5v5n3kvgaKqEeKm0jL-F0mW0O61hJJGFIlnjylLGa5-M8lalbfR4pfoYhzYy2ZQLYNre9Q_gjOezEPCczZpeN8mXYS7ktJVdglsOLHB__CZl-K1D3Rtco"
  }
];

// --- Global State ---
let cart = JSON.parse(localStorage.getItem('chnoor_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('chnoor_wishlist') || '[]');

// --- Helper Functions ---
function toPersianDigits(n) {
  if (n === null || n === undefined) return '';
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return n.toString().replace(/\d/g, x => farsiDigits[x]);
}

function formatPrice(num) {
  return toPersianDigits(num.toLocaleString('en-US')) + ' تومان';
}

function showToast(message, icon = 'check_circle') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="material-symbols-outlined text-secondary text-2xl" data-icon="${icon}">${icon}</span>
    <span class="font-label-sm text-on-surface text-sm">${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- Cart Management ---
function saveCart() {
  localStorage.setItem('chnoor_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart();
  showToast(`«${product.title}» به سبد خرید افزوده شد`, 'shopping_bag');
  openCartDrawer();
}

function updateCartQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  showToast('آیتم از سبد خرید حذف شد', 'delete');
}

function updateCartUI() {
  const badge = document.getElementById('cart-badge');
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) {
    badge.textContent = toPersianDigits(count);
    badge.classList.toggle('hidden', count === 0);
  }

  const cartList = document.getElementById('cart-items-list');
  const cartTotal = document.getElementById('cart-total-price');
  const cartEmpty = document.getElementById('cart-empty-state');
  const cartFooter = document.getElementById('cart-footer-actions');

  if (cartList && cartTotal) {
    if (cart.length === 0) {
      if (cartEmpty) cartEmpty.classList.remove('hidden');
      if (cartFooter) cartFooter.classList.add('hidden');
      cartList.innerHTML = '';
      cartTotal.textContent = '۰ تومان';
    } else {
      if (cartEmpty) cartEmpty.classList.add('hidden');
      if (cartFooter) cartFooter.classList.remove('hidden');

      let total = 0;
      cartList.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
          <div class="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/40">
            <img src="${item.image}" alt="${item.title}" class="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
            <div class="flex-grow">
              <h4 class="font-label-sm text-sm text-on-surface font-semibold line-clamp-1">${item.title}</h4>
              <p class="font-label-sm text-xs text-secondary mt-1">${formatPrice(item.price)}</p>
              <div class="flex items-center gap-2 mt-2">
                <button onclick="updateCartQuantity('${item.id}', -1)" class="w-6 h-6 rounded-full bg-surface-variant flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-colors">-</button>
                <span class="font-label-sm text-xs px-2">${toPersianDigits(item.quantity)}</span>
                <button onclick="updateCartQuantity('${item.id}', 1)" class="w-6 h-6 rounded-full bg-surface-variant flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-colors">+</button>
              </div>
            </div>
            <button onclick="removeFromCart('${item.id}')" class="text-outline hover:text-error p-1">
              <span class="material-symbols-outlined text-lg" data-icon="delete">delete</span>
            </button>
          </div>
        `;
      }).join('');

      cartTotal.textContent = formatPrice(total);
    }
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('hidden', 'pointer-events-none');
    backdrop.classList.remove('hidden', 'pointer-events-none');
    void drawer.offsetWidth;
    backdrop.classList.remove('opacity-0');
    drawer.classList.remove('-translate-x-full');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    backdrop.classList.add('opacity-0');
    drawer.classList.add('-translate-x-full');
    setTimeout(() => {
      drawer.classList.add('hidden', 'pointer-events-none');
      backdrop.classList.add('hidden', 'pointer-events-none');
    }, 300);
  }
}

// Telegram Checkout Link Generator
function checkoutViaTelegram() {
  if (cart.length === 0) {
    showToast('سبد خرید شما خالی است', 'info');
    return;
  }

  let text = "سلام گالری چنور 👋\nمن می‌خواهم سفارش زیر را از وب‌سایت ثبت کنم:\n\n";
  let total = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    text += `${index + 1}. ${item.title}\n   تعداد: ${item.quantity} عدد | قیمت واحد: ${item.price.toLocaleString('fa-IR')} تومان\n`;
  });

  text += `\n💰 جمع کل سفارش: ${total.toLocaleString('fa-IR')} تومان\n\nلطفاً نحوه پرداخت و هماهنگی ارسال را بفرمایید. سپاس!`;

  const botUsername = "chnoorshopbot";
  const encodedText = encodeURIComponent(text);
  const telegramUrl = `https://t.me/${botUsername}?start=order&text=${encodedText}`;

  window.open(telegramUrl, '_blank');
}

// --- Wishlist Management ---
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast('از لیست علاقه‌مندی‌ها برداشته شد', 'favorite_border');
  } else {
    wishlist.push(productId);
    showToast(`«${product ? product.title : ''}» به علاقه‌مندی‌ها اضافه شد`, 'favorite');
  }

  localStorage.setItem('chnoor_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlist-badge');
  if (badge) {
    badge.textContent = toPersianDigits(wishlist.length);
    badge.classList.toggle('hidden', wishlist.length === 0);
  }

  document.querySelectorAll('[data-wishlist-btn]').forEach(btn => {
    const pId = btn.getAttribute('data-wishlist-btn');
    const isWishlisted = wishlist.includes(pId);
    const icon = btn.querySelector('.material-symbols-outlined');
    if (icon) {
      icon.textContent = isWishlisted ? 'favorite' : 'favorite_border';
      btn.classList.toggle('text-error', isWishlisted);
      btn.classList.toggle('text-on-surface', !isWishlisted);
    }
  });
}

// --- Custom Order Submission to Telegram ---
function handleCustomOrderSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const phone = form.phone.value;
  const subject = form.subject ? form.subject.options[form.subject.selectedIndex].text : 'سفارش اختصاصی';
  const dimensions = form.dimensions.value || 'تعیین نشده';
  const description = form.description.value || 'بدون توضیحات تکمیلی';

  let msg = `✨ درخواست جدید سفارش اختصاصی ویترای\n\n`;
  msg += `👤 نام مشتری: ${name}\n`;
  msg += `📞 شماره تماس: ${phone}\n`;
  msg += `🎨 موضوع طرح: ${subject}\n`;
  msg += `📏 ابعاد تقریبی: ${dimensions}\n`;
  msg += `📝 توضیحات: ${description}\n\n`;
  msg += `لطفاً جهت برآورد هزینه و تایید طرح راهنمایی فرمایید.`;

  const botUsername = "chnoorshopbot";
  const telegramUrl = `https://t.me/${botUsername}?text=${encodeURIComponent(msg)}`;

  showToast('درخواست شما ثبت شد! در حال هدایت به تلگرام...', 'check_circle');
  setTimeout(() => {
    window.open(telegramUrl, '_blank');
  }, 1000);
}

// --- Intersection Observer for Animations ---
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up, .fade-up-enter').forEach(el => observer.observe(el));
}

// --- Dynamic Header & Drawer Injection ---
function injectSharedComponents() {
  // Inject Cart Drawer if not present
  if (!document.getElementById('cart-drawer')) {
    const cartHTML = `
      <div id="cart-backdrop" onclick="closeCartDrawer()" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] hidden opacity-0 transition-opacity duration-300 pointer-events-none"></div>
      <div id="cart-drawer" class="fixed top-0 left-0 h-full w-full max-w-md bg-surface-container-lowest z-[101] shadow-2xl transform -translate-x-full transition-transform duration-300 flex flex-col hidden pointer-events-none">
        <div class="p-6 border-b border-outline-variant/30 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-2xl" data-icon="shopping_bag">shopping_bag</span>
            <h3 class="font-headline text-lg text-primary">سبد خرید شما</h3>
          </div>
          <button onclick="closeCartDrawer()" class="p-2 text-outline hover:text-on-surface rounded-full hover:bg-surface-variant transition-colors">
            <span class="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>

        <div id="cart-empty-state" class="flex-grow flex flex-col items-center justify-center p-8 text-center">
          <div class="w-20 h-20 rounded-full bg-surface-variant/60 flex items-center justify-center text-primary/60 mb-4">
            <span class="material-symbols-outlined text-4xl" data-icon="shopping_basket">shopping_basket</span>
          </div>
          <h4 class="font-headline text-base text-on-surface mb-2">سبد خرید شما در حال حاضر خالی است</h4>
          <p class="font-label-sm text-sm text-on-surface-variant mb-6">آثار هنری و چشم‌نواز ویترای ما را در فروشگاه مشاهده کنید.</p>
          <a href="products.html" class="bg-primary text-white font-label-sm text-sm px-6 py-3 rounded-xl hover:bg-secondary transition-colors">
            مشاهده آثار فروشگاه
          </a>
        </div>

        <div id="cart-items-list" class="flex-grow overflow-y-auto p-6 space-y-4"></div>

        <div id="cart-footer-actions" class="p-6 border-t border-outline-variant/30 bg-surface/80 backdrop-blur-md hidden space-y-4">
          <div class="flex items-center justify-between font-label-sm text-base">
            <span class="text-on-surface-variant">مجموع کل:</span>
            <span id="cart-total-price" class="font-headline text-lg text-secondary font-bold">۰ تومان</span>
          </div>
          <button onclick="checkoutViaTelegram()" class="w-full bg-primary hover:bg-secondary text-white font-label-sm text-sm py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
            <span class="material-symbols-outlined" data-icon="send">send</span>
            <span>تکمیل و ثبت سفارش در تلگرام</span>
          </button>
          <p class="font-label-sm text-[11px] text-center text-outline">پشتیبانی و ثبت آنی از طریق ربات رسمی تلگرام چنور</p>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', cartHTML);
  }

  // Inject Mobile Menu Drawer if not present
  if (!document.getElementById('mobile-menu-drawer')) {
    const mobileMenuHTML = `
      <div id="mobile-menu-backdrop" onclick="closeMobileMenu()" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] hidden opacity-0 transition-opacity duration-300 md:hidden pointer-events-none"></div>
      <div id="mobile-menu-drawer" class="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-surface-container-lowest z-[91] shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col hidden md:hidden pointer-events-none">
        <div class="p-6 border-b border-outline-variant/30 flex items-center justify-between">
          <span class="font-headline text-xl text-primary font-bold">Chnoor Shop</span>
          <button onclick="closeMobileMenu()" class="p-2 text-outline hover:text-on-surface rounded-full hover:bg-surface-variant transition-colors">
            <span class="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>
        <nav class="p-6 flex flex-col gap-4 font-label-sm text-base">
          <a href="index.html" class="p-3 rounded-xl hover:bg-surface-variant text-on-surface transition-colors flex items-center gap-3">
            <span class="material-symbols-outlined text-primary" data-icon="home">home</span>
            <span>صفحه اصلی</span>
          </a>
          <a href="products.html" class="p-3 rounded-xl hover:bg-surface-variant text-on-surface transition-colors flex items-center gap-3">
            <span class="material-symbols-outlined text-primary" data-icon="storefront">storefront</span>
            <span>فروشگاه و گالری</span>
          </a>
          <a href="custom-order.html" class="p-3 rounded-xl hover:bg-surface-variant text-on-surface transition-colors flex items-center gap-3">
            <span class="material-symbols-outlined text-primary" data-icon="palette">palette</span>
            <span>سفارش اختصاصی</span>
          </a>
          <a href="about.html" class="p-3 rounded-xl hover:bg-surface-variant text-on-surface transition-colors flex items-center gap-3">
            <span class="material-symbols-outlined text-primary" data-icon="info">info</span>
            <span>درباره ما</span>
          </a>
          <a href="contact.html" class="p-3 rounded-xl hover:bg-surface-variant text-on-surface transition-colors flex items-center gap-3">
            <span class="material-symbols-outlined text-primary" data-icon="contact_support">contact_support</span>
            <span>تماس و پشتیبانی</span>
          </a>
        </nav>
        <div class="mt-auto p-6 border-t border-outline-variant/30">
          <a href="https://t.me/chnoorshopbot" target="_blank" class="w-full bg-[#229ED9] text-white p-3 rounded-xl flex items-center justify-center gap-2 font-label-sm text-sm">
            <span class="material-symbols-outlined" data-icon="send">send</span>
            <span>ربات تلگرام چنور</span>
          </a>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', mobileMenuHTML);
  }

  // Inject Search Modal
  if (!document.getElementById('search-modal')) {
    const searchModalHTML = `
      <div id="search-modal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[110] hidden items-center justify-center p-4">
        <div class="bg-surface-container-lowest w-full max-w-xl rounded-2xl shadow-2xl border border-outline-variant/40 overflow-hidden flex flex-col max-h-[85vh]">
          <div class="p-4 border-b border-outline-variant/30 flex items-center gap-3">
            <span class="material-symbols-outlined text-primary text-2xl" data-icon="search">search</span>
            <input id="search-input" type="text" placeholder="جستجوی نام اثر، سبک، ابعاد یا محصول..." class="flex-grow bg-transparent border-none outline-none font-label-sm text-base text-on-surface placeholder:text-outline" oninput="handleSearchQuery(this.value)" />
            <button onclick="closeSearchModal()" class="p-2 text-outline hover:text-on-surface rounded-full hover:bg-surface-variant transition-colors">
              <span class="material-symbols-outlined" data-icon="close">close</span>
            </button>
          </div>
          <div id="search-results" class="p-4 overflow-y-auto space-y-3 flex-grow max-h-[400px]">
            <p class="text-center text-outline text-sm py-8">نام طرح یا دسته‌بندی مورد نظر خود را تایپ کنید...</p>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', searchModalHTML);
  }
}

function openMobileMenu() {
  const drawer = document.getElementById('mobile-menu-drawer');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('hidden', 'pointer-events-none');
    backdrop.classList.remove('hidden', 'pointer-events-none');
    void drawer.offsetWidth;
    backdrop.classList.remove('opacity-0');
    drawer.classList.remove('translate-x-full');
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-menu-drawer');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  if (drawer && backdrop) {
    backdrop.classList.add('opacity-0');
    drawer.classList.add('translate-x-full');
    setTimeout(() => {
      drawer.classList.add('hidden', 'pointer-events-none');
      backdrop.classList.add('hidden', 'pointer-events-none');
    }, 300);
  }
}

function openSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    const input = document.getElementById('search-input');
    if (input) {
      input.value = '';
      input.focus();
      handleSearchQuery('');
    }
  }
}

function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function handleSearchQuery(query) {
  const resultsContainer = document.getElementById('search-results');
  if (!resultsContainer) return;

  const clean = query.trim().toLowerCase();
  if (!clean) {
    resultsContainer.innerHTML = `
      <div class="text-center py-6 text-outline font-label-sm text-sm">
        <p>پیشنهادات محبوب:</p>
        <div class="flex flex-wrap justify-center gap-2 mt-3">
          <button onclick="document.getElementById('search-input').value='باغ ایرانی'; handleSearchQuery('باغ ایرانی');" class="bg-surface-variant px-3 py-1.5 rounded-full text-xs hover:bg-primary hover:text-white transition-colors">تابلو باغ ایرانی</button>
          <button onclick="document.getElementById('search-input').value='آباژور'; handleSearchQuery('آباژور');" class="bg-surface-variant px-3 py-1.5 rounded-full text-xs hover:bg-primary hover:text-white transition-colors">چراغ خواب و آباژور</button>
          <button onclick="document.getElementById('search-input').value='اسلیمی'; handleSearchQuery('اسلیمی');" class="bg-surface-variant px-3 py-1.5 rounded-full text-xs hover:bg-primary hover:text-white transition-colors">طرح اسلیمی</button>
        </div>
      </div>
    `;
    return;
  }

  const matches = PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(clean) || 
    p.description.toLowerCase().includes(clean) ||
    p.categoryName.toLowerCase().includes(clean) ||
    p.technique.toLowerCase().includes(clean)
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = `<p class="text-center text-outline text-sm py-8">هیچ اثری منطبق با «${query}» یافت نشد.</p>`;
    return;
  }

  resultsContainer.innerHTML = matches.map(p => `
    <a href="product-detail.html?id=${p.id}" class="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-variant transition-colors group">
      <img src="${p.image}" alt="${p.title}" class="w-14 h-14 object-cover rounded-lg flex-shrink-0" />
      <div class="flex-grow">
        <h4 class="font-label-sm text-sm text-on-surface font-semibold group-hover:text-primary transition-colors">${p.title}</h4>
        <p class="font-label-sm text-xs text-outline mt-1">${p.categoryName} • ${p.dimensions}</p>
      </div>
      <span class="font-headline text-sm text-secondary font-bold">${p.priceFormatted} تومان</span>
    </a>
  `).join('');
}

// --- DOM Ready Init ---
document.addEventListener('DOMContentLoaded', () => {
  injectSharedComponents();
  initAnimations();
  updateCartUI();
  updateWishlistUI();

  // Attach search triggers
  document.querySelectorAll('[data-search-trigger]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openSearchModal();
    });
  });

  // Attach cart triggers
  document.querySelectorAll('[data-cart-trigger]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  // Attach mobile menu trigger
  document.querySelectorAll('[data-mobile-menu-trigger]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openMobileMenu();
    });
  });

  // Close modals on Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearchModal();
      closeCartDrawer();
      closeMobileMenu();
    }
  });
});
