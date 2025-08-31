// Simple test to verify Next.js setup
const fs = require('fs');
const path = require('path');

console.log('🔍 Testing Blog Showcase Setup...\n');

// Check essential files
const essentialFiles = [
  'package.json',
  'next.config.js',
  'tsconfig.json',
  'tailwind.config.ts',
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/globals.css'
];

console.log('📁 Checking essential files:');
essentialFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
});

// Check package.json dependencies
console.log('\n📦 Checking dependencies:');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const requiredDeps = ['next', 'react', 'react-dom', 'typescript', 'tailwindcss'];
  
  requiredDeps.forEach(dep => {
    const hasInDeps = packageJson.dependencies && packageJson.dependencies[dep];
    const hasInDevDeps = packageJson.devDependencies && packageJson.devDependencies[dep];
    const exists = hasInDeps || hasInDevDeps;
    console.log(`  ${exists ? '✅' : '❌'} ${dep}`);
  });
} catch (error) {
  console.log('  ❌ Error reading package.json');
}

// Check component files
console.log('\n🧩 Checking components:');
const componentFiles = [
  'src/components/layout/Navbar.tsx',
  'src/components/layout/Footer.tsx',
  'src/components/providers/ThemeProvider.tsx'
];

componentFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
});

// Check data files
console.log('\n📊 Checking data files:');
const dataFiles = [
  'src/data/blogs.json',
  'src/data/projects.json'
];

dataFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
});

console.log('\n🎉 Setup verification complete!');
console.log('\n📋 Next steps:');
console.log('  1. Run: npm install');
console.log('  2. Run: npm run dev');
console.log('  3. Open: http://localhost:3000');
console.log('  4. For deployment, see DEPLOYMENT.md');
