import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from './services/auth.service';

export const adminGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.estaLogado()) {
        return router.createUrlTree(['/login']);
}

    if (!authService.ehAdmin()) {
        return router.createUrlTree(['/acesso-negado']);
    }

    return true;
};