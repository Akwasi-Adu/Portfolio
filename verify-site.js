const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const articleUrl = '/blog/dangote-refinery-ipo-notes-from-ghana/';
const articlePath = path.join(root, 'blog', 'dangote-refinery-ipo-notes-from-ghana', 'index.html');

function requireText(relativePath, needles) {
  const text = fs.readFileSync(path.join(root, relativePath), 'utf8');
  for (const needle of needles) {
    if (!text.includes(needle)) {
      throw new Error(`${relativePath} is missing required text: ${needle}`);
    }
  }
  return text;
}

requireText('blog/dangote-refinery-ipo-notes-from-ghana/index.html', [
  '<title>Dangote Refinery Is Going Public: My Notes on the IPO From Ghana | Akwasi Adu-Kyeremeh</title>',
  'id="ghana-broker-mechanics"',
  'I do not own shares in Dangote Petroleum Refinery',
  '/portfolio/images/blog/dangote-refinery-ipo-social-card.png',
  '/portfolio/js/newsletter-config.js',
  'href="/privacy.html"'
]);
requireText('portfolio/js/newsletter-config.js', [
  'https://0b003bf6.sibforms.com/serve/',
  'formAction'
]);

if (!fs.existsSync(path.join(root, 'portfolio', 'images', 'blog', 'dangote-refinery-ipo-social-card.png'))) {
  throw new Error('The article social card is missing.');
}

requireText('privacy.html', ['Privacy Notice', 'me@akwasi.dev', 'Brevo', 'Google Analytics']);
requireText('newsletter/thank-you/index.html', [
  'You’re on the list.',
  'Akwasi.dev Market Notes',
  '/blog/dangote-refinery-ipo-notes-from-ghana/',
  'me@akwasi.dev'
]);
requireText('blog-sitemap.xml', [`https://akwasi.dev${articleUrl}`]);
requireText('sitemap-static.xml', ['https://akwasi.dev/privacy.html']);

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, 'portfolio', 'js', 'blogs.js'), 'utf8'), sandbox);
const article = sandbox.window.blogs?.find((blog) => blog.slug === 'dangote-refinery-ipo-notes-from-ghana');
if (!article || article.externalUrl !== articleUrl || article.standalone !== true) {
  throw new Error('The Dangote article catalogue entry is not configured as a standalone page.');
}

const oldAddress = 'akwasi@rhema-systems.com.gh';
const publicFiles = ['index.html', 'blog.html', 'blog-details.html', 'privacy.html', 'ai/index-ai.html', 'cv_ORIG.html'];
for (const relativePath of publicFiles) {
  const text = fs.readFileSync(path.join(root, relativePath), 'utf8');
  if (text.includes(oldAddress)) throw new Error(`${relativePath} still contains the old public email address.`);
}

console.log('Site verification passed.');
