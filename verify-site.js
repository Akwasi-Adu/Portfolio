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
  '/portfolio/images/blog/dangote-refinery-ipo-social-card-v2.jpg',
  '<meta property="og:image:secure_url"',
  '<meta property="og:image:type" content="image/jpeg">',
  '/portfolio/js/newsletter-config.js',
  'href="/privacy.html"'
]);
requireText('portfolio/js/newsletter-config.js', [
  'https://0b003bf6.sibforms.com/serve/',
  'formAction'
]);

const socialCardPath = path.join(root, 'portfolio', 'images', 'blog', 'dangote-refinery-ipo-social-card-v2.jpg');
if (!fs.existsSync(socialCardPath)) {
  throw new Error('The optimized article social card is missing.');
}
if (fs.statSync(socialCardPath).size > 300000) {
  throw new Error('The optimized article social card exceeds 300 KB.');
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
requireText('index.html', [
  'id="latest-blogs"',
  'Writing &amp; Learning',
  'https://aspnetcoremastery.akwasi.dev/',
  'href="/privacy.html"',
  '/projects/retail-management-system-specialist-vodafone-ghana-airtel-tigo-ghana-chad-and-congo/'
]);
requireText('portfolio/js/ai-homepage.js', [
  'contact_form_attempt',
  'contact_form_success',
  'contact_form_error',
  "service_9hvqsd3",
  "template_yk503fe"
]);
const projectsRenderer = requireText('portfolio/js/projects-render.js', [
  'projectUrl(project)',
  '/projects/${project.slug || projectSlug(project.title || project.name)}/'
]);
if (projectsRenderer.includes('project-details.html?id=')) {
  throw new Error('The projects renderer still uses query-string detail URLs.');
}
requireText('projects.html', [
  'data-project-category="Products"',
  'data-project-category="Custom Software"',
  'data-project-category="ERP &amp; Consulting"',
  'id="products-showcase"',
  'class="ai-project-logo-frame"',
  'class="ai-project-role"',
  '<h2>Ministry of Finance, Ghana</h2>'
]);

const projectSandbox = { window: {} };
vm.createContext(projectSandbox);
vm.runInContext(fs.readFileSync(path.join(root, 'portfolio', 'js', 'projects.js'), 'utf8'), projectSandbox);
const projectEntries = projectSandbox.window.projects;
if (projectEntries.length !== 29 || projectEntries.some(project => !project.clientName || !project.role)) {
  throw new Error('Project client names and roles are incomplete.');
}
requireText('projects/full-stack-developer-ministry-of-finance-ghana/index.html', [
  '<h1>Ministry of Finance, Ghana</h1>',
  '<strong>Role:</strong> Full-Stack Developer'
]);

const publicFiles = ['index.html', 'blog.html', 'blog-details.html', 'privacy.html', 'cv_ORIG.html'];
for (const relativePath of publicFiles) {
  const text = fs.readFileSync(path.join(root, relativePath), 'utf8');
  if (text.includes(oldAddress)) throw new Error(`${relativePath} still contains the old public email address.`);
}

console.log('Site verification passed.');
