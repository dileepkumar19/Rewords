import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbDate,NgbCalendar, NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-customerrewards',
  templateUrl: './customerrewards.component.html',
  styleUrls: ['./customerrewards.component.css']
})
export class CustomerrewardsComponent implements OnInit {
  custData:any;
  hoveredDate: NgbDate | null = null;
	fromDate: any;
	toDate: any;
  selectedName:any;
  names:any;
totalpoints:any=0;
rangeData:any=[];
  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
		this.fromDate = calendar.getToday();
		this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  
	}

  

  ngOnInit(): void {
    this.custData=[
      {
        name:'kiran',
        ordervalue:200,
        date: new Date('01/02/2021'),
        place:'hyd'
      },{
        name:'kiran',
        ordervalue:120,
        date: new Date('01/04/2021'),
        place:'hyd'
      },
      {
        name:'kiran',
        ordervalue:120,
        date: new Date('01/03/2021'),
        place:'hyd'
      },
      {
        name:'kiran',
        ordervalue:120,
        date: new Date('01/02/2021'),
        place:'hyd'
      },
      {
        name:'kiran',
        ordervalue:120,
        date: new Date('01/06/2021'),
        place:'hyd'
      },
      {
        name:'kiran',
        ordervalue:120,
        date: new Date('01/12/2021'),
        place:'hyd'
      },
      {
        name:'Dileep',
        ordervalue:200,
        date: new Date('01/02/2021'),
        place:'hyd'
      },{
        name:'Dileep',
        ordervalue:120,
        date: new Date('01/04/2021'),
        place:'hyd'
      },
      {
        name:'Dileep',
        ordervalue:150,
        date: new Date('01/03/2021'),
        place:'hyd'
      },
      {
        name:'Dileep',
        ordervalue:80,
        date: new Date('01/02/2021'),
        place:'hyd'
      },
      {
        name:'Dileep',
        ordervalue:120,
        date: new Date('01/06/2021'),
        place:'hyd'
      },
      {
        name:'Dileep',
        ordervalue:120,
        date: new Date('01/12/2021'),
        place:'hyd'
      }
      
    ]
    this.names=[...new Set(this.custData.map((a:any)=>a.name))]
    console.log(this.names);
  }
  onProfileChange(e:any){
    this.totalpoints=0;
    this.selectedName=e.target.value;
  }
  onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}

	validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
		const parsed = this.formatter.parse(input);
		return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
	}

  Calculate(){
    this.selectedName;
    var fdate= `${this.fromDate.month}/${this.fromDate.day}/${this.fromDate.year}`
    var ldate= `${this.toDate.month}/${this.toDate.day}/${this.toDate.year}`
    this.rangeData=(this.custData.filter((a:any)=> new Date(fdate) < new Date(a.date) &&  new Date(a.date) < new Date(ldate) && a.name===this.selectedName));
    //this.custData.map((a:any)=>a.name)
//var totalpoints=0;
    for(let i=0; i< this.rangeData.length; i++){
      this.totalpoints= this.totalpoints+this.calculateRewards(this.rangeData[i].ordervalue);
    }
    console.log(this.totalpoints)
  }

  calculateRewards(price:any) {
    if (price >=50 && price < 100) {
        return price-50;
    } else if (price >100){
        return (2*(price-100) + 50);
    }
    return 0;
}

// class Transaction {
//     constructor(price) {
//         this.price = price;
//         this.rewards = calculateRewards(price);
//         this.transactionDate = new Date();
//     }
// }

// class TransactionList {
//     constructor() {
//         this.list = [];
//     }

//     getLast3MonthsList() {
//         var today = new Date();
//         const threeOldDate = today.setMonth(today.getMonth() - 3);
//         let filteredList = this.list.filter(trans => trans.transactionDate > threeOldDate);
//         return filteredList.sort((a,b) => b.transactionDate - a.transactionDate);
//     }

//     getAllTransactions() {
//         return this.list.sort((a,b) => b.transactionDate-a.transactionDate);
//     }

//     addTransaction(price) {
//         const transaction = new Transaction(price);
//         this.list.push(transaction);
//     }

//     getTotalRewards() {
//         return this.list.length ? this.list.reduce((acc,key)=>key.rewards+acc, 0) : 0;
//     }

//     rewardPerMonth() {
//         let last3MonthRewardsInDesc = [];
//         for(let i=0; i<3; i++) {
//             let filteredList = this.list.filter(trans => trans.transactionDate.getMonth() == (new Date).getMonth() - i );
//             last3MonthRewardsInDesc[i] = filteredList.reduce((acc,key)=>key.rewards+acc,0);
//         }
//         return last3MonthRewardsInDesc;
//     }
// }

// let myTransactionList = new TransactionList();
// myTransactionList.addTransaction(154);
// myTransactionList.addTransaction(54);
// myTransactionList.addTransaction(200);
// myTransactionList.addTransaction(20);
// myTransactionList.addTransaction(300);
// let arr = myTransactionList.getAllTransactions();
// }
}


