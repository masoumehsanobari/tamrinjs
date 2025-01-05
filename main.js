setTimeout(() => {
    // گرفتن عناصر مورد نیاز از HTML
    let showMenu = document.querySelector("button#showMenu"); // دکمه نمایش منو
    let menu = document.querySelector("div#menu"); // بخش منو
    let product = document.querySelector("div#product"); // بخش محصولات
  
    // تابع برای گرفتن منو با XMLHttpRequest
    function getMenuData() {
      let xml = new XMLHttpRequest(); // تعریف XMLHttpRequest
      let html = "";
  
      xml.open("get", "http://localhost:3004/menu"); // آدرس منو در JSON سرور
      xml.responseType = "json";
  
      xml.onload = () => {
        if (xml.status === 200) {
          xml.response.forEach((elem) => {
            html += `
             <div id="menu">
                <h3>${elem.id}</h3>
                <h2>${elem.title}</h2>
              </div>
            `;
          });
  
          menu.innerHTML = html; // افزودن داده‌ها به بخش منو
        } else {
          console.error("خطای دریافت منو...");
        }
      };
  
      xml.onerror = () => {
        console.error("خطا در درخواست منو...");
      };
  
      xml.send(null); // ارسال درخواست
    }
  
    // تابع برای گرفتن محصولات با Fetch
    function getProductData() {
      fetch("http://localhost:3004/product") // آدرس محصولات در JSON سرور
        .then((response) => {
          if (!response.ok) throw new Error("خطای دریافت محصولات...");
          return response.json(); // تبدیل پاسخ به JSON
        })
        .then((data) => {
          let html = "";
  
          data.forEach((elem) => {
            html += `
              <div id="card">
                <img src="${elem.imgsrc}" alt="${elem.title}"  />
                <h2>${elem.title}</h2>
                <p>قیمت: ${elem.price} تومان</p>
              </div>
            `;
          });
  
          product.innerHTML = html; // افزودن داده‌ها به بخش محصولات
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  
    // افزودن رویداد کلیک به دکمه نمایش منو
    showMenu.addEventListener("click", () => {
      getMenuData(); // دریافت منو
      getProductData(); // دریافت محصولات
    });
  }, 2000);