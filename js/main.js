// انتخاب تب‌ها و محتوای آنها
const tabs = document.querySelectorAll(".services__tab");
const tabContents = document.querySelectorAll(".tab-content");

// اضافه کردن data-tab-target به تب‌ها
tabs.forEach((tab, index) => {
  // انتخاب تب‌ها به ترتیب
  const tabContentId = tabContents[index].id || `tab-${index}`;

  // اگر محتوای تب ID ندارد، به آن ID اضافه کنیم
  if (!tabContents[index].id) {
    tabContents[index].id = tabContentId;
  }

  // اضافه کردن data-tab-target به تب
  tab.setAttribute("data-tab-target", tabContentId);

  // اضافه کردن event listener
  tab.addEventListener("click", () => {
    // حذف کلاس active از همه تب‌ها و محتواها
    tabs.forEach((t) => t.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // اضافه کردن کلاس active به تب انتخاب شده و محتوای مرتبط
    tab.classList.add("active");
    document.getElementById(tabContentId).classList.add("active");
  });
});
