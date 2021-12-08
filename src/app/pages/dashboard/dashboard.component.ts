import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppContextService} from "../../core/services/app-context.service";
import {Subject, takeUntil} from "rxjs";
import {DASHBOARD_DATA} from "../../core/services/mock-data";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  activeContent: any;
  dashboardData: any;
  activeMenu: any;

  selectedMonth!: string;
  selectedMonthData!: any;

  private componentDestroyed =  new Subject<void>();
  constructor(private appContext: AppContextService) {
    this.appContext.getActiveDashboardMenu();
  }

  ngOnInit(): void {
    this.initView();
  }

  initView(){
    this.appContext.getActiveDashboardMenuObs()
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe({
        next: value => {
          if(value) {
            this.activeMenu = value
            this.dashboardData = DASHBOARD_DATA[this.activeMenu.key];
            this.selectedMonth = this.dashboardData.activeMonths[0].key;
            this.selectedMonthData = this.dashboardData.seriesData[this.selectedMonth];
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.componentDestroyed.next();
  }


  onMonthChanged() {
    this.selectedMonthData = this.dashboardData.seriesData[this.selectedMonth];
  }

  getProgress() {
    return this.selectedMonthData ? (this.selectedMonthData.summary.activeUsers/ (this.selectedMonthData.summary.activeUsers + this.selectedMonthData.summary.inActiveUsers)) * 100 : 0;
  }
}
