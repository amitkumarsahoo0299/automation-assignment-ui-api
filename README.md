# Automation Assignment Submission

**Name:** Amit Kumar Sahoo  
**Position:** SDET Intern  
**Framework:** Playwright

---

## 📋 Project Status

**✅ COMPLETED WITHOUT BLOCKERS:**  
- Full Playwright project setup and configuration.  
- Implementation of the Page Object Model design pattern.  
- Complete test structure and logic for Use Case 1 (Message Box Task) and Use Case 3 (API Flow).  
- Environment configuration strategy using `.env` for credentials.  
- API helper utility with authentication management.  
- Comprehensive reporting setup (HTML reports, screenshots, video recording).  
- Documentation of automation plan (flowchart and structured approach).  

**⏸️ AWAITING CREDENTIALS TO FINALIZE:**  
- Application-specific CSS selectors in Page Objects .  
- Execution of UI tests against the live application (Use Case 1 & Use Case 2).  
- Verification of exact API endpoints for the learning instance flow (Use Case 3 ).  
- Final validation of backend responses against live Control Room instance.  

---

## 🚀 Setup and Execution Instructions

1. **Clone & Install**
   ```bash
   git clone [repository-url]
   cd automation-assignment
   npm install
2. **	Configure Environment**
   ```bash
   cp .env.example .env
   Edit the .env file and add valid USERNAME, and PASSWORD
3. **Run the UI Tests (Use Case 1 & 2 )**
   ```bash
   npx playwright test tests/ui/messageBoxTask.spec.js --headed
   npx playwright test tests/ui/formUpload.spec.js --headed
4. **Run the API Test (Use Case 3 )**
   ```bash
   npx playwright test tests/api/learningInstance.spec.js --headed
5. **View the HTML Report**
   ```bash
   npx playwright show-report 
