// مثال بسيط لإضافة خبر جديد ديناميكيًا
document.addEventListener("DOMContentLoaded", () => {
  const newsSection = document.getElementById("news");

  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h3>تخصص الحقوق</h3>
    <p>إطلاق برنامج تدريبي لطلاب الحقوق حول مهارات الترافع أمام المحاكم.</p>
  `;

  newsSection.appendChild(newArticle);
});
