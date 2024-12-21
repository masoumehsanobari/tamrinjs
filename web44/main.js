// داده‌های محصولات
const items = [
    {
        title: "چراغ قوه خودرو ",
        originalPrice: "200,000 تومان",
        discountPrice: "155,000 تومان",
        img: "https://dkstatics-public.digikala.com/digikala-products/8ce9b276cf56af0a787f14201f32886acf3120af_1627634729.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
    },
    {
        title: "ساعت هوشمند  ",
        originalPrice: "1,200,000 تومان",
        discountPrice: "845,000 تومان",
        img: "https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
    },
    {
        title: "هدفون سونی ل ",
        originalPrice: "600,000 تومان",
        discountPrice: "499,000 تومان",
        img: "https://dkstatics-public.digikala.com/digikala-products/001a96c9e436fef968fb71b1a59226711e03acb0_1712072503.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
    },
    {
        title: "هدست بلوتوثی ل ",
        originalPrice: "700,000 تومان",
        discountPrice: "499,000 تومان",
        img: "https://dkstatics-public.digikala.com/digikala-products/ce5ddf70952bd5ab86acc07d2c326c77b10532f5_1689519351.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
    },
    {
        title: "هندزفری بلوتوثd",
        originalPrice: "800,000 تومان",
        discountPrice: "690,000 تومان",
        img: "https://dkstatics-public.digikala.com/digikala-products/eb986cf8c2fe43d5ff881b86f1e37196c8d7e18f_1716219694.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
    },
    {
        title: "گوشی موبایل اپل iPhone 13 Pro Max",
        originalPrice: "160,000,000 تومان",
        discountPrice: "93,987,000 تومان",
        img: "https://dkstatics-public.digikala.com/digikala-products/40026b18c2b053ac4a68c3288556dc899a77aecd_1727276787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
    }
];

// پیدا کردن کانتینر سویپر
const swiperWrapper = document.querySelector('.swiper-wrapper');

// اضافه کردن آیتم‌ها به سویپر
items.forEach(item => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <div class="item-title">${item.title}</div>
        <div class="item-price">قیمت اصلی: ${item.originalPrice}$</div>
        <div class="item-discount-price">قیمت تخفیف: ${item.discountPrice}$</div>
    `;
    swiperWrapper.appendChild(slide);
});

