import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // const [req, res, next] = context.getArgs();
    const [req] = context.getArgs();
    console.log({ params: req.params, url: req.originalUrl });
    return true;
  }
}
