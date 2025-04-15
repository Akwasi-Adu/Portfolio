const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('https://akwasi.dev/cv.html', { waitUntil: 'networkidle0' });

  // Inject print mode class to remove animations and make it PDF-friendly
  await page.evaluate(() => {
    document.body.classList.add('print-mode');
  });

  await page.pdf({
    path: 'Akwasi_CV.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '30px', bottom: '30px', left: '20px', right: '20px' }
  });

  await browser.close();
})();
