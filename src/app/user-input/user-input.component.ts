import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment-results/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {
  }
  enteredInitial?: number = 1000;
  enteredAnual?: number = 100;
  enteredReturn?: number = 5;
  enteredDuration?: number = 10;

  onCalculate() {
    if (this.enteredInitial && this.enteredAnual && this.enteredReturn && this.enteredDuration) {
      this.investmentService.generateTable(this.enteredInitial, this.enteredAnual, this.enteredReturn, this.enteredDuration);
    }
  }
}
