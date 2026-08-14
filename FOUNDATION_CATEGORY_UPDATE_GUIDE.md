# Foundation Category Reorganization Guide

## 🎯 Goal
Consolidate 10 individual categories into 2 main categories: **Philosophy** and **Design**

## 📚 Current Foundation Documents (9 total)
Based on the API response, here are the existing documents that need category updates:

### Documents to Update:

1. **Principles** 
   - Current category: "Principles" 
   - **New category: "Philosophy"**

2. **Design tokens**
   - Current category: "Design tokens"
   - **New category: "Design"**

3. **Typography**
   - Current category: "Typography" 
   - **New category: "Design"**

4. **Colours**
   - Current category: "Colours"
   - **New category: "Design"**

5. **Elevation**
   - Current category: "Elevation"
   - **New category: "Design"**

6. **Motion**
   - Current category: "Motion"
   - **New category: "Design"**

7. **Usability**
   - Current category: "Usability"
   - **New category: "Design"**

8. **Accessibility**
   - Current category: "Accessibility"
   - **New category: "Design"**

9. **UX Writing**
   - Current category: "UX Writing"
   - **New category: "Design"**

## ➕ New Document to Create

10. **Model** (NEW)
    - Title: "Model"
    - Slug: "model"
    - Description: "The foundational model and framework that guides our design system approach"
    - Category: "Philosophy"
    - Order: 0 (to appear before Principles)
    - Status: "published"

## 🔧 Manual Steps in Sanity Studio

### Step 1: Update Existing Documents
Go to your Sanity Studio → Foundations folder

For each document listed above:
1. Click on the document
2. Find the **Category** field
3. Change it to the new category (Philosophy or Design)
4. Save the document

### Step 2: Create Model Document
1. Click "Create new document"
2. Select "Foundation" document type
3. Fill in the Model document details above
4. Save and publish

## ✅ Final Result
After completing these steps, you'll have:

**Philosophy Category (2 documents):**
- Model
- Principles

**Design Category (8 documents):**
- Design tokens
- Typography
- Colours  
- Elevation
- Motion
- Usability
- Accessibility
- UX Writing

## 🚀 Verification
After updating in Sanity, check your Next.js app to see the foundations properly grouped under the two new categories.