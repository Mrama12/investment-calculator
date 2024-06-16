import { Injectable } from '@angular/core'

interface AnnualData {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number,
}

@Injectable({ providedIn: 'root'})
export class InvestmentService {
  annualData: AnnualData[] = [];

  generateTable (initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number) {
    const resultData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
        resultData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.annualData = resultData;
  }

  getAnnualData () {
    return this.annualData.length > 0 ? this.annualData : null;
  }
  
}