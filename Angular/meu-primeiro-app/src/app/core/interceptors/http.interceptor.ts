import { HttpInterceptorFn } from '@angular/common/http';
import { tap, throwError, catchError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`REQUEST`, req.url);

  const token = `fake-jwt-token`;
  const novaReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(novaReq).pipe(
    tap({
      next: (event) => {
        console.log(`RESPONSE`, event);
      },
      error: (error) => {
        console.error(`ERROR`, error);
      },
    }),
    catchError((error) => {
      console.error(`ERRO GLOBAL:`, error);
      if (error.status === 401) {
        console.error(`Não autorizado. Redirecionando para a página de login...`);
      }
      return throwError(() => error);
    }),
  );
};
