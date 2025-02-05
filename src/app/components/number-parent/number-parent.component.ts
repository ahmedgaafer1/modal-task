import { Component, OnInit } from '@angular/core';
import { NumberHeaderComponent } from "../number-header/number-header.component";

@Component({
  selector: 'app-number-parent',
  standalone: true,
  imports: [NumberHeaderComponent],
  templateUrl: './number-parent.component.html',
  styleUrl: './number-parent.component.scss'
})
export class NumberParentComponent implements OnInit {

  data: any = {
    items: [],
    total: 55,
    page: 1,
    perPage: 10,
  };

  ngOnInit(): void {
    this.generateData();
    
    // console.log(this.data);
  }
  generateData(): void {
    for (let i = 1; i <= this.data.total; i++) {
      this.data.items.push({
        id: i,
        protocol: 'فودافون مصر',
        number: `0123456700${String(i).padStart(2, '0')}`,
        country: 'المملكة الأردنية الهاشمية',
        currentBalance: 5000,
        lastShipmentDate: '2024/12/29',
        client: 'الشركة الألمانية للإبادة...',
        extensionsCount: 9,
        assignments: [
          {
            amount: 61890,
            internationalMinutes: 122,
            localMinutes: 7654,
            responsible: 'عبدالرحيم إسماعيل ناصف',
            assignDate: '01/12/2024',
            cancelDate: '-',
            client: 'الشركة الألمانية للإبادة...',
          },
        ],
        createdAt: '01/12/2024',
        createdBy: 'عبدالرحيم إسماعيل ناصف',
        createdTime: '04:30 م',
      });
    }
  }



}
