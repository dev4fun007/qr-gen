import { Component, OnInit } from '@angular/core';
import { StorageutilService } from '../services/storageutil.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  showBackButton = true;
  title = 'History';
  showHistoryNav = false;
  historyList;


  constructor(private storageService: StorageutilService,
      private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.populateHistory();
  }

  private populateHistory() {
    this.historyList = this.storageService.readAllHistory();
  }

  private delete(text: string) {
    this.storageService.deleteHistory(text);
    this.populateHistory();
  }

  private share(text: string) {
    this.bottomSheet.open(ShareBottomSheet)
  }

}


@Component({
  selector: 'share-bottom-sheet',
  templateUrl: 'share-bottom-sheet.html',
})
export class ShareBottomSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<ShareBottomSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
