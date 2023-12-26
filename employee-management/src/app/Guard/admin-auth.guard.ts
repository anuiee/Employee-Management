import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';

export const adminAuthGuard: CanActivateFn = (route, state) => {

  const service=inject(AuthService);
  const router=inject(Router);

  if (!service.isLoggedIn()) {
    router.navigate(['/login']); // go to login if not authenticated
    return false;
  }
    return true;
};
