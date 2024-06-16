import { Component } from '@angular/core';
import { InvestmentService } from './investment.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
  providers: [CurrencyPipe],
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentService) {
  }

  get annualData () {
    return this.investmentService.getAnnualData();
  }
}
