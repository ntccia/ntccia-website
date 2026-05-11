(function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector('#joinForm');
  const preview = document.querySelector('#applicationPreview');
  const printButton = document.querySelector('#printApplication');
  const clearButton = document.querySelector('#clearApplication');

  function escapeHtml(str) {
    return String(str).replace(/[&<>"]/g, function (m) {
      return ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[m]);
    });
  }

  function value(name) {
    const el = form ? form.elements[name] : null;
    return escapeHtml(el && el.value ? el.value.trim() : '（未填）');
  }

  function renderPreview() {
    if (!form || !preview) return;
    preview.innerHTML = `
      <div class="prose">
        <h2>新北市化粧品商業同業公會 入會申請書</h2>
        <p>以下資料由申請單位填寫，列印後請加蓋公司大小章及負責人章，送交本會辦理後續審查。</p>
        <table>
          <tbody>
            <tr><th>公司名稱</th><td>${value('companyName')}</td></tr>
            <tr><th>公司統一編號</th><td>${value('taxId')}</td></tr>
            <tr><th>公司執照號碼</th><td>${value('licenseNo')}</td></tr>
            <tr><th>工廠登記證號碼</th><td>${value('factoryNo')}</td></tr>
            <tr><th>公司地址</th><td>${value('businessAddress')}</td></tr>
            <tr><th>通訊地址</th><td>${value('mailingAddress')}</td></tr>
            <tr><th>負責人 / 聯絡人</th><td>${value('contactName')} / ${value('contactTitle')}</td></tr>
            <tr><th>聯絡電話</th><td>${value('phone')}</td></tr>
            <tr><th>Email</th><td>${value('email')}</td></tr>
            <tr><th>主要營業項目</th><td>${value('products')}</td></tr>
            <tr><th>備註</th><td>${value('notes')}</td></tr>
          </tbody>
        </table>
        <p style="margin-top:28px;">申請單位大小章：＿＿＿＿＿＿＿＿＿＿＿　負責人章：＿＿＿＿＿＿＿＿＿＿＿</p>
        <p>填表日期：＿＿＿年＿＿＿月＿＿＿日</p>
      </div>`;
    preview.classList.add('show');
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      renderPreview();
      preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  if (printButton) {
    printButton.addEventListener('click', () => {
      renderPreview();
      setTimeout(() => window.print(), 150);
    });
  }
  if (clearButton && form) {
    clearButton.addEventListener('click', () => {
      form.reset();
      if (preview) { preview.innerHTML = ''; preview.classList.remove('show'); }
    });
  }
})();
