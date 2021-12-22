import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Observable } from 'rxjs';
import { ContactComponent } from '../contact/contact.component';
import { SaveData } from '../_interfaces/save-data.interface';

@Injectable({
  providedIn: 'root',
})
export class FormGuardGuard implements CanDeactivate<SaveData> {
  canDeactivate(
    component: SaveData,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!component.isDataSaved()) {
      return new Promise((resolve) => {
        Confirm.show(
          'You leave now',
          'Are you sure?',
          'Yes',
          'No',
          () => resolve(true),
          () => resolve(false)
        );
      });
    }
    return new Promise((resolve) => resolve(true));
  }
}
