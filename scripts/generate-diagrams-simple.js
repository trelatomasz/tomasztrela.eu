#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const execAsync = promisify(exec);

async function generateDiagram(inputPath, outputPath) {
  try {
    // Use local mmdc (Mermaid CLI) to generate PNG
    const command = `npx @mermaid-js/mermaid-cli -i "${inputPath}" -o "${outputPath}" -t default`;
    
    console.log(`🔄 Generating: ${path.basename(inputPath)}`);
    
    const { stdout, stderr } = await execAsync(command);
    
    if (stderr && !stderr.includes('Warning')) {
      console.warn(`⚠️  Warning for ${inputPath}:`, stderr);
    }
    
    console.log(`✅ Generated: ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error generating diagram ${inputPath}:`, error.message);
    
    // Try alternative command format
    try {
      console.log(`🔄 Trying alternative command for ${inputPath}...`);
      const altCommand = `npx mmdc -i "${inputPath}" -o "${outputPath}" -t default`;
      
      const { stdout, stderr } = await execAsync(altCommand);
      
      if (stderr && !stderr.includes('Warning')) {
        console.warn(`⚠️  Warning for ${inputPath}:`, stderr);
      }
      
      console.log(`✅ Generated (alternative): ${outputPath}`);
    } catch (altError) {
      console.error(`❌ Alternative method also failed for ${inputPath}:`, altError.message);
      console.log(`💡 Try running: npm install -g @mermaid-js/mermaid-cli`);
    }
  }
}

async function findMermaidFiles(dir) {
  const files = [];
  
  async function scanDirectory(currentDir) {
    try {
      const entries = await fs.readdir(currentDir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);
        
        if (entry.isDirectory()) {
          await scanDirectory(fullPath);
        } else if (entry.name.endsWith('.mmd')) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not read directory ${currentDir}:`, error.message);
    }
  }
  
  await scanDirectory(dir);
  return files;
}

async function main() {
  const srcDiagramsDir = path.join(__dirname, '..', 'src', 'diagrams');
  const publicImagesDir = path.join(__dirname, '..', 'public', 'images');
  
  try {
    // Check if source diagrams directory exists
    try {
      await fs.access(srcDiagramsDir);
    } catch {
      console.log('📁 No diagrams directory found, skipping diagram generation');
      return;
    }
    
    // Find all .mmd files
    const mermaidFiles = await findMermaidFiles(srcDiagramsDir);
    
    if (mermaidFiles.length === 0) {
      console.log('📄 No .mmd files found, skipping diagram generation');
      return;
    }
    
    console.log(`🔍 Found ${mermaidFiles.length} Mermaid diagram(s)`);
    
    // Ensure public/images directory exists
    await fs.mkdir(publicImagesDir, { recursive: true });
    
    // Generate PNG for each diagram
    for (const mermaidFile of mermaidFiles) {
      // Calculate relative path from src/diagrams
      const relativePath = path.relative(srcDiagramsDir, mermaidFile);
      const outputPath = path.join(publicImagesDir, relativePath.replace('.mmd', '.png'));
      
      // Ensure output directory exists
      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      
      await generateDiagram(mermaidFile, outputPath);
    }
    
    console.log('🎉 Diagram generation completed!');
    
  } catch (error) {
    console.error('❌ Error in diagram generation:', error);
    process.exit(1);
  }
}

// Run the script
main(); 