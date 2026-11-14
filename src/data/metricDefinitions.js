export const metricDefinitions = {
  gnpa: {
    id: "gnpa",
    name: "Gross Non-Performing Assets (GNPA)",
    shortLabel: "GNPA Ratio",
    unit: "%",
    higherIsBetter: false,
    definition: "The total value of loans where the borrower has stopped making scheduled principal or interest payments for 90 days or more (or 180->120->90 DPD in historical NBFC guidelines), expressed as a percentage of total gross loan advances.",
    formulaDisplay: "GNPA Ratio (%) = (Gross NPAs / Gross Advances) × 100",
    formulaLatex: "\\frac{\\text{Gross NPAs}}{\\text{Gross Advances}} \\times 100",
    industryBenchmark: "< 2.5% for top-tier Indian banks; < 2.0% for leading NBFCs.",
    interpretationGuide: "A rising GNPA indicates deteriorating credit underwriting quality, aggressive expansion, or systemic macroeconomic stress. When GNPA peaks, the lender enters the recognition and balance-sheet cleanup phase."
  },
  nnpa: {
    id: "nnpa",
    name: "Net Non-Performing Assets (NNPA)",
    shortLabel: "NNPA Ratio",
    unit: "%",
    higherIsBetter: false,
    definition: "The actual bad debt exposure remaining on the balance sheet after subtracting specific provisions set aside to absorb those bad loans, divided by net advances.",
    formulaDisplay: "NNPA Ratio (%) = ((Gross NPAs - Specific Provisions) / Net Advances) × 100",
    formulaLatex: "\\frac{\\text{Gross NPAs} - \\text{Provisions}}{\\text{Net Advances}} \\times 100",
    industryBenchmark: "< 0.5% for high-performing Indian lenders; < 1.0% acceptable.",
    interpretationGuide: "Net NPA directly threatens net worth / capital adequacy. If NNPA approaches 0%, the lender has effectively shielded its equity from existing delinquent loans."
  },
  pcr: {
    id: "pcr",
    name: "Provision Coverage Ratio (PCR)",
    shortLabel: "PCR %",
    unit: "%",
    higherIsBetter: true,
    definition: "The proportion of gross non-performing assets covered by cumulative loan loss provisions. Disclosed both with and without technical/prudential write-offs.",
    formulaDisplay: "PCR (%) = (Cumulative Provisions Held / Gross NPAs) × 100",
    formulaLatex: "\\frac{\\text{Provisions Held}}{\\text{Gross NPAs}} \\times 100",
    industryBenchmark: "> 70% recommended by RBI; top private banks maintain 75%–85%.",
    interpretationGuide: "High PCR signifies a conservative fortress balance sheet capable of absorbing unexpected slippages without impairing future P&L earnings."
  },
  slippage: {
    id: "slippage",
    name: "Fresh Slippages & Slippage Ratio",
    shortLabel: "Slippage Ratio",
    unit: "%",
    higherIsBetter: false,
    definition: "The annualized rate at which standard performing loans degrade into Non-Performing Assets during a specific fiscal year, divided by opening standard/gross advances.",
    formulaDisplay: "Slippage Ratio (%) = (Fresh Slippages in FY / Opening Gross Advances) × 100",
    formulaLatex: "\\frac{\\text{Fresh Slippages}}{\\text{Opening Gross Advances}} \\times 100",
    industryBenchmark: "< 1.5% for corporate/retail diversified banks; < 2.0% for NBFCs.",
    interpretationGuide: "Slippage is the leading indicator of fresh asset quality distress. Unlike stock metrics (GNPA), flow metrics (slippages) reveal immediate risk trends before write-offs mask them."
  },
  writeOff: {
    id: "writeOff",
    name: "Write-offs & Technical Write-off Ratio",
    shortLabel: "Write-Off Ratio",
    unit: "%",
    higherIsBetter: false,
    definition: "The percentage of Gross NPAs removed from the headline balance sheet via contractual or technical write-offs for tax and recovery efficiency.",
    formulaDisplay: "Write-Off Ratio (%) = (Write-offs in FY / Gross NPAs) × 100",
    formulaLatex: "\\frac{\\text{Write-offs Amount}}{\\text{Gross NPAs}} \\times 100",
    industryBenchmark: "15%–35% typical in banking cleanup cycles; higher in unsecured retail NBFCs.",
    interpretationGuide: "Technical write-offs clean the headline balance sheet without relinquishing legal recovery rights against the defaulting borrower."
  },
  creditCost: {
    id: "creditCost",
    name: "Credit Cost & Credit Cost Ratio",
    shortLabel: "Credit Cost Ratio",
    unit: "%",
    higherIsBetter: false,
    definition: "Total provisions charged to the Profit & Loss statement for bad and doubtful debts during the financial year, divided by average total loan advances.",
    formulaDisplay: "Credit Cost Ratio (%) = (P&L Provisions for NPAs / Average Total Advances) × 100",
    formulaLatex: "\\frac{\\text{P&L Loan Loss Provisions}}{\\text{Average Total Advances}} \\times 100",
    industryBenchmark: "< 0.8% for premier retail banks; > 3.0% denotes severe cycle distress.",
    interpretationGuide: "Credit cost is the direct P&L toll of bad debt. When credit costs normalize from 300+ bps down to 50 bps, return on assets (RoA) and P/B multiples expand aggressively."
  }
};
