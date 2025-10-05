import { Calculator, TrendingUp, Calendar, PieChart, DollarSign, FileText } from "lucide-react";

export const toolkitItems = [
  {
    id: "business-budget-template",
    title: "Business Budget Template",
    description: "Comprehensive CSV template for monthly and yearly business budget planning with sample data and calculations",
    icon: Calculator,
    fileType: "CSV (.csv)",
    size: "15 KB",
    category: "Planning",
    features: ["Monthly & Annual Views", "Automatic Calculations", "Expense Categories", "Variance Analysis"]
  },
  {
    id: "cash-flow-tracker",
    title: "Cash Flow Tracker",
    description: "Monitor your business cash flow with this detailed tracking template including forecasting tools and payment tracking",
    icon: TrendingUp,
    fileType: "CSV (.csv)",
    size: "12 KB",
    category: "Tracking",
    features: ["Daily Cash Flow", "Forecasting", "Payment Tracking", "Visual Charts"]
  },
  {
    id: "tax-calendar",
    title: "Tax Calendar 2024-25",
    description: "Complete calendar of all important tax deadlines, GST dates, and compliance requirements with penalty information",
    icon: Calendar,
    fileType: "Text (.txt)",
    size: "8 KB",
    category: "Compliance",
    features: ["GST Due Dates", "Income Tax Deadlines", "TDS Due Dates", "Penalty Information"]
  },
  {
    id: "profit-loss-template",
    title: "Profit & Loss Statement Template",
    description: "Professional P&L template designed for small businesses with Indian accounting standards and ratio analysis",
    icon: PieChart,
    fileType: "CSV (.csv)",
    size: "10 KB",
    category: "Reporting",
    features: ["Monthly P&L", "Comparative Analysis", "Ratio Calculations", "Professional Format"]
  },
  {
    id: "expense-tracker",
    title: "Business Expense Tracker",
    description: "Track all business expenses with categories, receipts, GST calculations, and tax deduction analysis",
    icon: DollarSign,
    fileType: "CSV (.csv)",
    size: "18 KB",
    category: "Tracking",
    features: ["Expense Categories", "Receipt Tracking", "Tax Deductions", "Monthly Reports"]
  },
  {
    id: "financial-ratios-analysis-guide",
    title: "Financial Ratios Analysis Guide",
    description: "Complete guide to understanding and calculating key financial ratios with industry benchmarks and templates",
    icon: FileText,
    fileType: "Text (.txt)",
    size: "25 KB",
    category: "Education",
    features: ["20+ Key Ratios", "Industry Benchmarks", "Calculation Examples", "Interpretation Guide"]
  }
];
