# CredRisk India — Credit Risk & FRA Analysis Dashboard

An institutional-grade **Financial Reporting & Analysis (Term 5)** platform delivering a comprehensive **10-Year (FY2015 – FY2024)** empirical evaluation of credit risk, provisioning strategies, balance-sheet cleanups, and equity valuation rerating across leading Indian Scheduled Commercial Banks and Non-Banking Financial Companies (NBFCs).

---

## 👥 Project Team & Contributors
* **Anuyesh Sinha** (AS)
* **Liash Roy** (LR)
* **Baidurja Biswas** (BB)
* **Rishabh Agrawal** (RA)
* **Ritul Bokde** (RB)
* **Kaustabh Dutta** (KD)

---

## 🏛️ Scope of Analyzed Institutions

### 1. Scheduled Commercial Banks
* **ICICI Bank Ltd.** (ICICIBANK.NS) — Large Private Sector Indian Bank  
  *Peer Benchmark:* HDFC Bank, Axis Bank, Kotak Mahindra Bank
* **State Bank of India (SBI)** (SBIN.NS) — Large Public Sector Sovereign Bank  
  *Peer Benchmark:* Bank of Baroda, Punjab National Bank, Canara Bank
* **HDFC Bank Ltd.** (HDFCBANK.NS) — Premier Private Sector Bank  
  *Peer Benchmark:* ICICI Bank, Axis Bank, Kotak Mahindra Bank
* **Federal Bank Ltd.** (FEDERALBNK.NS) — Mid-Sized Private Indian Bank  
  *Peer Benchmark:* IDFC First Bank, IndusInd Bank, City Union Bank

### 2. Upper-Layer Retail & Asset Financing NBFCs
* **Bajaj Finance Ltd.** (BAJFINANCE.NS) — Diversified Consumer & SME Lending NBFC  
  *Peer Benchmark:* Cholamandalam, Shriram Finance, M&M Financial Services
* **Cholamandalam Investment & Finance (Chola)** (CHOLAFIN.NS) — Commercial Vehicle & LAP NBFC  
  *Peer Benchmark:* Bajaj Finance, Shriram Finance, M&M Financial Services
* **Shriram Finance Ltd.** (SHRIRAMFIN.NS) — Pre-owned CV, MSME & Rural Asset Financing NBFC  
  *Peer Benchmark:* Bajaj Finance, Cholamandalam, M&M Financial Services

---

## 📊 Core Credit Risk Metrics & Mathematical Formulations

1. **Gross Non-Performing Assets (GNPA Ratio %)**
   \\text{GNPA Ratio} = \\frac{\\text{Gross NPAs}}{\\text{Gross Advances}} \\times 100
2. **Net Non-Performing Assets (NNPA Ratio %)**
   \\text{NNPA Ratio} = \\frac{\\text{Gross NPAs} - \\text{Specific Provisions Held}}{\\text{Net Advances}} \\times 100
3. **Provision Coverage Ratio (PCR %)**
   \\text{PCR} = \\frac{\\text{Cumulative Provisions Held}}{\\text{Gross NPAs}} \\times 100
4. **Fresh Slippage Ratio (%)**
   \\text{Slippage Ratio} = \\frac{\\text{Fresh Additions to NPAs in FY}}{\\text{Opening Gross Advances}} \\times 100
5. **Technical Write-off Ratio (%)**
   \\text{Write-off Ratio} = \\frac{\\text{Contractual / Technical Write-offs}}{\\text{Gross NPAs}} \\times 100
6. **Credit Cost Ratio (%)**
   \\text{Credit Cost} = \\frac{\\text{P&L Provisions for Loan Losses}}{\\text{Average Total Advances}} \\times 100

---

## 🔍 Accounting Methodology & 6 Documented Data Breaks

1. **RBI Asset Quality Review (Oct 2015 – Mar 2016)**: Ended CDR/SDR/S4A forbearance and triggered corporate cycle peak.
2. **RBI Revised Resolution Circular (Feb 12, 2018)**: Mandated 180-day resolution timeline leading to IBC NCLT admission.
3. **SBI Associate Banks Mega-Merger (April 1, 2017 / FY18)**: SBBJ, SBH, SBM, SBP, SBT, and BMB amalgamation adding ₹2.50+ Lakh Cr in advances and ₹60,000+ Cr in legacy NPAs.
4. **NBFC DPD Tightening (FY15–FY18)**: Phased transition from 180 DPD $\\to$ 150 DPD $\\to$ 120 DPD $\\to$ 90 DPD.
5. **Ind AS 109 / IFRS 9 Adoption (FY18/FY19)**: Transitioned NBFCs to Stage 3 Expected Credit Loss (>90 DPD).
6. **Amalgamations (FY23–FY24)**: Shriram Transport Finance + SCUF (Dec 2022) & HDFC Ltd + HDFC Bank (July 2023).

---

## 🚀 How to Run the Website Locally

### Option 1: One-Click Quick Launch
Double-click start.bat in this folder. It will launch the local HTTP server and automatically open the application in your browser at http://localhost:5173.

### Option 2: Using Python
Run in terminal:
`ash
python -m http.server 5173
`
Then open [http://localhost:5173](http://localhost:5173) in Chrome or Edge.

### Option 3: Using Node / NPM
`ash
npm install
npm run serve
`
