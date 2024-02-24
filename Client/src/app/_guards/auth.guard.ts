import { CanActivate } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AccountService } from '../services/account.service';
import { ToastrService } from 'ngx-toastr';
import { Injectable, Injector } from '@angular/core';
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);
  return accountService.CurrentUser$.pipe(
    map(user => {
      if (user) return true;
      else {
        toastr.error('you shall not pass!');
        return false;
      }
    })
  )
};